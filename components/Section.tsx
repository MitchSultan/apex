import type { ReactNode } from "react";

type SectionVariant = "track" | "paddock";

type SectionProps = {
  children: ReactNode;
  className?: string;
  variant?: SectionVariant;
  id?: string;
};

export function Section({
  children,
  className = "",
  variant = "paddock",
  id,
}: SectionProps) {
  const baseClasses =
    variant === "track"
      ? "bg-[var(--asphalt)] text-[var(--chalk)]"
      : "bg-[var(--paddock)] text-[var(--asphalt)]";

  return (
    <section id={id} className={`${baseClasses} ${className}`}>
      {children}
    </section>
  );
}
