"use client";

import Image from "next/image";
import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";
import ScrollReveal from "@/components/ScrollReveal";
import RestoreMethod from "@/components/RestoreMethod";
import BeforeAfter from "@/components/BeforeAfter";
import ProgramWeeks from "@/components/ProgramWeeks";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { GraduationCap, HandHeart, ArrowDown } from "lucide-react";

const subServices = [
  {
    id: "program",
    title: "The Program",
    subtitle: "Restore Confident Parenting",
    detail: "7 Week Program + Integration Session",
    detail2: "Guided by the RESTORE Method",
    Icon: GraduationCap,
    color: "sage" as const,
  },
  {
    id: "ongoing",
    title: "Monthly Ongoing Support",
    subtitle: "Restore Parent Coaching",
    detail: "",
    detail2: "",
    Icon: HandHeart,
    color: "sage" as const,
  },
];

const colorStyles = {
  sage: { bg: "bg-sage/10", text: "text-sage", border: "border-sage/30", activeBg: "bg-sage" },
};

export default function ParentCoachingPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeTab, setActiveTab] = useState("program");

  return (
    <>
      <ServicePageHero
        label="Parent Coaching"
        title="Parent Coaching"
        subtitle="One on one support to help you parent with calm, clarity, and confidence."
      />

      {/* 3 Sub-Service Tabs */}
      <section className="bg-warm-white py-12">
        <div className="max-w-[1200px] mx-auto px-8 xl:px-12">
          <div
            ref={ref}
            className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto"
          >
            {subServices.map((service, i) => {
              const IconComponent = service.Icon;
              const styles = colorStyles[service.color];
              const isActive = activeTab === service.id;
              return (
                <motion.button
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  onClick={() => {
                    setActiveTab(service.id);
                    const el = document.getElementById(`section-${service.id}`);
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className={`text-left rounded-3xl p-8 md:p-10 border transition-all duration-500 hover:-translate-y-1 ${
                    isActive
                      ? `${styles.border} shadow-xl bg-white`
                      : "border-sage/10 bg-white/60 hover:border-sage/20 shadow-sm"
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                      isActive ? `${styles.activeBg} text-white` : styles.bg
                    }`}
                  >
                    <IconComponent className={`w-7 h-7 ${isActive ? "text-white" : styles.text}`} />
                  </div>
                  <h3 className="font-[var(--font-playfair)] text-xl font-semibold text-charcoal mb-1">
                    {service.title}
                  </h3>
                  <p className={`text-base font-medium ${styles.text}`}>
                    {service.subtitle}
                  </p>
                  {service.detail && (
                    <p className="text-charcoal-light text-sm mt-2">
                      {service.detail}
                    </p>
                  )}
                  {service.detail2 && (
                    <p className="text-sage italic text-sm">
                      {service.detail2}
                    </p>
                  )}
                  {isActive && (
                    <div className="flex items-center gap-1 mt-4 text-sage text-sm font-medium">
                      <ArrowDown className="w-4 h-4" /> View below
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 1: Restore Confident Parenting
      ═══════════════════════════════════════════ */}
      <section id="section-program" className="section-padding bg-cream">
        <div className="max-w-[1000px] mx-auto px-8 xl:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-semibold text-charcoal mb-4 leading-tight">
                Restore Confident Parenting
              </h2>
              <p className="text-sage font-medium text-lg">
                7 Week Program + Integration Session · Guided by the RESTORE Method
              </p>
              <div className="decorative-line" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="space-y-6 text-charcoal-light leading-relaxed text-lg mb-16">
              <p className="text-xl text-charcoal font-medium">
                Lead your child with calm, clarity, and confidence&mdash;no matter their age or stage.
              </p>
              <p className="text-sage font-medium italic">
                Parent coaching with Restore starts here.
              </p>
              <p>
                This is the foundation every parent needs&mdash;but few are ever shown.
                The good news? It&apos;s never too late to build it.
              </p>
              <p>
                When parenting starts to feel overwhelming, the answer isn&apos;t doing
                more&mdash;it&apos;s becoming more aware. This program helps you understand
                your patterns, triggers, and responses so you can show up with intention.
              </p>
              <p>
                As you shift, your child shifts. Patterns change, connection deepens,
                and emotional safety grows.
              </p>
              <p className="font-medium text-charcoal">
                This is where you begin to lead your parenting, rather than feel led
                by your child&apos;s behaviour.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Pathway Diagram */}
        <div className="max-w-[1600px] mx-auto px-8 xl:px-12">
          <ScrollReveal delay={0.15}>
            <div className="mb-16 rounded-2xl overflow-hidden shadow-lg border border-sage/10">
              <Image
                src="/SRSDiagramPosterSize.png"
                alt="Restore Confident Parenting 7 week program pathway visual showing the RESTORE Method journey from Reflect through Evolve"
                width={1400}
                height={450}
                className="w-full h-auto"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Week-by-week Accordion */}
        <ProgramWeeks />
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: Ongoing Support
      ═══════════════════════════════════════════ */}
      <section id="section-ongoing" className="section-padding bg-warm-white">
        <div className="max-w-[1000px] mx-auto px-8 xl:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-semibold text-charcoal mb-4 leading-tight">
                Ongoing Support: Restore Parent & Life Coaching
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
                    Support when you need it most.
                  </p>
                </div>
              </div>
              <div className="space-y-5 text-charcoal-light leading-relaxed text-lg">
                <p>
                  Parenting doesn&apos;t follow a perfect timeline, and neither should support.
                </p>
                <p>
                  This flexible, ongoing coaching option is available at any stage
                  of your parenting journey. Whether you&apos;re navigating a specific
                  challenge or wanting deeper, long term growth, you&apos;ll have
                  access to guidance, perspective, and practical support when you
                  need it.
                </p>
                <p>
                  We continue working together for as long as you need, supporting
                  you through both immediate challenges and long term transformation.
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


      {/* ═══════════════════════════════════════════
          RESTORE Method + Before/After Shift
      ═══════════════════════════════════════════ */}
      <RestoreMethod />
      <BeforeAfter />
    </>
  );
}
