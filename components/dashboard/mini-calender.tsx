import { cn } from '@/lib/utils';

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

interface MiniCalendarProps {
  month?: string;
  highlightedDays?: number[]; // days of month with a renewal due
  todayDay?: number;
  daysInMonth?: number;
  startOffset?: number; // weekday the 1st falls on
}

/** A lightweight, static calendar grid used to visualize "renewals land on real dates." */
export function MiniCalendar({
  month = 'October',
  highlightedDays = [6, 9, 14, 21],
  todayDay = 3,
  daysInMonth = 31,
  startOffset = 3,
}: MiniCalendarProps) {
  const totalCells = startOffset + daysInMonth;
  const cells: (number | null)[] = Array.from({ length: totalCells }, (_, i) =>
    i < startOffset ? null : i - startOffset + 1
  );

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <span className="font-display text-sm font-semibold text-ink-900 dark:text-white">{month}</span>
        <span className="text-xs text-ink-400">{highlightedDays.length} renewals</span>
      </div>
      <div className="grid grid-cols-7 gap-y-1.5 text-center">
        {WEEKDAYS.map((d, i) => (
          <span key={i} className="text-[10px] font-medium uppercase text-ink-400">
            {d}
          </span>
        ))}
        {cells.map((day, i) => (
          <div key={i} className="flex h-7 items-center justify-center">
            {day && (
              <span
                className={cn(
                  'flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-tabular',
                  day === todayDay && 'bg-ink-900 font-semibold text-white dark:bg-white dark:text-ink-900',
                  day !== todayDay && highlightedDays.includes(day) &&
                    'bg-brand-100 font-semibold text-brand-700 dark:bg-brand-900/50 dark:text-brand-300',
                  day !== todayDay && !highlightedDays.includes(day) && 'text-ink-500 dark:text-ink-400'
                )}
              >
                {day}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
