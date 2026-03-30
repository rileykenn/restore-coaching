"use client";

import ScrollReveal from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Video, Home, UserCheck, UsersRound } from "lucide-react";

const services = [
  {
    title: "Parent Coaching",
    desc: "One on one support to help you parent with calm, clarity, and confidence.",
    delivery: ["Online sessions", "Face to face sessions", "In home visits"],
    Icon: Users,
    color: "sage",
  },
  {
    title: "Life Coaching",
    desc: "Mindset, identity, limiting beliefs, and breakthrough coaching for personal growth.",
    delivery: ["Online sessions", "Face to face sessions", "Phone sessions"],
    Icon: UserCheck,
    color: "rose",
  },
  {
    title: "Emotional Intelligence Coaching",
    desc: "EQ assessment and coaching to strengthen how you lead, relate, and respond.",
    delivery: ["Online sessions", "Face to face sessions"],
    Icon: UsersRound,
    color: "taupe",
  },
];

const programDelivery = [
  { Icon: Video, label: "Online" },
  { Icon: Home, label: "Face to face in office" },
  { Icon: UserCheck, label: "Individual" },
  { Icon: Users, label: "With your co parent" },
  { Icon: UsersRound, label: "In a group with friends" },
];

export default function ServicesOffered() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-warm-white">
      <div className="max-w-[1600px] mx-auto px-8 xl:px-12">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-sage tracking-[0.3em] uppercase text-base mb-4 font-medium">
              How We Work Together
            </p>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal mb-4 leading-tight">
              Services Offered
            </h2>
            <div className="decorative-line" />
            <p className="mt-8 text-charcoal-light max-w-3xl mx-auto leading-relaxed text-xl">
              All coaching services are available in a format that works best for you and your family.
            </p>
          </div>
        </ScrollReveal>

        {/* Service Cards */}
        <div ref={ref} className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto mb-20">
          {services.map((service, i) => {
            const IconComponent = service.Icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="bg-white rounded-3xl p-10 shadow-sm border border-sage/10 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  service.color === "sage" ? "bg-sage/10" : service.color === "rose" ? "bg-rose/10" : "bg-taupe/10"
                }`}>
                  <IconComponent className={`w-8 h-8 ${
                    service.color === "sage" ? "text-sage" : service.color === "rose" ? "text-rose" : "text-taupe"
                  }`} />
                </div>
                <h3 className="font-[var(--font-playfair)] text-2xl font-semibold text-charcoal mb-4">
                  {service.title}
                </h3>
                <p className="text-charcoal-light text-lg leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className="space-y-2">
                  {service.delivery.map((method, j) => (
                    <div key={j} className="flex items-center gap-3 text-sage-dark text-base">
                      <div className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                      <span>{method}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Restore Confident Parenting delivery options */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-[900px] mx-auto bg-sage/5 rounded-3xl p-10 md:p-12 border border-sage/10">
            <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-semibold text-charcoal mb-3 text-center">
              Restore Confident Parenting Program
            </h3>
            <p className="text-charcoal-light text-lg text-center mb-8">
              This program can be completed in a way that suits your lifestyle:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {programDelivery.map((item, i) => {
                const IconComponent = item.Icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                    className="flex flex-col items-center text-center gap-3"
                  >
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-sage/10">
                      <IconComponent className="w-6 h-6 text-sage" />
                    </div>
                    <span className="text-charcoal-light text-base font-medium">
                      {item.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
