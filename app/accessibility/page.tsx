import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Accessibility Statement",
  description: "Accessibility commitment and support information for the [Academy] website.",
};

export default function AccessibilityPage() {
  return (
    <>
      <PageHeader eyebrow="Accessibility" title="Accessibility statement" description="We aim to make the website understandable, usable and responsive for a wide range of visitors." />
      <Section variant="paddock"><div className="mx-auto max-w-3xl px-4 py-16 md:px-6 text-[var(--steel)]"><p>We continue to improve the site experience for keyboard, screen-reader and mobile visitors, with accessible colour contrast and clear content hierarchy.</p></div></Section>
    </>
  );
}
