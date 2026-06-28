import type { Metadata } from "next";
import { site } from "./site";

const DEFAULT_OG_IMAGE =
  "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=70";

type BuildMetadataArgs = {
  title: string;
  description: string;
  // Absolute path beginning with "/", e.g. "/services/lawn-mowing"
  path: string;
  ogImage?: string;
};

// Shared metadata builder — guarantees unique title, description, canonical,
// Open Graph, and Twitter Card tags on every page.
export function buildMetadata({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
}: BuildMetadataArgs): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_CA",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${site.name} — ${site.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
