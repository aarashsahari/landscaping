import type { ReactNode } from "react";
import Breadcrumb from "./Breadcrumb";
import type { Crumb } from "@/lib/jsonld";

// Compact header band for inner pages: breadcrumb + H1 + optional intro.
// Sits below the fixed navbar (note the top padding).
export default function PageHeader({
  crumbs,
  title,
  intro,
  children,
}: {
  crumbs: Crumb[];
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="bg-light-green pb-12 pt-28 md:pb-16 md:pt-32">
      <div className="mx-auto max-w-content px-4">
        <Breadcrumb items={crumbs} />
        <h1 className="mt-4 max-w-4xl font-serif text-4xl font-bold leading-tight text-dark md:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-dark/75">
            {intro}
          </p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
