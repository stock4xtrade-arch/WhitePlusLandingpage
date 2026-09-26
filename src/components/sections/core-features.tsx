import { Icon } from "@/components/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { coreFeatures } from "@/content/site";

export function CoreFeatures() {
  return (
    <section id="features" className="scroll-mt-24 bg-canvas py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading eyebrow="Capabilities" title="Core Features of" highlight="Our Platform" />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coreFeatures.map((feature) => (
            <li
              key={feature.title}
              className="group rounded-2xl border border-line bg-white p-6 transition-colors duration-200 hover:border-brand-300 hover:bg-brand-50/40"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-700 text-white">
                <Icon name={feature.icon} className="size-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-navy-900">{feature.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
