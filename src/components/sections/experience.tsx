import { PhoneChart, PhonePositions, PhoneWatch } from "@/components/ui/mockups";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/content/site";

export function Experience() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-inner">
        <SectionHeading
          eyebrow="Designed for traders"
          title={experience.title}
          description={experience.body}
        />

        <div className="mt-14 grid gap-2.5 lg:grid-cols-[1.5fr_1fr]">
          <div className="overflow-hidden rounded-[22px] border border-line bg-surface-soft px-6 pt-10">
            <div className="flex items-end justify-center gap-4 sm:gap-6">
              <div className="hidden translate-y-6 sm:block">
                <PhoneWatch />
              </div>
              <PhoneChart />
              <div className="hidden translate-y-6 md:block">
                <PhonePositions />
              </div>
            </div>
          </div>

          <ul className="grid gap-2.5 sm:grid-cols-3 lg:grid-cols-1">
            {experience.items.map((item) => (
              <li key={item.title} className="rounded-[22px] border border-line bg-surface-soft p-6">
                <h3 className="text-[15px] font-medium text-ink">{item.title}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-ink-muted">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
