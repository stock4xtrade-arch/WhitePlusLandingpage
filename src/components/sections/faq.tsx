"use client";

import { ChevronDown, Headset } from "lucide-react";
import { useState } from "react";

import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs, support } from "@/content/site";

export function Faq() {
  // Every answer stays in the DOM (good for SEO) and panels open independently.
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggle = (index: number) =>
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index],
    );

  return (
    <section id="faq" className="scroll-mt-24 border-t border-line bg-white py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading eyebrow="Answers" title="Frequently" highlight="Asked Questions" />

        <div className="mx-auto mt-14 max-w-3xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div key={faq.question} className="overflow-hidden rounded-xl border border-line bg-canvas">
                <h3>
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-200 hover:bg-brand-50/60"
                  >
                    <span className="text-base font-semibold text-navy-900">{faq.question}</span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`size-5 shrink-0 text-brand-700 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  hidden={!isOpen}
                  className="border-t border-line bg-white px-5 py-4"
                >
                  <p className="text-sm leading-relaxed text-ink-muted">{faq.answer}</p>
                  {faq.items ? (
                    <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                      {faq.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-navy-800">
                          <span className="size-1.5 shrink-0 rounded-full bg-brand-600" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-14 flex max-w-3xl flex-col items-center gap-5 rounded-2xl border border-line bg-canvas px-6 py-10 text-center sm:flex-row sm:text-left">
          <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-700 text-white">
            <Headset className="size-6" aria-hidden="true" strokeWidth={1.75} />
          </span>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-navy-900">{support.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{support.body}</p>
          </div>
          <ButtonLink href="#contact" size="lg" className="w-full sm:w-auto">
            {support.cta}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
