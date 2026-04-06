"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Thanks to Linley at Restore Coaching, I've learned how to communicate with my kids calmly and effectively without ever needing to raise my voice. The tools I've gained have made a world of difference in our family dynamics.",
    name: "Rachael",
    stars: 5,
  },
  {
    quote:
      "Restore taught me that I can't change others, but I can change myself. By managing my own behaviour and expectations, it has helped create a peaceful and harmonious atmosphere in my family.",
    name: "Yuli",
    stars: 5,
  },
  {
    quote:
      "This program has dramatically changed my outlook on parenting a toddler. I often used to feel defeated and powerless in dealing with my toddler's difficult emotions, but now I feel I have a much better understanding of my role and place in the parent child relationship, and a greater sense that this too shall pass!",
    name: "Emily",
    stars: 5,
  },
  {
    quote:
      "For years, shame controlled my reactions to my child. Whenever he misbehaved, I felt exposed, as if his behaviour confirmed my deepest fear, that I wasn't good enough as a parent. Restore Coaching has been the first program that truly helped me shift that pattern. Instead of focusing on my child's behaviour, I was guided to understand how my own emotions and responses were at the heart of the issue. Now, I feel more confident and empowered. My relationship with my child has transformed, and I finally feel like I'm the parent I always wanted to be.",
    name: "Anonymous",
    stars: 5,
  },
  {
    quote:
      "I've learned to set boundaries with my children by recognising that their happiness is not my responsibility. Understanding that they are in charge of their own happiness has been liberating. By offering them choices, I empower them to take ownership of their lives and well being.",
    name: "Skye",
    stars: 5,
  },
  {
    quote:
      "I recently completed Linley's Emotional Intelligence coaching course, and it honestly helped me so much. She helped me understand how to manage my emotions and deal with difficult personalities at work, which has been life changing. I've stopped relying on others to treat me differently and now I approach work with calm and confidence. Highly recommend it to anyone wanting to grow personally and emotionally.",
    name: "Leanne",
    stars: 5,
  },
  {
    quote:
      "Working with Linley in the Confident Parenting Program has been truly transformative for me as a parent. She gave me a practical, easy-to-follow framework that I could actually use in real-life moments. One of the most valuable things Linley helped me recognise was what is within my control as a parent. That shift alone was incredibly empowering. Most importantly, this experience has brought genuine healing to my relationship with my child. I now feel equipped to support my children while also encouraging their independence, resilience, and problem-solving skills.",
    name: "Katie",
    stars: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-32 pb-20 md:pb-28 px-8 bg-warm-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-0 bottom-0 w-1/3 opacity-8">
        <Image
          src="/media/media6.png"
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
              What Others Say
            </p>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal mb-4 leading-tight">
              Transforming Families
            </h2>
            <div className="decorative-line" />
          </div>
        </ScrollReveal>

        {/* Featured Testimonial */}
        <div ref={ref} className="max-w-4xl mx-auto mb-16">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-10 md:p-14 shadow-lg border border-sage/10 text-center"
          >
            {/* Stars */}
            <div className="flex justify-center gap-1.5 mb-8">
              {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
              ))}
            </div>

            <blockquote className="font-[var(--font-playfair)] text-xl md:text-2xl text-charcoal italic leading-relaxed mb-8">
              &ldquo;{testimonials[currentIndex].quote}&rdquo;
            </blockquote>

            <p className="text-sage font-semibold text-lg">
              {testimonials[currentIndex].name}
            </p>
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
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
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`bg-white/80 rounded-2xl p-8 border border-sage/10 hover:shadow-lg transition-all duration-300 ${
                i === currentIndex ? "ring-2 ring-sage/30" : ""
              }`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-charcoal-light text-base leading-relaxed line-clamp-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-4 text-sage text-base font-semibold">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
