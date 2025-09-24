"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"

export function ContactTeaser() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("contact-teaser")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact-teaser" className="py-20 px-6 bg-[#f3d5b5]/40">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#603808] mb-6">
            <span className="text-balance">Plan Your Dream Event With Us</span>
          </h2>
          <p className="text-xl text-[#8b5e34] mb-12 max-w-2xl mx-auto leading-relaxed">
            <span className="text-balance">
              Ready to create unforgettable memories? Let's discuss how we can make your special day perfect.
            </span>
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 ${isVisible ? "animate-stagger-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "0.3s" }}
        >
          <div className="flex flex-col items-center space-y-3">
            <div className="p-4 bg-[#bc8a5f] rounded-full">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-[#603808]">Call Us</h3>
            <p className="text-[#8b5e34]">+1 (555) 123-4567</p>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <div className="p-4 bg-[#bc8a5f] rounded-full">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-[#603808]">Email Us</h3>
            <p className="text-[#8b5e34]">events@elegantweddinghall.com</p>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <div className="p-4 bg-[#bc8a5f] rounded-full">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-[#603808]">Visit Us</h3>
            <p className="text-[#8b5e34]">123 Celebration Ave, City</p>
          </div>
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center ${isVisible ? "animate-stagger-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "0.5s" }}
        >
          <Button
            size="lg"
            className="bg-[#bc8a5f] hover:bg-gradient-to-r hover:from-[#d4a276] hover:to-[#8b5e34] text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            Get in Touch
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-[#bc8a5f] text-[#bc8a5f] hover:bg-[#bc8a5f] hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent"
          >
            Schedule a Tour
          </Button>
        </div>
      </div>
    </section>
  )
}

