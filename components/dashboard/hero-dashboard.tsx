'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp } from 'lucide-react';
import { DashboardShell } from '@/components/dashboard/dashboard-shell';
import { ComplianceGauge } from '@/components/dashboard/compliance-gauge';
import { RenewalsList } from '@/components/dashboard/renewals-list';
import { SAMPLE_RENEWALS } from '@/lib/constants';

export function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-xl lg:max-w-none"
    >
      <DashboardShell withRadar>
        <div className="grid gap-px bg-ink-100 p-px dark:bg-ink-800 sm:grid-cols-5">
          <div className="col-span-3 bg-white p-5 dark:bg-surface-dark-raised">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-display text-sm font-semibold text-ink-900 dark:text-white">
                Upcoming renewals
              </h3>
              <span className="flex items-center gap-1 text-[11px] font-medium text-safe">
                <TrendingUp className="h-3 w-3" /> All monitored
              </span>
            </div>
            <RenewalsList items={SAMPLE_RENEWALS.slice(0, 4)} />
          </div>
          <div className="col-span-2 flex flex-col items-center justify-center gap-3 bg-white p-5 text-center dark:bg-surface-dark-raised">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-900/40 dark:text-brand-300">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <ComplianceGauge score={94} size={104} />
            <p className="text-xs text-ink-400">Compliance score</p>
          </div>
        </div>
      </DashboardShell>

      {/* Floating proof chip — reinforces "zero missed renewals" at a glance */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="glass glass-border absolute -left-6 -bottom-6 hidden items-center gap-3 rounded-2xl px-4 py-3 shadow-soft-lg sm:flex animate-float"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-safe-bg text-safe">
          <ShieldCheck className="h-4 w-4" />
        </span>
        <div>
          <p className="font-display text-sm font-semibold text-ink-900 dark:text-white">Zero missed renewals</p>
          <p className="text-xs text-ink-400">that&rsquo;s the whole point</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
