import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Learning Centre",
  description: "Road-safety, car control and motorsport learning material aligned with youth education goals.",
};

export default function LearnPage() {
  return (
    <>
      <PageHeader
        eyebrow="Learning centre"
        title="Articles, guides and practical learning"
        description="This is the place for road-safety, car-control and career information built for teens, parents and teachers."
      />

      <Section variant="paddock">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Car control and road safety",
              "Physics of grip and slip angle",
              "School resources and trip planning",
            ].map((item) => (
              <article key={item} className="rounded-[var(--radius-md)] border border-[rgba(17,24,39,0.12)] bg-[var(--chalk)] p-6 text-[var(--steel)]">
                {item}
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
