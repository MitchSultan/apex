import Link from "next/link";

import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { safetyLayers, safetyMetrics, safetyPrinciples } from "@/content/safety";

export const metadata = {
  title: "Safety",
  description: "Safeguarding-first youth racing education built around supervision, low-speed training and transparent reporting.",
};

export default function SafetyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Safety"
        title="A trust-first learning environment"
        description="Every learner is protected by clear rules, qualified staff and operational safeguards designed for young drivers and schools."
      />

      <Section variant="track" className="border-y border-[var(--graphite)]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="grid gap-4 md:grid-cols-4">
            {safetyMetrics.map((metric) => (
              <div key={metric.label} className="rounded-[var(--radius-md)] border border-[var(--graphite)] bg-[rgba(255,255,255,0.04)] p-5 text-center">
                <div className="font-mono text-3xl text-[var(--chalk)]">{metric.value}</div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.16em] text-[var(--mist)]">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="paddock">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--steel)]">Safety layers</p>
              <h2 className="text-[var(--asphalt)]">What protects each learner</h2>
            </div>
            <div className="space-y-3">
              {safetyLayers.map((layer, index) => (
                <div key={layer} className="flex items-center gap-4 rounded-[var(--radius-md)] border border-[rgba(17,24,39,0.12)] bg-[var(--chalk)] p-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--signal)] font-mono text-sm font-semibold text-[var(--asphalt)]">
                    {index + 1}
                  </span>
                  <span className="text-[var(--steel)]">{layer}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section variant="paddock" className="border-t border-[rgba(17,24,39,0.12)]">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {safetyPrinciples.map((principle) => (
              <article key={principle.title} className="rounded-[var(--radius-md)] border border-[rgba(17,24,39,0.12)] bg-[var(--chalk)] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--signal-deep)]">{principle.title}</p>
                <p className="mt-4 text-[var(--steel)]">{principle.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/safety/safeguarding" className="rounded-full bg-[var(--signal)] px-5 py-3 text-sm font-semibold text-[var(--asphalt)] hover:bg-[var(--signal-deep)]">
              Safeguarding policy
            </Link>
            <Link href="/safety/report" className="rounded-full border border-[rgba(17,24,39,0.12)] px-5 py-3 text-sm font-semibold text-[var(--asphalt)] hover:border-[var(--signal)] hover:text-[var(--signal-deep)]">
              Report a concern
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
