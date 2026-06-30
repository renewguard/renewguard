import { CountdownPill } from '@/components/ui/countdown-pill';
import type { RenewalItem } from '@/types';

export function RenewalsList({ items, compact = false }: { items: RenewalItem[]; compact?: boolean }) {
  return (
    <ul className="divide-y divide-ink-100 dark:divide-ink-800">
      {items.map((item) => (
        <li key={item.id} className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-ink-900 dark:text-white">{item.name}</p>
            {!compact && (
              <p className="mt-0.5 truncate text-xs text-ink-400">
                {item.category} · {item.owner}
              </p>
            )}
          </div>
          <CountdownPill daysLeft={item.daysLeft} urgency={item.urgency} pulse={item.urgency === 'danger'} />
        </li>
      ))}
    </ul>
  );
}
