"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, UserCheck, Brain, ArrowRight, MapPin, Home, Monitor, Phone } from "lucide-react";

const services = [
  {
    title: "Parent Coaching",
    desc: "One-to-one support to help you move from reactive patterns into calm, confident parenting so you can respond with clarity and connection through every stage of your child\u2019s development.",
    href: "/services/parent-coaching",
    Icon: Users,
    color: "sage" as const,
  },
  {
    title: "Birth Debrief & Early Motherhood Transition Support",
    desc: "Process your birth experience, release guilt and overwhelm, and feel supported as you move through early motherhood and identity change.",
    href: "/services/birth-debrief",
    Icon: Heart,
    color: "rose" as const,
  },
  {
    title: "Emotional Intelligence Coaching",
    desc: "Build self-awareness, strengthen emotional regulation, and shift how you respond under pressure so you can relate more calmly and intentionally.",
    href: "/services/eq-coaching",
    Icon: Brain,
    color: "taupe" as const,
  },
  {
    title: "Life Coaching",
    desc: "Explore mindset, identity, and limiting beliefs so you can create meaningful change and live with greater clarity, confidence, and alignment.",
    href: "/services/life-coaching",
    Icon: UserCheck,
    color: "rose" as const,
  },
];

const deliveryMethods = [
  { Icon: MapPin, label: "In-person" },
  { Icon: Home, label: "In-home support" },
  { Icon: Monitor, label: "Online sessions" },
  { Icon: Phone, label: "Phone coaching" },
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
          <div className="text-center mb-12">
            <p className="text-sage tracking-[0.3em] uppercase text-base mb-4 font-medium">
              How I Can Support You
            </p>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal mb-4 leading-tight">
              How I Can Support You
            </h2>
            <div className="decorative-line" />
            <p className="mt-8 text-charcoal-light max-w-3xl mx-auto leading-relaxed text-xl">
              Helping you restore how you show up in life, relationships, and parenting.
            </p>
            <p className="mt-4 text-charcoal-light max-w-3xl mx-auto leading-relaxed text-lg">
              I offer in-person sessions across Lake Macquarie, Newcastle, and the Hunter,
              with in-home visits available for motherhood support. Online and phone coaching
              is also available across Australia and New Zealand.
            </p>
          </div>
        </ScrollReveal>

        {/* Delivery Method Icons */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-8 mb-16 max-w-[800px] mx-auto">
            {deliveryMethods.map((method, i) => {
              const IconComponent = method.Icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2.5 text-charcoal-light"
                >
                  <div className="w-10 h-10 bg-sage/10 rounded-xl flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-sage" />
                  </div>
                  <span className="text-base font-medium">{method.label}</span>
                </motion.div>
              );
            })}
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
