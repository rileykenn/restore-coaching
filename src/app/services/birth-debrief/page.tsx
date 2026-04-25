"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ServicePageHero from "@/components/ServicePageHero";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Heart } from "lucide-react";

const fourWeekFocus = [
  "Reconnect with yourself after birth",
  "Create space and slow things down",
  "Establish feeding, sleep, and care rhythms",
  "Understand your triggers and anxiety",
];

const fourWeekFeel = [
  "Less overwhelmed",
  "More grounded and supported",
  "Increasingly confident",
  "More self-aware and regulated",
];

const eightWeekFocus = [
  "Build emotional steadiness",
  "Reduce self-doubt and overthinking",
  "Strengthen self-trust and decision-making",
];

const eightWeekFeel = [
  "Feel more anchored in your choices",
  "Respond instead of react",
  "Show up with greater consistency",
];

const twelveWeekFocus = [
  "Integrate what you\u2019ve learned",
  "Build internal calm and confidence",
  "Step into intentional motherhood",
];

const twelveWeekLeave = [
  "A strong sense of self",
  "Practical tools for long-term support",
  "The ability to navigate challenges with clarity and calm",
];

export default function BirthDebriefPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <ServicePageHero
        label="Birth & Motherhood"
        title="Birth Debrief & Early Motherhood Transition Support"
        subtitle="Holding space for women to process their birth story and feel safe in motherhood."
        accentColor="rose"
      />

      {/* Subtitle note */}
      <section className="bg-cream pb-0 pt-0">
        <div className="max-w-[1000px] mx-auto px-8 xl:px-12 text-center -mt-8 mb-12">
          <p className="text-rose font-medium italic text-lg">
            Trauma informed, non-clinical support
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BOX 1 & 2: Birth Debrief (side by side)
      ═══════════════════════════════════════════ */}
      <section className="section-padding bg-cream">
        <div ref={ref} className="max-w-[1200px] mx-auto px-8 xl:px-12">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Box 1: Birth Debrief */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-10 md:p-12 shadow-sm border border-rose/10"
            >
              <div className="w-14 h-14 bg-rose/10 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-rose" />
              </div>
              <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-semibold text-charcoal mb-2">
                Birth Debrief
              </h3>
              <p className="text-rose font-medium text-lg mb-6">
                Make sense of your experience
              </p>
              <div className="space-y-5 text-charcoal-light leading-relaxed text-lg">
                <p>
                  Every birth story carries meaning, emotion, and impact.
                  This is a safe space to process your experience and gently
                  bring understanding to what unfolded.
                </p>
                <p>
                  Together, we make sense of your story so you can move forward
                  with clarity, self-compassion, and emotional release.
                </p>
                <div className="bg-rose/5 rounded-xl p-6 border border-rose/10">
                  <p className="text-charcoal font-medium mb-2">Core transformation:</p>
                  <p className="italic text-charcoal-light">
                    My birth story is part of me — but it does not define me as a
                    mother. I feel grounded, clear, and more at peace with what has been.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Box 2: Birth Debrief Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-rose/5 rounded-3xl p-10 md:p-12 border border-rose/20"
            >
              <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-semibold text-charcoal mb-2">
                Birth Debrief Package
              </h3>
              <p className="font-[var(--font-playfair)] text-4xl font-semibold text-charcoal mb-2">
                $300 <span className="text-lg font-normal text-charcoal-light">AUD</span>
              </p>
              <p className="text-charcoal-light text-lg leading-relaxed mb-8">
                A supportive space to process your birth experience, gain clarity,
                and move forward with confidence.
              </p>
              <h4 className="text-charcoal font-medium text-lg mb-4">What&apos;s included:</h4>
              <ul className="space-y-3 mb-8">
                {[
                  "60\u201390 minute 1:1 birth debrief session",
                  "Personalised coaching summary",
                  "Follow-up phone call",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-charcoal-light text-lg">
                    <Check className="w-5 h-5 text-rose mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/book"
                className="px-8 py-4 bg-rose text-white rounded-full text-lg font-medium hover:bg-rose-dark transition-all duration-300 hover:shadow-xl hover:shadow-rose/20 hover:-translate-y-0.5 inline-block"
              >
                Book a Birth Debrief
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BOX 3: Early Motherhood Transition Support
      ═══════════════════════════════════════════ */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-[1000px] mx-auto px-8 xl:px-12">
          <ScrollReveal>
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-sm border border-sage/10 mb-16">
              <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-semibold text-charcoal mb-2 leading-tight">
                Early Motherhood Transition Support
              </h2>
              <p className="text-sage font-medium text-lg mb-8">
                Feel supported in what&apos;s unfolding
              </p>
              <div className="space-y-5 text-charcoal-light leading-relaxed text-lg">
                <p>
                  Motherhood is not always what you expected — which is why it can
                  feel destabilising.
                </p>
                <p>
                  You may be navigating feeding, settling, sleep deprivation,
                  emotional waves, and identity change all at once.
                </p>
                <p className="text-charcoal font-medium text-xl">
                  This is support for the now.
                </p>
                <p>
                  Together, we regulate overwhelm in real time, build confidence in
                  your responses, and help you begin trusting yourself as you grow
                  into this new season.
                </p>
                <p className="text-sage font-medium italic">
                  You can choose the level of support that feels right for you.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Package breakdown */}
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-12">
              <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-semibold text-charcoal mb-2">
                Early Motherhood Transition Support Packages
              </h3>
              <p className="text-charcoal-light text-lg">
                Recommended for babies aged 0&ndash;18 months
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="bg-sage/5 rounded-3xl p-8 md:p-12 border border-sage/10 mb-12">
              <h4 className="font-[var(--font-playfair)] text-xl font-semibold text-charcoal mb-3">
                Building Foundations
              </h4>
              <p className="text-sage font-medium mb-4">4, 8, or 12-week support options</p>
              <p className="text-charcoal-light text-lg leading-relaxed mb-4">
                Support designed to meet you where you are, helping you build
                confidence, clarity, and emotional stability over time.
              </p>
              <p className="text-charcoal-light text-lg leading-relaxed italic">
                Gently guided by the principles of the RESTORE Method, this work
                supports you toward calm, confident, and connected motherhood.
              </p>
            </div>
          </ScrollReveal>

          {/* 4 Weeks */}
          <ScrollReveal delay={0.2}>
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-sage/10 mb-8">
              <h4 className="font-[var(--font-playfair)] text-2xl font-semibold text-charcoal mb-1">
                4 Weeks · Reset &amp; Reconnect
              </h4>
              <p className="font-[var(--font-playfair)] text-xl text-charcoal italic mb-4">
                &ldquo;I don&apos;t feel like myself&hellip; and I don&apos;t know where to start.&rdquo;
              </p>
              <p className="text-charcoal font-medium mb-2">This is your starting point.</p>
              <p className="text-charcoal-light text-lg leading-relaxed mb-6">
                If you&apos;re feeling overwhelmed or disconnected, this support helps
                you reset practically, mentally, and emotionally — guiding you back
                toward a calm, grounded foundation.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-charcoal font-medium mb-3">Focus:</p>
                  <ul className="space-y-2">
                    {fourWeekFocus.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-charcoal-light text-base">
                        <Check className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-charcoal font-medium mb-3">You&apos;ll begin to feel:</p>
                  <ul className="space-y-2">
                    {fourWeekFeel.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-charcoal-light text-base">
                        <Check className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 8 Weeks */}
          <ScrollReveal delay={0.25}>
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-sage/10 mb-8">
              <h4 className="font-[var(--font-playfair)] text-2xl font-semibold text-charcoal mb-1">
                8 Weeks · Strengthen &amp; Stabilise
              </h4>
              <p className="font-[var(--font-playfair)] text-xl text-charcoal italic mb-4">
                &ldquo;I want to stop second-guessing everything and feel more steady in myself.&rdquo;
              </p>
              <p className="text-charcoal font-medium mb-2">This is where things begin to shift.</p>
              <p className="text-charcoal-light text-lg leading-relaxed mb-6">
                You&apos;ve started to reconnect — now we strengthen your inner stability
                so you can move through motherhood with more confidence and trust.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-charcoal font-medium mb-3">Focus:</p>
                  <ul className="space-y-2">
                    {eightWeekFocus.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-charcoal-light text-base">
                        <Check className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-charcoal font-medium mb-3">You&apos;ll begin to:</p>
                  <ul className="space-y-2">
                    {eightWeekFeel.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-charcoal-light text-base">
                        <Check className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 12 Weeks */}
          <ScrollReveal delay={0.3}>
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-sage/10 mb-12">
              <h4 className="font-[var(--font-playfair)] text-2xl font-semibold text-charcoal mb-1">
                12 Weeks · Integrate &amp; Embody
              </h4>
              <p className="font-[var(--font-playfair)] text-xl text-charcoal italic mb-4">
                &ldquo;I want to feel calm, confident, and capable in motherhood, not just get through it.&rdquo;
              </p>
              <p className="text-charcoal font-medium mb-2">This is the full integration.</p>
              <p className="text-charcoal-light text-lg leading-relaxed mb-6">
                You&apos;re no longer just coping — you&apos;re embodying a calmer, more
                confident version of yourself.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-charcoal font-medium mb-3">Focus:</p>
                  <ul className="space-y-2">
                    {twelveWeekFocus.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-charcoal-light text-base">
                        <Check className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-charcoal font-medium mb-3">You&apos;ll leave with:</p>
                  <ul className="space-y-2">
                    {twelveWeekLeave.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-charcoal-light text-base">
                        <Check className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Pricing Summary */}
          <ScrollReveal delay={0.35}>
            <div className="bg-sage/5 rounded-3xl p-10 md:p-12 border border-sage/20 text-center">
              <h4 className="font-[var(--font-playfair)] text-2xl font-semibold text-charcoal mb-2">
                Building Foundations Packages
              </h4>
              <p className="text-charcoal-light text-lg mb-6">
                Choose the level of support that feels right for your current season:
              </p>
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {[
                  { weeks: "4 Weeks", price: "$1,250 AUD" },
                  { weeks: "8 Weeks", price: "$1,948 AUD" },
                  { weeks: "12 Weeks", price: "$2,565 AUD" },
                ].map((pkg, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-sage/10">
                    <p className="text-sage font-medium text-lg">{pkg.weeks}</p>
                    <p className="font-[var(--font-playfair)] text-2xl font-semibold text-charcoal">{pkg.price}</p>
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light text-base mb-8">
                Sessions are available online or in-person, depending on what feels
                most supportive for you. In-person sessions are available across Lake
                Macquarie, Newcastle, and the Hunter region.
              </p>
              <Link
                href="/contact"
                className="px-10 py-5 bg-sage text-white rounded-full text-lg font-medium hover:bg-sage-dark transition-all duration-300 hover:shadow-xl hover:shadow-sage/20 hover:-translate-y-0.5 inline-block"
              >
                Enquire / Book Now
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
