import { Star } from "lucide-react";

export default function Stars({
  count = 5,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-0.5 ${className}`}
      aria-label={`${count} out of 5 stars`}
      role="img"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-5 w-5 text-amber"
          fill={i < count ? "#E9C46A" : "none"}
          aria-hidden
        />
      ))}
    </div>
  );
}
