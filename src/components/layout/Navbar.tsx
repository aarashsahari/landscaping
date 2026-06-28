"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, Leaf, ChevronDown } from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", hasMega: "services" as const },
  { label: "Locations", href: "/locations/burlington", hasMega: "locations" as const },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Solid green once scrolled; translucent over the hero at the top.
  const solid = scrolled || mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-primary shadow-md" : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 text-white"
          onClick={() => setMobileOpen(false)}
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-secondary">
            <Leaf className="h-5 w-5 text-white" aria-hidden />
          </span>
          <span className="font-serif text-lg font-bold leading-tight">
            Nolasco
            <span className="block text-xs font-normal tracking-wide text-light-green">
              Landscaping
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="relative"
              onMouseEnter={() => link.hasMega && setOpenMega(link.hasMega)}
              onMouseLeave={() => setOpenMega(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
                {link.hasMega && <ChevronDown className="h-3.5 w-3.5" aria-hidden />}
              </Link>

              {link.hasMega === "services" && openMega === "services" && (
                <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-2">
                  <ul className="rounded-2xl bg-white p-2 shadow-lg">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="block rounded-lg px-3 py-2 text-sm text-dark/80 hover:bg-light-green hover:text-primary"
                        >
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {link.hasMega === "locations" && openMega === "locations" && (
                <div className="absolute left-1/2 top-full w-56 -translate-x-1/2 pt-2">
                  <ul className="rounded-2xl bg-white p-2 shadow-lg">
                    {locations.map((l) => (
                      <li key={l.slug}>
                        <Link
                          href={`/locations/${l.slug}`}
                          className="block rounded-lg px-3 py-2 text-sm text-dark/80 hover:bg-light-green hover:text-primary"
                        >
                          {l.city}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Call Now button (desktop) */}
        <a
          href={site.phoneHref}
          className="hidden items-center gap-2 rounded-2xl bg-amber px-4 py-2 text-sm font-bold text-dark shadow-md transition-transform hover:scale-105 lg:inline-flex"
        >
          <Phone className="h-4 w-4" aria-hidden />
          {site.phone}
        </a>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={site.phoneHref}
            aria-label={`Call ${site.phone}`}
            className="grid h-10 w-10 place-items-center rounded-full bg-amber text-dark"
          >
            <Phone className="h-5 w-5" aria-hidden />
          </a>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-primary lg:hidden">
          <ul className="mx-auto max-w-content space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-3 font-medium text-white hover:bg-white/10"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={site.phoneHref}
                className="flex items-center justify-center gap-2 rounded-2xl bg-amber px-4 py-3 font-bold text-dark"
              >
                <Phone className="h-5 w-5" aria-hidden />
                Call {site.phone}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
