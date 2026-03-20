"use client";

import ScrollReveal from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const beforeItems = [
  "You feel unsure if you're \"doing it right\"",
  "You second guess your decisions and look to others for reassurance",
  "You feel overwhelmed by your child's behaviour or changing needs",
  "You react in the moment and then question yourself afterwards",
  "You constantly feel guilty that you're 'not good enough' as a parent",
  "Parenting feels heavy, exhausting, and at times, isolating",
];

const afterItems = [
  "You feel clear, calm, and confident in your parenting decisions",
  "You trust your instincts without needing constant external validation",
  "You understand your child's needs and respond with intention",
  "You feel more emotionally regulated, even in challenging moments",
  "You parent in a way that fosters independence, resilience, and confidence",
  "You experience a stronger, more connected relationship with your child",
  "You believe in yourself and you believe in your child",
];

export default function BeforeAfter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programs" className="section-padding bg-cream">
      <div className="max-w-[1600px] mx-auto px-8 xl:px-12">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-sage tracking-[0.3em] uppercase text-base mb-4 font-medium">
              The Transformation
            </p>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal mb-4 leading-tight">
              The Restore Shift
            </h2>
            <div className="decorative-line" />
            <p className="mt-8 text-charcoal-light max-w-3xl mx-auto leading-relaxed text-xl">
              The moment where you move from self doubt and survival to
              confident, regulated, and intentional parenting.
            </p>
          </div>
        </ScrollReveal>

        <div ref={ref} className="grid md:grid-cols-2 gap-10 max-w-[1200px] mx-auto">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-rose/5 border border-rose/20 rounded-3xl p-10 md:p-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-rose/20 rounded-full flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-dark">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              </div>
              <h3 className="font-[var(--font-playfair)] text-3xl font-semibold text-charcoal">
                Before
              </h3>
            </div>
            <ul className="space-y-5">
              {beforeItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                  className="flex items-start gap-4 text-charcoal-light text-lg"
                >
                  <span className="w-2 h-2 rounded-full bg-rose mt-2.5 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-sage/5 border border-sage/20 rounded-3xl p-10 md:p-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-sage/20 rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-sage-dark" />
              </div>
              <h3 className="font-[var(--font-playfair)] text-3xl font-semibold text-charcoal">
                After
              </h3>
            </div>
            <ul className="space-y-5">
              {afterItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
                  className="flex items-start gap-4 text-charcoal-light text-lg"
                >
                  <Check className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom quote */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16 max-w-4xl mx-auto">
            <p className="font-[var(--font-playfair)] text-2xl md:text-3xl text-charcoal italic leading-relaxed">
              From second guessing and overwhelm to calm, confident, and
              connected parenting.
            </p>
            <p className="mt-6 text-charcoal-light text-lg">
              Where you trust yourself, respond with intention, and raise a child
              who feels secure, capable, and understood.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
