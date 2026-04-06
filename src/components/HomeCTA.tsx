"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function HomeCTA() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-[1600px] mx-auto px-8 xl:px-12">
        <ScrollReveal>
          <div className="bg-white/80 rounded-3xl p-12 md:p-20 border border-sage/10 shadow-sm text-center max-w-4xl mx-auto">
            <p className="text-sage tracking-[0.3em] uppercase text-base mb-4 font-medium">
              Take the First Step
            </p>
            <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-semibold text-charcoal mb-6 leading-tight">
              Ready to begin your{" "}
              <span className="text-sage">journey?</span>
            </h2>
            <div className="decorative-line" />
            <p className="mt-8 text-charcoal-light max-w-2xl mx-auto leading-relaxed text-xl mb-10">
              Whether you&apos;re navigating the early days of parenthood, looking
              for support with your parenting, or wanting to understand your
              emotional intelligence, I&apos;m here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/contact"
                className="px-10 py-5 bg-sage text-white rounded-full text-lg font-medium hover:bg-sage-dark transition-all duration-300 hover:shadow-xl hover:shadow-sage/20 hover:-translate-y-0.5"
              >
                Book a Call
              </Link>
              <Link
                href="/services"
                className="px-10 py-5 border-2 border-sage text-sage rounded-full text-lg font-medium hover:bg-sage hover:text-white transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
