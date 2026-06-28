import { Sprout, MapPin, MessageCircle } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const reasons = [
  {
    icon: Sprout,
    title: "Friendly & Professional",
    text: "We treat every property like our own — showing up on time, doing thorough work, and leaving your yard looking its best.",
  },
  {
    icon: MapPin,
    title: "Local Experts",
    text: "Based right here in the area, we know Ontario seasons, soils, and what GTA West lawns and gardens need to thrive.",
  },
  {
    icon: MessageCircle,
    title: "Free Estimates",
    text: "No pressure and no obligation. Call us for an honest quote and friendly advice on getting your outdoor space in shape.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-light-green py-12 md:py-20">
      <div className="mx-auto max-w-content px-4">
        <SectionHeader title="Why Burlington & Hamilton Homeowners Choose Nolasco" />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="text-center">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-white text-primary shadow-md">
                <r.icon className="h-8 w-8" aria-hidden />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold text-dark">
                {r.title}
              </h3>
              <p className="mt-2 leading-relaxed text-dark/70">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
