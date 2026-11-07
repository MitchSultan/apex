import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { site } from "@/content/site";

export const metadata = {
  title: "Contact",
  description: "Contact [Academy] for school partnerships, parent questions, and safeguarding inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Speak to the team"
        description="We can help with bookings, school briefs, safeguarding questions and parent support."
      />

      <Section variant="paddock">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[var(--radius-md)] border border-[rgba(17,24,39,0.12)] bg-[var(--chalk)] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--signal-deep)]">Direct contact</p>
              <ul className="mt-5 space-y-3 text-[var(--steel)]">
                <li>{site.phone}</li>
                <li>{site.email}</li>
                <li>{site.address}</li>
              </ul>
            </div>
            <div className="rounded-[var(--radius-md)] border border-[rgba(17,24,39,0.12)] bg-[var(--chalk)] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--signal-deep)]">Safeguarding</p>
              <ul className="mt-5 space-y-3 text-[var(--steel)]">
                <li>{site.dslName} · {site.dslRole}</li>
                <li>Report a concern</li>
                <li>Childline Kenya 116</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
