'use client';

import { motion } from 'framer-motion';
import { FileStack, Users2, ShieldAlert, Clock3 } from 'lucide-react';
import { Container, SectionHeading } from '@/components/ui/container';
import { fadeUp, viewportOnce } from '@/lib/animations';
import { DashboardShell } from '@/components/dashboard/dashboard-shell';
import { ComplianceGauge } from '@/components/dashboard/compliance-gauge';
import { RenewalsList } from '@/components/dashboard/renewals-list';
import { MiniCalendar } from '@/components/dashboard/mini-calendar';
import { EmployeeStatus } from '@/components/dashboard/employee-status';
import { NotificationsFeed } from '@/components/dashboard/notifications-feed';
import { AnalyticsCard } from '@/components/dashboard/analytics-card';
import { SAMPLE_RENEWALS } from '@/lib/constants';

export function DashboardPreview() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="See it in action"
          title="One dashboard. Every credential. Always current."
          description="The same view your office manager, your compliance lead, and you check every morning — nothing buried, nothing forgotten."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16"
        >
          <DashboardShell className="mx-auto max-w-5xl">
            <div className="grid gap-px bg-ink-100 p-px dark:bg-ink-800 lg:grid-cols-12">
              {/* Analytics row */}
              <div className="grid grid-cols-2 gap-px bg-ink-100 dark:bg-ink-800 lg:col-span-12 lg:grid-cols-4">
                <div className="bg-white p-4 dark:bg-surface-dark-raised">
                  <AnalyticsCard icon={FileStack} label="Active renewals" value="142" delta="+12%" />
                </div>
                <div className="bg-white p-4 dark:bg-surface-dark-raised">
                  <AnalyticsCard icon={Users2} label="Team members tracked" value="38" delta="+4%" points={[3, 4, 4, 5, 6, 6, 7]} />
                </div>
                <div className="bg-white p-4 dark:bg-surface-dark-raised">
                  <AnalyticsCard icon={ShieldAlert} label="Due within 30 days" value="9" points={[12, 10, 11, 9, 10, 8, 9]} />
                </div>
                <div className="bg-white p-4 dark:bg-surface-dark-raised">
                  <AnalyticsCard icon={Clock3} label="Avg. response time" value="3.2 hrs" delta="-18%" points={[9, 8, 7, 6, 6, 5, 4]} />
                </div>
              </div>

              {/* Renewals list */}
              <div className="bg-white p-5 lg:col-span-5 dark:bg-surface-dark-raised">
                <h3 className="mb-3 font-display text-sm font-semibold text-ink-900 dark:text-white">
                  Upcoming renewals
                </h3>
                <RenewalsList items={SAMPLE_RENEWALS} />
              </div>

              {/* Compliance + calendar */}
              <div className="flex flex-col gap-px bg-ink-100 dark:bg-ink-800 lg:col-span-4">
                <div className="flex flex-1 flex-col items-center justify-center gap-2 bg-white p-5 text-center dark:bg-surface-dark-raised">
                  <ComplianceGauge score={94} size={96} />
                  <p className="text-xs font-medium text-ink-400">Overall compliance score</p>
                </div>
                <div className="bg-white p-5 dark:bg-surface-dark-raised">
                  <MiniCalendar />
                </div>
              </div>

              {/* Employee status + notifications */}
              <div className="flex flex-col gap-px bg-ink-100 dark:bg-ink-800 lg:col-span-3">
                <div className="bg-white p-5 dark:bg-surface-dark-raised">
                  <h3 className="mb-3 font-display text-sm font-semibold text-ink-900 dark:text-white">
                    Employee status
                  </h3>
                  <EmployeeStatus />
                </div>
                <div className="bg-white p-5 dark:bg-surface-dark-raised">
                  <h3 className="mb-3 font-display text-sm font-semibold text-ink-900 dark:text-white">
                    Notifications
                  </h3>
                  <NotificationsFeed />
                </div>
              </div>
            </div>
          </DashboardShell>
        </motion.div>
      </Container>
    </section>
  );
}
