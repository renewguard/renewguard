import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium',
  {
    variants: {
      variant: {
        neutral: 'bg-ink-100 text-ink-700 dark:bg-ink-800 dark:text-ink-200',
        brand: 'bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300',
        safe: 'bg-safe-bg text-safe dark:bg-safe/15 dark:text-emerald-300',
        warn: 'bg-warn-bg text-warn dark:bg-warn/15 dark:text-amber-300',
        danger: 'bg-danger-bg text-danger dark:bg-danger/15 dark:text-red-300',
        glass: 'glass glass-border text-ink-700 dark:text-ink-100',
      },
    },
    defaultVariants: { variant: 'neutral' },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };
