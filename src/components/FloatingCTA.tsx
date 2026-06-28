import Link from "next/link";
import { ClipboardList } from "lucide-react";

// Floating green "Free Estimate" button, bottom-right on mobile, with a
// pulsing dot to draw the eye. Hidden on desktop where the header CTA is visible.
export default function FloatingCTA() {
  return (
    <Link
      href="/contact"
      aria-label="Get a free estimate"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-2xl bg-secondary px-5 py-3 font-bold text-white shadow-lg transition-transform hover:scale-105 lg:hidden"
    >
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full rounded-full bg-amber animate-pulse-ring" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-amber" />
      </span>
      <ClipboardList className="h-5 w-5" aria-hidden />
      Free Estimate
    </Link>
  );
}
