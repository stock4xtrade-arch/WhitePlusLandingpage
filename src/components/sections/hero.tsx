"use client";

import { useContact } from "@/components/contact-provider";
import { Button, ButtonLink } from "@/components/ui/button";
import { DashboardMock } from "@/components/ui/mockups";
import { hero } from "@/content/site";

export function Hero() {
  const { open } = useContact();

  return (
    <section className="p-2 sm:p-3">
      {/* Inset dark stage — the page's single high-contrast moment. */}
      <div className="relative overflow-hidden rounded-[22px] bg-slate-ink px-5 pt-14 text-white sm:px-10 sm:pt-20">
        <div className="absolute inset-0 grid-backdrop" aria-hidden="true" />
        <div
          className="absolute left-1/2 top-0 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-brand-600/12 blur-[130px]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/12 px-3.5 py-1.5 text-[11px] font-medium text-white/65">
            <svg viewBox="0 0 24 24" className="size-3" aria-hidden="true">
              <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
            </svg>
            {hero.eyebrow} · {hero.badge}
          </span>

          <p className="mt-7 text-[11px] font-medium uppercase tracking-[0.2em] text-white/45">
            {hero.kicker}
          </p>

          <h1 className="mt-4 text-[2.5rem] font-medium leading-[1.02] tracking-[-0.035em] sm:text-[3.5rem] lg:text-[4.25rem]">
            {hero.title}
          </h1>

          <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white/60">
            {hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
            <ButtonLink href="#platform" variant="light">
              {hero.primaryCta}
            </ButtonLink>
            <Button variant="ghost" onClick={open}>
              {hero.secondaryCta}
            </Button>
          </div>

          <dl className="mt-10 flex items-center justify-center gap-8 sm:gap-12">
            {hero.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="sr-only">{metric.label}</dt>
                <dd className="font-display text-xl font-medium tabular-nums text-white sm:text-2xl">
                  {metric.value}
                </dd>
                <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-white/40">{metric.label}</p>
              </div>
            ))}
          </dl>
        </div>

        {/* Terminal peeks above the fold and is cropped by the stage. */}
        <div className="relative mx-auto mt-14 h-[200px] max-w-4xl overflow-hidden sm:h-[260px]">
          <div className="rounded-t-2xl bg-white/[0.06] p-2 pb-0">
            <DashboardMock />
          </div>
        </div>
      </div>
    </section>
  );
}
