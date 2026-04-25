"use client";

import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Heart,
  Baby,
  Sparkles,
  Star,
  Crown,
  GraduationCap,
  HandHeart,
  Zap,
  Check,
  Phone,
} from "lucide-react";

/* ────────────────────────────────────────────── */
/*  Early Motherhood Coaching Packages            */
/* ────────────────────────────────────────────── */
const motherhoodPackages = [
  {
    title: "4 Weeks · Reset & Reconnect",
    priceInPerson: "$1,250 AUD",
    priceOnline: "$1,050 AUD",
    description:
      "A foundational reset to help you feel more grounded, supported, and clear in early motherhood.",
    tagline:
      "I don\u2019t feel like myself\u2026 and I don\u2019t know where to start.",
    Icon: Baby,
    popular: false,
  },
  {
    title: "8 Weeks · Strengthen & Stabilise",
    priceInPerson: "$1,948 AUD",
    priceOnline: "$1,568 AUD",
    description:
      "Build emotional steadiness, reduce overwhelm, and strengthen confidence in your parenting responses.",
    tagline:
      "I want to stop second-guessing everything and feel more steady in myself.",
    Icon: Sparkles,
    popular: true,
  },
  {
    title: "12 Weeks · Integrate & Embody",
    priceInPerson: "$2,565 AUD",
    priceOnline: "$2,025 AUD",
    description:
      "Deepen your internal calm, trust yourself more fully, and integrate lasting change into daily motherhood life.",
    tagline:
      "I want to feel calm, confident, and capable in motherhood\u2014not just get through it.",
    Icon: Crown,
    popular: false,
  },
];

const sharedInclusions = [
  "Restore Journal (your guided reflection companion)",
  "Birth Debrief session",
  "Weekly 1:1 coaching sessions (in-home or online)",
  "Personalised support tailored to you and your child\u2019s needs",
  "Additional sessions available at a reduced rate",
];

