import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Team",
  description: "Meet the [Academy] team behind the youth safeguarding-first learning experience.",
};

export default function TeamPage() {
  return (
    <>
      <PageHeader eyebrow="Team" title="The people behind the programme" description="Instructors, safeguarding staff and the venue team all contribute to a safe, structured learning environment." />
      <Section variant="paddock"><div className="mx-auto max-w-3xl px-4 py-16 md:px-6 text-[var(--steel)]"><p>Team profiles and credential summaries will be added once final staff names and licences are confirmed.</p></div></Section>
    </>
  );
}
