import Link from "next/link";
import { Phone, Mail, Clock, MapPin, Leaf, Facebook, Instagram } from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-earth-brown text-white/85">
      <div className="mx-auto grid max-w-content gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* About blurb */}
        <div>
          <div className="flex items-center gap-2 text-white">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-secondary">
              <Leaf className="h-5 w-5" aria-hidden />
            </span>
            <span className="font-serif text-lg font-bold">Nolasco Landscaping</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            {site.tagline}. Professional, reliable landscaping serving Burlington,
            Hamilton, Oakville, and surrounding communities across the GTA West.
          </p>
          <div className="mt-4 flex gap-3">
            {/* TODO: Replace with real social profile URLs */}
            <a
              href={site.social.facebook}
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <Facebook className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={site.social.instagram}
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <Instagram className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>

        {/* Services links */}
        <div>
          <h3 className="font-serif text-base font-semibold text-white">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-amber">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service areas / locations */}
        <div>
          <h3 className="font-serif text-base font-semibold text-white">Service Areas</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {locations.map((l) => (
              <li key={l.slug}>
                <Link href={`/locations/${l.slug}`} className="hover:text-amber">
                  Landscaping in {l.city}
                </Link>
              </li>
            ))}
            <li className="pt-1 text-white/60">
              {site.serviceAreas.slice(3).join(" · ")}
            </li>
          </ul>
        </div>

        {/* Contact info + hours */}
        <div>
          <h3 className="font-serif text-base font-semibold text-white">Get in Touch</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={site.phoneHref} className="flex items-center gap-2 hover:text-amber">
                <Phone className="h-4 w-4 text-amber" aria-hidden />
                {site.phone}
              </a>
            </li>
            <li>
              {/* TODO: Replace with real email address */}
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-amber">
                <Mail className="h-4 w-4 text-amber" aria-hidden />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 text-amber" aria-hidden />
              <span>{site.hoursDisplay}</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-amber" aria-hidden />
              <span>Serving Burlington, Hamilton, Oakville &amp; surrounding areas</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/70 sm:flex-row">
          <p>
            © {year} Nolasco Landscaping. All rights reserved. Free estimates available.
          </p>
          {/* TODO: Replace with real web designer / agency credit */}
          <p>Website by // REPLACE</p>
        </div>
      </div>
    </footer>
  );
}
