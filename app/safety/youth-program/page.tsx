import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Youth Safety Program",
  description: "The [Academy] SafeSlide™ youth safety program for young learners and parents.",
};

export default function YouthProgramPage() {
  return (
    <>
      <PageHeader eyebrow="Youth safety" title="SafeSlide™ Youth Program" description="A structured, supervised route to confidence, control and safer driving habits." />
      <Section variant="paddock"><div className="mx-auto max-w-3xl px-4 py-16 md:px-6 text-[var(--steel)]"><p>Program copy to be finalized with the final safeguarding and school partnership pack.</p></div></Section>
    </>
  );
}
