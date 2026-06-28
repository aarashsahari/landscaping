import { Phone } from "lucide-react";
import { site } from "@/lib/site";

// Sticky bottom call-to-call bar for service pages (mobile only).
export default function StickyMobileCTA() {
  return (
    <a
      href={site.phoneHref}
      className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-2 bg-primary px-4 py-3 text-center font-bold text-white shadow-[0_-4px_12px_rgba(0,0,0,0.15)] lg:hidden"
    >
      <Phone className="h-5 w-5" aria-hidden />
      Call for a Free Estimate · {site.phone}
    </a>
  );
}
