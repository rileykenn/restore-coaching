import type { Metadata } from "next";
import ServicePageHero from "@/components/ServicePageHero";
import RestoreMethodUniversal from "@/components/RestoreMethodUniversal";
import BeforeAfterUniversal from "@/components/BeforeAfterUniversal";

export const metadata: Metadata = {
  title: "Your RESTORE Experience | Restore Coaching",
  description:
    "Discover the RESTORE Method — a trauma-informed methodology that guides every coaching experience at Restore Coaching. From self-awareness to lasting transformation.",
};

export default function RestoreExperiencePage() {
  return (
    <>
      <ServicePageHero
        label="Your Experience"
        title="Your RESTORE Experience"
        subtitle="A trauma-informed methodology that guides every step of your journey — across all coaching services."
      />
      <RestoreMethodUniversal />
      <BeforeAfterUniversal />
    </>
  );
}
