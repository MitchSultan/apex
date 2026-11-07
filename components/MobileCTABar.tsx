import Link from "next/link";
import { PhoneCall } from "lucide-react";

import { buildWhatsAppLink, site } from "@/content/site";

export function MobileCTABar() {
  return (
    <div className="sticky bottom-0 z-40 border-t border-[var(--graphite)] bg-[var(--chalk)]/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        <Link href="/book" className="rounded-full bg-[var(--signal)] px-3 py-2 text-center text-sm font-semibold text-[var(--asphalt)]">
          Book
        </Link>
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[var(--graphite)] px-3 py-2 text-center text-sm font-semibold text-[var(--asphalt)]"
        >
          WhatsApp
        </a>
        <a
          href={`tel:${site.phone}`}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--graphite)] px-3 py-2 text-sm font-semibold text-[var(--asphalt)]"
        >
          <PhoneCall size={16} aria-hidden="true" />
          Call
        </a>
      </div>
    </div>
  );
}
