"use client";

import { useContact } from "@/components/contact-provider";
import { Button } from "@/components/ui/button";
import { PhoneChart, PhoneWatch } from "@/components/ui/mockups";
import { trustedBy, upgradeCta } from "@/content/site";

export function UpgradeCta() {
  const { open } = useContact();
  const track = [...trustedBy, ...trustedBy, ...trustedBy];

  return (
    <>
      {/* Muted partner strip, mirroring the reference's "backed by" row. */}
      <section className="border-y border-line-soft py-10" aria-label="Markets we connect to">
        <div className="container-inner flex items-center gap-8">
          <p className="hidden w-32 shrink-0 text-[12px] leading-snug text-ink-faint sm:block">Trusted by</p>
          <div className="min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <ul className="flex w-max animate-marquee items-center gap-14">
              {track.map((market, index) => (
                <li
                  key={`${market}-${index}`}
                  aria-hidden={index >= trustedBy.length}
                  className="whitespace-nowrap font-display text-[15px] font-medium tracking-tight text-ink-faint"
                >
                  {market}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="p-2 sm:p-3">
        <div className="overflow-hidden rounded-[22px] bg-slate-ink">
          <div className="container-inner grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="max-w-lg text-[2rem] font-medium leading-[1.05] text-white sm:text-[2.75rem]">
                {upgradeCta.title}
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-[1.7] text-white/55">{upgradeCta.body}</p>
              <Button variant="light" size="lg" className="mt-9" onClick={open}>
                {upgradeCta.cta}
              </Button>
            </div>

            <div className="flex items-end justify-center gap-5 sm:justify-end">
              <div className="hidden translate-y-4 sm:block">
                <PhoneWatch />
              </div>
              <PhoneChart />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
