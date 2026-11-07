import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Gallery & Videos",
  description: "A safe, consent-first gallery and video archive for learners and parents.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader eyebrow="Gallery" title="Gallery and videos" description="Every learner shown here has parental consent and a clear approved media use policy." />
      <Section variant="paddock"><div className="mx-auto max-w-3xl px-4 py-16 md:px-6 text-[var(--steel)]"><p>Placeholder media gallery coming soon.</p></div></Section>
    </>
  );
}
