import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact | Restore Coaching",
  description:
    "Get in touch with Lil at Restore Coaching. Book a session for birth debrief, parent coaching, life coaching, or EQ coaching.",
};

export default function ContactPage() {
  return <Contact />;
}
