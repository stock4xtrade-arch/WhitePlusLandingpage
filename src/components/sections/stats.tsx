"use client";

import { useEffect, useRef, useState } from "react";

import { stats } from "@/content/site";

function useCountUp(target: number, start: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = prefersReducedMotion ? 0 : 1400;
    const startedAt = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = duration === 0 ? 1 : Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, start]);

  return value;
}

function StatItem({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const count = useCountUp(value, start);

  return (
    <div className="rounded-2xl border border-line bg-white px-6 py-8 text-center">
      <p className="font-display text-4xl font-bold tabular-nums text-brand-700 sm:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium uppercase tracking-wider text-ink-muted">{label}</p>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="scroll-mt-24 bg-canvas py-20 sm:py-24">
      <div ref={ref} className="container-page grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} start={isVisible} />
        ))}
      </div>
    </section>
  );
}
