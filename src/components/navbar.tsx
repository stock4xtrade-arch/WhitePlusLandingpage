"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { useContact } from "@/components/contact-provider";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/content/site";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { open } = useContact();
  const pathname = usePathname();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3">
      <div className="container-page">
        <nav
          aria-label="Main"
          className="rounded-[20px] border border-line bg-surface/85 px-3 backdrop-blur-xl sm:px-4"
        >
          <div className="flex h-14 items-center justify-between gap-4">
            <Logo />

            <ul className="hidden items-center gap-0.5 lg:flex">
              {navLinks.map((link) => {
                const isActive = link.href.startsWith("/blog") && pathname.startsWith("/blog");
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors ${
                        isActive ? "text-ink" : "text-ink-muted hover:text-ink"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-1.5">
              <Button size="sm" onClick={open} className="hidden sm:inline-flex">
                Contact Us
              </Button>
              <button
                type="button"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-ink transition-colors hover:bg-surface-soft lg:hidden"
              >
                {isMenuOpen ? (
                  <X className="size-5" aria-hidden="true" />
                ) : (
                  <Menu className="size-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {isMenuOpen ? (
            <div id="mobile-menu" className="border-t border-line-soft pb-3 pt-2 lg:hidden">
              <ul className="flex flex-col">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="flex min-h-12 items-center rounded-xl px-2 text-[15px] font-medium text-ink-soft transition-colors hover:bg-surface-soft hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="mt-2">
                  <Button
                    size="lg"
                    className="w-full"
                    onClick={() => {
                      closeMenu();
                      open();
                    }}
                  >
                    Contact Us
                  </Button>
                </li>
              </ul>
            </div>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
