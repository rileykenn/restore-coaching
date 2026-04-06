import type { Metadata } from "next";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Testimonials | Restore Coaching",
  description:
    "Read what other women and families have to say about their experience with Restore Coaching by Linley.",
};

export default function TestimonialsPage() {
  return <Testimonials />;
}
