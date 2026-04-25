"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Calendar, MessageCircle, Check, ArrowRight } from "lucide-react";

const expectSteps = [
  "We begin with a one-to-one conversation to understand your current challenges and goals",
  "Together, we explore what\u2019s happening beneath the surface in your parenting",
  "You\u2019ll gain clarity, practical tools, and a clear sense of your next steps",
  "From there, we can decide what level of support feels right for you",
];

export default function BookSession() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero */}
      <section className="relative bg-cream pt-36 pb-20 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-sage/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-rose/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-[1600px] mx-auto px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <p className="text-sage tracking-[0.3em] uppercase text-base mb-4 font-medium">
              Get Started
            </p>
            <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal mb-4 leading-tight max-w-4xl mx-auto">
              Book a Session
            </h1>
            <div className="decorative-line" />
            <p className="mt-8 text-charcoal-light max-w-3xl mx-auto leading-relaxed text-xl">
              Take the next step toward calm, confident, and connected parenting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clarity Call Section */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-[1200px] mx-auto px-8 xl:px-12">
          <div ref={ref} className="grid md:grid-cols-2 gap-10">
            {/* Clarity Call */}
            <ScrollReveal>
              <div className="bg-white rounded-3xl p-10 md:p-12 shadow-sm border border-sage/10 h-full">
                <div className="w-16 h-16 bg-sage/10 rounded-2xl flex items-center justify-center mb-6">
                  <Phone className="w-8 h-8 text-sage" />
                </div>
                <h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-semibold text-charcoal mb-2">
                  Clarity Call
                </h2>
                <p className="text-sage font-medium text-lg mb-6">30 minutes</p>
                <p className="text-charcoal-light text-lg leading-relaxed mb-8">
                  A short, one-to-one call to understand where you&apos;re at and
                  explore the best next step for you.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Gain initial clarity and perspective",
                    "Ask questions about the program",
                    "Explore what support feels right",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                      className="flex items-start gap-3 text-charcoal-light text-lg"
                    >
                      <Check className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-sage text-white rounded-full text-lg font-medium hover:bg-sage-dark transition-all duration-300 hover:shadow-xl hover:shadow-sage/20 hover:-translate-y-0.5 inline-block"
                >
                  Book a Clarity Call
                </Link>
              </div>
            </ScrollReveal>

            {/* Ready to Begin */}
            <ScrollReveal delay={0.15}>
              <div className="bg-sage/5 rounded-3xl p-10 md:p-12 border border-sage/20 h-full flex flex-col">
                <div className="w-16 h-16 bg-sage/10 rounded-2xl flex items-center justify-center mb-6">
                  <Calendar className="w-8 h-8 text-sage" />
                </div>
                <h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-semibold text-charcoal mb-6">
                  Ready to begin straight away?
                </h2>
                <p className="text-charcoal-light text-lg leading-relaxed mb-8 flex-1">
                  If you already feel clear and ready to start, you&apos;re welcome
                  to book a full session.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-sage text-white rounded-full text-lg font-medium hover:bg-sage-dark transition-all duration-300 hover:shadow-xl hover:shadow-sage/20 hover:-translate-y-0.5 text-center"
                  >
                    Book a Session
                  </Link>
                  <Link
                    href="/contact"
                    className="px-8 py-4 border-2 border-sage text-sage rounded-full text-lg font-medium hover:bg-sage hover:text-white transition-all duration-300 text-center"
                  >
                    Enquire Here
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-cream">
        <div className="max-w-[900px] mx-auto px-8 xl:px-12">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-semibold text-charcoal mb-4">
                What to expect
              </h2>
              <div className="decorative-line" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-sm border border-sage/10">
              <p className="text-charcoal-light text-xl leading-relaxed mb-8">
                If you&apos;re here, something has already resonated.
                You don&apos;t need to have it all figured out &mdash; just a
                willingness to begin.
              </p>
              <ul className="space-y-5 mb-10">
                {expectSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-4 text-charcoal-light text-lg">
                    <div className="w-8 h-8 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sage font-medium text-sm">{i + 1}</span>
                    </div>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
              <p className="text-charcoal font-medium text-lg mb-8">
                When you&apos;re ready, you can take the next step here.
              </p>
              <Link
                href="/contact"
                className="px-10 py-5 bg-sage text-white rounded-full text-lg font-medium hover:bg-sage-dark transition-all duration-300 hover:shadow-xl hover:shadow-sage/20 hover:-translate-y-0.5 inline-block"
              >
                Book a Clarity Call
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
