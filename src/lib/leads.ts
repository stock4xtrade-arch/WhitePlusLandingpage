export type Lead = {
  name: string;
  email: string;
  phone: string;
  company: string;
  topic: string;
  message: string;
  source: "support-form" | "quick-modal";
};

export type LeadResult = { ok: true } | { ok: false; errors: Partial<Record<keyof Lead, string>> };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^[\d+\-\s()]{8,}$/;

export function validateLead(lead: Lead) {
  const errors: Partial<Record<keyof Lead, string>> = {};
  if (lead.name.trim().length < 2) errors.name = "Enter your full name (at least 2 characters).";
  if (!emailPattern.test(lead.email.trim()))
    errors.email = "Enter a valid email address, e.g. name@company.com.";
  if (!phonePattern.test(lead.phone.trim()))
    errors.phone = "Enter a valid phone number with country code.";
  if (lead.source === "support-form" && lead.message.trim().length < 10)
    errors.message = "Tell us a bit more — at least 10 characters.";
  return errors;
}

/**
 * Delivers a lead to the team.
 *
 * Email delivery is not wired up yet — plug your provider in here and it will work for both the
 * support form and the quick-contact modal. Two options that both run on Vercel:
 *
 * 1. Resend (recommended on Vercel — plain HTTPS, no SMTP ports involved):
 *      const { Resend } = await import("resend");
 *      await new Resend(process.env.RESEND_API_KEY).emails.send({ ... });
 *
 * 2. SMTP via nodemailer — works on Vercel too, but it must run in the Node.js runtime
 *    (not Edge) and you should use port 465/TLS since some hosts block 587 outbound:
 *      const nodemailer = await import("nodemailer");
 *      await nodemailer.createTransport({ host: process.env.SMTP_HOST, port: 465, secure: true,
 *        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } }).sendMail({ ... });
 *
 * Keep credentials in environment variables (`.env.local` locally, Vercel project settings in
 * production). Never commit them.
 */
export async function deliverLead(lead: Lead) {
  console.info("[lead]", { ...lead, receivedAt: new Date().toISOString() });
}
