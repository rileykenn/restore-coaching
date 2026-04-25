"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ServicePageHero from "@/components/ServicePageHero";
import BeforeAfter from "@/components/BeforeAfter";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Compass, Battery, Brain, Target, HeartHandshake, Star, Sparkles, HandHeart, Check } from "lucide-react";

const weeks = [
  {
    week: "Week 1",
    restoreWord: "Recognise",
    title: "Reconnect with your values, your vision, and the parent you want to be.",
    outcome: "You begin to feel grounded and clear in what matters most.",
    Icon: Leaf,
  },
  {
    week: "Week 2",
    restoreWord: "Explore",
    title: "Build awareness of your patterns and responses.",
    outcome: "Parenting shifts from autopilot into conscious awareness.",
    Icon: Compass,
  },
  {
    week: "Week 3",
    restoreWord: "Shift",
    title: "Release patterns that drain your energy and create disconnection.",
    outcome: "Begin aligning with calm, connection, and resilience.",
    Icon: Battery,
  },
  {
    week: "Week 4",
    restoreWord: "Transform",
    title: "Strengthen your ability to regulate in real time.",
    outcome: "Move from overwhelm into clarity and steadiness.",
    Icon: Brain,
  },
  {
    week: "Week 5",
    restoreWord: "Own",
    title: "Let go of guilt, pressure, and expectations that are not yours to carry.",
    outcome: "Step into more confidence in how you show up.",
    Icon: Target,
  },
  {
    week: "Week 6",
    restoreWord: "Reinforce",
    title: "Strengthen emotional connection through everyday interactions.",
    outcome: "Build consistency, trust, and emotional safety.",
    Icon: HeartHandshake,
  },
  {
    week: "Week 7",
    restoreWord: "Embody",
    title: "Live the shift with greater confidence and consistency in daily parenting.",
    outcome: "",
    Icon: Star,
  },
  {
    week: "1 Month Later",
    restoreWord: "Integrate",
    title: "Ongoing support to embed change into real life and strengthen new patterns as challenges arise.",
    outcome: "",
    Icon: Sparkles,
  },
];

