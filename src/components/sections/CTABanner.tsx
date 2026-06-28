import { Phone } from "lucide-react";
import Button from "../ui/Button";
import { site } from "@/lib/site";

export default function CTABanner({
  headline = "Ready to Transform Your Outdoor Space?",
  sub = "Call us today for a free, no-obligation estimate.",
  buttonText = `Call ${site.phone}`,
}: {
  headline?: string;
  sub?: string;
  buttonText?: string;
}) {
  return (
    <section className="bg-primary py-14 md:py-20">
      <div className="mx-auto max-w-content px-4 text-center text-white">
        <h2 className="font-serif text-3xl font-semibold md:text-4xl">{headline}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">{sub}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={site.phoneHref} variant="amber" size="lg">
            <Phone className="h-5 w-5" aria-hidden />
            {buttonText}
          </Button>
          <Button href="/contact" variant="ghost" size="lg" className="!bg-white">
            Get a Free Estimate
          </Button>
        </div>
      </div>
    </section>
  );
}
