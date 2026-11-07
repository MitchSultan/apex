import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Competitions & Showcases",
  description: "Student events, demo showcases and controlled competition opportunities in a safe educational environment.",
};

export default function StudentEventsPage() {
  return (
    <>
      <PageHeader eyebrow="Events" title="Competitions and showcases" description="These events emphasise discipline, respect and progression rather than reckless behaviour." />
      <Section variant="paddock"><div className="mx-auto max-w-3xl px-4 py-16 md:px-6 text-[var(--steel)]"><p>Future event calendar and showcase details will appear as the student programme grows.</p></div></Section>
    </>
  );
}
