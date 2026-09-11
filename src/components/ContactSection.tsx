"use client";

import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import { SlideIn } from "@/components/ScrollAnim";
import { siteConfig } from "@/lib/site";
import { siteCopy } from "@/lib/content";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { eyebrow, title, body, cta, services } = siteCopy.contact;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(siteConfig.formsEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="cv-auto mm-surface-light mm-section scroll-mt-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-12 lg:px-8">
        <SlideIn className="lg:col-span-5">
          <p className="mm-eyebrow-dark mb-4">{eyebrow}</p>
          <h2 className="mm-section-title-dark">{title}</h2>
          <p className="mt-6 text-lg text-flow-black/60">{body}</p>
          <div className="mt-8 space-y-2 font-mono text-sm uppercase tracking-[0.16em] text-flow-black">
            <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
            <br />
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </div>
        </SlideIn>

        <SlideIn delay={80} className="lg:col-span-7">
          {status === "success" ? (
            <div className="mm-card-light p-10">
              <p className="font-display text-3xl font-semibold">Got it.</p>
              <p className="mt-3 text-flow-black/60">I’ll come back to you.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="_subject" value="AP Creative Co — new project" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Business name" name="business" required />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone number" name="phone" type="tel" required />
              </div>
              <div>
                <label htmlFor="service" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-flow-black/45">
                  Service required
                </label>
                <select id="service" name="service" required className="field-light">
                  <option value="">Select…</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-flow-black/45">
                  Tell me about your business or project
                </label>
                <textarea id="message" name="message" rows={4} required className="field-light resize-none" />
              </div>
              {status === "error" && (
                <p className="text-sm text-flow-red">
                  Couldn’t send. Call {siteConfig.phoneDisplay} or email {siteConfig.email}.
                </p>
              )}
              <button type="submit" disabled={status === "loading"} className="btn-mm w-full !bg-flow-black !text-white">
                {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : cta}
              </button>
            </form>
          )}
        </SlideIn>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-flow-black/45">
        {label}
      </span>
      <input name={name} type={type} required={required} className="field-light" />
    </label>
  );
}
