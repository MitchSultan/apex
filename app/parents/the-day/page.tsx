import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = {
  title: "What to Expect on the Day",
  description: "A parent guide to session logistics, kit expectations and safeguarding on the day.",
};

export default function ParentDayPage() {
  return (
    <>
      <PageHeader eyebrow="Parents" title="What to expect on the day" description="A quiet, supervised and well-guided experience for learners and families." />
      <Section variant="paddock"><div className="mx-auto max-w-3xl px-4 py-16 md:px-6 text-[var(--steel)]"><p>Families should arrive with the right kit, a signed consent form, and a clear understanding of the session flow and meeting point.</p></div></Section>
    </>
  );
}
