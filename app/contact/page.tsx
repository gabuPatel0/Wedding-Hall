"use client"

import { useEffect, useState } from "react"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"
import { getImagePath } from "@/lib/utils"

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)

    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      ;(e.target as HTMLFormElement).reset()
      setTimeout(() => setSuccess(false), 1600)
    }, 1200)
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[55vh] md:h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={getImagePath("./beautiful-outdoor-wedding-lawn-area.jpg")}
            alt="Venue watermark"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#ffedd8] via-[#f3d5b5] to-[#e7bc91]" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <h1
            className={`font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold text-[#603808] mb-4 ${
              mounted ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <span className="text-balance">Get in Touch</span>
          </h1>
          <p
            className={`text-xl md:text-2xl text-[#8b5e34] ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.15s" }}
          >
            <span className="text-balance">We’re here to make your celebrations unforgettable.</span>
          </p>
          <div className={`${mounted ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
            <Button asChild className="mt-6 bg-[#bc8a5f] hover:bg-[#a47148] text-white px-8 py-4 text-lg font-semibold transform transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
              <Link href="#contact-form">Start a Conversation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 px-6 bg-[#ffedd8]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#603808] mb-2">
              Tell Us About Your Event
            </h2>
            <p className="text-[#8b5e34]">We usually respond within a business day.</p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                required
                placeholder=" "
                className="peer w-full rounded-2xl bg-[#ffedd8] border border-[#d4a276] px-4 py-4 text-[#603808] focus:outline-none focus:ring-4 focus:ring-[#bc8a5f]/30 focus:border-[#bc8a5f] placeholder-transparent"
              />
              <label className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 bg-[#ffedd8] px-2 text-[#8b5e34] transition-all duration-200 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-[#6f4518] peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-1/2">
                Name
              </label>
            </div>

            {/* Phone */}
            <div className="relative">
              <input
                type="tel"
                name="phone"
                required
                placeholder=" "
                className="peer w-full rounded-2xl bg-[#ffedd8] border border-[#d4a276] px-4 py-4 text-[#603808] focus:outline-none focus:ring-4 focus:ring-[#bc8a5f]/30 focus:border-[#bc8a5f] placeholder-transparent"
              />
              <label className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 bg-[#ffedd8] px-2 text-[#8b5e34] transition-all duration-200 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-[#6f4518] peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-1/2">
                Phone Number
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder=" "
                className="peer w-full rounded-2xl bg-[#ffedd8] border border-[#d4a276] px-4 py-4 text-[#603808] focus:outline-none focus:ring-4 focus:ring-[#bc8a5f]/30 focus:border-[#bc8a5f] placeholder-transparent"
              />
              <label className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 bg-[#ffedd8] px-2 text-[#8b5e34] transition-all duration-200 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-[#6f4518] peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-1/2">
                Email (optional)
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                required
                placeholder=" "
                rows={5}
                className="peer w-full rounded-2xl bg-[#ffedd8] border border-[#d4a276] px-4 py-4 text-[#603808] focus:outline-none focus:ring-4 focus:ring-[#bc8a5f]/30 focus:border-[#bc8a5f] placeholder-transparent"
              />
              <label className="pointer-events-none absolute left-4 top-6 bg-[#ffedd8] px-2 text-[#8b5e34] transition-all duration-200 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-[#6f4518] peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-1/2">
                Message
              </label>
            </div>

            <div className="flex items-center justify-center">
              <Button
                type="submit"
                size="lg"
                className="min-w-48 bg-gradient-to-r from-[#d4a276] to-[#8b5e34] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                aria-live="polite"
              >
                {loading ? (
                  <span className="flex items-center gap-3">
                    <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" aria-hidden />
                    Sending...
                  </span>
                ) : success ? (
                  <span className="flex items-center gap-3">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" stroke="white" />
                    </svg>
                    Sent!
                  </span>
                ) : (
                  <span>Send Message</span>
                )}
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Direct Contact Info */}
      <section className="py-20 px-6 bg-[#f3d5b5]/40">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Call Us",
              value: "+1 (555) 123-4567",
              href: "tel:+15551234567",
              Icon: Phone,
              bg: "#f3d5b5",
            },
            {
              title: "Email",
              value: "events@elegantweddinghall.com",
              href: "mailto:events@elegantweddinghall.com",
              Icon: Mail,
              bg: "#e7bc91",
            },
            {
              title: "WhatsApp",
              value: "+1 (555) 123-4567",
              href: "https://wa.me/15551234567",
              Icon: MessageCircle,
              bg: "#f3d5b5",
            },
          ].map(({ title, value, href, Icon, bg }) => (
            <Link
              key={title}
              href={href}
              className="group rounded-2xl bg-white/60 border border-[#e7bc91] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#bc8a5f]/30"
            >
              <div
                className="mb-4 w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:animate-bounce"
                style={{ backgroundColor: bg }}
              >
                <Icon className="w-6 h-6 text-[#603808]" />
              </div>
              <div className="text-[#603808] font-semibold">{title}</div>
              <div className="text-[#8b5e34]">{value}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6 bg-[#ffedd8]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#603808]">Find Us</h3>
            <p className="text-[#8b5e34]">We’re easy to reach and happy to give directions.</p>
          </div>
          <div className="group relative rounded-2xl overflow-hidden shadow-lg border border-[#e7bc91]">
            <iframe
              title="Venue Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31514.983934176765!2d72.823!3d21.170!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEwJzEyLjAiTiA3MsKwNDknMjIuOCJF!5e0!3m2!1sen!2s!4v1710000000000"
              width="100%"
              height="420"
              loading="lazy"
              className="w-full"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Overlay name tag on hover */}
            <div className="pointer-events-none absolute bottom-4 left-4 bg-white/90 text-[#603808] rounded-full px-4 py-2 shadow transition-opacity opacity-0 group-hover:opacity-100">
              Elegant Wedding Hall
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6 bg-[#603808]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#ffedd8] mb-4">Your perfect celebration starts here.</h3>
          <Button asChild size="lg" className="bg-[#d4a276] hover:bg-[#bc8a5f] text-[#603808] font-semibold">
            <Link href="/gallery">Book a Visit</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
