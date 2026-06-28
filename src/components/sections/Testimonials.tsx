import SectionHeader from "../ui/SectionHeader";
import TestimonialCard from "../TestimonialCard";
import { testimonials } from "@/lib/testimonials";
import { site } from "@/lib/site";

export default function Testimonials() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-content px-4">
        <SectionHeader
          title="What Our Customers Are Saying"
          subtitle={`Rated ${site.rating.value} out of 5 stars across ${site.rating.count} reviews from happy homeowners in Burlington, Hamilton, and Oakville.`}
        />
        {/* TODO: Replace with real Google reviews once available */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
