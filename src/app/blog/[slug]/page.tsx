import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTABanner from "@/components/sections/CTABanner";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { blogPosts, getBlogPost, type BlogBlock } from "@/lib/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    ogImage: post.image.src,
  });
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-10 font-serif text-2xl font-semibold text-dark md:text-3xl">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-8 font-serif text-xl font-semibold text-dark">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul className="mt-4 space-y-2">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-dark/80">
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "cta":
      return (
        <div className="my-6 flex flex-col gap-3 rounded-2xl border border-light-green bg-light-green/50 p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium text-dark">{block.text}</p>
          <Link
            href={block.href}
            className="inline-flex items-center gap-1 whitespace-nowrap font-semibold text-primary hover:text-secondary"
          >
            {block.label}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      );
    default:
      return <p className="mt-5 text-lg leading-relaxed text-dark/80">{block.text}</p>;
  }
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: post.image.src,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={articleSchema} />

      <PageHeader
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
        title={post.title}
      >
        <p className="flex items-center gap-2 text-sm text-dark/60">
          <Calendar className="h-4 w-4" aria-hidden />
          {formatDate(post.date)} · {post.readingTime}
        </p>
      </PageHeader>

      <article className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="relative mb-8 h-72 overflow-hidden rounded-2xl shadow-md md:h-96">
            <Image
              src={post.image.src}
              alt={post.image.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          {post.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}

          <div className="mt-12 border-t border-light-green pt-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 font-semibold text-primary hover:text-secondary"
            >
              <ArrowRight className="h-4 w-4 rotate-180" aria-hidden />
              Back to all articles
            </Link>
          </div>
        </div>
      </article>

      <CTABanner />
    </>
  );
}
