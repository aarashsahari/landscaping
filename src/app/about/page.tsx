import type { Metadata } from "next";
import Image from "next/image";
import { Award, ShieldCheck, Users, Sparkles } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTABanner from "@/components/sections/CTABanner";
import LocationBadge from "@/components/LocationBadge";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About Nolasco Landscaping — Burlington's Trusted Lawn Care Team",
  description:
    "Meet Nolasco Landscaping — friendly, reliable lawn care & landscaping serving Burlington, Hamilton & Oakville. Free Estimates: call 647-407-1409.",
  path: "/about",
});

const promise = [
  {
    icon: Award,
    title: "Professional",
    text: "Skilled, courteous, and detail-oriented on every visit — we take pride in work that looks great and lasts.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable",
    text: "We show up when we say we will and do exactly what we promised. Dependability is the heart of our service.",
  },
  {
    icon: Sparkles,
    title: "High-Quality",
    text: "From a single lawn cut to a full property refresh, we hold every job to a standard we'd want for our own home.",
  },
];

const values = [
  {
    icon: Sparkles,
    title: "Craftsmanship",
    text: "Great landscaping is in the details — clean edges, even cuts, tidy beds, and a thorough cleanup every time. We treat each property as a reflection of our work and never cut corners. The result is an outdoor space that genuinely looks its best.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    text: "Homeowners and property managers across the GTA West count on us to show up and follow through, season after season. We keep our schedule, communicate clearly, and make ongoing care effortless so you never have to chase us down or wonder when we'll arrive.",
  },
  {
    icon: Users,
    title: "Community",
    text: "We're locals serving our neighbours. We know Burlington, Hamilton, and Oakville, we understand Ontario's seasons, and we care about the communities we work in. When you hire us, you're supporting a local team that's genuinely invested in your property and your street looking great.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
        title="About Nolasco Landscaping — Burlington's Trusted Lawn Care Team"
        intro="We're a friendly, locally rooted landscaping team on a simple mission: making your outdoor space look its best."
      />

      {/* Story */}
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto grid max-w-content items-center gap-10 px-4 lg:grid-cols-2">
          <div className="prose-copy max-w-none">
            <p>
              Nolasco Landscaping was built on a love for great-looking yards and a
              belief that homeowners deserve a landscaper they can actually count on.
              What started as a passion for helping neighbours keep their properties
              tidy has grown into a trusted local service across Burlington, Hamilton,
              Oakville, and the surrounding communities of the Golden Horseshoe.
            </p>
            <p>
              We&apos;re proud to be the kind of company you&apos;d happily recommend
              to a friend — the team that shows up on time, does a thorough job, and
              leaves your property looking better than ever. Whether it&apos;s a weekly
              lawn mow, a big spring cleanup, or ongoing property maintenance, we bring
              the same friendly, professional approach to every visit.
            </p>
            <p>
              Most of all, we treat every property like our own. That&apos;s what keeps
              our customers coming back, season after season, and it&apos;s the
              foundation of everything we do.
            </p>
          </div>
          <div className="relative h-80 overflow-hidden rounded-2xl shadow-lg lg:h-[26rem]">
            <Image
              src="https://images.unsplash.com/photo-1599629954294-14df9ec8bc05?auto=format&fit=crop&w=1000&q=70"
              alt="Friendly local landscaping team caring for a healthy green lawn in Ontario"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="bg-light-green py-12 md:py-20">
        <div className="mx-auto max-w-content px-4">
          <h2 className="text-center font-serif text-3xl font-semibold text-dark md:text-4xl">
            Our Promise
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-dark/70">
            Three words guide every job we take on.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {promise.map((p) => (
              <div key={p.title} className="rounded-2xl bg-white p-8 text-center shadow-md">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-light-green text-primary">
                  <p.icon className="h-8 w-8" aria-hidden />
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold text-dark">
                  {p.title}
                </h3>
                <p className="mt-2 leading-relaxed text-dark/70">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-content px-4">
          <h2 className="text-center font-serif text-3xl font-semibold text-dark md:text-4xl">
            What We Stand For
          </h2>
          <div className="mt-12 space-y-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex flex-col gap-4 rounded-2xl bg-light-gray p-6 shadow-sm sm:flex-row sm:items-start"
              >
                <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl bg-primary text-white">
                  <v.icon className="h-6 w-6" aria-hidden />
                </span>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-dark">
                    {v.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-dark/75">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serving your community */}
      <section className="bg-light-gray py-12 md:py-20">
        <div className="mx-auto max-w-content px-4 text-center">
          <h2 className="font-serif text-3xl font-semibold text-dark md:text-4xl">
            Serving Your Community
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-dark/70">
            We proudly provide landscaping services across the GTA West and Golden
            Horseshoe, including:
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {site.serviceAreas.map((city) => (
              <LocationBadge key={city} city={city} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
