"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, UserCheck, Brain, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Birth Debrief & Motherhood Support",
    desc: "Process your birth story, release guilt and overwhelm, and feel safe stepping into motherhood.",
    href: "/services/birth-debrief",
    Icon: Heart,
    color: "rose" as const,
  },
  {
    title: "Parent Coaching",
    desc: "One on one support to help you parent with calm, clarity, and confidence at every stage.",
    href: "/services/parent-coaching",
    Icon: Users,
    color: "sage" as const,
  },
  {
    title: "Life Coaching",
    desc: "Mindset, identity, limiting beliefs, and breakthrough coaching for personal growth.",
    href: "/services/life-coaching",
    Icon: UserCheck,
    color: "rose" as const,
  },
  {
    title: "Emotional Intelligence Coaching",
    desc: "EQ assessment and coaching to strengthen how you lead, relate, and respond.",
    href: "/services/eq-coaching",
    Icon: Brain,
    color: "taupe" as const,
  },
];

const colorStyles = {
  sage: { bg: "bg-sage/10", text: "text-sage", hover: "hover:border-sage/30" },
  rose: { bg: "bg-rose/10", text: "text-rose", hover: "hover:border-rose/30" },
  taupe: { bg: "bg-taupe/10", text: "text-taupe", hover: "hover:border-taupe/30" },
};

export default function HomeServicesPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-warm-white">
      <div className="max-w-[1600px] mx-auto px-8 xl:px-12">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-sage tracking-[0.3em] uppercase text-base mb-4 font-medium">
              How I Can Help
            </p>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal mb-4 leading-tight">
              Services Offered
            </h2>
            <div className="decorative-line" />
            <p className="mt-8 text-charcoal-light max-w-3xl mx-auto leading-relaxed text-xl">
              All coaching services are available in a format that works best for
              you and your family.
            </p>
          </div>
        </ScrollReveal>

        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1400px] mx-auto"
        >
          {services.map((service, i) => {
            const IconComponent = service.Icon;
            const styles = colorStyles[service.color];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6 }}
              >
                <Link
                  href={service.href}
                  className={`group block bg-white rounded-3xl p-10 shadow-sm border border-sage/10 ${styles.hover} hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full`}
                >
                  <div
                    className={`w-16 h-16 ${styles.bg} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <IconComponent className={`w-8 h-8 ${styles.text}`} />
                  </div>
                  <h3 className="font-[var(--font-playfair)] text-2xl font-semibold text-charcoal mb-4">
                    {service.title}
                  </h3>
                  <p className="text-charcoal-light text-lg leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <span
                    className={`inline-flex items-center gap-2 ${styles.text} font-medium text-base group-hover:gap-3 transition-all duration-300`}
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
