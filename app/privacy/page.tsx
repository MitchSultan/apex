import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Privacy Notice",
  description: "Privacy notice for learner, parent and school data collection at [Academy].",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title="Privacy notice"
        description="We collect only the personal information necessary to support a learner's participation and to comply with safeguarding requirements."
      />

      <Section variant="paddock">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 text-[var(--steel)]">
          <div className="space-y-5">
            <p>We process personal information for course administration, parent communication, safety and emergency support, and compliance with applicable child-protection requirements.</p>
            <p>Data is kept to the minimum required, shared only with authorized adults, and protected with appropriate access controls and record retention rules.</p>
            <p>Parents may request to review, correct, or withdraw consent for photo or media use at any time, subject to legal and operational limits.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
