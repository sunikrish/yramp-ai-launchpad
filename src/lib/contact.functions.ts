import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(20).max(5000),
  companyWebsite: z.string().max(200).optional(),
});

type BrevoEmail = {
  sender: { email: string; name: string };
  to: Array<{ email: string; name?: string }>;
  replyTo?: { email: string; name?: string };
  subject: string;
  htmlContent: string;
  textContent: string;
  tags: string[];
};

const CONTACT_EMAIL = "hello@yramp.com";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function sendBrevoEmail(apiKey: string, email: BrevoEmail) {
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify(email),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error(`Brevo rejected a contact email (${response.status}): ${detail}`);
    throw new Error("Email delivery failed");
  }
}

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator(contactSchema)
  .handler(async ({ data }) => {
    if (data.companyWebsite) {
      return { success: true };
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      console.error("BREVO_API_KEY is not configured");
      throw new Error("Contact service is temporarily unavailable");
    }

    const name = escapeHtml(data.name);
    const email = escapeHtml(data.email);
    const message = escapeHtml(data.message).replaceAll("\n", "<br />");

    await Promise.all([
      sendBrevoEmail(apiKey, {
        sender: { email: CONTACT_EMAIL, name: "Y-RAMP Website" },
        to: [{ email: CONTACT_EMAIL, name: "Y-RAMP Technologies LLP" }],
        replyTo: { email: data.email, name: data.name },
        subject: `New Y-RAMP enquiry from ${data.name}`,
        htmlContent: `<h2>New website enquiry</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
        textContent: `New website enquiry\n\nName: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
        tags: ["website-contact", "internal-notification"],
      }),
      sendBrevoEmail(apiKey, {
        sender: { email: CONTACT_EMAIL, name: "Y-RAMP Technologies LLP" },
        to: [{ email: data.email, name: data.name }],
        replyTo: { email: CONTACT_EMAIL, name: "Y-RAMP Technologies LLP" },
        subject: "We received your message — Y-RAMP",
        htmlContent: `<p>Hello ${name},</p><p>Thank you for contacting Y-RAMP. We have received your message and will respond within two business days.</p><p>We look forward to learning more about what you are building.</p><p>Grow with passion,<br /><strong>Y-RAMP Technologies LLP</strong><br /><a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a></p>`,
        textContent: `Hello ${data.name},\n\nThank you for contacting Y-RAMP. We have received your message and will respond within two business days.\n\nWe look forward to learning more about what you are building.\n\nGrow with passion,\nY-RAMP Technologies LLP\n${CONTACT_EMAIL}`,
        tags: ["website-contact", "visitor-acknowledgement"],
      }),
    ]);

    return { success: true };
  });
