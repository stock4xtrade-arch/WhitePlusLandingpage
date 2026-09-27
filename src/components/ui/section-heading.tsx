/**
 * Editorial split heading: oversized title on the left, supporting copy on the right.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  tone = "light",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const titleColor = tone === "dark" ? "text-white" : "text-ink";
  const descColor = tone === "dark" ? "text-white/60" : "text-ink-muted";
  const eyebrowColor = tone === "dark" ? "text-white/45" : "text-ink-faint";

  // Without supporting copy the split layout leaves a dead column, so collapse to one.
  const columns = description ? "lg:grid-cols-[1.05fr_1fr] lg:items-end lg:gap-16" : "max-w-3xl";

  return (
    <div className={`grid gap-6 ${columns} ${className}`}>
      <div>
        {eyebrow ? (
          <p className={`mb-4 text-[11px] font-medium uppercase tracking-[0.16em] ${eyebrowColor}`}>
            {eyebrow}
          </p>
        ) : null}
        <h2 className={`text-[2rem] leading-[1.05] sm:text-[2.75rem] lg:text-[3.25rem] ${titleColor}`}>
          {title}
        </h2>
        {action ? <div className="mt-6">{action}</div> : null}
      </div>

      {description ? (
        <p className={`max-w-lg text-[15px] leading-[1.65] sm:text-base ${descColor}`}>{description}</p>
      ) : null}
    </div>
  );
}
