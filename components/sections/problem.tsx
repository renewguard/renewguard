'use client';

import { motion } from 'framer-motion';
import { Ban, Gavel, FileX, TrendingDown } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations';

const CONSEQUENCES = [
  {
    icon: Ban,
    title: 'Work stops',
    body: 'A lapsed license or permit can halt active jobs immediately, with no warning to your crew or your clients.',
  },
  {
    icon: Gavel,
    title: 'Fines and liability',
    body: 'Regulators don\u2019t wait for a renewal email you missed \u2014 penalties and legal exposure start the day it expires.',
  },
  {
    icon: FileX,
    title: 'Lost contracts',
    body: 'Clients and partners routinely require proof of current insurance and licensing before they\u2019ll sign \u2014 or stay signed.',
  },
  {
    icon: TrendingDown,
    title: 'Reputation damage',
    body: 'Word travels fast in licensed trades. One public lapse can outweigh years of reliable work.',
  },
];

export function Problem() {
  return (
    <section className="bg-ink-900 py-24 dark:bg-surface-dark sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink-200">
            The hidden risk
          </span>
          <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            One missed renewal can undo years of work
          </h2>
          <p className="mt-4 text-balance text-lg leading-relaxed text-ink-300">
            Spreadsheets get out of date. Calendar reminders get dismissed. The renewal that
            slips through is rarely the one anyone was worried about.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {CONSEQUENCES.map((c) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                variants={fadeUp}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-danger/15 text-red-400">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{c.body}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
