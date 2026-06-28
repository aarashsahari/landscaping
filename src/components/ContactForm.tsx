"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { services } from "@/lib/services";

const inputClass =
  "w-full rounded-2xl border border-dark/15 bg-white px-4 py-3 text-dark shadow-sm focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/40";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Connect contact form to backend (Formspree / Resend / Netlify Forms)
    // For now we just show a success state so the UI is demonstrable.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-secondary bg-light-green p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" aria-hidden />
        <h3 className="mt-4 font-serif text-2xl font-semibold text-dark">
          Thank you!
        </h3>
        <p className="mt-2 text-dark/75">
          Your request has been received. We typically respond within a few hours
          to schedule your free estimate.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-dark">
            Full Name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-dark">
            Phone Number
          </label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-dark">
            Email
          </label>
          <input id="email" name="email" type="email" autoComplete="email" className={inputClass} />
        </div>
        <div>
          <label htmlFor="city" className="mb-1 block text-sm font-medium text-dark">
            City / Area
          </label>
          <input id="city" name="city" type="text" placeholder="e.g. Burlington" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1 block text-sm font-medium text-dark">
          Service Needed
        </label>
        <select id="service" name="service" className={inputClass} defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-dark">
          Message
        </label>
        <textarea id="message" name="message" rows={4} className={inputClass} placeholder="Tell us a little about your property and what you need." />
      </div>

      <fieldset>
        <legend className="mb-1 block text-sm font-medium text-dark">
          Preferred Contact Method
        </legend>
        <div className="flex gap-6 pt-1 text-sm text-dark/80">
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="contactMethod" value="Phone" defaultChecked className="accent-primary" />
            Phone
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="contactMethod" value="Email" className="accent-primary" />
            Email
          </label>
        </div>
      </fieldset>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-lg font-semibold text-white shadow-md transition-all hover:bg-secondary hover:shadow-lg"
      >
        <Send className="h-5 w-5" aria-hidden />
        Request My Free Estimate
      </button>

      <p className="text-center text-sm text-dark/60">
        ✓ Free Estimates Available · No obligation
      </p>
    </form>
  );
}
