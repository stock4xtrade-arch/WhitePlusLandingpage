import Link from "next/link";

import { Logo } from "@/components/logo";
import { footer, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-navy-800 bg-navy-900 text-navy-200">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.6fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo variant="light" />
          <p className="mt-4 text-sm leading-relaxed text-navy-300">{footer.blurb}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 inline-block text-sm font-medium text-brand-300 transition-colors hover:text-brand-200"
          >
            {site.email}
          </a>
        </div>

        {footer.columns.map((column) => (
          <div key={column.heading}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{column.heading}</h3>
            <ul className="mt-4 space-y-1">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-sm text-navy-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-navy-800">
        <div className="container-page py-5 text-center text-xs text-navy-400">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
