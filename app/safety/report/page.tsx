import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Report a Concern",
  description: "A simple, low-friction concern reporting route for learners, parents and staff.",
};

export default function ReportPage() {
  return (
    <>
      <PageHeader
        eyebrow="Report a concern"
        title="Need to raise something? We take it seriously."
        description="You can report anonymously or with contact details. We will acknowledge concerns and act to protect the learner."
      />

      <Section variant="paddock">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-6">
          <form className="rounded-[var(--radius-md)] border border-[rgba(17,24,39,0.12)] bg-[var(--chalk)] p-6 shadow-[0_12px_36px_rgba(15,23,42,0.04)]">
            <div className="space-y-5">
              <label className="flex flex-col gap-2 text-sm text-[var(--steel)]">
                Your name or email
                <input className="rounded-[var(--radius-sm)] border border-[rgba(17,24,39,0.12)] px-3 py-2" placeholder="Optional if you prefer anonymity" />
              </label>
              <label className="flex flex-col gap-2 text-sm text-[var(--steel)]">
                Tell us what happened
                <textarea className="min-h-32 rounded-[var(--radius-sm)] border border-[rgba(17,24,39,0.12)] px-3 py-2" placeholder="Please include dates, names and any relevant context." />
              </label>
              <label className="flex items-center gap-3 text-sm text-[var(--steel)]">
                <input type="checkbox" />
                Submit anonymously
              </label>
            </div>

            <button type="button" className="mt-8 rounded-full bg-[var(--kerb-red)] px-5 py-3 text-sm font-semibold text-[var(--chalk)] hover:opacity-90">
              Submit report
            </button>
          </form>

          <div className="mt-10 rounded-[var(--radius-md)] border border-[rgba(17,24,39,0.12)] bg-[var(--chalk)] p-5 text-[var(--steel)]">
            <p className="font-semibold text-[var(--asphalt)]">24-hour acknowledgement</p>
            <p className="mt-2">We acknowledge all concerns within 24 hours and will take the next appropriate step in line with safeguarding procedures.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
