"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-sage/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-8 xl:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/RestoreLogo.svg"
              alt="Restore Coaching"
              width={320}
              height={120}
              className="h-28 w-auto"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base transition-colors duration-300 tracking-wide ${
                  pathname === link.href
                    ? "text-sage font-medium"
                    : "text-charcoal-light hover:text-sage"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-sage text-white text-base font-medium rounded-full hover:bg-sage-dark transition-all duration-300 hover:shadow-lg hover:shadow-sage/20"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-charcoal"
            aria-label="Toggle menu"
          >
            <div className="w-7 h-6 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-charcoal transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-charcoal transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-charcoal transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-sage/10 overflow-hidden"
          >
            <div className="px-8 py-8 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors duration-300 py-2 text-xl ${
                    pathname === link.href
                      ? "text-sage font-medium"
                      : "text-charcoal-light hover:text-sage"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 px-8 py-4 bg-sage text-white text-center text-lg rounded-full hover:bg-sage-dark transition-all duration-300"
              >
                Book a Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
