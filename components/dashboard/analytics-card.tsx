import { ArrowUpRight, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnalyticsCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  delta?: string;
  points?: number[];
}

export function AnalyticsCard({ icon: Icon, label, value, delta, points = [4, 7, 5, 9, 8, 12, 11] }: AnalyticsCardProps) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const w = 100;
  const h = 28;
  const path = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * w;
      const y = h - ((p - min) / (max - min || 1)) * h;
      return `${i === 0 ? 'M' : 'L'}${x},${y}`;
    })
    .join(' ');

  return (
    <div className="rounded-xl border border-ink-100 bg-white p-4 dark:border-ink-800 dark:bg-surface-dark-raised">
      <div className="flex items-center justify-between">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink-50 text-ink-500 dark:bg-ink-800 dark:text-ink-300">
          <Icon className="h-4 w-4" />
        </span>
        {delta && (
          <span className="flex items-center gap-0.5 text-[11px] font-semibold text-safe">
            <ArrowUpRight className="h-3 w-3" /> {delta}
          </span>
        )}
      </div>
      <p className="mt-3 font-display font-tabular text-xl font-bold text-ink-900 dark:text-white">{value}</p>
      <p className="text-xs text-ink-400">{label}</p>
      <svg viewBox={`0 0 ${w} ${h}`} className="mt-2 h-7 w-full text-brand-500" preserveAspectRatio="none">
        <path d={path} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
