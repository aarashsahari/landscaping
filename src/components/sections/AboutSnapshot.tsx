import Image from "next/image";
import { Wrench, MapPin, Heart } from "lucide-react";
import Button from "../ui/Button";

const stats = [
  { icon: Wrench, label: "7 Services Offered" },
  { icon: MapPin, label: "3 Cities Covered" },
  { icon: Heart, label: "100% Satisfaction Focus" },
];

export default function AboutSnapshot() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto grid max-w-content items-center gap-10 px-4 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl font-semibold text-dark md:text-4xl">
            Your Trusted Local Landscapers
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-dark/75">
            At Nolasco Landscaping, we take pride in delivering professional,
            reliable, and high-quality landscaping services. Whether your property
            needs lawn maintenance, yard cleanup, hedge trimming, weed removal, or a
            complete refresh, we are committed to making your outdoor space look its
            best. Proudly serving Burlington, Hamilton, Oakville, and surrounding
            communities.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-light-green p-4 text-center"
              >
                <s.icon className="mx-auto h-7 w-7 text-primary" aria-hidden />
                <p className="mt-2 text-sm font-semibold text-dark">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button href="/about" variant="primary">
              Learn More About Us
            </Button>
          </div>
        </div>

        <div className="relative h-80 overflow-hidden rounded-2xl shadow-lg lg:h-[28rem]">
          <Image
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=70"
            alt="Trusted local landscaper maintaining a healthy green lawn and garden beds"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
