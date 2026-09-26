import { Check } from "lucide-react";

import { DashboardMock } from "@/components/ui/mockups";
import { dashboard } from "@/content/site";

export function Platform() {
  return (
    <section id="platform" className="scroll-mt-24 bg-canvas py-20 sm:py-24">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">The platform</p>
          <h2 className="text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
            Institutional Grade <span className="text-gradient-brand">Dashboard</span>
          </h2>
          <p className="mt-5 leading-relaxed text-ink-muted">{dashboard.body}</p>

          <ul className="mt-7 space-y-3">
            {dashboard.points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-navy-800">
                <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white">
                  <Check className="size-3.5" aria-hidden="true" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <DashboardMock />
      </div>
    </section>
  );
}
