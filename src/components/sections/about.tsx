import { Icon, type IconName } from "@/components/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { about } from "@/content/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-28 border-t border-line-soft py-20 sm:py-28">
      <div className="container-inner">
        <SectionHeading eyebrow="Who we are" title={about.title} description={about.lead} />

        <div className="mt-14 grid gap-2.5 lg:grid-cols-[1.15fr_1fr]">
          <div className="rounded-[22px] border border-line bg-surface-soft p-7 sm:p-9">
            <p className="max-w-xl text-[15px] leading-[1.7] text-ink-soft">{about.body}</p>

            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-7">
              {about.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-2xl font-medium tabular-nums text-ink sm:text-3xl">
                    {stat.value}
                  </dd>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-ink-faint">{stat.label}</p>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-[22px] bg-slate-ink p-7 sm:p-9">
            <h3 className="text-[17px] font-medium text-white">Our Core Values</h3>
            <ul className="mt-8 space-y-7">
              {about.values.map((value) => (
                <li key={value.title} className="flex gap-4">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                    <Icon name={value.icon as IconName} className="size-4" />
                  </span>
                  <div>
                    <h4 className="text-[15px] font-medium text-white">{value.title}</h4>
                    <p className="mt-1 text-[14px] leading-relaxed text-white/55">{value.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
