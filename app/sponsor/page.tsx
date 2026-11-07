import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Sponsor a Student",
  description: "Support a learner with bursary funding, school partnerships or a CSR-backed elite pathway.",
};

export default function SponsorPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sponsor a student"
        title="Open a pathway for another learner"
        description="Support bursaries, school outreach and youth access so the right students can take part in a structured program."
      />

      <Section variant="paddock">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 text-[var(--steel)]">
          <div className="space-y-5 rounded-[var(--radius-md)] border border-[rgba(17,24,39,0.12)] bg-[var(--chalk)] p-6">
            <p>CSR and sponsorship partners can help fund learner access, school partnerships and youth motorsport opportunities.</p>
            <p>Support may include a single bursary, a partner school programme, or a pilot cohort for students who would otherwise miss the opportunity.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
