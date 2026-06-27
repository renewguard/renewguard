'use client';

import * as React from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, Twitter, Linkedin, Github } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FOOTER_LINKS } from '@/lib/constants';

export function Footer() {
  const [subscribed, setSubscribed] = React.useState(false);

  function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire this up to your email provider (e.g. Resend, Mailchimp, ConvertKit).
    setSubscribed(true);
  }

  return (
    <footer className="border-t border-ink-100 bg-ink-50/40 pt-16 dark:border-ink-800 dark:bg-ink-900/40">
      <Container>
        {/* Newsletter */}
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-ink-100 bg-white p-7 sm:flex-row sm:items-center dark:border-ink-800 dark:bg-surface-dark-raised">
          <div>
            <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
              Stay ahead of compliance changes
            </h3>
            <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
              One short email a month: renewal deadlines, regulation updates, product news.
            </p>
          </div>
          {subscribed ? (
            <p className="text-sm font-medium text-safe">You&rsquo;re subscribed &mdash; thank you!</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex w-full max-w-sm gap-2 sm:w-auto">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <Input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@company.com"
                className="sm:w-64"
              />
              <Button type="submit" size="md" className="shrink-0">
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          )}
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-10 py-14 sm:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 sm:col-span-4 lg:col-span-1">
            <Link href="#top" className="flex items-center gap-2 font-display text-lg font-semibold text-ink-900 dark:text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
                <ShieldCheck className="h-[18px] w-[18px]" />
              </span>
              RenewGuard
            </Link>
            <p className="mt-3 max-w-xs text-sm text-ink-500 dark:text-ink-400">
              The compliance platform that makes sure your licenses, permits, and insurance never lapse.
            </p>
            <div className="mt-5 flex gap-3">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-500 transition-colors hover:border-brand-300 hover:text-brand-600 dark:border-ink-700 dark:text-ink-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-display text-sm font-semibold text-ink-900 dark:text-white">{heading}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ink-500 transition-colors hover:text-ink-900 dark:text-ink-400 dark:hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
             </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-ink-100 py-8 text-sm text-ink-400 sm:flex-row dark:border-ink-800">
          <p>&copy; {new Date().getFullYear()} RenewGuard, Inc. All rights reserved.</p>
          <p>Made for the people who keep your business compliant.</p>
        </div>
      </Container>
    </footer>
  );
}
