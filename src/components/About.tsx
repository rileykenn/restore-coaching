"use client";

import Image from "next/image";
import Link from "next/link";
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
                <Image
                  src="/lil.jpeg"
                  alt="Lil — Midwife, Parent Coach & Motherhood Advocate"
                  width={600}
                  height={750}
                  className="w-full h-auto rounded-2xl object-cover shadow-lg"
                  priority
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal delay={0.2}>
            <div>
              <p className="text-sage tracking-[0.3em] uppercase text-base mb-4 font-medium">
                About Lil
              </p>
              <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-semibold text-charcoal mb-6 leading-tight">
                Midwife, Parent Coach <span className="text-charcoal-light italic">&amp;</span>{" "}
                <span className="text-sage">Motherhood Advocate</span>
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

                {/* Dr Jenny Brown section */}
                <p>
                  It was during this season that I was introduced to the work of
                  Dr Jenny Brown, a psychologist with over 30 years&apos; experience
                  supporting families.
                </p>
                <p>
                  Her program, <span className="font-medium text-charcoal">Parent Hope Project</span>,
                  became the turning point in my parenting journey. It gave me a
                  framework to understand behaviour, emotional regulation, and my
                  role within the family dynamic in a way that finally created
                  real and lasting change in our home.
                </p>
                <p className="text-sage font-semibold text-xl">
                  As I began to trust in myself, I began to trust in my child,
                  and this work gave me the framework to do that.
                </p>
                <p>
                  It was from this place that I felt a deep drive to bring this
                  work to other families&mdash;because I had experienced firsthand
                  the kind of change that is possible. I am formally trained in
                  and deliver this program as part of my coaching practice, and
                  today it forms the foundation of my Restore Confident Parenting
                  program, where I guide parents through these same proven
                  principles in a supported and practical way.
                </p>
                <p>
                  Alongside this, through my work in midwifery, early motherhood
                  support, life coaching and emotional intelligence coaching, I
                  began to see consistent patterns across the families and
                  individuals I was supporting. From this, I developed the
                  RESTORE Method, my own structured coaching approach that
                  integrates these insights into a broader framework for personal
                  and relational transformation.
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
              </div>

              {/* Work with Me CTA */}
              <div className="mt-10">
                <Link
                  href="/services"
                  className="px-10 py-5 bg-sage text-white rounded-full text-lg font-medium hover:bg-sage-dark transition-all duration-300 hover:shadow-xl hover:shadow-sage/20 hover:-translate-y-0.5 inline-block"
                >
                  Work with Me
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
