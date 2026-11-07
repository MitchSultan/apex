import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Photo & Media Policy",
  description: "Rules for photography, video recording and shared media at [Academy].",
};

export default function MediaPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Media"
        title="Photo and media policy"
        description="Every learner photo or clip must have explicit consent, clear purpose and approved publishing controls."
      />

      <Section variant="paddock">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 text-[var(--steel)]">
          <div className="space-y-5">
            <p>We do not publish learner images without consent. If a parent or guardian gives permission, images are used only for approved media channels and program storytelling.</p>
            <p>Personal phones are not used for unofficial photography. All media use follows the guardian's stated choice for internal, marketing and collaboration purposes.</p>
            <p>Parents may withdraw consent at any time, and we will stop using the media subject to the operational time needed to remove it from approved channels.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
