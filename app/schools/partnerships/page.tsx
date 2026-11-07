import Link from "next/link";

import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { schoolModels, schoolObjections } from "@/content/schools";

export const metadata = {
  title: "Partnership Models",
  description: "School partnership options for STEM enrichment, special trips, and youth motorsport pathways.",
};

export default function PartnershipsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Partnerships"
        title="Choose the model that fits your school"
        description="From enrichment clubs to full school programs, our partnership models are designed with parent consent, curriculum value and risk controls in mind."
      />

      <Section variant="paddock">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {schoolModels.map((model) => (
              <article key={model.name} className="rounded-[var(--radius-md)] border border-[rgba(17,24,39,0.12)] bg-[var(--chalk)] p-6 shadow-[0_12px_36px_rgba(15,23,42,0.04)]">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--signal-deep)]">{model.name}</p>
                <p className="mt-4 text-[var(--steel)]">{model.description}</p>
                <div className="mt-6 font-mono text-2xl text-[var(--asphalt)]">{model.price}</div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="track" className="border-y border-[var(--graphite)]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--mist)]">Board objections</p>
          <div className="space-y-4">
            {schoolObjections.map((item) => (
              <div key={item.objection} className="rounded-[var(--radius-md)] border border-[var(--graphite)] bg-[rgba(255,255,255,0.04)] p-5 text-[var(--chalk)]">
                <p className="font-semibold">{item.objection}</p>
                <p className="mt-2 text-[var(--mist)]">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <Link href="/schools/book" className="rounded-full bg-[var(--signal)] px-5 py-3 text-sm font-semibold text-[var(--asphalt)] hover:bg-[var(--signal-deep)]">
          Book a school briefing
        </Link>
      </div>
    </>
  );
}
