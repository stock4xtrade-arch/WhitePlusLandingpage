import { Icon } from "@/components/icon";
import { highlights } from "@/content/site";

export function Highlights() {
  const track = [...highlights, ...highlights, ...highlights];

  return (
    <section
      className="overflow-hidden border-y border-line-soft bg-surface-soft py-8"
      aria-label="Platform highlights"
    >
      <div className="flex w-max animate-marquee gap-10">
        {track.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            aria-hidden={index >= highlights.length}
            className="flex shrink-0 items-center gap-3"
          >
            <span className="inline-flex size-8 items-center justify-center rounded-lg bg-surface text-ink ring-1 ring-line">
              <Icon name={item.icon} className="size-[15px]" />
            </span>
            <div className="whitespace-nowrap">
              <h3 className="text-[13px] font-medium text-ink">{item.title}</h3>
              <p className="text-[12px] text-ink-faint">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
