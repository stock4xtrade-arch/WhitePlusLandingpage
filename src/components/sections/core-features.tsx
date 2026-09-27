import { Icon } from "@/components/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { coreFeatures } from "@/content/site";

export function CoreFeatures() {
  const [lead, ...rest] = coreFeatures;

  return (
    <section id="features" className="scroll-mt-28 py-20 sm:py-28">
      <div className="container-inner">
        <SectionHeading eyebrow="Capabilities" title="Core Features of Our Platform" />

        <ul className="mt-14 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {/* First card carries the section's visual weight. */}
          <li className="rounded-[22px] bg-slate-ink p-7 sm:col-span-2 sm:row-span-1">
            <span className="inline-flex size-10 items-center justify-center rounded-xl bg-white/10 text-white">
              <Icon name={lead.icon} className="size-[18px]" />
            </span>
            <h3 className="mt-20 text-2xl font-medium text-white sm:text-[1.75rem]">{lead.title}</h3>
            <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-white/55">{lead.description}</p>
          </li>

          {rest.map((feature) => (
            <li
              key={feature.title}
              className="rounded-[22px] border border-line bg-surface-soft p-7 transition-colors duration-200 hover:border-ink/15"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-surface text-ink ring-1 ring-line">
                <Icon name={feature.icon} className="size-[18px]" />
              </span>
              <h3 className="mt-10 text-[17px] font-medium text-ink">{feature.title}</h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-ink-muted">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
