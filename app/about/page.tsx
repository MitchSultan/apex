import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = {
  title: "About",
  description: "Learn about the mission, venue and purpose behind [Academy] drift education in Nakuru.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A youth-first motorsport education programme"
        description="[Academy] exists to teach disciplined car control, road-safety understanding and motorsport pathways for young learners."
      />

      <Section variant="paddock">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 text-[var(--steel)]">
          <div className="space-y-5">
            <p>We combine vehicle dynamics, safety, practice discipline and confidence-building into a structured educational experience.</p>
            <p>Our aim is not spectacle. It is to help learners understand grip, weight transfer, braking, steering and calm control so they are safer and more aware drivers everywhere.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
