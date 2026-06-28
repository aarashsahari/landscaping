import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Check, Phone, ArrowRight, CalendarCheck, Truck, Smile } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema } from "@/lib/jsonld";
import { services, getService, getRelatedServices } from "@/lib/services";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.name} in Burlington, Hamilton & Oakville`,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    ogImage: service.images[0]?.src,
  });
}

const steps = [
  {
    icon: CalendarCheck,
    title: "Book",
    text: "Call us at 647-407-1409 or request a free estimate online. We'll confirm the details and schedule a time that works for you.",
  },
  {
    icon: Truck,
    title: "We Come To You",
    text: "Our friendly, professional crew arrives on time with all the equipment needed to do a thorough, high-quality job.",
  },
  {
    icon: Smile,
    title: "Enjoy the Results",
    text: "We leave your property looking its best and tidy up completely — so all you have to do is enjoy your outdoor space.",
  },
];

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getService(params.slug);
  if (!service) notFound();

  const related = getRelatedServices(service.slug, 3);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: service.name,
          description: service.metaDescription,
          path: `/services/${service.slug}`,
        })}
      />

      <PageHeader
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ]}
        title={`${service.name} in Burlington, Hamilton & Oakville`}
        intro={service.shortDescription}
      >
        <Button href={site.phoneHref} variant="primary" size="md">
          <Phone className="h-5 w-5" aria-hidden />
          Free Estimate · {site.phone}
        </Button>
      </PageHeader>

      {/* Intro copy + lead image */}
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto grid max-w-content gap-10 px-4 lg:grid-cols-[1.4fr_1fr]">
          <div className="prose-copy max-w-none">
            {service.intro.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="space-y-6">
            {service.images.map((img) => (
              <div
                key={img.src}
                className="relative h-64 overflow-hidden rounded-2xl shadow-md"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
            {/* TODO: Add real photos here — suggested Unsplash search: "lawn care ontario" */}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-light-gray py-12 md:py-20">
        <div className="mx-auto max-w-content px-4">
          <h2 className="font-serif text-3xl font-semibold text-dark md:text-4xl">
            What&apos;s Included
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {service.whatsIncluded.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm"
              >
                <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-secondary text-white">
                  <Check className="h-4 w-4" aria-hidden />
                </span>
                <span className="text-dark/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-content px-4">
          <h2 className="text-center font-serif text-3xl font-semibold text-dark md:text-4xl">
            How It Works
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title} className="relative text-center">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary text-white shadow-md">
                  <step.icon className="h-8 w-8" aria-hidden />
                </span>
                <p className="mt-4 text-sm font-bold uppercase tracking-wide text-secondary">
                  Step {i + 1}
                </p>
                <h3 className="mt-1 font-serif text-xl font-semibold text-dark">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-dark/70">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service-specific FAQ */}
      <FAQ
        items={service.faqs}
        title={`${service.name} — Frequently Asked Questions`}
      />

      {/* Also popular — internal links */}
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-content px-4">
          <h2 className="font-serif text-3xl font-semibold text-dark md:text-4xl">
            Also Popular
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/services/${r.slug}`}
                className="group flex flex-col rounded-2xl border-2 border-transparent bg-light-gray p-6 shadow-md transition-all hover:-translate-y-1 hover:border-secondary hover:shadow-lg"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-light-green text-primary group-hover:bg-secondary group-hover:text-white">
                  <Icon name={r.icon} className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-3 font-serif text-lg font-semibold text-dark">
                  {r.name}
                </h3>
                <p className="mt-1 flex-1 text-sm text-dark/70">
                  {r.shortDescription}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-secondary">
                  Learn More
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline={`Get Your Free ${service.name} Estimate Today`}
        sub="Friendly, reliable, and professional service across Burlington, Hamilton & Oakville."
      />

      <StickyMobileCTA />
    </>
  );
}
