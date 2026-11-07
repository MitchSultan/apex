import Link from "next/link";

import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { programs } from "@/content/programs";

export const metadata = {
  title: "Home",
  description: "Safety-first drift and car-control education for youth in Nakuru, Kenya.",
};

const faqs = [
  {
    q: "Is this safe for young drivers?",
    a: "Yes. Each session is held on a closed course with low-speed learning objectives, instructor supervision, and structured briefing and consent processes.",
  },
  {
    q: "What age groups do you teach?",
    a: "The blueprint targets learners aged 14–19, with separate pathways for under-16s and older students.",
  },
  {
    q: "Can schools partner with you?",
    a: "Yes. The site includes a dedicated school partnership flow for principals, boards, and teachers.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <Section variant="paddock" className="border-y border-[rgba(17,24,39,0.12)]">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--steel)]">Programs</p>
              <h2 className="text-[var(--asphalt)]">Track-ready pathways</h2>
            </div>
            <Link href="/programs" className="hidden text-sm font-semibold text-[var(--signal-deep)] underline-offset-4 hover:underline md:inline-flex">
              View all programs
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {programs.map((program) => (
              <article key={program.slug} className="rounded-[var(--radius-md)] border border-[rgba(17,24,39,0.12)] bg-[var(--chalk)] p-6 shadow-[0_8px_26px_rgba(15,23,42,0.04)]">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <span className="rounded-full border border-[var(--signal)] bg-[rgba(255,90,31,0.1)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--signal-deep)]">
                    {program.ageBand}
                  </span>
                  <span className="font-mono text-sm font-semibold text-[var(--asphalt)]">{program.price}</span>
                </div>
                <h3 className="text-[var(--asphalt)]">{program.name}</h3>
                <p className="mt-4 text-[var(--steel)]">{program.summary}</p>
                <div className="mt-6 flex items-center justify-between border-t border-[rgba(17,24,39,0.08)] pt-4 text-sm text-[var(--steel)]">
                  <span>{program.duration}</span>
                  <Link href={`/programs/${program.slug}`} className="font-semibold text-[var(--radio-blue)] hover:underline">
                    Learn more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="track" className="border-b border-[var(--graphite)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 md:grid-cols-2 md:px-6">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--mist)]">For schools</p>
            <h2 className="text-[var(--chalk)]">Build a safer driving culture.</h2>
          </div>
          <div className="space-y-5 text-[var(--mist)]">
            <p>
              [Academy] is designed to help schools, boards, and STEM teachers offer a structured, curriculum-aligned driver education pathway that feels safe, purposeful and well-governed.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/schools/book" className="rounded-full bg-[var(--signal)] px-5 py-3 text-sm font-semibold text-[var(--asphalt)] hover:bg-[var(--signal-deep)]">
                Book a school briefing
              </Link>
              <Link href="/schools" className="rounded-full border border-[var(--graphite)] px-5 py-3 text-sm font-semibold text-[var(--chalk)] hover:border-[var(--signal)] hover:text-[var(--signal)]">
                Explore partnerships
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="paddock" className="border-b border-[rgba(17,24,39,0.12)]">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <div className="mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--steel)]">Safety first</p>
            <h2 className="text-[var(--asphalt)]">The trust stack parents and principals expect</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              ["Closed course", "High supervision and no public-road trial runs."],
              ["Instructor-led", "Structured sessions with ratio and briefing checks."],
              ["Kit standards", "Helmet, gloves, safety review and vehicle controls."],
              ["Reporting", "Clear incident logging and a simple concern flow."],
            ].map(([title, description]) => (
              <div key={title} className="rounded-[var(--radius-md)] border border-[rgba(17,24,39,0.12)] bg-[var(--chalk)] p-5">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--signal-deep)]">{title}</p>
                <p className="text-[var(--steel)]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="paddock" className="border-b border-[rgba(17,24,39,0.12)]">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--steel)]">FAQ</p>
              <h2 className="text-[var(--asphalt)]">Questions from parents and schools</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((item) => (
                <details key={item.q} className="rounded-[var(--radius-md)] border border-[rgba(17,24,39,0.12)] bg-[var(--chalk)] p-5">
                  <summary className="cursor-pointer list-none text-base font-semibold text-[var(--asphalt)]">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-[var(--steel)]">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
