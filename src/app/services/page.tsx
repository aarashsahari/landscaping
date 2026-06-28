import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/sections/CTABanner";
import { buildMetadata } from "@/lib/metadata";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Landscaping Services in Burlington, Hamilton & Oakville",
  description:
    "Explore our landscaping services in Burlington, Hamilton & Oakville — lawn mowing, cleanups, mulch & more. Free Estimates: call 647-407-1409.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
        title="Landscaping Services in Burlington, Hamilton & Oakville"
        intro="From regular lawn mowing and weed removal to hedge trimming, mulch installation, and full seasonal cleanups, Nolasco Landscaping offers everything your property needs to look its best. We bring friendly, professional, and reliable landscaping to homeowners across the GTA West and Golden Horseshoe — always with free, no-obligation estimates."
      >
        <Button href={site.phoneHref} variant="primary" size="md">
          <Phone className="h-5 w-5" aria-hidden />
          Call {site.phone} for a Free Estimate
        </Button>
      </PageHeader>

      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-content space-y-6 px-4">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex flex-col gap-4 rounded-2xl border-2 border-transparent bg-light-gray p-6 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:border-secondary hover:shadow-lg sm:flex-row sm:items-center"
            >
              <span className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-2xl bg-light-green text-primary transition-colors group-hover:bg-secondary group-hover:text-white">
                <Icon name={s.icon} className="h-7 w-7" aria-hidden />
              </span>
              <div className="flex-1">
                <h2 className="font-serif text-2xl font-semibold text-dark">
                  {s.name}
                </h2>
                <p className="mt-1 leading-relaxed text-dark/70">
                  {s.intro[0]}
                </p>
              </div>
              <span className="inline-flex items-center gap-1 self-start font-semibold text-primary group-hover:text-secondary sm:self-center">
                Learn More
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
