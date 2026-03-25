"use client";

import ScrollReveal from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Compass, Zap } from "lucide-react";

const offerings = [
  {
    Icon: Compass,
    title: "Monthly Ongoing Life Coaching",
    desc: "Regular, structured support for mindset shifts, identity exploration, and overcoming limiting beliefs. We work together on an ongoing basis to help you grow into the person you want to be.",
  },
  {
    Icon: Zap,
    title: "One Off Coaching Session",
    desc: "A single, focused session designed for a quick breakthrough. Perfect when you need clarity, perspective, or support around a specific challenge or decision.",
  },
];

export default function LifeCoaching() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="life-coaching" className="section-padding bg-cream">
      <div className="max-w-[1600px] mx-auto px-8 xl:px-12">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-rose tracking-[0.3em] uppercase text-base mb-4 font-medium">
              Life Coaching
            </p>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal mb-4 leading-tight">
              Restore Life Coaching
            </h2>
            <div className="decorative-line" />
            <p className="mt-8 text-charcoal-light max-w-3xl mx-auto leading-relaxed text-xl">
              Whether you&apos;re looking for ongoing support or a single breakthrough moment,
              life coaching is here to help you move forward with purpose and clarity.
            </p>
          </div>
        </ScrollReveal>

        <div ref={ref} className="grid md:grid-cols-2 gap-10 max-w-[1000px] mx-auto">
          {offerings.map((item, i) => {
            const IconComponent = item.Icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="bg-white rounded-3xl p-10 md:p-12 shadow-sm border border-sage/10 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-rose/10 rounded-2xl flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-rose" />
                </div>
                <h3 className="font-[var(--font-playfair)] text-2xl font-semibold text-charcoal mb-4">
                  {item.title}
                </h3>
                <p className="text-charcoal-light text-lg leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Topics covered */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 max-w-[800px] mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Lightbulb className="w-6 h-6 text-sage" />
              <p className="text-sage font-medium text-lg">Areas we can explore together</p>
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
      </div>
    </section>
  );
}
