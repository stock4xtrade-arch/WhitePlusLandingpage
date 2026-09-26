import { PhoneChart, PhonePositions, PhoneWatch } from "@/components/ui/mockups";
import { experience } from "@/content/site";

export function Experience() {
  return (
    <section className="border-b border-line bg-white py-20 sm:py-24">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">Designed for traders</p>
          <h2 className="text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
            UI &amp; <span className="text-gradient-brand">Experience</span>
          </h2>
          <p className="mt-5 leading-relaxed text-ink-muted">{experience.body}</p>

          <ul className="mt-8 space-y-5">
            {experience.items.map((item, index) => (
              <li key={item.title} className="flex gap-4">
                <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-sm font-bold tabular-nums text-brand-700">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-navy-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center gap-4 overflow-x-auto pb-2 sm:gap-6">
          <div className="hidden shrink-0 sm:block">
            <PhoneWatch />
          </div>
          <div className="shrink-0 sm:-translate-y-6">
            <PhoneChart />
          </div>
          <div className="shrink-0">
            <PhonePositions />
          </div>
        </div>
      </div>
    </section>
  );
}
