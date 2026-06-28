import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/jsonld";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Nolasco Landscaping | Burlington, Hamilton & Oakville Lawn Care",
    template: "%s | Nolasco Landscaping",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  // robots/sitemap handled by robots.ts and sitemap.ts
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: site.name,
    url: site.url,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA" className={`${inter.variable} ${lora.variable}`}>
      <head>
        {/* Preload the LCP hero image for faster first paint */}
        <link
          rel="preload"
          as="image"
          href="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1920&q=70"
          fetchPriority="high"
        />
      </head>
      <body className="font-sans">
        {/* Site-wide LocalBusiness structured data */}
        <JsonLd data={localBusinessSchema()} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
