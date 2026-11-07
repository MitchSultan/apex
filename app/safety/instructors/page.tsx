import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Our Instructors & Vetting",
  description: "Qualified, vetted instructors and safeguarding practices behind the [Academy] learning experience.",
};

export default function InstructorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Instructors"
        title="Qualified adults, clear roles and a serious safeguarding culture"
        description="Every session includes qualified instruction, a marshal, and a safeguarding-aware adult presence that keeps the environment structured and accountable."
      />

      <Section variant="paddock">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Vetting", "All staff are screened and trained in safeguarding before they work with learners."],
              ["Clear roles", "Every adult has a defined responsibility during the session, including instruction, supervision and welfare."],
              ["Two-adult rule", "No learner is ever left alone with one adult out of sight. Parents and schools are informed of the supervision model."],
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
