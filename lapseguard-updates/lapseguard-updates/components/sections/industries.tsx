'use client';

import { motion } from 'framer-motion';
import { Container, SectionHeading } from '@/components/ui/container';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations';
import { INDUSTRIES } from '@/lib/constants';

export function Industries() {
  return (
    <section id="industries" className="bg-ink-50/40 py-24 dark:bg-ink-900/40 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Built for licensed work"
          title="Wherever a license or permit keeps you working"
          description="LapseGuard adapts its renewal rules to the credentials your industry actually requires."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
        >
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.name}
                variants={fadeUp}
                className="group rounded-2xl border border-ink-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft-lg dark:border-ink-800 dark:bg-surface-dark-raised dark:hover:border-brand-700"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-50 text-ink-600 transition-colors group-hover:bg-brand-600 group-hover:text-white dark:bg-ink-800 dark:text-ink-200">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-sm font-semibold text-ink-900 dark:text-white">
                  {ind.name}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-500 dark:text-ink-400">
                  {ind.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
