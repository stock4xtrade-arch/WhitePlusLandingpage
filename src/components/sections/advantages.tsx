import { Icon } from "@/components/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { advantages } from "@/content/site";

export function Advantages() {
  return (
    <section className="bg-navy-900 py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why brokers choose us"
          title="The WhitePlus Solution"
          highlight="Advantages"
          subtitle={advantages.subtitle}
          tone="dark"
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.items.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-200 hover:border-brand-500/50 hover:bg-white/[0.07]"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-700 text-white">
                <Icon name={item.icon} className="size-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-navy-300">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
