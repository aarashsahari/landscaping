import Link from "next/link";
import SectionHeader from "../ui/SectionHeader";
import LocationBadge from "../LocationBadge";
import { site } from "@/lib/site";
import { locations } from "@/lib/locations";

const primarySlugs: Record<string, string> = Object.fromEntries(
  locations.map((l) => [l.city, l.slug])
);

export default function ServiceAreas() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-content px-4">
        <SectionHeader
          title="Landscaping Services Near You"
          subtitle="We proudly serve homeowners and property managers across Burlington, Hamilton, Oakville, Mississauga, Stoney Creek, Grimsby, Ancaster, Dundas, Waterdown, and Milton."
        />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {site.serviceAreas.map((city) =>
            primarySlugs[city] ? (
              <Link key={city} href={`/locations/${primarySlugs[city]}`}>
                <LocationBadge city={city} />
              </Link>
            ) : (
              <LocationBadge key={city} city={city} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
