"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, ArrowRight } from "lucide-react";

const featuredTestimonials = [
  {
    quote:
      "Thanks to Lil at Restore Coaching, I've learned how to communicate with my kids calmly and effectively without ever needing to raise my voice. The tools I've gained have made a world of difference in our family dynamics.",
    name: "Rachael",
    stars: 5,
  },
  {
    quote:
      "Working with Lil in the Confident Parenting Program has been truly transformative for me as a parent. She gave me a practical, easy-to-follow framework that I could actually use in real-life moments.",
    name: "Katie",
    stars: 5,
  },
  {
    quote:
      "This program has dramatically changed my outlook on parenting a toddler. I now feel I have a much better understanding of my role and place in the parent child relationship, and a greater sense that this too shall pass!",
    name: "Emily",
    stars: 5,
  },
];

export default function HomeTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredTestimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-warm-white">
      <div className="max-w-[1600px] mx-auto px-8 xl:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sage tracking-[0.3em] uppercase text-base mb-4 font-medium">
              Client Experiences
            </p>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal mb-4 leading-tight">
              Real shifts. Real families. Real change.
            </h2>
            <div className="decorative-line" />
            <p className="mt-6 text-charcoal-light max-w-3xl mx-auto text-xl leading-relaxed">
              From reactive patterns to confident, connected parenting
            </p>
            <p className="mt-3 text-charcoal-light max-w-3xl mx-auto text-lg">
              These are the kinds of shifts people experience through RESTORE Coaching:
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-10 md:p-14 shadow-lg border border-sage/10 text-center"
          >
            <div className="flex justify-center gap-1.5 mb-8">
              {[...Array(featuredTestimonials[currentIndex].stars)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
              ))}
            </div>

            <blockquote className="font-[var(--font-playfair)] text-xl md:text-2xl text-charcoal italic leading-relaxed mb-8">
              &ldquo;{featuredTestimonials[currentIndex].quote}&rdquo;
            </blockquote>

            <p className="text-sage font-semibold text-lg">
              {featuredTestimonials[currentIndex].name}
            </p>
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {featuredTestimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-sage w-10"
                    : "bg-sage/20 w-3 hover:bg-sage/40"
                }`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* See All Link */}
          <div className="text-center mt-10">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-sage font-medium text-lg hover:gap-3 transition-all duration-300"
            >
              Read All Testimonials <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
