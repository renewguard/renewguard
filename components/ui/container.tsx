import * as React from 'react';
import { cn } from '@/lib/utils';

export function Container({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('container', className)} {...props} />;
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

/**
 * Consistent heading block used at the top of every marketing section:
 * small uppercase eyebrow -> display title -> muted supporting copy.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mx-auto max-w-2xl',
        align === 'center' ? 'text-center' : 'text-left ml-0',
        className
      )}
    >
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-balance text-base leading-relaxed text-ink-500 sm:text-lg dark:text-ink-300">
          {description}
        </p>
      )}
    </div>
  );
}
