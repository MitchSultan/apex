import Link from "next/link";

import { primaryNav, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--graphite)] bg-[var(--asphalt)] text-[var(--chalk)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1.2fr_0.8fr_1fr] md:px-6">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--mist)]">[Academy]</p>
          <p className="max-w-md text-[var(--mist)]">
            Structured drift and car-control education for young drivers in Nakuru, Kenya — with safeguarding, clear consent, and a pathway into motorsport.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--mist)]">Navigation</p>
          <ul className="space-y-2 text-[var(--mist)]">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-[var(--chalk)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--mist)]">Safety & contact</p>
          <ul className="space-y-2 text-[var(--mist)]">
            <li>
              <a href="/safety/report" className="font-semibold text-[var(--kerb-red)] underline-offset-4 hover:underline">
                Report a concern
              </a>
            </li>
            <li>{site.address}</li>
            <li>{site.phone}</li>
            <li>{site.email}</li>
            <li>{site.dslName} · {site.dslRole}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
