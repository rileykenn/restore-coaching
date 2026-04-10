"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

const serviceOptions = [
  "Birth Debrief & Story Healing",
  "Motherhood Transitional Coaching",
  "Restore Confident Parenting Program",
  "Life Coaching",
  "EQ Assessment & Coaching",
  "General Enquiry",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Restore Coaching Enquiry: ${formData.service || "General"}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:lil@restore.coach?subject=${subject}&body=${body}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="pt-32 pb-20 md:pb-28 px-8 bg-cream">
      <div className="max-w-[1600px] mx-auto px-8 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Content */}
          <ScrollReveal>
            <div>
              <p className="text-sage tracking-[0.3em] uppercase text-base mb-4 font-medium">
                Get in Touch
              </p>
              <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-semibold text-charcoal mb-6 leading-tight">
                Ready to begin your{" "}
                <span className="text-sage">journey?</span>
              </h2>
              <div className="decorative-line !mx-0" />

              <p className="mt-10 text-charcoal-light leading-relaxed text-xl">
                Whether you&apos;re navigating the early days of motherhood, looking
                for support with your parenting, or wanting to understand your
                emotional intelligence, I&apos;m here to help.
              </p>
              <p className="mt-5 text-charcoal-light leading-relaxed text-lg">
                Fill in the form and I&apos;ll get back to you within 24 hours. Let&apos;s
                find the right support for where you are right now.
              </p>

              <div className="mt-12 space-y-5">
                <div className="flex items-center gap-5 text-charcoal-light text-lg">
                  <div className="w-14 h-14 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-sage" />
                  </div>
                  <span>lil@restore.coach</span>
                </div>
                <div className="flex items-start gap-5 text-charcoal-light text-lg">
                  <div className="w-14 h-14 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-6 h-6 text-sage" />
                  </div>
                  <div className="space-y-1">
                    <span className="block">Coaching sessions available worldwide or via phone</span>
                    <span className="block text-base text-charcoal-light/80">Face to face &mdash; Lake Macquarie and Newcastle region (office or in-home visits)</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Form */}
          <ScrollReveal direction="right" delay={0.2}>
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-10 md:p-12 shadow-lg border border-sage/10"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-base font-medium text-charcoal mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-5 py-4 text-lg rounded-xl border border-sage/20 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all duration-300 bg-cream/50"
                    placeholder="Jane Smith"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-base font-medium text-charcoal mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-5 py-4 text-lg rounded-xl border border-sage/20 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all duration-300 bg-cream/50"
                      placeholder="jane@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-base font-medium text-charcoal mb-2"
                    >
                      Phone *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-5 py-4 text-lg rounded-xl border border-sage/20 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all duration-300 bg-cream/50"
                      placeholder="0400 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-base font-medium text-charcoal mb-2"
                  >
                    I&apos;m interested in…
                  </label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-5 py-4 text-lg rounded-xl border border-sage/20 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all duration-300 bg-cream/50 text-charcoal-light"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-base font-medium text-charcoal mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-5 py-4 text-lg rounded-xl border border-sage/20 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all duration-300 bg-cream/50 resize-none"
                    placeholder="Tell me a little about where you are right now and how I can help…"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-5 rounded-full text-white font-medium text-xl transition-all duration-300 shadow-lg ${
                    submitted
                      ? "bg-sage-dark"
                      : "bg-sage hover:bg-sage-dark hover:shadow-xl hover:shadow-sage/20"
                  }`}
                >
                  {submitted ? "Message Sent!" : "Send Message"}
                </motion.button>
              </div>
            </motion.form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
