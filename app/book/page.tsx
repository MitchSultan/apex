import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Book a Taster",
  description: "Book a taster session or a learner pathway with parent consent and clear safety information.",
};

export default function BookPage() {
  return (
    <>
      <PageHeader
        eyebrow="Booking"
        title="Reserve a place with parent consent"
        description="We keep the flow simple, mobile-friendly and ready for M-Pesa, WhatsApp and follow-up reminders."
      />

      <Section variant="paddock">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-6">
          <div className="rounded-[var(--radius-md)] border border-[rgba(17,24,39,0.12)] bg-[var(--chalk)] p-6 shadow-[0_12px_36px_rgba(15,23,42,0.04)]">
            <div className="mb-6 flex items-center justify-between gap-4">
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--steel)]">Step 1 / 4</span>
              <span className="font-mono text-sm text-[var(--asphalt)]">Learner details</span>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-[var(--steel)]">
                First name
                <input className="rounded-[var(--radius-sm)] border border-[rgba(17,24,39,0.12)] px-3 py-2" placeholder="Learner name" />
              </label>
              <label className="flex flex-col gap-2 text-sm text-[var(--steel)]">
                Age band
                <select className="rounded-[var(--radius-sm)] border border-[rgba(17,24,39,0.12)] px-3 py-2">
                  <option>14–15</option>
                  <option>16–17</option>
                  <option>18–19</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm text-[var(--steel)] md:col-span-2">
                School
                <input className="rounded-[var(--radius-sm)] border border-[rgba(17,24,39,0.12)] px-3 py-2" placeholder="Current school" />
              </label>
            </div>

            <button type="button" className="mt-8 rounded-full bg-[var(--signal)] px-5 py-3 text-sm font-semibold text-[var(--asphalt)] hover:bg-[var(--signal-deep)]">
              Continue to consent
            </button>
          </div>
        </div>
      </Section>
    </>
  );
}
