import type { Metadata } from "next";
import ServicePageHero from "@/components/ServicePageHero";
import HomeServicesPreview from "@/components/HomeServicesPreview";

export const metadata: Metadata = {
  title: "Services | Restore Coaching",
  description:
    "Explore Restore Coaching services: Birth Debrief & Motherhood Support, Parent Coaching, Life Coaching, and Emotional Intelligence (EQ) Coaching.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicePageHero
        label="How We Work Together"
        title="Services Offered"
        subtitle="All coaching services are available in a format that works best for you and your family."
      />
      <HomeServicesPreview />
    </>
  );
}
