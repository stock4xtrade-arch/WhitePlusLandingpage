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
    <div className="rounded-[22px] border border-line bg-surface-soft px-7 py-10">
      <p className="font-display text-[2.75rem] font-medium tabular-nums leading-none text-ink sm:text-[3.5rem]">
        {count}
        {suffix}
      </p>
      <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-faint">{label}</p>
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
    <section id="stats" className="scroll-mt-28 py-20 sm:py-28">
      <div ref={ref} className="container-inner grid gap-2.5 sm:grid-cols-3">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} start={isVisible} />
        ))}
      </div>
    </section>
  );
}
