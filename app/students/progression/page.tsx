import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Levels & Progression",
  description: "Student progression ladder from the beginner stage to crew, competition and advanced technical roles.",
};

export default function ProgressionPage() {
  return (
    <>
      <PageHeader eyebrow="Progression" title="Rookie → Level 1 → Level 2 → Crew Track" description="Every stage is built around structure, safety and practical learning." />
      <Section variant="paddock"><div className="mx-auto max-w-3xl px-4 py-16 md:px-6 text-[var(--steel)]"><p>Progression badges, session milestones and workshop outcomes are presented here as learners move through the program.</p></div></Section>
    </>
  );
}
