import {
  Bell,
  FileText,
  Users,
  Building2,
  ShieldCheck,
  Repeat,
  Smartphone,
  Lock,
  KeyRound,
  ClipboardCheck,
  BadgeCheck,
  FolderLock,
  Zap,
  Wrench,
  Thermometer,
  HardHat,
  Stethoscope,
  HeartPulse,
  Home,
  Umbrella,
  Hammer,
  Store,
} from 'lucide-react';
import type {
  RenewalItem,
  Feature,
  Testimonial,
  Industry,
  PricingPlan,
  FAQItem,
  Stat,
} from '@/types';

export const NAV_LINKS = [
  { label: 'Product', href: '#features' },
  { label: 'Industries', href: '#industries' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
] as const;

export const COMPANY_LOGOS = [
  'Northbridge Electric',
  'Vantage HVAC Group',
  'Harlow & Reeve Law',
  'Crestline Builders',
  'Meridian Health Partners',
  'Solstice Realty Co.',
] as const;

export const STATS: Stat[] = [
  { value: '99.9%', label: 'Renewals tracked on time' },
  { value: '38,000+', label: 'Licenses & permits monitored' },
  { value: '4.9/5', label: 'Average customer rating' },
  { value: '12 hrs', label: 'Saved per admin, per month' },
];

export const SAMPLE_RENEWALS: RenewalItem[] = [
  { id: '1', name: 'Master Electrician License', category: 'License', daysLeft: 6, urgency: 'danger', owner: 'J. Alvarez' },
  { id: '2', name: 'General Liability Insurance', category: 'Insurance', daysLeft: 14, urgency: 'warn', owner: 'Company-wide' },
  { id: '3', name: 'OSHA 30 Certification', category: 'Certification', daysLeft: 21, urgency: 'warn', owner: 'M. Chen' },
  { id: '4', name: 'City Business Permit', category: 'Permit', daysLeft: 47, urgency: 'safe', owner: 'Front Office' },
  { id: '5', name: 'Vehicle Fleet Registration', category: 'Permit', daysLeft: 62, urgency: 'safe', owner: 'Fleet Ops' },
  { id: '6', name: 'RN Nursing License', category: 'License', daysLeft: 9, urgency: 'danger', owner: 'S. Okafor' },
];

export const FEATURES: Feature[] = [
  { icon: Bell, title: 'Renewal reminders', description: 'Automatic alerts at 60, 30, 14, and 1 day out, so nothing reaches the deadline by surprise.' },
  { icon: Smartphone, title: 'Email & SMS notifications', description: 'Reach the right person on the channel they actually check, with escalation if no one acknowledges it.' },
  { icon: FileText, title: 'Document storage', description: 'Keep every license, policy, and certificate attached to its renewal, searchable in one place.' },
  { icon: Users, title: 'Employee compliance dashboard', description: 'See every team member\u2019s certifications and their status in a single, sortable view.' },
  { icon: Building2, title: 'Multi-business management', description: 'Run compliance across locations, subsidiaries, or franchises from one shared workspace.' },
  { icon: ClipboardCheck, title: 'Audit-ready reports', description: 'Export a clean compliance record in seconds when an auditor, client, or regulator asks for one.' },
  { icon: Umbrella, title: 'Insurance tracking', description: 'Monitor policy limits, carriers, and expiration dates across every line of coverage you hold.' },
  { icon: KeyRound, title: 'License tracking', description: 'Track state, local, and professional licenses with renewal rules built in for each jurisdiction.' },
  { icon: BadgeCheck, title: 'Certification tracking', description: 'Stay ahead of CE credits, training hours, and recertification cycles for every credential.' },
  { icon: Repeat, title: 'Smart recurring renewals', description: 'LapseGuard learns each renewal\u2019s cycle and pre-fills the next due date the moment one closes.' },
  { icon: Smartphone, title: 'Mobile friendly', description: 'Approve, upload, and check status from a job site or hospital floor, not just a desk.' },
  { icon: FolderLock, title: 'Secure cloud storage', description: 'Bank-grade encryption at rest and in transit, with automatic backups you never have to think about.' },
  { icon: Lock, title: 'Role-based access', description: 'Give office managers, technicians, and owners exactly the access each role needs \u2014 no more.' },
  { icon: ShieldCheck, title: 'Team management', description: 'Onboard staff, assign owners to each credential, and reassign instantly when someone changes roles.' },
];

export const INDUSTRIES: Industry[] = [
  { icon: Zap, name: 'Electricians', description: 'Master licenses, journeyman cards, and liability coverage in one place.' },
  { icon: Thermometer, name: 'HVAC', description: 'EPA certifications, contractor licenses, and equipment permits, tracked by crew.' },
  { icon: HardHat, name: 'Contractors', description: 'Bonding, insurance, and trade licenses across every job and jurisdiction.' },
  { icon: HeartPulse, name: 'Nurses', description: 'RN licensure, CE credits, and BLS/ACLS certifications, renewed on time.' },
  { icon: Stethoscope, name: 'Doctors', description: 'Board certifications, DEA registration, and malpractice coverage, monitored.' },
  { icon: Home, name: 'Real Estate Agents', description: 'State licensing, E&O insurance, and continuing education deadlines.' },
  { icon: Umbrella, name: 'Insurance Agents', description: 'Carrier appointments, state lines of authority, and CE requirements.' },
  { icon: Wrench, name: 'Plumbers', description: 'Master and journeyman licenses plus backflow certifications, by technician.' },
  { icon: Hammer, name: 'Builders', description: 'General contractor licenses, permits, and project-level insurance certificates.' },
  { icon: Store, name: 'Small Businesses', description: 'Business licenses, health permits, and vendor insurance, all in one inbox.' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'We used to track renewals in a spreadsheet that nobody opened. LapseGuard caught a liability policy that would have lapsed two weeks before our biggest job of the year.',
    name: 'Dana Whitfield',
    role: 'Operations Director',
    company: 'Crestline Builders',
    initials: 'DW',
    rating: 5,
  },
  {
    quote:
      'Our audit prep went from three days of chasing paperwork to one export. The compliance score alone has changed how our managers think about deadlines.',
    name: 'Marcus Chen',
    role: 'Compliance Lead',
    company: 'Vantage HVAC Group',
    initials: 'MC',
    rating: 5,
  },
  {
    quote:
      'With forty field technicians across three states, license expirations were our biggest legal exposure. LapseGuard turned that into a non-issue.',
    name: 'Priya Subramaniam',
    role: 'HR & Risk Manager',
    company: 'Northbridge Electric',
    initials: 'PS',
    rating: 5,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Free',
    price: { monthly: 0, yearly: 0 },
    description: 'For solo professionals tracking their own credentials.',
    cta: 'Join the Waitlist',
    features: [
      'Up to 5 tracked renewals',
      'Email reminders',
      'Document storage (1 GB)',
      'Mobile access',
      '1 team member',
    ],
  },
  {
    name: 'Pro',
    price: { monthly: 29, yearly: 24 },
    description: 'For growing teams managing licenses across the business.',
    cta: 'Join the Waitlist',
    highlighted: true,
    features: [
      'Unlimited tracked renewals',
      'Email & SMS notifications',
      'Document storage (50 GB)',
      'Employee compliance dashboard',
      'Audit-ready reports',
      'Role-based access',
      'Up to 25 team members',
    ],
  },
  {
    name: 'Business',
    price: { monthly: 79, yearly: 65 },
    description: 'For multi-location companies and franchises at scale.',
    cta: 'Talk to Sales',
    features: [
      'Everything in Pro',
      'Multi-business management',
      'Unlimited team members',
      'Advanced audit trails',
      'Custom renewal workflows',
      'Dedicated account manager',
      'SSO & SCIM provisioning',
    ],
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What exactly does LapseGuard track?',
    answer:
      'Anything with an expiration date that matters to your business: professional licenses, certifications, permits, insurance policies, contracts, and any internal compliance deadline you define. If it can lapse, LapseGuard can watch it.',
  },
  {
    question: 'How far in advance will I be notified?',
    answer:
      'By default you\u2019ll get alerts at 60, 30, 14, and 1 day before a renewal is due, plus an escalation if it\u2019s missed. You can customize the schedule per renewal type or per person from your settings.',
  },
  {
    question: 'Can I manage multiple locations or businesses?',
    answer:
      'Yes. The Business plan lets you group renewals by location, entity, or franchise, with permissions and reporting scoped to each one, while still giving leadership a single rolled-up view.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'All documents and data are encrypted in transit and at rest, stored with redundant backups, and access is governed by the role-based permissions you set. We never share your data with third parties.',
  },
  {
    question: 'Do my employees need their own accounts?',
    answer:
      'Only if you want them to upload documents or receive direct notifications. Many teams start with a single admin account and add individual logins as the team grows.',
  },
  {
    question: 'Can I cancel or switch plans at any time?',
    answer:
      'Yes, you can upgrade, downgrade, or cancel from your billing settings at any time. If you cancel, your data stays exportable for 30 days afterward.',
  },
];

export const FOOTER_LINKS = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Industries', href: '#industries' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Security', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#contact' },
  ],
  Resources: [
    { label: 'Help Center', href: '#' },
    { label: 'Compliance Guide', href: '#' },
    { label: 'API Docs', href: '#' },
    { label: 'Status', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Data Processing', href: '#' },
  ],
} as const;
