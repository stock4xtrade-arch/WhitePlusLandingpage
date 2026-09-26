import Link from "next/link";

import { site } from "@/content/site";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const wordmark = variant === "light" ? "text-white" : "text-navy-900";
  const suffix = variant === "light" ? "text-brand-300" : "text-brand-700";

  return (
    <Link href="/" className="group inline-flex items-center gap-2.5" aria-label={`${site.name} home`}>
      <span className="relative inline-flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 shadow-sm transition-transform duration-200 group-hover:scale-[1.04]">
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
          <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
        </svg>
      </span>
      <span className={`font-display text-lg font-bold tracking-tight ${wordmark}`}>
        White<span className={suffix}>Plus</span>
      </span>
    </Link>
  );
}
