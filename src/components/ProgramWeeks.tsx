"use client";


import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Compass, Battery, Brain, Target, HeartHandshake, Star, Sparkles } from "lucide-react";

const weeks = [
  {
    week: "Week 1",
    title: "You become clear and anchored",
    restoreWord: "Recognise",
    desc: "You reconnect with what truly matters, your values, your vision, and the kind of parent you want to be.",
    outcome:
      "Instead of comparing or second-guessing yourself, you begin to feel grounded and guided by what's true for you.",
    Icon: Leaf,
  },
  {
    week: "Week 2",
    title: "You become intentional and aware",
    restoreWord: "Explore",
    desc: "You start to see your child and yourself with fresh eyes.",
    outcome: "With deeper awareness of your patterns and influence, you begin parenting with purpose, not autopilot.",
    Icon: Compass,
  },
  {
    week: "Week 3",
    title: "You become focused and energised",
    restoreWord: "Shift",
    desc: "You let go of the patterns that drain you and pull you off course.",
    outcome:
      "Your time, energy, and attention begin to align with what actually supports connection, growth, and resilience.",
    Icon: Battery,
  },
  {
    week: "Week 4",
    title: "You become calm and responsive in the moment",
    restoreWord: "Transform",
    desc: "You understand your triggers and learn how to regulate your nervous system.",
    outcome: "Instead of reacting in overwhelm, you begin responding with intention, steadiness, and clarity.",
    Icon: Brain,
  },
  {
    week: "Week 5",
    title: "You become empowered and grounded",
    restoreWord: "Own",
    desc: "You release the weight of what was never yours to carry.",
    outcome:
      "By focusing on what is within your control, you feel lighter, clearer, and more confident in how you show up each day.",
    Icon: Target,
  },
  {
    week: "Week 6",
    title: "You become deeply connected",
    restoreWord: "Reinforce",
    desc: "You strengthen the emotional connection with your child in a way that feels natural and secure.",
    outcome:
      "Your child experiences you as safe, consistent, and understanding, and your relationship becomes a place of trust.",
    Icon: HeartHandshake,
  },
  {
    week: "Week 7",
    title: "You become consistent and confident",
    restoreWord: "Embody",
    desc: "This is where it all comes together.",
    outcome:
      "You move beyond insight into a way of parenting that feels steady, aligned, and sustainable, no matter what stage you're in.",
    Icon: Star,
  },
  {
    week: "1 Month Later",
    title: "You become supported for the long-term",
    restoreWord: "Integrate",
    desc: "You return with real-life experience, refine what's working, and strengthen what's still growing.",
    outcome:
      "You continue forward feeling supported, capable, and confident to navigate whatever comes next.",
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
            <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-semibold text-charcoal mb-4">
              Restore Confident Parenting Journey
            </h3>
            <p className="text-charcoal-light text-lg max-w-2xl mx-auto leading-relaxed">
              This isn&apos;t about learning more strategies. It&apos;s about
              becoming the parent you already have the capacity to be.
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
