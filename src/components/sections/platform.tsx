import { DashboardMock } from "@/components/ui/mockups";
import { SectionHeading } from "@/components/ui/section-heading";
import { dashboard } from "@/content/site";

export function Platform() {
  return (
    <section id="platform" className="scroll-mt-28 border-t border-line-soft py-20 sm:py-28">
      <div className="container-inner">
        <SectionHeading eyebrow="The platform" title={dashboard.title} description={dashboard.body} />

        <div className="mt-14 grid gap-2.5 lg:grid-cols-[1fr_1.6fr]">
          <ul className="grid gap-2.5 sm:grid-cols-3 lg:grid-cols-1">
            {dashboard.points.map((point, index) => (
              <li
                key={point}
                className="flex flex-col justify-between rounded-[22px] border border-line bg-surface-soft p-6"
              >
                <span className="font-display text-[13px] tabular-nums text-ink-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-10 text-[15px] font-medium text-ink">{point}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-[22px] border border-line bg-surface-soft p-2.5 sm:p-4">
            <DashboardMock />
          </div>
        </div>
      </div>
    </section>
  );
}
