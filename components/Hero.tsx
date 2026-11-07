import Link from "next/link";

import { buildWhatsAppLink, site } from "@/content/site";
import { HeroBackgroundVideo } from "@/components/HeroBackgroundVideo";
import { Section } from "@/components/Section";

export function Hero() {
  return (
    <Section variant="track" className="relative overflow-hidden">
      <HeroBackgroundVideo />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(14,15,17,0.94)_0%,rgba(14,15,17,0.78)_55%,rgba(14,15,17,0.48)_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--mist)]">
              Youth safety • Nakuru, Kenya
            </p>
            <h1 className="max-w-xl text-[var(--chalk)]">Car control, taught properly.</h1>
            <p className="mt-6 max-w-xl text-lg text-[var(--mist)]">
              Structured drift and car-control courses for learners aged 14–19. Closed course. Qualified instructors. Safeguarding first.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/book" className="rounded-full bg-[var(--signal)] px-5 py-3 text-sm font-semibold text-[var(--asphalt)] transition-colors hover:bg-[var(--signal-deep)]">
                Book a Taster
              </Link>
              <Link href="/schools" className="rounded-full border border-[var(--graphite)] bg-transparent px-5 py-3 text-sm font-semibold text-[var(--chalk)] transition-colors hover:border-[var(--signal)] hover:text-[var(--signal)]">
                For Schools
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-[var(--mist)]">
              <span>Insurer placeholder</span>
              <span>•</span>
              <span>FIA safeguarding principles</span>
              <span>•</span>
              <span>{site.dslName}</span>
            </div>
          </div>

          <div className="rounded-[var(--radius-md)] border border-[var(--graphite)] bg-[rgba(26,28,32,0.8)] p-6 shadow-[0_20px_45px_rgba(0,0,0,0.2)] backdrop-blur-sm">
            <div className="mb-6 flex items-center justify-between gap-4 text-[var(--mist)]">
              <span className="text-sm font-semibold uppercase tracking-[0.16em]">Course status</span>
              <span className="rounded-full border border-[var(--marshal)] bg-[rgba(21,128,61,0.12)] px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--marshal)]">
                Open
              </span>
            </div>

            <div className="overflow-hidden lg:max-w-[40vw]" aria-label="Course safety metrics">
              <style>{`
                @keyframes hero-metrics-scroll {
                  from { transform: translateX(0); }
                  to { transform: translateX(-50%); }
                }
                .hero-metrics-track { animation: hero-metrics-scroll 24s linear infinite; }
                .hero-metrics-track:hover { animation-play-state: paused; }
                @media (prefers-reduced-motion: reduce) {
                  .hero-metrics-track { animation: none; }
                }
              `}</style>
              <div className="hero-metrics-track flex w-max">
                {[0, 1].map((copy) => (
                  <div key={copy} className="flex shrink-0 gap-4" aria-hidden={copy === 1}>
                    {[
                      { label: "Instructor ratio", value: "1:1" },
                      { label: "Course cap", value: "≤40 km/h" },
                      { label: "Medic on site", value: "24/7" },
                      { label: "Staff vetted", value: "100%" },
                    ].map((item) => (
                      <div key={item.label} className="w-fit min-w-48 rounded-[var(--radius-sm)] border border-[var(--graphite)] bg-[rgba(255,255,255,0.02)] p-4">
                        <div className="font-mono text-2xl font-semibold text-[var(--chalk)]">{item.value}</div>
                        <div className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[var(--mist)]">{item.label}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-[var(--radius-sm)] border border-[var(--signal)] bg-[rgba(255,90,31,0.08)] p-4 text-sm text-[var(--chalk)]">
              <span className="font-semibold">Parent reassurance:</span> We teach vehicle control in a closed, supervised environment. Every session is designed around road-safety learning and parental consent.
            </div>

            <div className="mt-6 flex items-center justify-between gap-4 border-t border-[var(--graphite)] pt-4 text-sm text-[var(--mist)]">
              <span>Need a quick answer?</span>
              <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer" className="font-semibold text-[var(--signal)] hover:underline">
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
