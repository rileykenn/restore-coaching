"use client";

import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";

const benefits = [
  "Build your confidence and self awareness",
  "Strengthen your ability to manage emotions and pressure",
  "Increase your ability to navigate stress and conflict",
  "Improve communication and relationships",
  "Equip you with practical skills for school, work, and life",
  "Bring clarity in how you show up in life",
];

const differentiators = [
  "Understanding what drives your behaviour",
  "Shifting patterns at the root",
  "Creating sustainable, aligned change",
];

export default function EQCoachingPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <ServicePageHero
        label="Emotional Intelligence"
        title="Restore EQ Assessment & Coaching"
        subtitle="Grow your self awareness. Strengthen how you lead, relate, and respond."
        accentColor="taupe"
      />

      <section className="section-padding bg-warm-white">
        <div ref={ref} className="max-w-[1000px] mx-auto px-8 xl:px-12">
          {/* Intro */}
          <ScrollReveal>
            <div className="space-y-6 text-charcoal-light leading-relaxed text-lg mb-16">
              <p>
                One of the most powerful things you can develop is a deeper understanding
                of yourself, how you think, feel, respond, and relate to others.
              </p>
              <p>
                Emotional Intelligence (EI) is a set of learnable skills that help you
                navigate real life situations with greater confidence and clarity. These
                skills influence how you handle stress, make decisions, build relationships,
                and show up in school, work, and everyday life.
              </p>
              <p>
                Through an online assessment called the{" "}
                <strong className="text-charcoal">Emotional Quotient Inventory (EQ-i)</strong>{" "}
                you will glean a personalised &ldquo;map&rdquo; of your emotional and social
                functioning, highlighting your strengths and identifying areas you can grow in.
              </p>
            </div>
          </ScrollReveal>

          {/* Benefits */}
          <ScrollReveal delay={0.1}>
            <div className="bg-sage/5 rounded-3xl p-10 md:p-12 border border-sage/10 mb-16">
              <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-semibold text-charcoal mb-8">
                The insights from this assessment will help us:
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
                    <span className="text-charcoal-light text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              <p className="mt-8 text-charcoal-light text-lg leading-relaxed">
                The EQ-i is backed by over 20 years of research and is widely used around
                the world to support personal development and performance, but most
                importantly, it will give you language and understanding for what&apos;s
                happening internally.
              </p>
            </div>
          </ScrollReveal>

          {/* How This Is Different */}
          <ScrollReveal delay={0.2}>
            <div className="bg-white rounded-3xl p-10 md:p-12 shadow-sm border border-sage/10 mb-16">
              <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-semibold text-charcoal mb-4">
                How This Is Different
              </h3>
              <p className="text-charcoal-light text-lg mb-8">
                This isn&apos;t just strategy or surface level coaching. It&apos;s about:
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
                    <span className="text-charcoal text-lg font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-charcoal-light text-lg leading-relaxed italic">
                Because when you change from the inside out, everything around you begins to shift.
              </p>
            </div>
          </ScrollReveal>

          {/* Closing CTA */}
          <ScrollReveal delay={0.3}>
            <div className="text-center">
              <p className="font-[var(--font-playfair)] text-2xl md:text-3xl text-charcoal italic leading-relaxed mb-4">
                You don&apos;t have to stay stuck.
              </p>
              <p className="text-charcoal-light text-xl mb-10">
                There is a way forward, and you don&apos;t have to find it alone.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link
                  href="/contact"
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
