import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Partners & Sponsors",
  description: "Community, school and sponsor partners supporting [Academy].",
};

export default function PartnersPage() {
  return (
    <>
      <PageHeader eyebrow="Partners" title="Partners and sponsors" description="Collaboration matters: from school relationships to CSR support and youth access funding." />
      <Section variant="paddock"><div className="mx-auto max-w-3xl px-4 py-16 md:px-6 text-[var(--steel)]"><p>Partner logos and sponsor visibility will be added once formal relationships are approved.</p></div></Section>
    </>
  );
}
