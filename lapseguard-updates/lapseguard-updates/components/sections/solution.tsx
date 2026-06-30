'use client';

import { motion } from 'framer-motion';
import { Upload, Radar, CheckCircle2 } from 'lucide-react';
import { Container, SectionHeading } from '@/components/ui/container';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations';

const STEPS = [
  {
    icon: Upload,
    step: '01',
    title: 'Add what you need to track',
    body: 'Import licenses, certifications, permits, and policies in minutes \u2014 manually, in bulk, or by forwarding a document.',
  },
  {
    icon: Radar,
    step: '02',
    title: 'LapseGuard watches every date',
    body: 'Each item gets its own renewal cycle, owner, and reminder schedule. No more manual follow-up.',
  },
  {
    icon: CheckCircle2,
    step: '03',
    title: 'Act before it\u2019s urgent',
    body: 'You and the right teammate get notified with time to act \u2014 and a clean record once it\u2019s renewed.',
  },
];

export function Solution() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Compliance that runs itself"
          description="LapseGuard replaces the spreadsheet, the sticky note, and the calendar reminder you ignore — with one system that never forgets."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-16 grid gap-10 sm:grid-cols-3 sm:gap-8"
        >
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-ink-100 sm:block dark:bg-ink-800"
          />
          {STEPS.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.step} variants={fadeUp} className="relative text-center sm:text-left">
                <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-glow">
                  <Icon className="h-6 w-6" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] font-bold text-brand-700 shadow-soft dark:bg-ink-900 dark:text-brand-300">
                    {s.step}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">{s.body}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
