import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, ArrowRight, Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import LocationBadge from "@/components/LocationBadge";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { localBusinessSchema } from "@/lib/jsonld";
import { locations, getLocation } from "@/lib/locations";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const loc = getLocation(params.slug);
  if (!loc) return {};
  return buildMetadata({
    title: `Landscaping Services in ${loc.city}, Ontario`,
    description: loc.metaDescription,
    path: `/locations/${loc.slug}`,
    ogImage: loc.image.src,
  });
}

export default function LocationPage({
  params,
}: {
  params: { slug: string };
}) {
  const loc = getLocation(params.slug);
  if (!loc) notFound();

  return (
    <>
      {/* LocalBusiness schema scoped with this city first in areaServed */}
      <JsonLd
        data={localBusinessSchema([
          loc.city,
          ...site.serviceAreas.filter((c) => c !== loc.city),
        ])}
      />

      <PageHeader
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Locations", path: `/locations/${loc.slug}` },
          { name: loc.city, path: `/locations/${loc.slug}` },
        ]}
        title={`Landscaping Services in ${loc.city}, Ontario`}
        intro={`Friendly, professional, and reliable landscaping for ${loc.city} homeowners — with free, no-obligation estimates.`}
      >
        <Button href={site.phoneHref} variant="primary" size="md">
          <Phone className="h-5 w-5" aria-hidden />
          Free Estimate · {site.phone}
        </Button>
      </PageHeader>

      {/* City copy + image */}
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto grid max-w-content gap-10 px-4 lg:grid-cols-[1.4fr_1fr]">
          <div className="prose-copy max-w-none">
            {loc.intro.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div>
            <div className="relative h-72 overflow-hidden rounded-2xl shadow-md">
              <Image
                src={loc.image.src}
                alt={loc.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            {/* Neighbourhoods served */}
            <div className="mt-6 rounded-2xl bg-light-green p-6">
              <h2 className="font-serif text-xl font-semibold text-dark">
                Neighbourhoods We Serve in {loc.city}
              </h2>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-dark/80">
                {loc.neighbourhoods.map((n) => (
                  <li key={n} className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 flex-shrink-0 text-secondary" aria-hidden />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services offered in this city */}
      <section className="bg-light-gray py-12 md:py-20">
        <div className="mx-auto max-w-content px-4">
          <h2 className="font-serif text-3xl font-semibold text-dark md:text-4xl">
            Our Landscaping Services in {loc.city}
          </h2>
          <p className="mt-3 max-w-2xl text-dark/70">
            Every one of our services is available throughout {loc.city} and the
            surrounding area. Tap any service to learn more.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-2xl bg-light-green text-primary group-hover:bg-secondary group-hover:text-white">
                  <Icon name={s.icon} className="h-5 w-5" aria-hidden />
                </span>
                <span className="font-semibold text-dark group-hover:text-primary">
                  {s.name}
                </span>
                <ArrowRight
                  className="ml-auto h-4 w-4 text-primary transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why locals choose us — quick reassurance band */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-content px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-dark/80">
            {["Free Estimates", "Locally Owned", "Reliable & On Time", "Satisfaction Focused"].map(
              (item) => (
                <span key={item} className="inline-flex items-center gap-2 font-medium">
                  <Check className="h-5 w-5 text-secondary" aria-hidden />
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Location FAQ */}
      <FAQ
        items={loc.faqs}
        title={`Landscaping in ${loc.city} — FAQs`}
      />

      {/* Nearby areas */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-content px-4 text-center">
          <h2 className="font-serif text-2xl font-semibold text-dark md:text-3xl">
            Nearby Areas We Also Serve
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {loc.nearby.map((city) => {
              const match = locations.find((l) => l.city === city);
              return match ? (
                <Link key={city} href={`/locations/${match.slug}`}>
                  <LocationBadge city={city} />
                </Link>
              ) : (
                <LocationBadge key={city} city={city} />
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner
        headline={`Ready for a Free Estimate in ${loc.city}?`}
        sub="Call today and we'll help your outdoor space look its best."
      />
    </>
  );
}
