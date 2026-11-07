import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { programs } from "@/content/programs";

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return {
    title: "Program",
    description: "Youth drift and car-control program details.",
  };
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = programs.find((item) => item.slug === slug);

  if (!program) {
    notFound();
  }

  return (
    <>
      <PageHeader
        eyebrow="Program detail"
        title={program.name}
        description={program.summary}
      />

      <Section variant="track" className="border-y border-[var(--graphite)]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[var(--radius-md)] border border-[var(--graphite)] bg-[rgba(255,255,255,0.04)] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--mist)]">What learners get</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[var(--radius-sm)] border border-[var(--graphite)] bg-[rgba(255,255,255,0.03)] p-4">
                  <p className="font-mono text-2xl text-[var(--chalk)]">{program.ageBand}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[var(--mist)]">Age band</p>
                </div>
                <div className="rounded-[var(--radius-sm)] border border-[var(--graphite)] bg-[rgba(255,255,255,0.03)] p-4">
                  <p className="font-mono text-2xl text-[var(--chalk)]">{program.duration}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[var(--mist)]">Duration</p>
                </div>
              </div>
              <ul className="mt-8 space-y-3 text-[var(--mist)]">
                <li>• Closed-course, supervised sessions</li>
                <li>• Instructor-led vehicle control and briefing</li>
                <li>• Safeguarding and parent consent built into the flow</li>
                <li>• Progression check and next-step pathway</li>
              </ul>
            </div>

            <div className="rounded-[var(--radius-md)] border border-[var(--graphite)] bg-[var(--chalk)] p-6 text-[var(--asphalt)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--steel)]">Quick facts</p>
              <div className="mt-6 space-y-4 text-[var(--steel)]">
                <div className="flex items-center justify-between border-b border-[rgba(17,24,39,0.08)] pb-3">
                  <span>Price</span>
                  <span className="font-semibold text-[var(--asphalt)]">{program.price}</span>
                </div>
                <div className="flex items-center justify-between border-b border-[rgba(17,24,39,0.08)] pb-3">
                  <span>Format</span>
                  <span className="font-semibold text-[var(--asphalt)]">Closed course</span>
                </div>
                <div className="flex items-center justify-between border-b border-[rgba(17,24,39,0.08)] pb-3">
                  <span>Parent consent</span>
                  <span className="font-semibold text-[var(--asphalt)]">Required</span>
                </div>
              </div>
              <Link href="/book" className="mt-8 inline-flex rounded-full bg-[var(--signal)] px-5 py-3 text-sm font-semibold text-[var(--asphalt)] hover:bg-[var(--signal-deep)]">
                Book this program
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
