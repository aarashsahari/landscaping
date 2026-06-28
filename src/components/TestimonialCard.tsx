import Stars from "./ui/Stars";

export default function TestimonialCard({
  name,
  location,
  stars,
  text,
}: {
  name: string;
  location: string;
  stars: number;
  text: string;
}) {
  return (
    <figure className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-md">
      <Stars count={stars} />
      <blockquote className="mt-4 flex-1 leading-relaxed text-dark/80">
        “{text}”
      </blockquote>
      <figcaption className="mt-5 border-t border-light-green pt-4">
        <p className="font-semibold text-dark">{name}</p>
        <p className="text-sm text-dark/60">{location}</p>
      </figcaption>
    </figure>
  );
}
