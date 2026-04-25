"use client";

import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work With Me", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact / Book", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-[1600px] mx-auto px-8 xl:px-12 py-20">
        <div className="grid md:grid-cols-3 gap-16">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <Image
                src="/newlogo.png"
                alt="Restore Coaching"
                width={160}
                height={60}
                className="h-14 w-auto brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-white/80 font-medium mb-2">
              Restore Coaching with Lil
            </p>
            <p className="text-white/60 leading-relaxed text-base">
              Helping you move from reactive patterns into calm, confident connection.
            </p>
          </div>

          {/* Quick Links + Contact */}
          <div>
            <h3 className="font-medium text-white mb-5 tracking-wide text-lg">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-sage-light transition-colors duration-300 text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h3 className="font-medium text-white mb-3 tracking-wide text-base">
                Contact
              </h3>
              <ul className="space-y-2 text-white/60 text-base">
                <li>
                  <a href="mailto:lil@restore.coach" className="hover:text-sage-light transition-colors">
                    lil@restore.coach
                  </a>
                </li>
                <li>Newcastle / Lake Macquarie / Online Australia &amp; NZ</li>
              </ul>
            </div>
          </div>

          {/* Credentials */}
          <div>
            <h3 className="font-medium text-white mb-5 tracking-wide text-lg">
              Credentials
            </h3>
            <ul className="space-y-3 text-white/60 text-base">
              <li>Certified Life Coach, AIPC</li>
              <li>Certified Life Coach, Authentic Academy</li>
              <li>Registered Midwife</li>
              <li>EQ Assessment Practitioner</li>
            </ul>

            <div className="mt-8">
              <h3 className="font-medium text-white mb-3 tracking-wide text-base">
                Specialisations
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Birth Trauma",
                  "Motherhood",
                  "Parenting",
                  "EQ Coaching",
                ].map((s) => (
                  <span
                    key={s}
                    className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-white/50"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Credential Badges */}
            <div className="mt-8">
              <h3 className="font-medium text-white mb-4 tracking-wide text-base">
                Accreditations
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                  <Image
                    src="/AIPCBADGEBLACK.jpg"
                    alt="AIPC Certified Coach"
                    width={70}
                    height={70}
                    className="h-16 w-auto rounded-lg"
                  />
                </div>
                <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                  <Image
                    src="/CertifiedCoachLogoAuthenticEducation.png"
                    alt="Authentic Education Certified Results Coach"
                    width={70}
                    height={70}
                    className="h-16 w-auto"
                  />
                </div>
                <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                  <Image
                    src="/emotionalquotientinventory.png"
                    alt="MHS EQ-i 2.0 Certified"
                    width={70}
                    height={70}
                    className="h-16 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-base text-white/40">
          <p>
            © {new Date().getFullYear()} Restore Coaching, Lil. All rights
            reserved.
          </p>
          <p className="text-sm">
            Website by{" "}
            <a
              href="https://rileytechstudio.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-light/60 hover:text-sage-light transition-colors"
            >
              Riley Tech Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
