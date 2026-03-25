import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Restore Coaching | Birth Trauma, Motherhood & Parenting Support by Linley",
  description:
    "Certified life coach and midwife supporting women through birth trauma healing, motherhood transitions, confident parenting, and emotional intelligence coaching. Trauma informed, non clinical support with the RESTORE Method.",
  keywords: [
    "birth trauma coaching",
    "birth debrief",
    "birth story healing",
    "motherhood coaching",
    "motherhood support",
    "postnatal support",
    "postpartum support",
    "parenting coach",
    "confident parenting",
    "life coach for mums",
    "life coach for mothers",
    "emotional intelligence coaching",
    "EQ coaching",
    "RESTORE Method",
    "trauma informed support",
    "certified life coach",
    "AIPC certified",
    "midwife life coach",
  ],
  openGraph: {
    title: "Restore Coaching by Linley",
    description:
      "Helping you move from survival mode to feeling safe, confident, and connected in motherhood.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
