import { Icon, type IconName } from "@/components/icon";
import { about } from "@/content/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-y border-line bg-white py-20 sm:py-24">
      <div className="container-page grid gap-14 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">Who we are</p>
          <h2 className="text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">{about.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-800">{about.lead}</p>
          <p className="mt-4 leading-relaxed text-ink-muted">{about.body}</p>

          <dl className="mt-8 grid grid-cols-3 gap-3">
            {about.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-line bg-canvas px-4 py-4">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-xl font-bold tabular-nums text-brand-700">{stat.value}</dd>
                <p className="mt-0.5 text-xs uppercase tracking-wider text-ink-muted">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-2xl border border-line bg-canvas p-7">
          <h3 className="text-lg font-semibold text-navy-900">Our Core Values</h3>
          <ul className="mt-6 space-y-6">
            {about.values.map((value) => (
              <li key={value.title} className="flex gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-700 ring-1 ring-line">
                  <Icon name={value.icon as IconName} className="size-5" />
                </span>
                <div>
                  <h4 className="text-base font-semibold text-navy-900">{value.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{value.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
