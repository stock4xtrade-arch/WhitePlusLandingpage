"use server";

import { deliverLead, validateLead, type Lead, type LeadResult } from "@/lib/leads";

function read(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

export async function submitLead(_state: LeadResult | null, formData: FormData): Promise<LeadResult> {
  const lead: Lead = {
    name: read(formData, "name"),
    email: read(formData, "email"),
    phone: read(formData, "phone"),
    company: read(formData, "company"),
    topic: read(formData, "topic") || "General enquiry",
    message: read(formData, "message"),
    source: read(formData, "source") === "quick-modal" ? "quick-modal" : "support-form",
  };

  const errors = validateLead(lead);
  if (Object.keys(errors).length > 0) return { ok: false, errors };

  await deliverLead(lead);
  return { ok: true };
}
