import Link from "next/link";

import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { parentTrustPoints } from "@/content/parents";

export const metadata = {
  title: "Parents",
  description: "Parent information, consent guidance, safety reassurance, and payment support for youth drift education.",
};

export default function ParentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Parents"
        title="Clear answers before the first session"
        description="From safety rules to consent, fees and what to expect, this hub is designed to help parents make calm, informed decisions."
      />

      <Section variant="paddock" className="border-y border-[rgba(17,24,39,0.12)]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "FAQ", href: "/parents/faq", copy: "Answers to common questions about safety, age, supervision and permissions." },
              { title: "Consent & medical", href: "/parents/consent", copy: "Key forms and processing information for each learner before booking." },
              { title: "Fees & bursaries", href: "/parents/fees", copy: "Payment plans, costs and funding support for families who need flexibility." },
            ].map((item) => (
              <article key={item.title} className="rounded-[var(--radius-md)] border border-[rgba(17,24,39,0.12)] bg-[var(--chalk)] p-6 shadow-[0_12px_36px_rgba(15,23,42,0.04)]">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--signal-deep)]">{item.title}</p>
                <p className="mt-4 text-[var(--steel)]">{item.copy}</p>
                <Link href={item.href} className="mt-6 inline-flex font-semibold text-[var(--radio-blue)] hover:underline">
                  Open
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="track" className="border-b border-[var(--graphite)]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="space-y-4 text-[var(--mist)]">
            {parentTrustPoints.map((point) => (
              <div key={point} className="rounded-[var(--radius-md)] border border-[var(--graphite)] bg-[rgba(255,255,255,0.04)] p-4">
                {point}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
