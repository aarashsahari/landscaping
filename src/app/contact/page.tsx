import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Badge from "@/components/ui/Badge";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us for a Free Landscaping Estimate",
  description:
    "Get your free landscaping estimate in Burlington, Hamilton & Oakville. Call 647-407-1409 or request a quote online — we reply within a few hours.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
        title="Get Your Free Landscaping Estimate — Burlington, Hamilton & Oakville"
        intro="Tell us about your property and we'll get back to you quickly with a free, no-obligation estimate. Prefer to talk? Give us a call or text any time during business hours."
      />

      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto grid max-w-content gap-12 px-4 lg:grid-cols-2">
          {/* Form */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <h2 className="font-serif text-2xl font-semibold text-dark">
                Request a Free Estimate
              </h2>
              <Badge tone="amber">Free Estimates Available</Badge>
            </div>
            <ContactForm />
          </div>

          {/* Contact details */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-light-green p-8">
              <h2 className="font-serif text-2xl font-semibold text-dark">
                Reach Us Directly
              </h2>

              <a
                href={site.phoneHref}
                className="mt-6 flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-white">
                  <Phone className="h-6 w-6" aria-hidden />
                </span>
                <span>
                  <span className="block text-sm text-dark/60">Call or text</span>
                  <span className="block text-2xl font-bold text-primary">
                    {site.phone}
                  </span>
                </span>
              </a>

              <ul className="mt-6 space-y-4 text-dark/80">
                <li className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" aria-hidden />
                  <span>
                    {/* TODO: Replace with real email address */}
                    <a href={`mailto:${site.email}`} className="font-medium hover:text-primary">
                      {site.email}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" aria-hidden />
                  <span>
                    <span className="font-medium">Hours:</span> {site.hoursDisplay}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" aria-hidden />
                  <span>
                    Serving Burlington, Hamilton, Oakville &amp; Surrounding Areas
                  </span>
                </li>
              </ul>

              <p className="mt-6 rounded-2xl bg-white/70 px-4 py-3 text-center font-medium text-primary">
                We typically respond within a few hours!
              </p>
            </div>

            {/* Map embed placeholder */}
            <div className="overflow-hidden rounded-2xl shadow-sm">
              {/* TODO: Replace with Google Maps embed code */}
              <div className="flex h-64 flex-col items-center justify-center bg-light-gray text-center text-dark/50">
                <MapPin className="h-8 w-8" aria-hidden />
                <p className="mt-2 px-6 text-sm">
                  Google Maps embed goes here.
                  <br />
                  {/* REPLACE: paste your Google Maps iframe embed code */}
                  &lt;!-- REPLACE with Google Maps iframe embed --&gt;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
