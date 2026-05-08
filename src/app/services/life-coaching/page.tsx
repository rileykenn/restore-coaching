"use client";

import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Compass, Zap, Lightbulb, Calendar, Check } from "lucide-react";

const offerings = [
  {
    Icon: Compass,
    title: "Ongoing Life Coaching",
    desc: "Regular, structured support for mindset shifts, identity work, and breaking through limiting beliefs. We work together over time to support your growth, helping you step into the version of yourself you\u2019re becoming.",
    price: "From $550 AUD/month",
    inclusions: [
      "Tailored support with frequency of sessions based on your level of need",
      "Structured sessions to help you grow and integrate change over time",
      "Ongoing email support between sessions",
      "Personalised action plans and reflections",
    ],
  },
  {
    Icon: Zap,
    title: "One-Off Coaching Session",
    desc: "A single, focused session designed for a quick breakthrough. Perfect when you need clarity, perspective, or support around a specific challenge or decision.",
    price: "$300 AUD",
    inclusions: [
      "60-minute 1:1 coaching session",
      "Personalised coaching summary",
      "Follow-up phone call",
    ],
  },
];

export default function LifeCoachingPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <ServicePageHero
        label="Life Coaching"
        title="Restore Life Coaching"
        subtitle="Whether you're seeking ongoing support or a single breakthrough moment, life coaching is here to help you move forward with purpose and clarity."
        accentColor="rose"
      />

      {/* Offerings */}
      <section className="py-12 md:py-16 px-8 bg-warm-white">
        <div className="max-w-[1600px] mx-auto px-8 xl:px-12">
          <div ref={ref} className="grid md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
            {offerings.map((item, i) => {
              const IconComponent = item.Icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-sage/10 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-rose/10 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-rose" />
                  </div>
                  <h3 className="font-[var(--font-playfair)] text-2xl font-semibold text-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="font-[var(--font-playfair)] text-2xl font-semibold text-charcoal mb-4">
                    {item.price}
                  </p>
                  <p className="text-charcoal-light text-lg leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  <ul className="space-y-3">
                    {item.inclusions.map((inc, j) => (
                      <li key={j} className="flex items-start gap-3 text-charcoal-light text-base">
                        <Check className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Topics covered */}
          <ScrollReveal delay={0.3}>
            <div className="mt-10 max-w-[800px] mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Lightbulb className="w-6 h-6 text-sage" />
                <p className="text-sage font-medium text-lg">
                  Areas we can explore together
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Mindset",
                  "Identity",
                  "Limiting Beliefs",
                  "Life Transitions",
                  "Confidence",
                  "Clarity & Direction",
                  "Personal Growth",
                  "Self Awareness",
                  "Relationships",
                ].map((topic) => (
                  <span
                    key={topic}
                    className="px-5 py-2.5 bg-sage/10 text-sage-dark text-base rounded-full font-medium"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Booking CTA */}
          <ScrollReveal delay={0.4}>
            <div className="mt-10 max-w-[600px] mx-auto text-center">
              <div className="bg-sage/5 rounded-3xl p-8 md:p-10 border border-sage/10">
                <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-sage" />
                </div>
                <h3 className="font-[var(--font-playfair)] text-2xl font-semibold text-charcoal mb-3">
                  Ready to start?
                </h3>
                <p className="text-charcoal-light text-lg mb-8">
                  Book a 30-minute Clarity Call and let&apos;s explore which
                  coaching option is right for you.
                </p>
                <Link
                  href="/book"
                  className="px-10 py-5 bg-sage text-white rounded-full text-lg font-medium hover:bg-sage-dark transition-all duration-300 hover:shadow-xl hover:shadow-sage/20 hover:-translate-y-0.5 inline-block"
                >
                  Book a Clarity Call
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
