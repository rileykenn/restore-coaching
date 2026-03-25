"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, GraduationCap, Brain, HandHeart } from "lucide-react";

const stages = [
  {
    num: "01",
    title: "Birth Debrief & Early Motherhood Support",
    tagline: "Make sense of your beginning.",
    desc: [
      "Supporting you in the early days after birth to gently process your experience and transition into motherhood.",
      "This is where we begin, making sense of your birth story, releasing any guilt, disappointment, or overwhelm, and helping you feel more grounded, safe, and supported as you step into life with your baby.",
      "Together, we create space for reflection, emotional healing, and a steady foundation so you can move forward with clarity and confidence.",
    ],
    color: "rose",
    Icon: Heart,
  },
  {
    num: "02",
    title: "Restore Confident Parenting",
    subtitle: "7 Week Program + Integration Session",
    tagline: "Lead your child with calm, clarity, and confidence.",
    desc: [
      "As your baby grows into a more active and aware little human, parenting can begin to feel overwhelming or uncertain.",
      "This stage focuses on you, your emotional patterns, triggers, and responses, so you can show up as the parent you want to be.",
      "As you shift, your child shifts too. Old patterns begin to fall away, and new, more effective ways of responding take their place, creating greater connection, emotional safety, and long term resilience.",
      "This is where you begin to lead your parenting, rather than feel led by your child's behaviour.",
    ],
    color: "sage",
    Icon: GraduationCap,
  },
  {
    num: "03",
    title: "Restore EQ Assessment & Coaching",
    tagline: "Transform how you show up.",
    desc: [
      "As parenting deepens, so does the need for self awareness.",
      "This stage focuses on you, your behavioural and emotional patterns so you can understand what your 'default' mode is and learn where you need to lift. With new self awareness you can begin to intentionally show up as the parent you truly want to be.",
      "Using EQ assessment and coaching, we uncover what behaviours are being under utilised so you can build your capacity for greater balance in your emotional intelligence, regulation, and intentional response.",
      "The result is a powerful ripple effect: when you shift and lift your own emotional intelligence so too will your child as you increase your capacity for greater connection, emotional safety, and long term resilience.",
    ],
    color: "taupe",
    Icon: Brain,
  },
  {
    num: "04",
    title: "Ongoing Support: Restore Parent & Life Coaching",
    tagline: "Support when you need it most.",
    desc: [
      "Parenting doesn't follow a perfect timeline, and neither should support.",
      "This flexible, ongoing coaching option is available at any stage of your parenting journey. Whether you're navigating a specific challenge or wanting deeper, long term growth, you'll have access to guidance, perspective, and practical support when you need it.",
      "We continue working together for as long as you need, supporting you through both immediate challenges and long term transformation.",
    ],
    color: "sage",
    Icon: HandHeart,
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
            {stages.map((stage, i) => {
              const IconComponent = stage.Icon;
              return (
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
                    <div className="flex items-start gap-4 mb-4">
                      <IconComponent className={`w-8 h-8 flex-shrink-0 mt-1 ${
                        stage.color === "rose"
                          ? "text-rose"
                          : stage.color === "sage"
                            ? "text-sage"
                            : "text-taupe"
                      }`} />
                      <div>
                        <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-semibold text-charcoal">
                          {stage.title}
                        </h3>
                        {stage.subtitle && (
                          <p className="text-sage text-base font-medium mt-1">
                            {stage.subtitle}
                          </p>
                        )}
                      </div>
                    </div>
                    <p className={`text-lg font-medium italic mb-6 ${
                      stage.color === "rose"
                        ? "text-rose-dark"
                        : stage.color === "sage"
                          ? "text-sage-dark"
                          : "text-charcoal-light"
                    }`}>
                      {stage.tagline}
                    </p>
                    <div className="space-y-4">
                      {stage.desc.map((paragraph, j) => (
                        <p key={j} className="text-charcoal-light leading-relaxed text-lg">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing quote */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-20 max-w-4xl mx-auto">
            <div className="bg-white/80 rounded-3xl p-10 md:p-14 border border-sage/10 shadow-sm">
              <p className="font-[var(--font-playfair)] text-2xl md:text-3xl text-charcoal italic leading-relaxed">
                When you know who you are as a parent, you can lead your child from a place of abundance, not overwhelm.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
