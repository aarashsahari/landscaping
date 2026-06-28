import Image from "next/image";
import { Phone, MapPin, Star } from "lucide-react";
import Button from "../ui/Button";
import { site } from "@/lib/site";

// Home hero. The background image is the LCP element — priority + preload.
export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1920&q=70"
        alt="Lush, professionally maintained green lawn and garden at an Ontario home"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Dark gradient overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/30" />

      <div className="relative mx-auto w-full max-w-content px-4 py-28">
        <div className="max-w-2xl text-white animate-fade-up">
          {/* Social proof above the fold */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 text-amber" fill="#E9C46A" aria-hidden />
              ))}
            </span>
            <span>
              {site.rating.value} stars · {site.rating.count} happy customers
            </span>
          </div>

          <h1 className="font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Professional Landscaping Services in Burlington, Hamilton &amp; Oakville
          </h1>

          <p className="mt-5 text-lg text-white/90 md:text-xl">
            Making your outdoor space look its best —{" "}
            <span className="font-semibold text-amber">Free Estimates Available</span>
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={site.phoneHref} variant="amber" size="lg">
              <Phone className="h-5 w-5" aria-hidden />
              Call {site.phone}
            </Button>
            <Button href="/contact" variant="ghost" size="lg">
              Get a Free Estimate
            </Button>
          </div>

          <p className="mt-6 flex items-center gap-2 text-sm text-white/80">
            <MapPin className="h-4 w-4 text-secondary" aria-hidden />
            Serving Burlington · Hamilton · Oakville · and surrounding areas
          </p>
        </div>
      </div>
    </section>
  );
}
