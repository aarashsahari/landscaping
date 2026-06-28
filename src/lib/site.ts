// Central business configuration for Nolasco Landscaping.
// Single source of truth used across metadata, JSON-LD, and UI.

export const site = {
  name: "Nolasco Landscaping",
  tagline: "Making Your Outdoor Space Look Its Best",
  phone: "647-407-1409",
  // tel: links must be digits only
  phoneHref: "tel:6474071409",
  // TODO: Replace with real email address
  email: "info@nolascolandscaping.com",
  // Used for canonical URLs, sitemap, and Open Graph. Update at launch.
  url: "https://www.nolascolandscaping.com",
  priceRange: "$$",
  openingHours: "Mo-Sa 07:00-18:00",
  hoursDisplay: "Monday – Saturday, 7:00 AM – 6:00 PM",
  rating: {
    value: 4.9,
    count: 94,
  },
  description:
    "Professional landscaping services in Burlington, Hamilton, and Oakville. Lawn mowing, yard cleanups, hedge trimming, weed removal, mulch installation, and seasonal cleanups.",
  // Full list of service areas (areaServed)
  serviceAreas: [
    "Burlington",
    "Hamilton",
    "Oakville",
    "Mississauga",
    "Stoney Creek",
    "Grimsby",
    "Ancaster",
    "Dundas",
    "Waterdown",
    "Milton",
  ],
  // Primary markets get dedicated location pages
  primaryMarkets: ["Burlington", "Hamilton", "Oakville"],
  social: {
    // TODO: Replace with real social profile URLs
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
} as const;

export type Site = typeof site;
