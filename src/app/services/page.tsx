import type { Metadata } from "next";
import HomeServicesPreview from "@/components/HomeServicesPreview";

export const metadata: Metadata = {
  title: "Work With Me | Restore Coaching",
  description:
    "Explore Restore Coaching services: Birth Debrief & Motherhood Transition Support, Parent Coaching, Life Coaching, and Emotional Intelligence (EQ) Coaching.",
};

export default function ServicesPage() {
  return <HomeServicesPreview />;
}
