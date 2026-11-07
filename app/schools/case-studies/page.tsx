import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Case Studies",
  description: "School partnership case studies and pilot outcomes for youth driving education and STEM enrichment.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader eyebrow="Case studies" title="How schools use [Academy]" description="Practical pilot stories and evidence from schools and teacher leaders." />
      <Section variant="paddock"><div className="mx-auto max-w-3xl px-4 py-16 md:px-6 text-[var(--steel)]"><p>Placeholder case study content will be added as partnerships are confirmed.</p></div></Section>
    </>
  );
}
