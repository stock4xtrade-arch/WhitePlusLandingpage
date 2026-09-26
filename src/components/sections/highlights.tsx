import { Icon } from "@/components/icon";
import { highlights } from "@/content/site";

export function Highlights() {
  const track = [...highlights, ...highlights, ...highlights];

  return (
    <section
      className="overflow-hidden border-b border-line bg-canvas py-10"
      aria-label="Platform highlights"
    >
      <div className="flex w-max animate-marquee gap-4">
        {track.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            aria-hidden={index >= highlights.length}
            className="flex w-72 shrink-0 items-center gap-4 rounded-2xl border border-line bg-white px-5 py-4"
          >
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
              <Icon name={item.icon} className="size-5" />
            </span>
            <div>
              <h3 className="text-sm font-semibold text-navy-900">{item.title}</h3>
              <p className="text-xs text-ink-muted">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
