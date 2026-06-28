import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Icon from "./ui/Icon";

export default function ServiceCard({
  icon,
  title,
  description,
  href,
}: {
  icon: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border-2 border-transparent bg-white p-6 shadow-md transition-all duration-200 hover:-translate-y-1 hover:border-secondary hover:shadow-lg"
    >
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-light-green text-primary transition-colors group-hover:bg-secondary group-hover:text-white">
        <Icon name={icon} className="h-6 w-6" aria-hidden />
      </span>
      <h3 className="mt-4 font-serif text-xl font-semibold text-dark">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-dark/70">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-secondary">
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
      </span>
    </Link>
  );
}
