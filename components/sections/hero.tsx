'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { HeroDashboard } from '@/components/dashboard/hero-dashboard';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 sm:pt-20">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-mesh-light dark:bg-mesh-dark" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-[560px] bg-grid" />

      <Container className="grid items-center gap-16 pb-20 pt-12 lg:grid-cols-2 lg:pb-28 lg:pt-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="brand">
              <Sparkles className="h-3 w-3" /> Now in early access
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Never miss a renewal.{' '}
            <span className="text-brand-600 dark:text-brand-400">Ever again.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-ink-500 dark:text-ink-300"
          >
            LapseGuard tracks every license, certification, permit, and insurance policy
            your business depends on — and tells you exactly when action is needed, before it costs you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button size="lg" className="group" asChild>
              <Link href="#contact">
                Join the Waitlist
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">
                <Calendar className="h-4 w-4" />
                Book Demo
              </Link>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-5 text-sm text-ink-400"
          >
            Early access · No credit card required · Takes 30 seconds
          </motion.p>
        </div>

        <HeroDashboard />
      </Container>
    </section>
  );
}
