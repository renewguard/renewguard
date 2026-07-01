'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Container, SectionHeading } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations';
import { PRICING_PLANS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Pricing() {
  const [yearly, setYearly] = React.useState(true);

  return (
    <section id="pricing" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Simple pricing"
          title="Plans that grow with your team"
          description="Start free. Upgrade when you have more than a handful of renewals to track."
        />

        <div className="mt-8 flex items-center justify-center gap-3">
          <span className={cn('text-sm font-medium', !yearly ? 'text-ink-900 dark:text-white' : 'text-ink-400')}>
            Monthly
          </span>
          <Switch checked={yearly} onCheckedChange={setYearly} aria-label="Toggle yearly billing" />
          <span className={cn('text-sm font-medium', yearly ? 'text-ink-900 dark:text-white' : 'text-ink-400')}>
            Yearly
          </span>
          <Badge variant="safe">Save ~18%</Badge>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 lg:grid-cols-3"
        >
          {PRICING_PLANS.map((plan) => {
            const price = yearly ? plan.price.yearly : plan.price.monthly;
            return (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                className={cn(
                  'relative flex flex-col rounded-2xl border p-7',
                  plan.highlighted
                    ? 'border-brand-600 bg-ink-900 text-white shadow-soft-lg dark:bg-ink-950'
                    : 'border-ink-100 bg-white dark:border-ink-800 dark:bg-surface-dark-raised'
                )}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-7 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                    Most popular
                  </span>
                )}
                <h3
                  className={cn(
                    'font-display text-lg font-semibold',
                    plan.highlighted ? 'text-white' : 'text-ink-900 dark:text-white'
                  )}
                >
                  {plan.name}
                </h3>
                <p className={cn('mt-1 text-sm', plan.highlighted ? 'text-ink-300' : 'text-ink-500 dark:text-ink-400')}>
                  {plan.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span
                    className={cn(
                      'font-display font-tabular text-4xl font-bold',
                      plan.highlighted ? 'text-white' : 'text-ink-900 dark:text-white'
                    )}
                  >
                    ${price}
                  </span>
                  <span className={cn('text-sm', plan.highlighted ? 'text-ink-300' : 'text-ink-400')}>
                    /mo {plan.name !== 'Free' && yearly && '· billed yearly'}
                  </span>
                </div>

                <Button
                  size="md"
                  variant={plan.highlighted ? 'primary' : 'outline'}
                  className="mt-6 w-full"
                  asChild
                >
                  <Link href="#contact">{plan.cta}</Link>
                </Button>

                <ul className="mt-8 space-y-3 text-sm">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <Check
                        className={cn(
                          'mt-0.5 h-4 w-4 shrink-0',
                          plan.highlighted ? 'text-brand-400' : 'text-brand-600'
                        )}
                      />
                      <span className={plan.highlighted ? 'text-ink-200' : 'text-ink-600 dark:text-ink-300'}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        <p className="mt-10 text-center text-sm text-ink-400">
          All plans include bank-grade encryption, unlimited document uploads, and 24/7 monitoring.
        </p>
      </Container>
    </section>
  );
}
