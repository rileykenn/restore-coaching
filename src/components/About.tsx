"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="section-padding bg-warm-white">
      <div className="max-w-[1600px] mx-auto px-8 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image - Linley's photo placeholder */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-sage/10 to-rose/10 rounded-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                {/* Placeholder until Linley's headshot is uploaded */}
                <div className="w-full aspect-[4/5] bg-gradient-to-br from-sage/5 via-cream to-rose/5 flex items-center justify-center">
                  <div className="text-center p-10">
                    <div className="w-32 h-32 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-sage">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <p className="text-sage font-medium text-lg">Linley&apos;s Photo</p>
                    <p className="text-charcoal-light text-base mt-2">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right" delay={0.2}>
            <div>
              <p className="text-sage tracking-[0.3em] uppercase text-base mb-4 font-medium">
                About Linley
              </p>
              <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-semibold text-charcoal mb-6 leading-tight">
                Midwife, Life Coach &{" "}
                <span className="text-sage">Motherhood Advocate</span>
              </h2>
              <div className="decorative-line !mx-0" />

              <div className="mt-10 space-y-6 text-charcoal-light leading-relaxed text-lg">
                <p>
                  I&apos;m a certified life coach having trained with both{" "}
                  <strong className="text-charcoal">AIPC</strong> and{" "}
                  <strong className="text-charcoal">Authentic Academy</strong>,
                  specialising in birth trauma, motherhood, parent and emotional
                  intelligence (EQ) coaching.
                </p>
                <p>
                  I support women and families through the emotional journey of
                  motherhood, helping them move from survival mode to feeling
                  safe, confident, and connected.
                </p>
                <p>
                  As a <strong className="text-charcoal">midwife</strong> and{" "}
                  <strong className="text-charcoal">life coach</strong>, my work
                  spans birth story healing, motherhood support, and emotionally
                  aware parenting.
                </p>
                <p className="text-sage italic font-medium text-xl font-[var(--font-playfair)]">
                  &ldquo;Because motherhood isn&apos;t just about having a baby. It&apos;s
                  about navigating who you become, how you parent, and how you
                  grow along the way.&rdquo;
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  "Certified Life Coach",
                  "AIPC Trained",
                  "Authentic Academy",
                  "Registered Midwife",
                  "EQ Specialist",
                ].map((cred) => (
                  <span
                    key={cred}
                    className="px-5 py-2.5 bg-sage/10 text-sage-dark text-base rounded-full font-medium"
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
