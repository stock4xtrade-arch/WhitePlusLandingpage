"use client";

import { CheckCircle2, Lock, X } from "lucide-react";
import { useActionState, useEffect, useRef } from "react";

import { submitLead } from "@/app/actions";
import { useContact } from "@/components/contact-provider";
import { Button } from "@/components/ui/button";
import { contactForm, site } from "@/content/site";
import type { Lead, LeadResult } from "@/lib/leads";

type FieldKey = Extract<keyof Lead, "name" | "phone" | "email">;

const fields: { key: FieldKey; label: string; type: string; autoComplete: string; placeholder: string }[] = [
  { key: "name", label: "Full Name", type: "text", autoComplete: "name", placeholder: "Jane Cooper" },
  { key: "phone", label: "Phone Number", type: "tel", autoComplete: "tel", placeholder: "+91 98765 43210" },
  { key: "email", label: "Email Address", type: "email", autoComplete: "email", placeholder: "jane@brokerage.com" },
];

export function ContactDialog() {
  const { isOpen } = useContact();
  // Mounting only while open keeps form state fresh on every visit.
  return isOpen ? <ContactDialogContent /> : null;
}

function ContactDialogContent() {
  const { close } = useContact();
  const [state, action, pending] = useActionState<LeadResult | null, FormData>(submitLead, null);
  const errors = state && !state.ok ? state.errors : {};
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [close]);

  return (
    <div className="fixed inset-0 z-[90] flex items-end justify-center p-0 sm:items-center sm:p-4">
      <button
        type="button"
        aria-label="Close dialog"
        onClick={close}
        className="absolute inset-0 cursor-default bg-ink/45 backdrop-blur-sm"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        className="relative w-full max-w-md rounded-t-[22px] border border-line bg-surface p-6 sm:rounded-[22px]"
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-3 top-3 inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-surface-soft hover:text-ink"
        >
          <X className="size-5" aria-hidden="true" />
        </button>

        {state?.ok ? (
          <div className="py-6 text-center" role="status" aria-live="polite">
            <CheckCircle2 className="mx-auto size-11 text-ink" aria-hidden="true" strokeWidth={1.5} />
            <h2 id="contact-title" className="mt-4 text-xl font-medium text-ink">
              Request received
            </h2>
            <p className="mt-2 text-[14px] text-ink-muted">
              Thanks — our team will reach out within one business day to set up your {site.name} demo.
            </p>
            <Button className="mt-6 w-full" onClick={close}>
              Done
            </Button>
          </div>
        ) : (
          <>
            <h2 id="contact-title" className="pr-10 text-xl font-medium text-ink">
              {contactForm.title}
            </h2>
            <p className="mt-1 text-[14px] text-ink-muted">{contactForm.body}</p>

            <form action={action} className="mt-5 space-y-4" noValidate>
              <input type="hidden" name="source" value="quick-modal" />
              {fields.map((field) => (
                <div key={field.key}>
                  <label
                    htmlFor={`contact-${field.key}`}
                    className="mb-2 block text-[13px] font-medium text-ink-soft"
                  >
                    {field.label} <span className="text-ink-faint">*</span>
                  </label>
                  <input
                    ref={field.key === "name" ? firstFieldRef : undefined}
                    id={`contact-${field.key}`}
                    name={field.key}
                    type={field.type}
                    required
                    autoComplete={field.autoComplete}
                    placeholder={field.placeholder}
                    aria-invalid={Boolean(errors[field.key])}
                    aria-describedby={errors[field.key] ? `contact-${field.key}-error` : undefined}
                    className={`min-h-11 w-full rounded-xl border bg-surface px-4 text-[15px] text-ink transition-colors placeholder:text-ink-faint ${
                      errors[field.key] ? "border-rose-400" : "border-line focus:border-ink/30"
                    }`}
                  />
                  {errors[field.key] ? (
                    <p
                      id={`contact-${field.key}-error`}
                      role="alert"
                      className="mt-1.5 text-[13px] text-rose-600"
                    >
                      {errors[field.key]}
                    </p>
                  ) : null}
                </div>
              ))}

              <Button type="submit" size="lg" className="w-full" disabled={pending}>
                {pending ? "Sending…" : contactForm.submit}
              </Button>
            </form>

            <p className="mt-4 flex items-center justify-center gap-1.5 text-[12px] text-ink-faint">
              <Lock className="size-3.5" aria-hidden="true" />
              {contactForm.note}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
