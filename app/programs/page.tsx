import Link from "next/link";

import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { programs } from "@/content/programs";

export const metadata = {
  title: "Programs",
  description: "Track-ready school and youth learning programs for drift and car-control training in Nakuru.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Programs"
        title="Structured pathways for learners, parents and schools"
        description="Every program follows a closed-course, safety-first structure that teaches car control, confidence and road awareness."
      />

      <Section variant="paddock" className="border-y border-[rgba(17,24,39,0.12)]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {programs.map((program) => (
              <article key={program.slug} className="rounded-[var(--radius-md)] border border-[rgba(17,24,39,0.12)] bg-[var(--chalk)] p-6 shadow-[0_12px_36px_rgba(15,23,42,0.04)]">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <span className="rounded-full border border-[var(--signal)] bg-[rgba(255,90,31,0.08)] px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-[var(--signal-deep)]">
                    {program.ageBand}
                  </span>
                  <span className="font-mono text-sm text-[var(--asphalt)]">{program.price}</span>
                </div>
                <h2 className="text-3xl text-[var(--asphalt)]">{program.name}</h2>
                <p className="mt-4 text-[var(--steel)]">{program.summary}</p>
                <div className="mt-6 flex items-center justify-between border-t border-[rgba(17,24,39,0.08)] pt-4 text-sm text-[var(--steel)]">
                  <span>{program.duration}</span>
                  <Link href={`/programs/${program.slug}`} className="font-semibold text-[var(--radio-blue)] hover:underline">
                    Explore
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
