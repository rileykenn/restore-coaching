"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-cream"
    >
      {/* Subtle background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-transparent to-cream-dark/30" />

      {/* Decorative floating circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-sage/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 xl:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-screen py-36">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-sage tracking-[0.3em] uppercase text-base mb-6 font-medium"
            >
              Midwife, Parent &amp; Life Coach
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-[var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-semibold text-charcoal leading-[1.15] mb-10"
            >
              Helping you move from
              <span className="text-sage"> survival mode</span> to feeling
              <span className="text-rose"> safe, confident</span>, and{" "}
              <span className="text-sage">connected</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl text-charcoal-light leading-relaxed mb-12 max-w-2xl"
            >
              Supporting women and families through the emotional journey of
              parenthood. From birth story healing to confident, emotionally
              aware parenting.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link
                href="/services"
                className="px-10 py-5 bg-sage text-white rounded-full text-lg font-medium hover:bg-sage-dark transition-all duration-300 hover:shadow-xl hover:shadow-sage/20 hover:-translate-y-0.5 text-center"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="px-10 py-5 border-2 border-sage text-sage rounded-full text-lg font-medium hover:bg-sage hover:text-white transition-all duration-300 text-center"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-6 bg-gradient-to-br from-sage/20 via-transparent to-rose/20 rounded-full blur-2xl" />
              <div className="relative w-[22rem] h-[22rem] md:w-[28rem] md:h-[28rem] lg:w-[34rem] lg:h-[34rem] rounded-full overflow-hidden border-4 border-white/60 shadow-2xl">
                <Image
                  src="/media/media3.png"
                  alt="Mother and child watercolor illustration"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-7 h-12 border-2 border-sage/40 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-sage rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
