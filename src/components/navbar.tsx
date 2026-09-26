"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useContact } from "@/components/contact-provider";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/content/site";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { open } = useContact();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);
  // Every page opens with a dark hero, so the transparent bar needs light-on-dark text.
  const isSolid = isScrolled || isMenuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        isSolid
          ? "border-b border-line bg-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-page flex h-18 items-center justify-between" aria-label="Main">
        <Logo variant={isSolid ? "dark" : "light"} />

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = link.href.startsWith("/blog") && pathname.startsWith("/blog");
            const linkColor = isActive
              ? isSolid
                ? "text-brand-700"
                : "text-brand-300"
              : isSolid
                ? "text-navy-600 hover:text-navy-900"
                : "text-navy-200 hover:text-white";
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${linkColor}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Button onClick={open} className="hidden sm:inline-flex">
            Contact Us
          </Button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className={`inline-flex size-11 cursor-pointer items-center justify-center rounded-lg transition-colors lg:hidden ${
              isSolid ? "text-navy-800 hover:bg-navy-100" : "text-white hover:bg-white/10"
            }`}
          >
            {isMenuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {isMenuOpen ? (
        <div id="mobile-menu" className="border-t border-line bg-white lg:hidden">
          <ul className="container-page flex flex-col py-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="flex min-h-12 items-center rounded-lg px-2 text-base font-medium text-navy-800 transition-colors hover:bg-brand-50 hover:text-brand-700"
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
    </header>
  );
}
