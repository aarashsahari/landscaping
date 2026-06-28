import type { ReactNode } from "react";

export default function Card({
  children,
  className = "",
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl bg-white p-6 shadow-md ${
        hover
          ? "border-2 border-transparent transition-all duration-200 hover:-translate-y-1 hover:border-secondary hover:shadow-lg"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
