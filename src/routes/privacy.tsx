import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/LegalPage";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title: "Privacy Policy — Y-RAMP" },
      {
        name: "description",
        content: "How Y-RAMP Technologies LLP collects, uses, and protects personal data.",
      },
    ],
  }),
});

function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This policy explains how we handle personal data when you visit our website or contact us about our services."
    >
      <LegalSection title="1. Who we are">
        <p>
          Y-RAMP Technologies LLP is the data controller for this website. Our registered address is
          90/3-142-104, Sushanth Nilayam, Balaji Nagar, Kurnool, Andhra Pradesh 518006, India.
          Contact us at{" "}
          <a className="text-primary hover:underline" href="mailto:hello@yramp.com">
            hello@yramp.com
          </a>
          .
        </p>
      </LegalSection>
      <LegalSection title="2. Data we collect">
        <p>
          When you use our contact form, we collect your name, email address, message, and the
          information you choose to include. Our hosting and security systems may also process
          technical information such as IP address, device/browser details, request timestamps, and
          error or security logs.
        </p>
      </LegalSection>
      <LegalSection title="3. Why we use it">
        <p>
          We use this information to respond to enquiries, discuss and provide requested services,
          operate and secure the website, prevent abuse, maintain business records, and comply with
          legal obligations. We do not use contact-form information to subscribe you to marketing
          without separate consent.
        </p>
      </LegalSection>
      <LegalSection title="4. Email delivery and service providers">
        <p>
          Contact messages and acknowledgments are processed through Brevo, our transactional email
          provider. Website hosting, infrastructure, and professional advisers may process limited
          data for us where necessary. These providers may process data outside your country,
          subject to their contractual and legal safeguards.
        </p>
      </LegalSection>
      <LegalSection title="5. Sharing and sale">
        <p>
          We do not sell personal data. We share it only with service providers acting for us,
          professional advisers, authorities when legally required, or parties involved in a
          business restructuring with appropriate safeguards.
        </p>
      </LegalSection>
      <LegalSection title="6. Retention and security">
        <p>
          We normally retain business enquiries for up to 24 months after the last meaningful
          interaction, unless a longer period is required for a contract, dispute, tax, security, or
          legal obligation. We use reasonable technical and organisational safeguards, but no
          internet transmission or storage method is completely secure.
        </p>
      </LegalSection>
      <LegalSection title="7. Your choices and rights">
        <p>
          Depending on applicable law, you may ask to access, correct, update, erase, restrict, or
          obtain a copy of your personal data, withdraw consent, or object to certain processing.
          Email your request to hello@yramp.com. We may verify your identity before acting.
        </p>
      </LegalSection>
      <LegalSection title="8. Cookies, children, and external links">
        <p>
          This launch website does not intentionally use advertising cookies. Essential hosting or
          security technologies may be used to deliver and protect the site. Our services are
          intended for businesses and not directed to children. External websites have their own
          privacy practices.
        </p>
      </LegalSection>
      <LegalSection title="9. Changes and complaints">
        <p>
          We may update this policy as our services or legal obligations change and will post the
          new effective date here. Please contact us first with privacy concerns; you may also
          complain to the competent data-protection authority available under applicable law.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