export default function CoachingPackagesPage() {
  const motherhoodRef = useRef(null);
  const motherhoodInView = useInView(motherhoodRef, {
    once: true,
    margin: "-80px",
  });

  return (
    <>
      <ServicePageHero
        label="Packages"
        title="Coaching Packages"
        subtitle="Explore each option with clear inclusions and support levels, so you can choose what feels right for your current season."
      />

      {/* ═══════════════════════════════════════
          BIRTH DEBRIEF
      ═══════════════════════════════════════ */}
      <section className="py-14 md:py-20 bg-warm-white">
        <div className="max-w-[900px] mx-auto px-8 xl:px-12">
          <ScrollReveal>
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-sm border border-rose/15 hover:shadow-xl transition-all duration-500">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-14 h-14 bg-rose/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-7 h-7 text-rose" />
                </div>
                <div>
                  <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-semibold text-charcoal">
                    Birth Debrief
                  </h3>
                  <p className="text-rose-dark text-lg font-medium mt-1">
                    $300 AUD
                  </p>
                </div>
              </div>
              <p className="text-charcoal-light text-lg leading-relaxed mb-8">
                A supportive space to process your birth experience, gain
                clarity, and move forward with emotional grounding as you enter
                motherhood.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "60\u201390 minute 1:1 birth debrief session",
                  "Personalised coaching summary",
                  "Follow-up phone call",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-charcoal-light text-lg"
                  >
                    <Check className="w-5 h-5 text-sage flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book"
                  className="px-8 py-4 bg-sage text-white rounded-full text-base font-medium hover:bg-sage-dark transition-all duration-300 hover:shadow-lg hover:shadow-sage/20 hover:-translate-y-0.5 text-center"
                >
                  Book a Session
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-sage text-sage rounded-full text-base font-medium hover:bg-sage hover:text-white transition-all duration-300 text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          EARLY MOTHERHOOD COACHING PACKAGES
      ═══════════════════════════════════════ */}
      <section className="py-14 md:py-20 bg-cream">
        <div className="max-w-[1400px] mx-auto px-8 xl:px-12">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-semibold text-charcoal mb-4 leading-tight">
                Early Motherhood Coaching Packages
              </h2>
              <div className="decorative-line" />
              <p className="mt-6 text-charcoal-light max-w-3xl mx-auto leading-relaxed text-xl">
                Choose the level of support that meets you where you are in your
                motherhood journey.
              </p>
            </div>
          </ScrollReveal>

          <div
            ref={motherhoodRef}
            className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto mb-12"
          >
            {motherhoodPackages.map((pkg, i) => {
              const IconComponent = pkg.Icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={motherhoodInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className={`relative bg-white rounded-3xl p-8 md:p-10 shadow-sm border hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col ${
                    pkg.popular
                      ? "border-sage/40 ring-2 ring-sage/20"
                      : "border-sage/10"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-sage text-white text-sm font-medium rounded-full">
                      Most Popular
                    </div>
                  )}
                  <div className="w-14 h-14 bg-sage/10 rounded-2xl flex items-center justify-center mb-5">
                    <IconComponent className="w-7 h-7 text-sage" />
                  </div>
                  <h3 className="font-[var(--font-playfair)] text-xl md:text-2xl font-semibold text-charcoal mb-3">
                    {pkg.title}
                  </h3>
                  <div className="bg-sage/5 rounded-xl p-4 mb-4 space-y-1">
                    <div className="flex justify-between text-base">
                      <span className="text-charcoal-light">In-person:</span>
                      <span className="font-semibold text-charcoal">
                        {pkg.priceInPerson}
                      </span>
                    </div>
                    <div className="flex justify-between text-base">
                      <span className="text-charcoal-light">Online:</span>
                      <span className="font-semibold text-charcoal">
                        {pkg.priceOnline}
                      </span>
                    </div>
                  </div>
                  <p className="text-charcoal-light text-base mb-4 leading-relaxed">
                    {pkg.description}
                  </p>
                  <p className="text-charcoal italic text-sm mb-6 font-[var(--font-playfair)] flex-1">
                    &ldquo;{pkg.tagline}&rdquo;
                  </p>
                  <Link
                    href="/book"
                    className="mt-auto px-8 py-4 bg-sage text-white rounded-full text-base font-medium hover:bg-sage-dark transition-all duration-300 hover:shadow-lg hover:shadow-sage/20 hover:-translate-y-0.5 text-center block"
                  >
                    Book a Clarity Call
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Shared inclusions */}
          <ScrollReveal delay={0.2}>
            <div className="max-w-[800px] mx-auto bg-sage/5 rounded-3xl p-8 md:p-12 border border-sage/10">
              <h4 className="font-[var(--font-playfair)] text-xl font-semibold text-charcoal mb-6 text-center">
                All Early Motherhood packages include:
              </h4>
              <div className="space-y-3">
                {sharedInclusions.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-charcoal-light text-lg"
                  >
                    <Check className="w-5 h-5 text-sage flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sage text-sm font-medium mt-6 text-center">
                Flexible payment options available
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          RESTORE CONFIDENT PARENTING PROGRAM (PRIMARY)
      ═══════════════════════════════════════ */}
      <section className="py-14 md:py-20 bg-warm-white">
        <div className="max-w-[900px] mx-auto px-8 xl:px-12">
          <ScrollReveal>
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-sm border-2 border-sage/30 ring-2 ring-sage/10 hover:shadow-xl transition-all duration-500 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-sage text-white text-sm font-medium rounded-full">
                Primary Program
              </div>
              <div className="flex items-start gap-5 mb-2">
                <div className="w-14 h-14 bg-sage/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-7 h-7 text-sage" />
                </div>
                <div>
                  <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-semibold text-charcoal">
                    Restore Confident Parenting Program
                  </h3>
                  <p className="text-charcoal-light text-base mt-1 italic">
                    7-Week Program + Integration Session
                  </p>
                </div>
              </div>
              <p className="text-charcoal-light text-lg leading-relaxed mt-6 mb-8">
                A guided transformation to help you move from overwhelm into
                grounded confidence as a parent.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Restore Journal and pen (your guided reflection companion)",
                  "Restore Confident Parenting Manual",
                  "7 weekly coaching sessions",
                  "1 integration session (one month later)",
                  "Personalised coaching email summary",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-charcoal-light text-lg"
                  >
                    <Check className="w-5 h-5 text-sage flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-sage/5 rounded-xl p-5 mb-8">
                <p className="text-charcoal font-semibold text-xl">
                  $2,090 AUD
                </p>
                <p className="text-sage text-sm font-medium mt-1">
                  Flexible payment options available
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book"
                  className="px-8 py-4 bg-sage text-white rounded-full text-base font-medium hover:bg-sage-dark transition-all duration-300 hover:shadow-lg hover:shadow-sage/20 hover:-translate-y-0.5 text-center"
                >
                  Start Your Journey
                </Link>
                <Link
                  href="/book"
                  className="px-8 py-4 border-2 border-sage text-sage rounded-full text-base font-medium hover:bg-sage hover:text-white transition-all duration-300 text-center"
                >
                  Book a Clarity Call
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          RESTORE ONGOING SUPPORT
      ═══════════════════════════════════════ */}
      <section className="py-14 md:py-20 bg-cream">
        <div className="max-w-[900px] mx-auto px-8 xl:px-12">
          <ScrollReveal>
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-sm border border-sage/15 hover:shadow-xl transition-all duration-500">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-14 h-14 bg-sage/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <HandHeart className="w-7 h-7 text-sage" />
                </div>
                <div>
                  <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-semibold text-charcoal">
                    Restore Ongoing Support
                  </h3>
                  <p className="text-sage font-medium text-lg mt-1">
                    From $550 AUD/month
                  </p>
                </div>
              </div>
              <p className="text-charcoal-light text-lg leading-relaxed mb-3">
                For parents and individuals who want continued support and integration as life unfolds.
              </p>
              <p className="text-charcoal-light text-lg leading-relaxed mb-8">
                Ongoing coaching tailored to your needs, offering consistent
                guidance as you navigate parenting and personal growth.
              </p>
              <p className="text-sage font-medium text-base mb-4">
                May include:
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "1 x 60\u201375 minute monthly 1:1 coaching session",
                  "Weekly structured check-in",
                  "Email/messaging support (48-hour response time)",
                  "Emotional regulation + real-life integration support",
                  "Priority booking for additional sessions",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-charcoal-light text-lg"
                  >
                    <Check className="w-5 h-5 text-sage flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/book"
                className="px-8 py-4 bg-sage text-white rounded-full text-base font-medium hover:bg-sage-dark transition-all duration-300 hover:shadow-lg hover:shadow-sage/20 hover:-translate-y-0.5 inline-block"
              >
                Enquire About Ongoing Support
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ONE-OFF COACHING SESSION
      ═══════════════════════════════════════ */}
      <section className="py-14 md:py-20 bg-warm-white">
        <div className="max-w-[900px] mx-auto px-8 xl:px-12">
          <ScrollReveal>
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-sm border border-sage/15 hover:shadow-xl transition-all duration-500">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-14 h-14 bg-rose/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-7 h-7 text-rose" />
                </div>
                <div>
                  <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-semibold text-charcoal">
                    One-Off Coaching Session
                  </h3>
                  <p className="text-rose-dark text-lg font-medium mt-1">
                    $300 AUD
                  </p>
                </div>
              </div>
              <p className="text-charcoal-light text-lg leading-relaxed mb-8">
                A focused session for clarity, breakthrough, or support in a
                specific area.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "60\u201390 minute 1:1 coaching session",
                  "Personalised coaching summary",
                  "Follow-up support",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-charcoal-light text-lg"
                  >
                    <Check className="w-5 h-5 text-sage flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/book"
                className="px-8 py-4 bg-sage text-white rounded-full text-base font-medium hover:bg-sage-dark transition-all duration-300 hover:shadow-lg hover:shadow-sage/20 hover:-translate-y-0.5 inline-block"
              >
                Book a Session
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          NOT SURE WHERE TO START?
      ═══════════════════════════════════════ */}
      <section className="py-14 md:py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-8 xl:px-12 text-center">
          <ScrollReveal>
            <div className="bg-sage/5 rounded-3xl p-10 md:p-14 border border-sage/10">
              <Phone className="w-10 h-10 text-sage mx-auto mb-6" />
              <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-semibold text-charcoal mb-4">
                Not sure where to start?
              </h3>
              <p className="text-charcoal font-medium text-xl mb-3">
                You don&apos;t have to figure it out alone.
              </p>
              <p className="text-charcoal-light text-lg leading-relaxed mb-8">
                Together, we&apos;ll find the level of support that feels right
                for you in this season.
              </p>
              <Link
                href="/book"
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
