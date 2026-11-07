import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Careers in Motorsport",
  description: "Explore pathways in driving, engineering, media, event operations and sports science.",
};

export default function StudentCareersPage() {
  return (
    <>
      <PageHeader eyebrow="Careers" title="Careers in motorsport" description="From driver to mechanic, media and track operations, the pathway starts with skill and discipline." />
      <Section variant="paddock"><div className="mx-auto max-w-3xl px-4 py-16 md:px-6 text-[var(--steel)]"><p>Career pathways include driver coaching, vehicle preparation, data analysis, media roles, marshals and event operations.</p></div></Section>
    </>
  );
}
