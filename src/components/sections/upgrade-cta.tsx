"use client";

import { ArrowRight } from "lucide-react";

import { useContact } from "@/components/contact-provider";
import { Button } from "@/components/ui/button";
import { PhoneChart, PhoneWatch } from "@/components/ui/mockups";
import { trustedBy, upgradeCta } from "@/content/site";

export function UpgradeCta() {
  const { open } = useContact();
  const track = [...trustedBy, ...trustedBy, ...trustedBy];

  return (
    <section className="overflow-hidden bg-navy-900 py-20 text-white sm:py-24">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Ready to Upgrade <span className="text-gradient-brand">Your Trading?</span>
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-navy-300">{upgradeCta.body}</p>
          <Button size="lg" variant="light" className="mt-8" onClick={open}>
            {upgradeCta.cta}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>

        <div className="flex items-center justify-center gap-5">
          <PhoneWatch />
          <div className="hidden sm:block sm:-translate-y-6">
            <PhoneChart />
          </div>
        </div>
      </div>

      <div className="container-page mt-16">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-navy-400">Trusted by</p>
        <div className="mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <ul className="flex w-max animate-marquee gap-10">
            {track.map((market, index) => (
              <li
                key={`${market}-${index}`}
                aria-hidden={index >= trustedBy.length}
                className="whitespace-nowrap font-display text-lg font-semibold text-navy-400"
              >
                {market}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
