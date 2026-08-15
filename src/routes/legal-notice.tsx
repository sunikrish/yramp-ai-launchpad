import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/LegalPage";

export const Route = createFileRoute("/legal-notice")({
  component: LegalNotice,
  head: () => ({
    meta: [
      { title: "Legal Notice — Y-RAMP" },
      {
        name: "description",
        content: "Legal and contact information for Y-RAMP Technologies LLP.",
      },
      { property: "og:url", content: "https://yramp.com/legal-notice" },
    ],
    links: [{ rel: "canonical", href: "https://yramp.com/legal-notice" }],
  }),
});

function LegalNotice() {
  return (
    <LegalPage title="Legal Notice" intro="Company and website publisher information.">
      <LegalSection title="Company">
        <p>
          <strong className="text-foreground">Y-RAMP Technologies LLP</strong>
          <br />
          90/3-142-104, Sushanth Nilayam
          <br />
          Balaji Nagar, Kurnool
          <br />
          Andhra Pradesh 518006, India
        </p>
      </LegalSection>
      <LegalSection title="Contact">
        <p>
          Email:{" "}
          <a className="text-primary hover:underline" href="mailto:hello@yramp.com">
            hello@yramp.com
          </a>
        </p>
      </LegalSection>
      <LegalSection title="Business scope">
        <p>
          Y-RAMP provides product-engineering services including web and mobile applications, SaaS
          and white-label platforms, backend and cloud infrastructure, CI/CD, authentication,
          storage, launch support, and application maintenance. We primarily serve India and are
          available to clients worldwide, subject to applicable laws and agreed contract terms.
        </p>
      </LegalSection>
      <LegalSection title="Responsible publisher">
        <p>
          Y-RAMP Technologies LLP is responsible for this website's content. Company registration
          identifiers and designated partner details will be added after final registration records
          are issued.
        </p>
      </LegalSection>
      <LegalSection title="Notice">
        <p>
          Although we take reasonable care with published information, it is general in nature and
          may change. Please obtain appropriate professional advice before relying on website
          content for legal, financial, security, or technical decisions.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
