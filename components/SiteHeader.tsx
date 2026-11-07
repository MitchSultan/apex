"use client";

import Link from "next/link";
import { Menu, PhoneCall, X } from "lucide-react";
import { useEffect, useState } from "react";

import { buildWhatsAppLink, primaryNav, site } from "@/content/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled ? "border-[var(--graphite)] bg-[var(--tarmac)] text-[var(--chalk)]" : "border-transparent bg-[var(--paddock)] text-[var(--asphalt)]"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-[0.12em] uppercase">
          <span className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--signal)] text-[var(--asphalt)]">
            A
          </span>
          <span>{site.brandName}</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium md:flex" aria-label="Main navigation">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="transition-opacity hover:opacity-80">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--graphite)] px-4 py-2 text-sm font-semibold transition-colors hover:border-[var(--signal)] hover:text-[var(--signal)]"
          >
            <PhoneCall size={16} aria-hidden="true" />
            Call
          </a>
          <Link href="/book" className="rounded-full bg-[var(--signal)] px-5 py-2.5 text-sm font-semibold text-[var(--asphalt)] transition-colors hover:bg-[var(--signal-deep)]">
            Book a Taster
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-[var(--graphite)] p-2 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-[var(--graphite)] bg-[var(--paddock)] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium text-[var(--asphalt)]" aria-label="Mobile navigation">
            {primaryNav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/book" onClick={() => setMobileOpen(false)} className="mt-2 rounded-full bg-[var(--signal)] px-4 py-2 text-center font-semibold text-[var(--asphalt)]">
              Book a Taster
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
