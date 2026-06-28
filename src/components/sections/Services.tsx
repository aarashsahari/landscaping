import SectionHeader from "../ui/SectionHeader";
import ServiceCard from "../ServiceCard";
import { services } from "@/lib/services";

export default function Services() {
  return (
    <section className="bg-light-gray py-12 md:py-20">
      <div className="mx-auto max-w-content px-4">
        <SectionHeader
          title="Our Landscaping Services"
          subtitle="From a quick lawn mow to full-season property maintenance, we offer everything your Burlington, Hamilton, or Oakville property needs to look its best."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard
              key={s.slug}
              icon={s.icon}
              title={s.name}
              description={s.shortDescription}
              href={`/services/${s.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
