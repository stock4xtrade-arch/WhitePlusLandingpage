"use client";

import { ArrowRight } from "lucide-react";

import { useContact } from "@/components/contact-provider";
import { Button } from "@/components/ui/button";
import { contactForm } from "@/content/site";

export function BlogCta() {
  const { open } = useContact();

  return (
    <section className="p-2 sm:p-3">
      <div className="flex flex-col items-center gap-6 rounded-[22px] bg-slate-ink px-7 py-14 text-center text-white sm:flex-row sm:px-12 sm:text-left">
        <div className="flex-1">
          <h2 className="text-2xl font-medium sm:text-[2rem]">{contactForm.title}</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-white/55">
            Tell us about your brokerage and our team will reach out within one business day.
          </p>
        </div>
        <Button size="lg" variant="light" onClick={open} className="w-full shrink-0 sm:w-auto">
          {contactForm.submit}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
}
