"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stages = [
  {
    num: "01",
    title: "Birth Debrief & Early Motherhood Support",
    desc: "Supporting you in the early days after birth to process your experience and gently transition into motherhood. This is where we begin, making sense of your birth story, releasing guilt or overwhelm, and helping you feel more grounded, safe, and supported as you step into life with your baby.",
    color: "rose",
  },
  {
    num: "02",
    title: "Restore Confident Parenting",
    subtitle: "7 week program + Integration Session",
    desc: "As your baby grows into a more active, aware little human, parenting can begin to feel overwhelming or uncertain. This program supports you to parent in a way that feels calm, confident, and effective while fostering independence, resilience, and emotional security in your child.",
    color: "sage",
  },
  {
    num: "03",
    title: "Restore EQ Assessment & Coaching",
    desc: "As parenting deepens, so does the need for self awareness. This stage focuses on you, your emotional patterns, triggers, and responses, so you can show up as the parent you want to be. The result is a ripple effect: when you shift, your child benefits through greater connection, emotional safety, and long term resilience.",
    color: "taupe",
  },
];

export default function ParentingPathway() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journey" className="section-padding bg-cream relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/4 w-1/3 opacity-10">
        <Image
          src="/media/media5.png"
          alt=""
          width={600}
          height={600}
          className="w-full h-auto"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 xl:px-12">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-sage tracking-[0.3em] uppercase text-base mb-4 font-medium">
              Your Journey
            </p>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal mb-4 leading-tight">
              The Restore Parenting Pathway
            </h2>
            <div className="decorative-line" />
            <p className="mt-8 text-charcoal-light max-w-3xl mx-auto leading-relaxed text-xl">
              I support women and families through a natural progression, from
              birth, to early parenting, to emotionally aware motherhood. Each
              stage builds on the next.
            </p>
          </div>
        </ScrollReveal>

        <div ref={ref} className="max-w-[1000px] mx-auto relative">
          {/* Vertical line connector */}
          <div className="absolute left-10 md:left-14 top-0 bottom-0 w-px bg-gradient-to-b from-rose via-sage to-taupe hidden md:block" />

          <div className="space-y-10">
            {stages.map((stage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.25, duration: 0.7, ease: "easeOut" }}
                className="relative pl-0 md:pl-28"
              >
                {/* Number badge */}
                <div
                  className={`hidden md:flex absolute left-0 top-8 w-20 h-20 rounded-full items-center justify-center text-white font-[var(--font-playfair)] text-2xl font-bold shadow-lg ${
                    stage.color === "rose"
                      ? "bg-rose"
                      : stage.color === "sage"
                        ? "bg-sage"
                        : "bg-taupe"
                  }`}
                >
                  {stage.num}
                </div>

                <div className="bg-white rounded-3xl p-10 md:p-12 shadow-sm border border-sage/10 hover:shadow-xl transition-all duration-500">
                  <div
                    className={`inline-flex md:hidden px-4 py-1.5 rounded-full text-white text-base font-bold mb-5 ${
                      stage.color === "rose"
                        ? "bg-rose"
                        : stage.color === "sage"
                          ? "bg-sage"
                          : "bg-taupe"
                    }`}
                  >
                    Stage {stage.num}
                  </div>
                  <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-semibold text-charcoal mb-3">
                    {stage.title}
                  </h3>
                  {stage.subtitle && (
                    <p className="text-sage text-base font-medium mb-4">
                      {stage.subtitle}
                    </p>
                  )}
                  <p className="text-charcoal-light leading-relaxed text-lg">
                    {stage.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
