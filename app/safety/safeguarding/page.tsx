import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Safeguarding Policy",
  description: "Safeguarding policy details and child protection standards for all youth program participants.",
};

export default function SafeguardingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Safeguarding"
        title="Protecting learner welfare before performance"
        description="Our Safeguarding Policy is modelled on the principles of the FIA Safeguarding Policy and the safeguarding requirements of the relevant national motorsport authority."
      />

      <Section variant="paddock">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-6">
          <div className="space-y-6 text-[var(--steel)]">
            <p>
              Every learner is treated as a young person first and a driver second. We do not tolerate bullying, grooming, hazing, abuse or neglect in any form. Our procedures cover the full participant journey, from initial consent to post-session follow-up.
            </p>
            <p>
              The Designated Safeguarding Lead owns the policy, receives concerns and works with the Directorate of Children Services, police and relevant authorities when needed. Staff are expected to escalate concerns immediately and to keep all communication appropriate, documented and proportionate.
            </p>
            <p>
              We keep a clear code of conduct for adults, learners and crew. No private messaging between staff and learners, no lone transport of a single learner in a staff vehicle without written parental consent and a second adult, and no photos or video on personal phones without published consent.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
