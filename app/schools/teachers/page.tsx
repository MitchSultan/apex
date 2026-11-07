import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Teacher Resource Hub",
  description: "Teacher resources, approval support and curriculum-aligned materials for school partnerships.",
};

export default function TeachersPage() {
  return (
    <>
      <PageHeader eyebrow="Teachers" title="Teacher resource hub" description="A collection of ready-made planning notes, consent packs and school briefing materials." />
      <Section variant="paddock"><div className="mx-auto max-w-3xl px-4 py-16 md:px-6 text-[var(--steel)]"><p>Teacher packs and curriculum support are available as a gated resource for approved school partners.</p></div></Section>
    </>
  );
}
