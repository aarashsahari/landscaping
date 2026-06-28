"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import JsonLd from "../JsonLd";
import { faqSchema } from "@/lib/jsonld";
import type { Faq } from "@/lib/faqs";

function AccordionItem({
  faq,
  open,
  onToggle,
}: {
  faq: Faq;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-light-green bg-white shadow-sm">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-serif text-lg font-semibold text-dark">
          {faq.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-primary transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden
        />
      </button>
      <div
        className={`grid transition-all duration-200 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 leading-relaxed text-dark/75">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ({
  items,
  title = "Frequently Asked Questions",
  subtitle,
  includeSchema = true,
}: {
  items: Faq[];
  title?: string;
  subtitle?: string;
  includeSchema?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-light-gray py-12 md:py-20">
      {includeSchema && <JsonLd data={faqSchema(items)} />}
      <div className="mx-auto max-w-content px-4">
        <SectionHeader title={title} subtitle={subtitle} />
        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {items.map((faq, i) => (
            <AccordionItem
              key={faq.question}
              faq={faq}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
