import type { Metadata } from "next";
import BookSession from "@/components/BookSession";

export const metadata: Metadata = {
  title: "Book a Session | Restore Coaching",
  description:
    "Take the next step toward calm, confident, and connected parenting. Book a clarity call or full coaching session with Lil at Restore Coaching.",
};

export default function BookPage() {
  return <BookSession />;
}
