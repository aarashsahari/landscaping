import type { ReactNode } from "react";

type Tone = "light" | "amber" | "white";

const tones: Record<Tone, string> = {
  light: "bg-light-green text-primary",
  amber: "bg-amber/20 text-earth-brown",
  white: "bg-white/15 text-white backdrop-blur-sm",
};

export default function Badge({
  children,
  tone = "light",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
