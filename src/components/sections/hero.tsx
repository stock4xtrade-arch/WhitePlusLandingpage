"use client";

import { ArrowRight, Sparkles } from "lucide-react";

import { useContact } from "@/components/contact-provider";
import { Button, ButtonLink } from "@/components/ui/button";
import { DashboardMock } from "@/components/ui/mockups";
import { hero } from "@/content/site";

export function Hero() {
  const { open } = useContact();

  return (
    <section className="relative overflow-hidden bg-navy-900 pb-20 pt-28 text-white sm:pb-24 sm:pt-32">
      <div className="absolute inset-0 grid-backdrop opacity-40" aria-hidden="true" />
      <div
        className="absolute -left-40 top-0 size-[32rem] rounded-full bg-brand-700/25 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-32 bottom-0 size-[28rem] rounded-full bg-brand-500/15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-brand-200">
            <Sparkles className="size-3.5" aria-hidden="true" />
            {hero.eyebrow} · {hero.badge}
          </span>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">
            {hero.kicker}
          </p>

          <h1 className="mt-3 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Trade Without <span className="text-gradient-brand">Limits</span>
          </h1>

          <p className="mt-5 max-w-md text-lg text-navy-200">{hero.subtitle}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#platform" size="lg" variant="light">
              {hero.primaryCta}
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <Button
              size="lg"
              onClick={open}
              className="border border-white/20 bg-white/5 text-white hover:bg-white/10"
            >
              {hero.secondaryCta}
            </Button>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6">
            {hero.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="sr-only">{metric.label}</dt>
                <dd className="font-display text-2xl font-bold tabular-nums text-white">{metric.value}</dd>
                <p className="mt-0.5 text-xs uppercase tracking-wider text-navy-400">{metric.label}</p>
              </div>
            ))}
          </dl>
        </div>

        <DashboardMock />
      </div>
    </section>
  );
}
