import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Track, Car & Kit Standards",
  description: "Operational procedures, vehicle standards and protective equipment for safe youth training sessions.",
};

export default function StandardsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Standards"
        title="Track, car and kit standards"
        description="The environment is designed to reduce risk while teaching real vehicle-control principles at a controlled pace."
      />

      <Section variant="paddock">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Closed course", "Every session takes place on a managed, supervised track or practice surface with a clear boundaries plan."],
              ["Low-speed cap", "Initial lessons remain within controlled limits, with power and pace designed around age and skill."],
              ["Vehicle standards", "Prepared cars, checklists and communication protocols keep the session disciplined and predictable."],
              ["Kit standards", "Full protective equipment, briefing, and daily checks before every run."],
              ["Medic readiness", "First aid on site, emergency plan and clear communication with parents for any incident."],
              ["Reporting", "Every incident or near-miss is logged and reviewed before the next session."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-[var(--radius-md)] border border-[rgba(17,24,39,0.12)] bg-[var(--chalk)] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--signal-deep)]">{title}</p>
                <p className="mt-4 text-[var(--steel)]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
