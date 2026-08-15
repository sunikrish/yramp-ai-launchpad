import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/LegalPage";

export const Route = createFileRoute("/terms")({
  component: Terms,
  head: () => ({
    meta: [
      { title: "Website Terms — Y-RAMP" },
      { name: "description", content: "Terms governing use of the Y-RAMP website." },
      { property: "og:url", content: "https://yramp.com/terms" },
    ],
    links: [{ rel: "canonical", href: "https://yramp.com/terms" }],
  }),
});

function Terms() {
  return (
    <LegalPage
      title="Website Terms of Use"
      intro="These terms govern your use of the Y-RAMP website. Project work will be governed by a separate written agreement."
    >
      <LegalSection title="1. Website owner and acceptance">
        <p>
          This website is operated by Y-RAMP Technologies LLP. By using it, you agree to these terms
          and our Privacy Policy. If you do not agree, please stop using the website.
        </p>
      </LegalSection>
      <LegalSection title="2. Website purpose">
        <p>
          The site provides general information about our product-engineering services and products
          in development. Website content is not a binding proposal, technical advice, guarantee, or
          promise that we will accept an engagement.
        </p>
      </LegalSection>
      <LegalSection title="3. Enquiries and service agreements">
        <p>
          Submitting an enquiry does not create a client, partnership, employment, fiduciary, or
          confidential relationship. Scope, fees, schedules, intellectual property, support,
          warranties, and confidentiality for paid work will be set out in a separate signed
          agreement.
        </p>
      </LegalSection>
      <LegalSection title="4. Accuracy and availability">
        <p>
          We aim to keep information accurate but may change services, product plans, release dates,
          and site content without notice. References to Mangalya describe a product in development;
          features and the end-of-August 2026 target may change. We do not guarantee uninterrupted
          or error-free access.
        </p>
      </LegalSection>
      <LegalSection title="5. Acceptable use">
        <p>
          You must not misuse the site, attempt unauthorised access, introduce harmful code,
          interfere with operation, scrape it in a way that degrades service, impersonate others, or
          use the contact form for spam, unlawful, or abusive content.
        </p>
      </LegalSection>
      <LegalSection title="6. Intellectual property">
        <p>
          Unless stated otherwise, the Y-RAMP name, branding, site design, copy, graphics, software,
          and other site materials belong to Y-RAMP Technologies LLP or its licensors. You may view
          the site for legitimate personal or business evaluation but may not reproduce or exploit
          it without written permission.
        </p>
      </LegalSection>
      <LegalSection title="7. Third-party services and links">
        <p>
          The website may rely on or link to third-party services. We do not control their
          availability, content, security, or privacy practices and are not responsible for them to
          the extent permitted by law.
        </p>
      </LegalSection>
      <LegalSection title="8. Liability">
        <p>
          To the maximum extent permitted by law, the website is provided “as is” and we exclude
          implied warranties relating to it. We are not liable for indirect, incidental, special, or
          consequential loss arising solely from website use. Nothing in these terms excludes
          liability that cannot legally be excluded.
        </p>
      </LegalSection>
      <LegalSection title="9. Governing law">
        <p>
          These website terms are governed by the laws of India. Subject to mandatory consumer or
          other applicable protections, courts with jurisdiction in Kurnool, Andhra Pradesh will
          have exclusive jurisdiction over disputes concerning these terms.
        </p>
      </LegalSection>
      <LegalSection title="10. Contact and changes">
        <p>
          We may revise these terms by publishing an updated version. Questions can be sent to{" "}
          <a className="text-primary hover:underline" href="mailto:hello@yramp.com">
            hello@yramp.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
