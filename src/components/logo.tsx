import Link from "next/link";

import { site } from "@/content/site";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isLight = variant === "light";

  return (
    <Link href="/" className="group inline-flex items-center gap-2" aria-label={`${site.name} home`}>
      <svg viewBox="0 0 24 24" className={`size-5 ${isLight ? "text-white" : "text-ink"}`} aria-hidden="true">
        <path d="M12 3.5v17M3.5 12h17" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
      <span
        className={`font-display text-[17px] font-semibold tracking-tight ${isLight ? "text-white" : "text-ink"}`}
      >
        WhitePlus
      </span>
    </Link>
  );
}
