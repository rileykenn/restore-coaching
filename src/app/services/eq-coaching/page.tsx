"use client";

import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Baby } from "lucide-react";

export default function BirthDebriefMotherhoodPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <ServicePageHero
        label="Birth Debrief"
        title="Birth Debrief & Motherhood Transition Support"
        accentColor="rose"
      />

      {/* Intro Section */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-[900px] mx-auto px-8 xl:px-12">
          <ScrollReveal>
            <div className="space-y-6 text-charcoal-light leading-relaxed text-lg">
              <p className="text-xl text-charcoal font-medium">
                As a midwife, I&apos;ve seen too many women leave birth carrying
                more than just their baby.
              </p>
              <p>They carry guilt.</p>
              <p>They carry shame.</p>
              <p>
                They carry a quiet belief that they&apos;ve somehow failed.
              </p>
              <p>
                And instead of entering motherhood with wonder and joy, they
                find themselves simply trying to survive it.
              </p>
              <p className="text-sage font-semibold text-xl italic font-[var(--font-playfair)]">
                This is why I created support for both birth debriefing and
                early motherhood transition, so women don&apos;t have to carry
                it alone.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Two Side-by-Side Boxes */}
      <section className="section-padding bg-cream">
        <div className="max-w-[1400px] mx-auto px-8 xl:px-12">
          <div
            ref={ref}
            className="grid md:grid-cols-2 gap-10"
          >
            {/* Box 1 — Birth Debrief */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-3xl p-10 md:p-12 shadow-sm border border-rose/15 hover:shadow-xl transition-all duration-500"
            >
              <div className="w-16 h-16 bg-rose/10 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-rose" />
              </div>
              <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-semibold text-charcoal mb-2">
                Birth Debrief
              </h3>
              <p className="text-rose-dark font-medium text-lg italic mb-6">
                Make sense of what&apos;s been
              </p>
              <div className="space-y-5 text-charcoal-light leading-relaxed text-lg">
                <p>
                  Every woman&apos;s birth journey is unique, and the emotions
                  connected to it matter deeply. Debriefing offers a safe,
                  supportive space to process your birth story, helping you make
                  sense of your experience and begin moving forward with
                  clarity, confidence, and self-compassion. It is a powerful
                  first step in your transition into motherhood.
                </p>
              </div>
              <div className="mt-8 bg-rose/5 rounded-2xl p-6 border border-rose/10">
                <p className="text-sage-dark text-base font-medium mb-2">
                  Core transformation:
                </p>
                <p className="text-charcoal italic text-lg font-[var(--font-playfair)] leading-relaxed">
                  My birth story doesn&apos;t define who I am as a mother. I
                  feel grounded, capable, and confident as I step into
                  motherhood.
                </p>
              </div>
            </motion.div>

            {/* Box 2 — Motherhood Transition Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="bg-white rounded-3xl p-10 md:p-12 shadow-sm border border-sage/15 hover:shadow-xl transition-all duration-500"
            >
              <div className="w-16 h-16 bg-sage/10 rounded-2xl flex items-center justify-center mb-6">
                <Baby className="w-8 h-8 text-sage" />
              </div>
              <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-semibold text-charcoal mb-2">
                Motherhood Transition Support
              </h3>
              <p className="text-sage-dark font-medium text-lg italic mb-6">
                Feel supported in what&apos;s unfolding
              </p>
              <div className="space-y-5 text-charcoal-light leading-relaxed text-lg">
                <p>
                  This is not about doing motherhood perfectly&mdash;it&apos;s
                  about feeling grounded and supported as you navigate feeding,
                  settling, emotional overwhelm, and identity shifts. Your
                  transition into motherhood matters. This is a space to find
                  clarity, build confidence, and begin trusting yourself as a
                  new parent.
                </p>
              </div>
              <div className="mt-8 bg-sage/5 rounded-2xl p-6 border border-sage/10">
                <p className="text-sage-dark text-base font-medium mb-2">
                  Core transformation:
                </p>
                <p className="text-charcoal italic text-lg font-[var(--font-playfair)] leading-relaxed">
                  Motherhood isn&apos;t something I have to figure out alone. I
                  grow in my capacity to trust myself to respond to my baby, my
                  emotions, and whatever this season brings.
                </p>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-16">
              <Link
                href="/contact"
                className="px-10 py-5 bg-sage text-white rounded-full text-lg font-medium hover:bg-sage-dark transition-all duration-300 hover:shadow-xl hover:shadow-sage/20 hover:-translate-y-0.5 inline-block"
              >
                Book a Session
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
