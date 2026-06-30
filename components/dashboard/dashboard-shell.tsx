import { cn } from '@/lib/utils';

interface DashboardShellProps {
  children: React.ReactNode;
  className?: string;
  withRadar?: boolean;
}

/**
 * Wraps any dashboard mockup in a soft browser-chrome card.
 * When `withRadar` is set, a slow-rotating conic gradient ring sits behind it —
 * LapseGuard's signature visual: the product is always scanning for what's about to expire.
 */
export function DashboardShell({ children, className, withRadar }: DashboardShellProps) {
  return (
    <div className="relative">
      {withRadar && (
        <div
          aria-hidden="true"
          className="absolute -inset-10 -z-10 hidden rounded-full opacity-60 blur-2xl sm:block animate-radar-spin"
          style={{
            background:
              'conic-gradient(from 0deg, transparent 0%, rgb(41 84 255 / 0.35) 15%, transparent 30%, transparent 100%)',
          }}
        />
      )}
      <div
        className={cn(
          'glass glass-border relative overflow-hidden rounded-2xl shadow-soft-lg',
          className
        )}
      >
        <div className="flex items-center gap-1.5 border-b border-ink-100 px-4 py-3 dark:border-ink-800">
          <span className="h-2.5 w-2.5 rounded-full bg-ink-200 dark:bg-ink-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-200 dark:bg-ink-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-200 dark:bg-ink-700" />
          <span className="ml-3 truncate rounded-md bg-ink-50 px-3 py-1 text-[11px] text-ink-400 dark:bg-ink-800">
            app.lapseguard.com/dashboard
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}
