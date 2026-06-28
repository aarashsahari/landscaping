import Link from "next/link";
import { Leaf } from "lucide-react";
import Button from "@/components/ui/Button";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-light-green px-4 py-28 text-center">
      <div>
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary text-white">
          <Leaf className="h-8 w-8" aria-hidden />
        </span>
        <h1 className="mt-6 font-serif text-4xl font-bold text-dark">
          Page Not Found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-dark/70">
          Sorry, we couldn&apos;t find that page. Let&apos;s get you back to
          something useful — or give us a call for a free estimate.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" variant="primary">
            Back to Home
          </Button>
          <Button href={site.phoneHref} variant="amber">
            Call {site.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
