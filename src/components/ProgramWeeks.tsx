"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Sprout, Battery, Brain, Target, HeartHandshake, Star, Sparkles } from "lucide-react";

const weeks = [
  {
    week: "Week 1",
    title: "Foundations. What Matters Most",
    restoreWord: "Reflect",
    desc: "Clarify your values, your parenting vision, and what truly matters to you.",
    outcome:
      "Stop comparing, stop second guessing, and begin parenting in alignment with your values.",
    Icon: Leaf,
  },
  {
    week: "Week 2",
    title: "Growing Independence. What Am I Raising?",
    restoreWord: "Explore",
    desc: "Shift your focus from managing behaviour to intentionally raising an independent, resilient, and secure child.",
    outcome: "Parent with purpose, not just reaction.",
    Icon: Sprout,
  },
  {
    week: "Week 3",
    title: "Energy. Where Is It All Going?",
    restoreWord: "Soothe",
    desc: "Explore where your time, energy, and attention are being spent and what's actually effective.",
    outcome:
      "Let go of draining patterns and focus on what truly supports you and your child.",
    Icon: Battery,
  },
  {
    week: "Week 4",
    title: "Self Regulation. Staying Calm in the Moment",
    restoreWord: "Trust",
    desc: "Understand your triggers and learn to regulate your nervous system during challenging moments.",
    outcome: "Respond with intention instead of reacting in overwhelm.",
    Icon: Brain,
  },
  {
    week: "Week 5",
    title: "What's In My Control?",
    restoreWord: "Respond",
    desc: "Learn to distinguish between what is within your control and what isn't, so you can parent effectively without unnecessary stress.",
    outcome:
      "Gain clarity, empowerment, and the ability to let go of unproductive worry or pressure.",
    Icon: Target,
  },
  {
    week: "Week 6",
    title: "Connection. Strengthening Your Relationship",
    restoreWord: "Optimise",
    desc: "Deepen understanding of emotional connection and its impact on your child.",
    outcome:
      "Build a secure, trusting relationship that supports behaviour, emotional safety, and wellbeing.",
    Icon: HeartHandshake,
  },
  {
    week: "Week 7",
    title: "The Bigger Picture. Parenting for the Long Term",
    restoreWord: "Evolve",
    desc: "Step out of quick fixes and into a grounded, long term approach to parenting.",
    outcome:
      "Navigate challenges with confidence and resilience as your child grows.",
    Icon: Star,
  },
  {
    week: "1 Month Later",
    title: "Integration Session",
    restoreWord: "Integrate",
    desc: "Reflect, integrate, and refine your learning to continue applying your newfound confidence, clarity, and emotional awareness.",
    outcome:
      "Ongoing support to parent with intention and connection as new challenges arise.",
    Icon: Sparkles,
  },
];

export default function ProgramWeeks() {
  const [openWeek, setOpenWeek] = useState<number | null>(0);

  return (
    <section className="section-padding bg-warm-white">
      <div className="max-w-[1600px] mx-auto px-8 xl:px-12">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-sage tracking-[0.3em] uppercase text-base mb-4 font-medium">
              The Program
            </p>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal mb-4 leading-tight">
              Restore Confident Parenting
            </h2>
            <p className="text-charcoal-light text-xl">
              7 Week Program + Integration Session
            </p>
            <div className="decorative-line" />
            <p className="mt-6 text-sage font-medium italic text-lg">
              Guided by the RESTORE Method™
            </p>
          </div>
        </ScrollReveal>

        {/* Pathway Image */}
        <ScrollReveal delay={0.1}>
          <div className="mb-20 rounded-2xl overflow-hidden shadow-lg border border-sage/10">
            <Image
              src="/media/pathway.png"
              alt="Restore Confident Parenting 7 week program pathway visual showing the RESTORE Method journey from Reflect through Evolve"
              width={1400}
              height={450}
              className="w-full h-auto"
              priority
            />
          </div>
        </ScrollReveal>

        {/* Accordion Weeks */}
        <div className="max-w-[900px] mx-auto space-y-4">
          {weeks.map((week, i) => {
            const IconComponent = week.Icon;
            return (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    openWeek === i
                      ? "border-sage/40 shadow-lg bg-white"
                      : "border-sage/10 bg-white/60 hover:border-sage/20"
                  }`}
                >
                  <button
                    onClick={() => setOpenWeek(openWeek === i ? null : i)}
                    className="w-full flex items-center gap-5 p-6 text-left"
                  >
                    <div className="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-sage" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sage text-base font-medium block">
                        {week.week}{" "}
                        <span className="text-rose-dark">· {week.restoreWord}</span>
                      </span>
                      <span className="font-[var(--font-playfair)] text-xl text-charcoal font-medium">
                        {week.title}
                      </span>
                    </div>
                    <motion.span
                      animate={{ rotate: openWeek === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-sage text-2xl flex-shrink-0"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {openWeek === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-0 border-t border-sage/10">
                          <p className="text-charcoal-light mt-5 leading-relaxed text-lg">
                            {week.desc}
                          </p>
                          <div className="mt-5 bg-sage/5 rounded-xl p-5">
                            <p className="text-base text-sage-dark">
                              <strong className="text-sage">Outcome:</strong>{" "}
                              {week.outcome}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
