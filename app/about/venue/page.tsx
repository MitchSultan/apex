import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Venue & Getting Here",
  description: "Venue details, safety controls and logistics for learners attending [Academy] in Nakuru.",
};

export default function VenuePage() {
  return (
    <>
      <PageHeader eyebrow="Venue" title="Venue and getting here" description="A closed-course environment with clear routes, meeting points and safe access plans." />
      <Section variant="paddock"><div className="mx-auto max-w-3xl px-4 py-16 md:px-6 text-[var(--steel)]"><p>Venue details and travel instructions will be finalised with the launch site and local logistics plan.</p></div></Section>
    </>
  );
}
