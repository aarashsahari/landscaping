import { Check } from "lucide-react";

const items = [
  "Free Estimates",
  "Locally Owned",
  "Reliable & Professional",
  "Proudly Serving the GTA West",
];

export default function TrustBar() {
  return (
    <section className="bg-primary text-white">
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-5 text-sm font-semibold sm:text-base">
        {items.map((item) => (
          <span key={item} className="inline-flex items-center gap-2">
            <Check className="h-5 w-5 text-amber" aria-hidden />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
