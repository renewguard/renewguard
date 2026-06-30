import { cn } from '@/lib/utils';
import type { Urgency } from '@/types';

const STYLES: Record<Urgency, string> = {
  safe: 'bg-safe-bg text-safe dark:bg-safe/15 dark:text-emerald-300',
  warn: 'bg-warn-bg text-warn dark:bg-warn/15 dark:text-amber-300',
  danger: 'bg-danger-bg text-danger dark:bg-danger/15 dark:text-red-300',
};

const DOT_STYLES: Record<Urgency, string> = {
  safe: 'bg-safe',
  warn: 'bg-warn',
  danger: 'bg-danger',
};

interface CountdownPillProps {
  daysLeft: number;
  urgency: Urgency;
  pulse?: boolean;
  className?: string;
}

/**
 * The "always-counting" pill: this is LapseGuard's visual signature.
 * Every tracked item, everywhere on the site, is shown ticking down to
 * its renewal date with an urgency-coded color so risk is legible at a glance.
 */
export function CountdownPill({ daysLeft, urgency, pulse, className }: CountdownPillProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-tabular text-xs font-semibold',
        STYLES[urgency],
        className
      )}
    >
      <span className="relative flex h-1.5 w-1.5">
        {pulse && (
          <span className={cn('absolute inline-flex h-full w-full animate-pulse-ring rounded-full', DOT_STYLES[urgency])} />
        )}
        <span className={cn('relative inline-flex h-1.5 w-1.5 rounded-full', DOT_STYLES[urgency])} />
      </span>
      {daysLeft <= 0 ? 'Overdue' : `${daysLeft}d left`}
    </span>
  );
}
