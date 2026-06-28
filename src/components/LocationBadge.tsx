import { MapPin } from "lucide-react";

// Service-area tag used in the ServiceAreas grid / tag-cloud.
export default function LocationBadge({ city }: { city: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-2xl border border-secondary/30 bg-white px-4 py-2 text-sm font-medium text-dark shadow-sm transition-colors hover:border-secondary hover:bg-light-green">
      <MapPin className="h-4 w-4 text-secondary" aria-hidden />
      {city}
    </span>
  );
}
