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
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const email = new FormData(e.currentTarget).get('email');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed to subscribe.');

      setSubscribed(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
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
            <div className="w-full sm:w-auto">
              <form onSubmit={handleSubscribe} className="flex w-full max-w-sm gap-2 sm:w-auto">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <Input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="sm:w-64"
                />
                <Button type="submit" size="md" className="shrink-0" disabled={loading}>
                  {loading ? 'Subscribing\u2026' : 'Subscribe'}
                  {!loading && <ArrowRight className="h-4 w-4" />}
                </Button>
              </form>
              {error && (
                <p role="alert" className="mt-2 text-xs font-medium text-danger">
                  {error}
                </p>
              )}
            </div>
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

          {(Object.entries(FOOTER_LINKS) as [string, { label: string; href: string }[]][]).map(
            ([heading, links]) => (
            <div key={heading}>
              <h4 className="font-display text-sm font-semibold text-ink-900 dark:text-white">{heading}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    
                      href={link.href}
                      className="text-sm text-ink-500 transition-colors hover:text-ink-900 dark:text-ink-400 dark:hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            )
          )}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-ink-100 py-8 text-sm text-ink-400 sm:flex-row dark:border-ink-800">
          <p>&copy; {new Date().getFullYear()} RenewGuard, Inc. All rights reserved.</p>
          <p>Made for the people who keep your business compliant.</p>
        </div>
      </Container>
    </footer>
  );
}
