import Link from "next/link";

import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Students",
  description: "Student progression, events and careers pathways in drift, motorsport and vehicle control.",
};

export default function StudentsPage() {
  return (
    <>
      <PageHeader eyebrow="Students" title="Build skill, confidence and a pathway" description="Learn how the journey moves from Level 1 to crew roles, competitions and future careers." />
      <Section variant="track"><div className="mx-auto max-w-7xl px-4 py-16 md:px-6"><div className="grid gap-6 md:grid-cols-2">{[
        ["Levels & progression", "/students/progression"],
        ["Competitions & showcases", "/students/events"],
        ["Careers in motorsport", "/students/careers"],
        ["Gallery & videos", "/students/gallery"],
      ].map(([title, href]) => (
        <Link key={title} href={href} className="rounded-[var(--radius-md)] border border-[var(--graphite)] bg-[rgba(255,255,255,0.04)] p-6 text-[var(--chalk)]">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--mist)]">{title}</p>
        </Link>
      ))}</div></div></Section>
    </>
  );
}
