"use client";

import { ArrowRight } from "lucide-react";

import { useContact } from "@/components/contact-provider";
import { Button } from "@/components/ui/button";
import { contactForm } from "@/content/site";

export function BlogCta() {
  const { open } = useContact();

  return (
    <section className="bg-navy-900 py-16 text-white">
      <div className="container-page flex max-w-4xl flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
        <div className="flex-1">
          <h2 className="text-2xl font-bold sm:text-3xl">{contactForm.title}</h2>
          <p className="mt-2 leading-relaxed text-navy-300">
            Tell us about your brokerage and our team will reach out within one business day.
          </p>
        </div>
        <Button size="lg" variant="light" onClick={open} className="w-full sm:w-auto">
          {contactForm.submit}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
}
