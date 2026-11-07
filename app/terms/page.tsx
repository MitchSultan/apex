import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Terms & Cancellation",
  description: "Program terms, cancellation and communication expectations for learners and parents.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Terms"
        title="Terms and cancellation policy"
        description="These terms cover attendance, safeguarding expectations and the cancellation process for sessions and school programs."
      />

      <Section variant="paddock">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 text-[var(--steel)]">
          <div className="space-y-5">
            <p>Participation in any program is subject to consent, behavioural expectations and adherence to safeguarding rules. Learners may be removed from the session if they or their parent do not follow the code of conduct.</p>
            <p>Cancellation requests made at least 72 hours in advance are eligible for a refund or credit, subject to the agreed booking terms. Late cancellation may result in no refund where venue, staffing or equipment costs have already been committed.</p>
            <p>Where weather or venue conditions make participation unsafe, we will reschedule or move the session to the next available safe date.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
