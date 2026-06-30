'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { Container, SectionHeading } from '@/components/ui/container';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { fadeUp, viewportOnce } from '@/lib/animations';

export function Contact() {
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Wire this up to your backend or form provider (e.g. an API route, Resend, HubSpot).
    window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container className="max-w-2xl">
        <SectionHeading
          eyebrow="Get in touch"
          title="Talk to our team"
          description="Questions about a custom plan, multi-location rollout, or a security review? We're glad to help."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 rounded-2xl border border-ink-100 bg-white p-7 sm:p-8 dark:border-ink-800 dark:bg-surface-dark-raised"
        >
          {submitted ? (
            <div className="flex flex-col items-center gap-3 py-8 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-safe-bg text-safe">
                <CheckCircle2 className="h-6 w-6" />
              </span>
              <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
                Message sent
              </h3>
              <p className="max-w-sm text-sm text-ink-500 dark:text-ink-400">
                Thanks for reaching out — a member of our team will reply within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200">
                    Full name
                  </label>
                  <Input id="name" name="name" type="text" placeholder="Jordan Avery" required />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200">
                    Work email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="you@company.com" required />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200">
                  Company
                </label>
                <Input id="company" name="company" type="text" placeholder="Crestline Builders" />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200">
                  How can we help?
                </label>
                <Textarea id="message" name="message" placeholder="Tell us about your team and what you need to track…" required />
              </div>
              <Button type="submit" size="lg" disabled={loading} className="justify-self-start">
                {loading ? 'Sending\u2026' : 'Send message'}
                {!loading && <Send className="h-4 w-4" />}
              </Button>
            </form>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
