'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';

const STORAGE_KEY = 'lapseguard-cookie-consent';

export function CookieBanner() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    // Only show if the visitor hasn't already made a choice.
    const consent = window.localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
  }, []);

  function choose(value: 'accepted' | 'rejected') {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Cookie consent"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="glass glass-border fixed inset-x-4 bottom-4 z-[60] mx-auto flex max-w-xl flex-col gap-4 rounded-2xl p-5 shadow-soft-lg sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-900/40 dark:text-brand-300">
              <Cookie className="h-4 w-4" />
            </span>
            <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-300">
              We use cookies to keep you signed in and understand how LapseGuard is used. See our{' '}
              <a href="#" className="font-medium text-brand-600 underline-offset-2 hover:underline dark:text-brand-400">
                Cookie Policy
              </a>
              .
            </p>
          </div>
          <div className="flex shrink-0 gap-2 sm:pl-2">
            <Button size="sm" variant="outline" onClick={() => choose('rejected')}>
              Decline
            </Button>
            <Button size="sm" variant="primary" onClick={() => choose('accepted')}>
              Accept
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
