import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import AboutSnapshot from "@/components/sections/AboutSnapshot";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import ServiceAreas from "@/components/sections/ServiceAreas";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";
import { buildMetadata } from "@/lib/metadata";
import { homeFaqs } from "@/lib/faqs";

export const metadata: Metadata = buildMetadata({
  title:
    "Landscaping in Burlington, Hamilton & Oakville | Nolasco Landscaping",
  description:
    "Professional landscaping in Burlington, Hamilton & Oakville. Lawn care, cleanups & more. Free Estimates — call Nolasco Landscaping at 647-407-1409.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <AboutSnapshot />
      <WhyChooseUs />
      <Testimonials />
      <ServiceAreas />
      <FAQ
        items={homeFaqs}
        subtitle="Answers to the questions we hear most from homeowners across Burlington, Hamilton, and Oakville."
      />
      <CTABanner />
    </>
  );
}
