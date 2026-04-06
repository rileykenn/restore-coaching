"use client";


import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Compass, Battery, Brain, Target, HeartHandshake, Star, Sparkles } from "lucide-react";

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
    title: "Who Am I Raising?",
    restoreWord: "Explore",
    desc: "Shift your focus from managing behaviour to intentionally raising an independent, resilient, and secure child.",
    outcome: "Parent with purpose, not just reaction.",
    Icon: Compass,
  },
  {
    week: "Week 3",
    title: "Where Are My Efforts Going?",
    restoreWord: "Soothe",
    desc: "Explore where your time, energy, and attention are being spent and what's actually effective.",
    outcome:
      "Let go of draining patterns and focus on what truly supports you and your child.",
    Icon: Battery,
  },
  {
    week: "Week 4",
    title: "Staying Calm in the Moment",
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
    title: "Strengthening My Relationships",
    restoreWord: "Optimise",
    desc: "Deepen understanding of emotional connection and its impact on your child.",
    outcome:
      "Build a secure, trusting relationship that supports behaviour, emotional safety, and wellbeing.",
    Icon: HeartHandshake,
  },
  {
    week: "Week 7",
    title: "Parenting for the Long-Term",
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
    <div className="bg-warm-white py-12">
      <div className="max-w-[1600px] mx-auto px-8 xl:px-12">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-semibold text-charcoal mb-2">
              Week by Week Breakdown
            </h3>
            <p className="text-charcoal-light text-lg">
              Click each week to explore what you&apos;ll work through
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion Weeks + Illustration Side by Side */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">
          {/* Left: Accordion Weeks */}
          <div className="space-y-4">
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
  );
}
