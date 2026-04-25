"use client";

import ScrollReveal from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const beforeItems = [
  "Reactive and overwhelmed",
  "Operating on autopilot",
  "Emotionally triggered",
  "Self-doubt and second-guessing",
  "Driven by old patterns",
  "Struggling in relationships",
  "Feeling stuck or frustrated",
  "Inconsistent responses",
  "Focused on external control",
  "Surviving day-to-day",
];

const afterItems = [
  "Calm, intentional, and grounded",
  "Living with awareness and choice",
  "Emotionally aware and responsive",
  "Clarity and confidence in decisions",
  "Aligned with values and desired identity",
  "Communicating with clarity and connection",
  "Experiencing growth and forward movement",
  "Steady and intentional in how you show up",
  "Taking ownership from within",
  "Living with purpose and intention",
];

export default function HomeRestoreShift() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-cream">
      <div className="max-w-[1600px] mx-auto px-8 xl:px-12">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-sage tracking-[0.3em] uppercase text-base mb-4 font-medium">
              The Transformation
            </p>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal mb-4 leading-tight">
              The RESTORE Shift
            </h2>
            <div className="decorative-line" />
            <div className="mt-8 text-charcoal-light max-w-3xl mx-auto leading-relaxed text-xl space-y-4">
              <p>
                The RESTORE Shift is the moment things begin to feel different.
              </p>
              <p>
                It&apos;s where self-doubt softens, reactive cycles start to break,
                and you begin responding with greater calm, clarity, and
                confidence, both internally and in your relationships.
              </p>
            </div>
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

        {/* Closing statement */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16 max-w-4xl mx-auto">
            <p className="font-[var(--font-playfair)] text-2xl md:text-3xl text-charcoal italic leading-relaxed">
              From autopilot and overwhelm into intentional, grounded, and
              confident living, where you trust yourself, respond with clarity,
              and show up in life, relationships, and parenting with steadiness
              and purpose.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
