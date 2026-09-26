import {
  Activity,
  Building2,
  Coins,
  Eye,
  Globe2,
  Headset,
  Heart,
  Layers,
  ListTree,
  Monitor,
  Network,
  Radar,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Waves,
  Zap,
  type LucideIcon,
} from "lucide-react";

const icons = {
  activity: Activity,
  building: Building2,
  coins: Coins,
  eye: Eye,
  globe: Globe2,
  headset: Headset,
  heart: Heart,
  layers: Layers,
  listTree: ListTree,
  monitor: Monitor,
  network: Network,
  radar: Radar,
  rocket: Rocket,
  shield: ShieldCheck,
  sparkles: Sparkles,
  users: Users,
  waves: Waves,
  zap: Zap,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const Component = icons[name];
  return <Component className={className} aria-hidden="true" strokeWidth={1.75} />;
}
