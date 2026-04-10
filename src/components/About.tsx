"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section className="pt-32 pb-20 md:pb-28 bg-cream">
      <div className="max-w-[1600px] mx-auto px-8 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Image */}
          <ScrollReveal>
            <div className="relative flex justify-center">
              <div className="absolute -inset-8 bg-gradient-to-br from-sage/10 to-rose/10 rounded-full blur-2xl" />
              <div className="relative max-w-lg w-full">
                {/* Placeholder until Lil's headshot is uploaded */}
                <div className="w-full aspect-[4/5] bg-gradient-to-br from-sage/10 to-rose/10 rounded-2xl flex items-center justify-center border border-sage/10">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-sage text-4xl font-[var(--font-playfair)]">L</span>
                    </div>
                    <p className="text-sage font-medium text-lg">Lil&apos;s Photo</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal delay={0.2}>
            <div>
              <p className="text-sage tracking-[0.3em] uppercase text-base mb-4 font-medium">
                About
              </p>
              <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-semibold text-charcoal mb-6 leading-tight">
                About Lil
              </h2>
              <div className="decorative-line !mx-0" />

              <div className="mt-10 space-y-6 text-charcoal-light leading-relaxed text-lg">
                <p>
                  With over 26 years as a midwife, I&apos;ve had the privilege of
                  walking alongside women and families through some of life&apos;s
                  most transformative moments. I&apos;ve witnessed the beauty,
                  vulnerability, and emotional complexity of becoming a
                  parent&mdash;and how deeply those early experiences shape
                  everything that follows.
                </p>
                <p className="text-charcoal font-medium text-xl">
                  But this work is not just professional&mdash;it&apos;s deeply personal.
                </p>
                <p>
                  My journey into coaching began as I navigated raising a
                  neurodiverse child. Like so many parents, I searched for
                  answers, strategies, and support that would create real change.
                  Yet despite everything I tried, nothing brought the
                  breakthrough I was longing for.
                </p>
                <p className="font-[var(--font-playfair)] text-xl text-charcoal italic">
                  What I came to realise changed everything: the shift I was
                  seeking didn&apos;t begin with my child&mdash;it began with me.
                </p>
                <p>
                  As I transformed how I saw myself, how I regulated my
                  emotions, and how I showed up, everything around me began to
                  shift. Not perfectly&mdash;but powerfully. That internal change
                  reshaped both my parenting and my life, and I couldn&apos;t
                  believe the impact it had on my family.
                </p>
                <p className="text-sage font-semibold text-xl">
                  As you begin to trust in yourself, you begin to trust in your child.
                </p>
                <p>
                  It was from this place that I felt a deep drive to create
                  something more&mdash;not just for myself, but for other
                  families. I founded this business with a clear vision: to build
                  a supportive community that advocates for families and honours
                  the complexity of modern parenting.
                </p>
                <p>
                  Today, as a heart-led parent coach, I bring together decades
                  of clinical experience, emotional intelligence training, and
                  lived wisdom. I support parents to move beyond reactivity and
                  self-doubt, and into self-trust, emotional awareness, and
                  grounded confidence in who they are&mdash;regardless of the
                  child they are raising.
                </p>
                <p className="text-charcoal font-medium text-xl">
                  My work goes beyond strategies. It&apos;s about transformation.
                </p>
                <p>
                  I guide parents inward, so they can lead their families with
                  clarity, connection, and capacity.
                </p>
                <p className="font-[var(--font-playfair)] text-2xl text-charcoal italic">
                  Because every parent deserves the support to not just
                  cope&mdash;but to truly thrive.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
