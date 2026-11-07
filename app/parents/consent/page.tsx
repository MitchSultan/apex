import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Consent & Medical Forms",
  description: "Parent consent and medical information summary for youth learners at [Academy].",
};

export default function ParentConsentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Consent"
        title="Parent consent and medical data handling"
        description="We only collect what we need to protect and support a learner during their course."
      />

      <Section variant="paddock">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-6">
          <div className="space-y-5 rounded-[var(--radius-md)] border border-[rgba(17,24,39,0.12)] bg-[var(--chalk)] p-6 text-[var(--steel)]">
            <p>Each learner receives a separate consent flow. The form covers participation, emergency readiness, photo/media consent and communication preferences.</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Participation consent</li>
              <li>Medical/health information relevant to the session</li>
              <li>Photo and media permissions</li>
              <li>WhatsApp and communication updates</li>
            </ul>
            <p>We adhere to the Kenya Data Protection Act and do not collect unnecessary child data. No medical data is stored in local browser storage during booking.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
