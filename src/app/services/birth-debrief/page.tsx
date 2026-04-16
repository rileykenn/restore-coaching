"use client";

import Image from "next/image";
import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { Heart } from "lucide-react";

export default function BirthDebriefPage() {
  return (
    <>
      <ServicePageHero
        label="Birth Debrief"
        title="Birth Debrief & Motherhood Support"
        subtitle="Holding space for women to process their birth story and feel safe in motherhood."
        accentColor="rose"
      />

      {/* Main Content */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-[1600px] mx-auto px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Content */}
            <ScrollReveal>
              <div>
                <p className="text-rose-dark font-medium text-lg mb-2 flex items-center gap-2">
                  & feel safe in motherhood{" "}
                  <Heart className="w-5 h-5 text-rose fill-rose/30" />
                </p>
                <p className="text-base text-charcoal-light italic mb-6">
                  Trauma informed | Non clinical support
                </p>
                <div className="decorative-line !mx-0" />

                <div className="mt-10 space-y-6 text-charcoal-light leading-relaxed text-lg">
                  <p>
                    Birth trauma isn&apos;t just emergency situations. It can be
                    feeling unheard. It can be losing control. It can be things
                    unfolding differently than you hoped.
                  </p>
                  <p>
                    As a midwife, I&apos;ve seen too many women leave birth carrying
                    more than just their baby. They carry guilt. They carry shame.
                    They carry a quiet belief that they&apos;ve somehow failed.
                  </p>
                  <p>
                    And instead of stepping into motherhood with wonder and joy,
                    they find themselves just trying to survive it.
                  </p>
                  <p className="text-sage font-semibold text-xl">
                    I&apos;m here to change that.
                  </p>
                  <p>
                    I hold space for women to unpack their birth story, process
                    what happened, and reconnect with themselves in a way that
                    feels safe and supported.
                  </p>
                  <p className="font-[var(--font-playfair)] text-2xl text-charcoal italic">
                    You don&apos;t have to carry it alone. And motherhood doesn&apos;t have
                    to feel this heavy.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Image */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative flex justify-center">
                <div className="absolute -inset-8 bg-gradient-to-br from-rose/10 to-taupe/10 rounded-full blur-2xl" />
                <div className="relative max-w-lg">
                  <Image
                    src="/media/media2.png"
                    alt="Mother holding baby pencil sketch, birth trauma support"
                    width={600}
                    height={700}
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream">
        <div className="max-w-[1000px] mx-auto px-8 xl:px-12">
          <ScrollReveal>
            <div className="text-center">
              <Link
                href="/contact"
                className="px-10 py-5 bg-sage text-white rounded-full text-lg font-medium hover:bg-sage-dark transition-all duration-300 hover:shadow-xl hover:shadow-sage/20 hover:-translate-y-0.5 inline-block"
              >
                Book a Session
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
