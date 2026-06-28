import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTABanner from "@/components/sections/CTABanner";
import { buildMetadata } from "@/lib/metadata";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = buildMetadata({
  title: "Landscaping Tips & Local Lawn Care Advice",
  description:
    "Seasonal lawn care tips and landscaping advice for Burlington, Hamilton & Oakville homeowners. Free Estimates from Nolasco Landscaping: 647-407-1409.",
  path: "/blog",
});

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
        title="Landscaping Tips & Local Lawn Care Advice"
        intro="Practical, seasonal advice to help Burlington, Hamilton, and Oakville homeowners keep their lawns and gardens looking their best all year round."
      />

      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto grid max-w-content gap-8 px-4 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-2xl bg-light-gray shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <Link href={`/blog/${post.slug}`} className="relative block h-52">
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <p className="flex items-center gap-2 text-xs text-dark/50">
                  <Calendar className="h-3.5 w-3.5" aria-hidden />
                  {formatDate(post.date)} · {post.readingTime}
                </p>
                <h2 className="mt-2 font-serif text-xl font-semibold leading-snug text-dark">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-dark/70">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-secondary"
                >
                  Read More
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
