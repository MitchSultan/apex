import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { curriculumOutcomes, curriculumSessions } from "@/content/curriculum";

export const metadata = {
  title: "Curriculum",
  description: "CBC-aligned practical learning and motorsport pathway outcomes for schools and students.",
};

export default function CurriculumPage() {
  return (
    <>
      <PageHeader
        eyebrow="Curriculum"
        title="Learning that connects car control to science, safety and discipline"
        description="The program is mapped to practical STEM outcomes and youth development goals for senior learners."
      />

      <Section variant="paddock">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[var(--radius-md)] border border-[rgba(17,24,39,0.12)] bg-[var(--chalk)] p-6 shadow-[0_12px_36px_rgba(15,23,42,0.04)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--steel)]">Session themes</p>
              <ul className="mt-5 space-y-3 text-[var(--steel)]">
                {curriculumSessions.map((session) => (
                  <li key={session} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[var(--signal)]" aria-hidden="true" />
                    <span>{session}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[var(--radius-md)] border border-[rgba(17,24,39,0.12)] bg-[var(--chalk)] p-6 shadow-[0_12px_36px_rgba(15,23,42,0.04)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--steel)]">Expected outcomes</p>
              <ul className="mt-5 space-y-3 text-[var(--steel)]">
                {curriculumOutcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[var(--marshal)]" aria-hidden="true" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
