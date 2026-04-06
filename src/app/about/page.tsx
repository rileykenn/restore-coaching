import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About Linley | Restore Coaching",
  description:
    "Meet Linley — certified life coach, registered midwife, and motherhood advocate. Specialising in birth trauma, parenting, and emotional intelligence coaching.",
};

export default function AboutPage() {
  return <About />;
}
