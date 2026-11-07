import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Parent Portal",
  description: "Bookings, consent tracking and school progress status for parents and teacher dashboards.",
};

export default function PortalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portal"
        title="Parent portal placeholder"
        description="This product area is being prepared for bookings, consent visibility and learner progress tracking."
      />

      <Section variant="paddock">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-6">
          <div className="rounded-[var(--radius-md)] border border-[rgba(17,24,39,0.12)] bg-[var(--chalk)] p-6 text-[var(--steel)]">
            <p>Coming soon: learner dashboard, consent status, certificate access and booking updates.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
