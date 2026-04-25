"use client";

import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";

const benefits = [
  "Build self-awareness and confidence",
  "Strengthen emotional regulation under pressure",
  "Navigate stress and conflict more effectively",
  "Improve communication and relationships",
  "Develop practical skills for life, work, and parenting",
  "Gain clarity on how you show up in daily life",
];

const differentiators = [
  "understanding the patterns behind your reactions",
  "working at the root of emotional responses",
  "creating sustainable internal change",
];

export default function EQCoachingPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <ServicePageHero
        label="Emotional Intelligence"
        title="Restore EQ Assessment & Coaching"
        subtitle="Grow your self-awareness. Strengthen how you lead, relate, and respond."
        accentColor="taupe"
      />

      <section className="section-padding bg-warm-white">
        <div ref={ref} className="max-w-[1000px] mx-auto px-8 xl:px-12">
          {/* Intro */}
          <ScrollReveal>
            <div className="space-y-6 text-charcoal-light leading-relaxed text-lg mb-16">
              <p>
                Emotional Intelligence (EI) is the ability to understand and
                work with your thoughts, emotions, and responses in everyday
                life.
              </p>
              <p>
                It influences how you handle stress, make decisions, build
                relationships, and navigate pressure at home, work, and in
                relationships.
              </p>
              <p>
                Through the internationally recognised{" "}
                <strong className="text-charcoal">
                  Emotional Quotient Inventory (EQ-i)
                </strong>
                , you receive a personalised &ldquo;map&rdquo; of your emotional
                and social functioning &mdash; highlighting your strengths and
                areas for growth.
              </p>
            </div>
          </ScrollReveal>

          {/* Benefits */}
          <ScrollReveal delay={0.1}>
            <div className="bg-sage/5 rounded-3xl p-10 md:p-12 border border-sage/10 mb-16">
              <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-semibold text-charcoal mb-8">
                The insights from this assessment support you to:
              </h3>
              <div className="grid md:grid-cols-2 gap-5">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-7 h-7 bg-sage/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-sage-dark" />
                    </div>
                    <span className="text-charcoal-light text-lg">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
              <p className="mt-8 text-charcoal-light text-lg leading-relaxed">
                The EQ-i is backed by over 20 years of research and is used
                internationally in personal development and organisational
                settings.
              </p>
              <p className="mt-4 text-charcoal-light text-lg leading-relaxed">
                Most importantly, it gives you clear language and insight into
                your internal world, so change becomes understandable, not
                overwhelming.
              </p>
            </div>
          </ScrollReveal>

          {/* How This Is Different */}
          <ScrollReveal delay={0.2}>
            <div className="bg-white rounded-3xl p-10 md:p-12 shadow-sm border border-sage/10 mb-16">
              <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-semibold text-charcoal mb-4">
                How this is different
              </h3>
              <p className="text-charcoal-light text-lg mb-3">
                This is not surface-level coaching or behavioural strategies.
              </p>
              <p className="text-charcoal-light text-lg mb-8">
                It focuses on:
              </p>
              <div className="space-y-4 mb-8">
                {differentiators.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4"
                  >
                    <ArrowRight className="w-5 h-5 text-sage flex-shrink-0" />
                    <span className="text-charcoal text-lg font-medium">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
              <p className="text-charcoal-light text-lg leading-relaxed italic">
                When you shift how you relate to yourself, everything else
                begins to shift with you.
              </p>
            </div>
          </ScrollReveal>

          {/* Package Outline */}
          <ScrollReveal delay={0.25}>
            <div className="bg-sage/5 rounded-3xl p-10 md:p-12 border border-sage/20 mb-16">
              <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-semibold text-charcoal mb-2">
                Emotional Intelligence Coaching
              </h3>
              <p className="font-[var(--font-playfair)] text-4xl font-semibold text-charcoal mb-4">
                $950{" "}
                <span className="text-lg font-normal text-charcoal-light">
                  AUD
                </span>
              </p>
              <p className="text-charcoal-light text-lg leading-relaxed mb-2">
                Strengthen your emotional intelligence so you can lead, relate,
                and respond with greater clarity and confidence in everyday life.
              </p>
              <p className="text-charcoal-light text-lg leading-relaxed mb-6">
                This is a structured coaching process combining assessment,
                insight, and applied integration work.
              </p>
              <h4 className="text-charcoal font-medium text-lg mb-4">
                What&apos;s included:
              </h4>
              <ul className="space-y-3 mb-8">
                {[
                  "Comprehensive EQ-i assessment and personalised report",
                  "90-minute results debrief session",
                  "Two 60-minute coaching sessions (focused + integration)",
                  "Three personalised coaching email summaries",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-charcoal-light text-lg"
                  >
                    <Check className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/book"
                className="px-10 py-5 bg-sage text-white rounded-full text-lg font-medium hover:bg-sage-dark transition-all duration-300 hover:shadow-xl hover:shadow-sage/20 hover:-translate-y-0.5 inline-block"
              >
                Enquire About EQ Coaching
              </Link>
            </div>
          </ScrollReveal>

          {/* Closing CTA */}
          <ScrollReveal delay={0.3}>
            <div className="text-center">
              <p className="font-[var(--font-playfair)] text-2xl md:text-3xl text-charcoal italic leading-relaxed mb-2">
                Ready to explore your Emotional Intelligence?
              </p>
              <p className="text-charcoal-light text-xl mb-3">
                If this resonates, you don&apos;t have to navigate it alone.
              </p>
              <p className="text-charcoal-light text-lg mb-10">
                There is a way forward, and we can work through it together.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link
                  href="/book"
                  className="px-10 py-5 bg-sage text-white rounded-full text-lg font-medium hover:bg-sage-dark transition-all duration-300 hover:shadow-xl hover:shadow-sage/20 hover:-translate-y-0.5"
                >
                  Book a Session
                </Link>
                <Link
                  href="/contact"
                  className="px-10 py-5 border-2 border-sage text-sage rounded-full text-lg font-medium hover:bg-sage hover:text-white transition-all duration-300"
                >
                  Enquire about EQ Coaching
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
