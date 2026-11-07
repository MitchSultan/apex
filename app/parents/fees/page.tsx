import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Payment Plans & Bursaries",
  description: "Flexible payment options, bursaries and school support for youth learner enrollment.",
};

export default function ParentFeesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Fees"
        title="Flexible support for families"
        description="We want learners to access the pathway without hidden barriers or pressure."
      />

      <Section variant="paddock">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["M-Pesa", "Staged payment support for families and school-led bookings."],
              ["Instalments", "Flexible options for longer programs and school-led pathways."],
              ["Bursaries", "Support for learners who may need a reduced-fee or sponsor-backed place."],
            ].map(([title, description]) => (
              <article key={title} className="rounded-[var(--radius-md)] border border-[rgba(17,24,39,0.12)] bg-[var(--chalk)] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--signal-deep)]">{title}</p>
                <p className="mt-4 text-[var(--steel)]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
