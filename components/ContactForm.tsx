"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "@/components/Icons";
import { contactPlaceholders } from "@/lib/content";

const field =
  "w-full rounded-md border border-mist bg-white px-4 py-3 text-sm text-ink placeholder:text-slate/60 transition-colors focus:border-blue focus:outline-none focus-visible:outline-none";
const label = "text-sm font-medium text-navy";

// Web3Forms delivers submissions straight to the company inbox — set the
// access key (from web3forms.com) in .env.local as NEXT_PUBLIC_WEB3FORMS_KEY.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!WEB3FORMS_KEY) {
      // Fallback: no key configured yet — open the visitor's mail client so
      // the inquiry still reaches the inbox rather than being lost.
      const subject = `Website inquiry from ${name || "a visitor"}`;
      const body = [
        `Name: ${name}`,
        company && `Company: ${company}`,
        `Email: ${email}`,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n");
      window.location.href = `mailto:${contactPlaceholders.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Website inquiry from ${name || "a visitor"}`,
          from_name: name || "Website visitor",
          name,
          company: company || "—",
          email,
          message,
        }),
      });
      const result = await res.json();
      if (result.success) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-2xl border border-mist bg-white p-6 shadow-card sm:p-8">
      {status === "sent" ? (
        <div className="flex flex-col items-center gap-3 py-10 text-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-green/10 text-green">
            <Icon name="check" className="size-6" />
          </span>
          <p className="text-lg font-semibold text-navy">Thank you</p>
          <p className="max-w-sm text-sm leading-6 text-slate">
            {WEB3FORMS_KEY
              ? "Your message has been sent to the Innovate International Philippines team. We'll get back to you soon."
              : "Your email app should have opened with your message ready to send to the Innovate International Philippines team."}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="cf-name" className={label}>
                Name
              </label>
              <input
                id="cf-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className={field}
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="cf-company" className={label}>
                Company / Organization
              </label>
              <input
                id="cf-company"
                name="company"
                type="text"
                autoComplete="organization"
                className={field}
                placeholder="Optional"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="cf-email" className={label}>
              Email
            </label>
            <input
              id="cf-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={field}
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="cf-message" className={label}>
              Message
            </label>
            <textarea
              id="cf-message"
              name="message"
              required
              rows={4}
              className={`${field} resize-y`}
              placeholder="Tell us about your requirement or project."
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-blue px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-royal disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send Message"}
            <Icon
              name="arrowRight"
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </button>
          {status === "error" && (
            <p className="text-xs leading-5 text-red-600" role="alert">
              Something went wrong sending your message. Please email us directly
              at {contactPlaceholders.email}.
            </p>
          )}
          <p className="text-xs leading-5 text-slate">
            {WEB3FORMS_KEY
              ? `Your message is sent directly to ${contactPlaceholders.email}.`
              : `Submitting opens your email app addressed to ${contactPlaceholders.email}.`}
          </p>
        </form>
      )}
    </div>
  );
}
