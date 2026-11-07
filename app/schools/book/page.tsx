import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Book a School Briefing",
  description: "Book a school briefing with the [Academy] team and share your pathway, student numbers and timing needs.",
};

export default function SchoolBookPage() {
  return (
    <>
      <PageHeader
        eyebrow="School briefing"
        title="Bring [Academy] to your school"
        description="Tell us about your learners, preferred term and the kind of pathway you need for students or staff."
      />

      <Section variant="paddock">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-6">
          <form className="rounded-[var(--radius-md)] border border-[rgba(17,24,39,0.12)] bg-[var(--chalk)] p-6 shadow-[0_12px_36px_rgba(15,23,42,0.04)]">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-[var(--steel)]">
                Name
                <input className="rounded-[var(--radius-sm)] border border-[rgba(17,24,39,0.12)] px-3 py-2" placeholder="Your name" />
              </label>
              <label className="flex flex-col gap-2 text-sm text-[var(--steel)]">
                Role
                <input className="rounded-[var(--radius-sm)] border border-[rgba(17,24,39,0.12)] px-3 py-2" placeholder="Principal / teacher / coordinator" />
              </label>
              <label className="flex flex-col gap-2 text-sm text-[var(--steel)] md:col-span-2">
                School
                <input className="rounded-[var(--radius-sm)] border border-[rgba(17,24,39,0.12)] px-3 py-2" placeholder="School name" />
              </label>
              <label className="flex flex-col gap-2 text-sm text-[var(--steel)]">
                Email
                <input type="email" className="rounded-[var(--radius-sm)] border border-[rgba(17,24,39,0.12)] px-3 py-2" placeholder="school@example.org" />
              </label>
              <label className="flex flex-col gap-2 text-sm text-[var(--steel)]">
                Phone
                <input className="rounded-[var(--radius-sm)] border border-[rgba(17,24,39,0.12)] px-3 py-2" placeholder="+254 ..." />
              </label>
              <label className="flex flex-col gap-2 text-sm text-[var(--steel)] md:col-span-2">
                Preferred term
                <input className="rounded-[var(--radius-sm)] border border-[rgba(17,24,39,0.12)] px-3 py-2" placeholder="Term 2 / next school holiday" />
              </label>
            </div>

            <button type="button" className="mt-8 rounded-full bg-[var(--signal)] px-5 py-3 text-sm font-semibold text-[var(--asphalt)] hover:bg-[var(--signal-deep)]">
              Request briefing
            </button>
          </form>
        </div>
      </Section>
    </>
  );
}
