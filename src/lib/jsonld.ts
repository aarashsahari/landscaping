// Schema.org JSON-LD builders. Rendered via the <JsonLd> component.

import { site } from "./site";
import type { Faq } from "./faqs";

export function localBusinessSchema(areaServed: string[] = [...site.serviceAreas]) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    description: site.description,
    telephone: site.phone,
    url: site.url,
    priceRange: site.priceRange,
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=70",
    areaServed: areaServed.map((name) => ({
      "@type": "City",
      name,
    })),
    address: {
      "@type": "PostalAddress",
      // TODO: Replace with real business address if applicable
      addressRegion: "ON",
      addressCountry: "CA",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "07:00",
      closes: "18:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
  };
}

export function serviceSchema(args: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: args.name,
    description: args.description,
    serviceType: args.name,
    url: `${site.url}${args.path}`,
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
      telephone: site.phone,
    },
    areaServed: site.serviceAreas.map((name) => ({
      "@type": "City",
      name,
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${site.url}${c.path}`,
    })),
  };
}
