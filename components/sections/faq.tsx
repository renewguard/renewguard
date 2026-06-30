'use client';

import { motion } from 'framer-motion';
import { Container, SectionHeading } from '@/components/ui/container';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { fadeUp, viewportOnce } from '@/lib/animations';
import { FAQ_ITEMS } from '@/lib/constants';

export function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Questions"
          title="Frequently asked questions"
          description="Can't find what you're looking for? Reach out below and we'll get back to you within one business day."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 rounded-2xl border border-ink-100 bg-white px-6 dark:border-ink-800 dark:bg-surface-dark-raised"
        >
          <Accordion type="single" collapsible>
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </Container>
    </section>
  );
}
