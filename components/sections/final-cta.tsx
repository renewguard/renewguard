'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { fadeUp, viewportOnce } from '@/lib/animations';

export function FinalCTA() {
  return (
    <section className="py-20">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-4xl bg-ink-900 px-6 py-16 text-center sm:px-16 sm:py-20 dark:bg-ink-950"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,_rgb(41_84_255_/_0.35),_transparent_70%)]"
          />
          <div className="relative">
            <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Be first in line when LapseGuard launches.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-balance text-lg text-ink-300">
              Join the waitlist now and we&apos;ll reach out personally as soon as early access opens.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" className="group" asChild>
                <Link href="#contact">
                  Join the Waitlist
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10" asChild>
                <Link href="#contact">
                  <Calendar className="h-4 w-4" />
                  Book Demo
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
