"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const restoreLetters = [
  { letter: "R", word: "Reflect", desc: "Begin with self awareness and clarity" },
  { letter: "E", word: "Explore", desc: "Discover your values and what matters most" },
  { letter: "S", word: "Soothe", desc: "Regulate your nervous system and find calm" },
  { letter: "T", word: "Trust", desc: "Build confidence in your parenting instincts" },
  { letter: "O", word: "Optimise", desc: "Focus your energy on what truly works" },
  { letter: "R", word: "Respond", desc: "React with intention, not overwhelm" },
  { letter: "E", word: "Evolve", desc: "Grow into the parent you want to be" },
];

export default function RestoreMethod() {
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
            <p className="mt-8 text-charcoal-light max-w-3xl mx-auto leading-relaxed text-xl">
              A trauma-informed approach that supports women through birth,
              motherhood, and parenting. This guides every step of the Restore
              Motherhood Journey.
            </p>
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