export default function ParentCoachingPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <ServicePageHero
        label="Parent Coaching"
        title="Parent Coaching"
        subtitle="One-to-one support to help you move from reactive patterns into calm, confident, and connected parenting."
      />

      {/* ═══════════════════════════════════════════
          PRIMARY BOX: Restore Confident Parenting
      ═══════════════════════════════════════════ */}
      <section className="section-padding bg-cream">
        <div className="max-w-[1000px] mx-auto px-8 xl:px-12">
          <ScrollReveal>
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-sm border border-sage/10">
              <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-semibold text-charcoal mb-2 leading-tight">
                Restore Confident Parenting
              </h2>
              <p className="text-sage font-medium text-lg mb-8">
                7-Week Transformational Program + Integration Session
              </p>

              <div className="space-y-5 text-charcoal-light leading-relaxed text-lg">
                <p className="text-sage font-medium italic">
                  Parent coaching with RESTORE begins here.
                </p>
                <p>
                  This structured program helps you understand the patterns driving
                  your reactions&mdash;your triggers, emotional responses, and automatic
                  behaviours&mdash;so you can begin responding with greater awareness
                  and intention in everyday parenting moments.
                </p>
                <p className="text-charcoal font-medium">
                  As this awareness builds, real change begins to show up at home:
                </p>
                <ul className="space-y-3 ml-2">
                  {[
                    "more pause instead of reaction",
                    "calmer communication",
                    "emotionally safer interactions with your child",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  Over time, behaviour softens, connection deepens, and parenting
                  feels more intentional and less overwhelming.
                </p>
                <p>
                  A guided manual supports you in moving from reactive parenting into
                  calm, confident, emotionally regulated responses&mdash;giving you
                  practical tools for real-life moments.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          Program Detail + Journey
      ═══════════════════════════════════════════ */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-[1000px] mx-auto px-8 xl:px-12">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-semibold text-charcoal mb-4 leading-tight">
                Restore Confident Parenting
              </h2>
              <div className="decorative-line" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="space-y-5 text-charcoal-light leading-relaxed text-lg mb-16 max-w-3xl mx-auto">
              <p>
                Within the RESTORE Confident Parenting Journey, each step builds
                your awareness, strengthens emotional regulation, and supports
                lasting change in how you show up in parenting.
              </p>
              <p>
                This program is guided by a structured manual developed by
                psychologist Dr Jenny Brown, who has over 30 years&apos; experience
                working with families since the 1980s.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* New Pathway Diagram */}
        <div className="max-w-[1600px] mx-auto px-8 xl:px-12">
          <ScrollReveal delay={0.15}>
            <div className="mb-16 rounded-2xl overflow-hidden shadow-lg border border-sage/10">
              <Image
                src="/FinalWebsiteSRSDiagram.png"
                alt="Restore Confident Parenting Journey — a structured pathway from awareness to confident, embodied parenting: Recognise, Explore, Shift, Transform, Own, Reinforce, Embody"
                width={1400}
                height={450}
                className="w-full h-auto"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Week-by-week as static boxes */}
        <div className="bg-warm-white py-12">
          <div className="max-w-[1600px] mx-auto px-8 xl:px-12">
            <ScrollReveal>
              <div className="text-center mb-14">
                <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-semibold text-charcoal mb-4">
                  Restore Confident Parenting Journey
                </h3>
                <p className="text-charcoal-light text-lg max-w-2xl mx-auto leading-relaxed">
                  This isn&apos;t about learning more strategies. It&apos;s about
                  becoming the parent you already have the capacity to be.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">
              {/* Left: Week boxes */}
              <div ref={ref} className="space-y-4">
                {weeks.map((week, i) => {
                  const IconComponent = week.Icon;
                  return (
                    <ScrollReveal key={i} delay={i * 0.05}>
                      <div className="border rounded-2xl overflow-hidden border-sage/10 bg-white shadow-sm">
                        <div className="flex items-center gap-5 p-6">
                          <div className="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-sage" />
                          </div>
                          <div className="flex-1">
                            <span className="text-sage text-base font-medium block">
                              {week.week}{" "}
                              <span className="text-rose-dark">· {week.restoreWord}</span>
                            </span>
                            <span className="font-[var(--font-playfair)] text-lg text-charcoal font-medium">
                              {week.title}
                            </span>
                          </div>
                        </div>
                        {week.outcome && (
                          <div className="px-6 pb-6 pt-0">
                            <div className="bg-sage/5 rounded-xl p-5">
                              <p className="text-base text-sage-dark">
                                {week.outcome}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>

              {/* Right: Decorative illustration */}
              <ScrollReveal delay={0.2}>
                <div className="hidden lg:block sticky top-32">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-br from-sage/10 to-rose/10 rounded-3xl blur-xl" />
                    <Image
                      src="/media/media1.png"
                      alt="Nurturing mother and child illustration"
                      width={500}
                      height={625}
                      className="relative w-full h-auto rounded-2xl"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Pricing Box */}
        <div className="max-w-[700px] mx-auto px-8 xl:px-12 mt-12">
          <ScrollReveal delay={0.2}>
            <div className="bg-sage/5 rounded-3xl p-10 md:p-12 border border-sage/20 text-center">
              <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-semibold text-charcoal mb-2">
                Restore Confident Parenting
              </h3>
              <p className="text-sage font-medium text-lg mb-6">
                7-Week Transformational Program + Integration Session
              </p>
              <ul className="space-y-3 text-charcoal-light text-lg mb-6 text-left max-w-md mx-auto">
                {[
                  "Structured, guided coaching using the RESTORE framework",
                  "Psychologist-informed, manual-based process",
                  "Focus on emotional regulation, awareness, and parenting responses",
                  "Integration session to support real-life application",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-[var(--font-playfair)] text-4xl font-semibold text-charcoal mb-6">
                $2,090 <span className="text-lg font-normal text-charcoal-light">AUD</span>
              </p>
              <Link
                href="/book"
                className="px-10 py-5 bg-sage text-white rounded-full text-lg font-medium hover:bg-sage-dark transition-all duration-300 hover:shadow-xl hover:shadow-sage/20 hover:-translate-y-0.5 inline-block"
              >
                Book Program
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          Ongoing Parent Coaching (full-width section)
      ═══════════════════════════════════════════ */}
      <section className="section-padding bg-cream">
        <div className="max-w-[1000px] mx-auto px-8 xl:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-semibold text-charcoal mb-4 leading-tight">
                Ongoing Parent Coaching
              </h2>
              <div className="decorative-line" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-sm border border-sage/10">
              <div className="flex items-start gap-4 mb-6">
                <HandHeart className="w-8 h-8 text-sage flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sage-dark text-lg font-medium italic">
                    Continued support as you integrate and live the RESTORE work
                  </p>
                </div>
              </div>
              <div className="space-y-5 text-charcoal-light leading-relaxed text-lg">
                <p>
                  After completing the Restore Confident Parenting program, many
                  parents choose to continue with ongoing support as they apply the
                  work in real-life parenting situations.
                </p>
                <p>
                  Parenting doesn&apos;t follow a perfect timeline, and neither should support.
                </p>
                <p>
                  This flexible coaching option is available at any stage of your
                  parenting journey. Whether you&apos;re navigating a specific
                  challenge or wanting deeper, long-term growth, you&apos;ll have
                  access to guidance, perspective, and practical support when you
                  need it.
                </p>
                <p>
                  We continue working together for as long as you need, supporting
                  both immediate challenges and long-term transformation.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="px-10 py-5 bg-sage text-white rounded-full text-lg font-medium hover:bg-sage-dark transition-all duration-300 hover:shadow-xl hover:shadow-sage/20 hover:-translate-y-0.5 inline-block"
              >
                Enquire About Ongoing Support
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <BeforeAfter />
    </>
  );
}
