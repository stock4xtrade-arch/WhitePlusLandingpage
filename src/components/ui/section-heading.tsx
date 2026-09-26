export function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "center",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = tone === "dark" ? "text-white" : "text-navy-900";
  const subColor = tone === "dark" ? "text-navy-300" : "text-ink-muted";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">{eyebrow}</p>
      ) : null}
      <h2 className={`text-3xl font-bold leading-tight sm:text-4xl ${titleColor}`}>
        {title}
        {highlight ? (
          <>
            {" "}
            <span className="text-gradient-brand">{highlight}</span>
          </>
        ) : null}
      </h2>
      {subtitle ? <p className={`mt-4 text-base leading-relaxed ${subColor}`}>{subtitle}</p> : null}
    </div>
  );
}
