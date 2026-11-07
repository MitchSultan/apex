import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { parentFaq } from "@/content/parents";

export const metadata = {
  title: "Parent FAQ",
  description: "Common questions from parents about safety, licensing, supervision and course structure.",
};

export default function ParentFaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="Parent FAQ"
        title="The questions parents ask before they say yes"
        description="We answer honestly and plainly so you can make an informed decision with confidence."
      />

      <Section variant="paddock">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-6">
          <div className="space-y-4">
            {parentFaq.map((faq) => (
              <details key={faq.question} open className="rounded-[var(--radius-md)] border border-[rgba(17,24,39,0.12)] bg-[var(--chalk)] p-5">
                <summary className="cursor-pointer list-none text-lg font-semibold text-[var(--asphalt)]">
                  {faq.question}
                </summary>
                <p className="mt-3 text-[var(--steel)]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
