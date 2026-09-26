"use client";

import { CheckCircle2, Lock, Mail, MessageCircle } from "lucide-react";
import { useActionState } from "react";

import { submitLead } from "@/app/actions";
import { Icon, type IconName } from "@/components/icon";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactSection, site } from "@/content/site";
import type { LeadResult } from "@/lib/leads";

const fieldClass =
  "min-h-11 w-full rounded-xl border bg-white px-4 text-base text-navy-900 transition-colors placeholder:text-navy-400 focus:border-brand-600";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-sm text-red-600">
      {message}
    </p>
  );
}

export function Contact() {
  const [state, action, pending] = useActionState<LeadResult | null, FormData>(submitLead, null);
  const errors = state && !state.ok ? state.errors : {};

  return (
    <section id="contact" className="scroll-mt-24 border-t border-line bg-canvas py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow={contactSection.eyebrow}
          title={contactSection.title}
          highlight={contactSection.highlight}
          subtitle={contactSection.subtitle}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            <a
              href={`mailto:${site.email}`}
              className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-brand-300"
            >
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <Mail className="size-5" aria-hidden="true" strokeWidth={1.75} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-navy-900">Email us</span>
                <span className="mt-0.5 block text-sm text-ink-muted">{site.email}</span>
              </span>
            </a>

            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-brand-300"
            >
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <MessageCircle className="size-5" aria-hidden="true" strokeWidth={1.75} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-navy-900">WhatsApp</span>
                <span className="mt-0.5 block text-sm text-ink-muted">Chat with a specialist now</span>
              </span>
            </a>

            {contactSection.channels.map((channel) => (
              <div
                key={channel.label}
                className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon name={channel.icon as IconName} className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy-900">{channel.label}</p>
                  <p className="mt-0.5 text-sm text-ink-muted">{channel.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-line bg-white p-6 sm:p-8">
            {state?.ok ? (
              <div className="flex flex-col items-center py-12 text-center" role="status" aria-live="polite">
                <CheckCircle2 className="size-14 text-brand-700" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-bold text-navy-900">Message sent</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
                  Thanks for reaching out. Our support team will reply within one business day.
                </p>
              </div>
            ) : (
              <form action={action} className="space-y-5" noValidate>
                <input type="hidden" name="source" value="support-form" />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="support-name" className="mb-1.5 block text-sm font-medium text-navy-800">
                      Full Name <span className="text-brand-700">*</span>
                    </label>
                    <input
                      id="support-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Jane Cooper"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "support-name-error" : undefined}
                      className={`${fieldClass} ${errors.name ? "border-red-500" : "border-line"}`}
                    />
                    <FieldError id="support-name-error" message={errors.name} />
                  </div>

                  <div>
                    <label htmlFor="support-company" className="mb-1.5 block text-sm font-medium text-navy-800">
                      Company
                    </label>
                    <input
                      id="support-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Cooper Securities"
                      className={`${fieldClass} border-line`}
                    />
                  </div>

                  <div>
                    <label htmlFor="support-email" className="mb-1.5 block text-sm font-medium text-navy-800">
                      Email Address <span className="text-brand-700">*</span>
                    </label>
                    <input
                      id="support-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="jane@brokerage.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "support-email-error" : undefined}
                      className={`${fieldClass} ${errors.email ? "border-red-500" : "border-line"}`}
                    />
                    <FieldError id="support-email-error" message={errors.email} />
                  </div>

                  <div>
                    <label htmlFor="support-phone" className="mb-1.5 block text-sm font-medium text-navy-800">
                      Phone Number <span className="text-brand-700">*</span>
                    </label>
                    <input
                      id="support-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="+91 98765 43210"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? "support-phone-error" : undefined}
                      className={`${fieldClass} ${errors.phone ? "border-red-500" : "border-line"}`}
                    />
                    <FieldError id="support-phone-error" message={errors.phone} />
                  </div>
                </div>

                <div>
                  <label htmlFor="support-topic" className="mb-1.5 block text-sm font-medium text-navy-800">
                    How can we help?
                  </label>
                  <select
                    id="support-topic"
                    name="topic"
                    defaultValue={contactSection.topics[0]}
                    className={`${fieldClass} cursor-pointer border-line`}
                  >
                    {contactSection.topics.map((topic) => (
                      <option key={topic} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="support-message" className="mb-1.5 block text-sm font-medium text-navy-800">
                    Message <span className="text-brand-700">*</span>
                  </label>
                  <textarea
                    id="support-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your brokerage, the markets you cover and what you need."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "support-message-error" : "support-message-helper"
                    }
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-base leading-relaxed text-navy-900 transition-colors placeholder:text-navy-400 focus:border-brand-600 ${
                      errors.message ? "border-red-500" : "border-line"
                    }`}
                  />
                  {errors.message ? (
                    <FieldError id="support-message-error" message={errors.message} />
                  ) : (
                    <p id="support-message-helper" className="mt-1.5 text-sm text-ink-muted">
                      The more context you give, the faster we can help.
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
                    {pending ? "Sending…" : contactSection.submit}
                  </Button>
                  <p className="flex items-center gap-1.5 text-xs text-ink-muted">
                    <Lock className="size-3.5" aria-hidden="true" />
                    {contactSection.note}
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
