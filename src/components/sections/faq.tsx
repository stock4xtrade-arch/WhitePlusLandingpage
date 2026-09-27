"use client";

import { Plus } from "lucide-react";
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
    <section id="faq" className="scroll-mt-28 border-t border-line-soft py-20 sm:py-28">
      <div className="container-inner">
        <SectionHeading eyebrow="Answers" title="Frequently Asked Questions" />

        <div className="mt-14 border-t border-line">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div key={faq.question} className="border-b border-line">
                <h3>
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left transition-colors duration-200 hover:text-ink-muted"
                  >
                    <span className="text-[16px] font-medium text-ink sm:text-[17px]">{faq.question}</span>
                    <Plus
                      aria-hidden="true"
                      className={`size-4 shrink-0 text-ink-faint transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                </h3>
                <div id={`faq-panel-${index}`} hidden={!isOpen} className="pb-6 pr-10">
                  <p className="max-w-2xl text-[15px] leading-[1.7] text-ink-muted">{faq.answer}</p>
                  {faq.items ? (
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:max-w-2xl">
                      {faq.items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-[14px] text-ink-soft">
                          <span className="size-1 shrink-0 rounded-full bg-ink-faint" aria-hidden="true" />
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

        <div className="mt-12 flex flex-col gap-6 rounded-[22px] border border-line bg-surface-soft p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div>
            <h3 className="text-xl font-medium text-ink">{support.title}</h3>
            <p className="mt-2 max-w-md text-[15px] leading-relaxed text-ink-muted">{support.body}</p>
          </div>
          <ButtonLink href="#contact" size="lg" className="shrink-0">
            {support.cta}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
