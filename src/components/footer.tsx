import Link from "next/link";

import { Logo } from "@/components/logo";
import { footer, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line-soft bg-surface-soft">
      <div className="container-inner grid gap-10 py-16 md:grid-cols-[1.6fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-5 text-[14px] leading-relaxed text-ink-muted">{footer.blurb}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-5 inline-block text-[14px] font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
          >
            {site.email}
          </a>
        </div>

        {footer.columns.map((column) => (
          <div key={column.heading}>
            <h3 className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-faint">
              {column.heading}
            </h3>
            <ul className="mt-4">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-10 items-center text-[14px] text-ink-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-line">
        <div className="container-inner py-6 text-[12px] text-ink-faint">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
