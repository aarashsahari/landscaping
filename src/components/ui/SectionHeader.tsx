import type { ReactNode } from "react";

export default function SectionHeader({
  title,
  subtitle,
  align = "center",
  as: Tag = "h2",
  className = "",
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      <Tag
        className={`font-serif font-semibold text-dark ${
          Tag === "h1" ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"
        }`}
      >
        {title}
      </Tag>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-dark/70">{subtitle}</p>
      )}
    </div>
  );
}
