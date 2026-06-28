import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd from "./JsonLd";
import { breadcrumbSchema, type Crumb } from "@/lib/jsonld";

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <JsonLd data={breadcrumbSchema(items)} />
      <ol className="flex flex-wrap items-center gap-1 text-dark/60">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1">
              {last ? (
                <span className="font-medium text-dark/80" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-primary">
                  {item.name}
                </Link>
              )}
              {!last && (
                <ChevronRight className="h-4 w-4 text-dark/30" aria-hidden />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
