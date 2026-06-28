import {
  Scissors,
  Trash2,
  Sprout,
  TreePine,
  Layers,
  ClipboardCheck,
  Leaf,
  type LucideProps,
} from "lucide-react";

// Maps the string icon names stored in lib/services.ts to Lucide components.
const icons = {
  Scissors,
  Trash2,
  Sprout,
  TreePine,
  Layers,
  ClipboardCheck,
  Leaf,
} as const;

export type IconName = keyof typeof icons;

export default function Icon({
  name,
  ...props
}: { name: string } & LucideProps) {
  const Cmp = icons[name as IconName] ?? Leaf;
  return <Cmp {...props} />;
}
