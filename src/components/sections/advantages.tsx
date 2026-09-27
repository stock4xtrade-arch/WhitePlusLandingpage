import { Icon } from "@/components/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { advantages } from "@/content/site";

export function Advantages() {
  return (
    <section className="p-2 sm:p-3">
      <div className="rounded-[22px] bg-slate-ink py-20 sm:py-28">
        <div className="container-inner">
          <SectionHeading
            eyebrow="Why brokers choose us"
            title={advantages.title}
            description={advantages.subtitle}
            tone="dark"
          />

          <ul className="mt-14 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.items.map((item) => (
              <li
                key={item.title}
                className="rounded-[18px] border border-slate-line bg-slate-ink-soft/50 p-7 transition-colors duration-200 hover:bg-slate-ink-soft"
              >
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-white/10 text-white">
                  <Icon name={item.icon} className="size-4" />
                </span>
                <h3 className="mt-10 text-[16px] font-medium text-white">{item.title}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-white/55">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
