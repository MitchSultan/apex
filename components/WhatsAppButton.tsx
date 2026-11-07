import { MessageCircleMore } from "lucide-react";

import { buildWhatsAppLink, site } from "@/content/site";

type WhatsAppButtonProps = {
  className?: string;
  label?: string;
  message?: string;
};

export function WhatsAppButton({
  className = "",
  label = "WhatsApp",
  message = site.whatsappMessage,
}: WhatsAppButtonProps) {
  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-[var(--signal)] px-4 py-2 text-sm font-semibold text-[var(--asphalt)] transition-colors hover:bg-[var(--signal-deep)] ${className}`}
    >
      <MessageCircleMore size={18} aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
