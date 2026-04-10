"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const restoreLetters = [
  { letter: "R", word: "Recognise", desc: "Become aware of your thoughts, emotions, and behavioural patterns." },
  { letter: "E", word: "Explore", desc: "Understand the beliefs and drivers influencing how you show up." },
  { letter: "S", word: "Shift", desc: "Begin to change unhelpful patterns and choose new, intentional responses." },
  { letter: "T", word: "Transform", desc: "Strengthen new ways of thinking, feeling, and behaving." },
  { letter: "O", word: "Own", desc: "Take responsibility for how you show up in your life and relationships." },
  { letter: "R", word: "Reinforce", desc: "Embed new patterns through consistent action and repetition." },
  { letter: "E", word: "Embody", desc: "Live with greater awareness, intention, and alignment." },
];

export default function RestoreMethodUniversal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-warm-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-[0.06]">
        <Image
          src="/media/media4.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 xl:px-12">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-sage tracking-[0.3em] uppercase text-base mb-4 font-medium">
              The Methodology
            </p>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal mb-4 leading-tight">
              The RESTORE Method
            </h2>
            <div className="decorative-line" />
            <div className="mt-8 text-charcoal-light max-w-3xl mx-auto leading-relaxed text-xl space-y-4">
              <p>
                The Restore Coaching methodology helps individuals develop greater self-awareness,
                strengthen emotional intelligence, and intentionally shape how they show up in life,
                relationships, and parenting.
              </p>
              <p>
                It provides a clear, structured pathway for moving from autopilot patterns to
                intentional, aligned living.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* RESTORE Acronym */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
          {restoreLetters.map((item, i) => (
            <motion.div
              key={`${item.word}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-sage/10 hover:border-sage/30 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-sage/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-sage/20 transition-colors duration-300">
                <span className="text-3xl font-[var(--font-playfair)] font-bold text-sage">
                  {item.letter}
                </span>
              </div>
              <h3 className="font-[var(--font-playfair)] text-2xl font-semibold text-charcoal mb-3">
                {item.word}
              </h3>
              <p className="text-base text-charcoal-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
