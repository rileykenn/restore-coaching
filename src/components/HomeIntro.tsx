"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function HomeIntro() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-[1600px] mx-auto px-8 xl:px-12">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6 text-charcoal-light leading-relaxed text-xl">
              <p className="text-2xl text-charcoal font-medium font-[var(--font-playfair)]">
                Hi, I&apos;m Lil, founder of Restore Coaching.
              </p>
              <p>
                I created this work from my own journey of learning how to
                parent with more calm, clarity, and intention.
              </p>
              <p>
                Now, as a certified coach with a background in midwifery, I
                guide parents to break reactive cycles and build confident,
                connected relationships with their children.
              </p>
              <p className="font-medium text-charcoal italic font-[var(--font-playfair)] text-2xl">
                Because motherhood isn&apos;t just about having a baby&mdash;it&apos;s
                about who you become, how you show up, and how your family grows
                along the way.
              </p>
            </div>
            <div className="mt-10">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sage font-medium text-lg hover:gap-3 transition-all duration-300"
              >
                Read more →
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
