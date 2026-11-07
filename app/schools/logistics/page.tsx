import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Trip Approval & Logistics",
  description: "School trip approval guidance, logistics support and a parent and staff coordination checklist.",
};

export default function LogisticsPage() {
  return (
    <>
      <PageHeader eyebrow="Logistics" title="Trip approval and operations" description="A clear, low-friction route for schools planning a youth driving experience." />
      <Section variant="paddock"><div className="mx-auto max-w-3xl px-4 py-16 md:px-6 text-[var(--steel)]"><p>We provide a practical trip pack, parent communication template, and clear approval guidance for schools and staff.</p></div></Section>
    </>
  );
}
