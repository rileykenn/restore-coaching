"use client";

import { motion } from "framer-motion";

interface ServicePageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  accentColor?: "sage" | "rose" | "taupe";
}

export default function ServicePageHero({
  label,
  title,
  subtitle,
  accentColor = "sage",
}: ServicePageHeroProps) {
  const colorMap = {
    sage: "text-sage",
    rose: "text-rose",
    taupe: "text-taupe",
  };

  return (
    <section className="relative bg-cream pt-36 pb-20 overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-sage/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-rose/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <p
            className={`${colorMap[accentColor]} tracking-[0.3em] uppercase text-base mb-4 font-medium`}
          >
            {label}
          </p>
          <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal mb-4 leading-tight max-w-4xl mx-auto">
            {title}
          </h1>
          <div className="decorative-line" />
          {subtitle && (
            <p className="mt-8 text-charcoal-light max-w-3xl mx-auto leading-relaxed text-xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
