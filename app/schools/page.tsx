import Link from "next/link";

import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { schoolModels, schoolPathways } from "@/content/schools";

export const metadata = {
  title: "For Schools",
  description: "School partnership models, teacher resources, and curriculum-aligned road-safety learning for youth programs.",
};

export default function SchoolsPage() {
  return (
    <>
      <PageHeader
        eyebrow="For schools"
        title="Partnerships built around safety, curriculum and trust"
        description="Bring [Academy] to your school with a structured pilot, teacher resources and a clear approval process for boards and parents."
      />

      <Section variant="track" className="border-y border-[var(--graphite)]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {schoolModels.map((model) => (
              <article key={model.name} className="rounded-[var(--radius-md)] border border-[var(--graphite)] bg-[rgba(255,255,255,0.04)] p-5 text-[var(--chalk)]">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--mist)]">{model.name}</p>
                <p className="mt-4 text-[var(--mist)]">{model.description}</p>
                <div className="mt-6 font-mono text-xl text-[var(--chalk)]">{model.price}</div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="paddock">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--steel)]">Why schools choose us</p>
              <h2 className="text-[var(--asphalt)]">Curriculum-aligned and easy to approve</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {schoolPathways.map((path) => (
                <div key={path} className="rounded-[var(--radius-md)] border border-[rgba(17,24,39,0.12)] bg-[var(--chalk)] p-5 text-[var(--steel)]">
                  {path}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section variant="paddock" className="border-t border-[rgba(17,24,39,0.12)]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="flex flex-wrap gap-4">
            <Link href="/schools/book" className="rounded-full bg-[var(--signal)] px-5 py-3 text-sm font-semibold text-[var(--asphalt)] hover:bg-[var(--signal-deep)]">
              Book a school briefing
            </Link>
            <Link href="/schools/partnerships" className="rounded-full border border-[rgba(17,24,39,0.12)] px-5 py-3 text-sm font-semibold text-[var(--asphalt)] hover:border-[var(--signal)] hover:text-[var(--signal-deep)]">
              View partnership options
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
