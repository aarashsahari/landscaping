import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "amber";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-2xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-secondary shadow-md hover:shadow-lg",
  secondary:
    "bg-secondary text-white hover:bg-primary shadow-md hover:shadow-lg",
  ghost:
    "bg-white/90 text-primary border-2 border-primary hover:bg-primary hover:text-white",
  amber: "bg-amber text-dark hover:brightness-105 shadow-md hover:shadow-lg",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  href,
  external,
  children,
}: ButtonAsLink) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  // tel:, mailto:, and explicit external links use a plain anchor.
  if (external || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
