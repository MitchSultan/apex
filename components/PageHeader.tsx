type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 md:px-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--steel)]">{eyebrow}</p>
      <h1 className="max-w-3xl text-[var(--asphalt)]">{title}</h1>
      {description ? <p className="mt-5 max-w-2xl text-lg text-[var(--steel)]">{description}</p> : null}
    </div>
  );
}
