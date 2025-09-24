"use client"

import { useEffect, useState } from "react"
import { MapPin, Car, UtensilsCrossed, Music, Accessibility, Users } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Spacious Lawn",
    description: "Beautiful outdoor space for ceremonies",
    color: "#ffedd8",
  },
  {
    icon: Car,
    title: "Ample Parking",
    description: "Convenient parking for all guests",
    color: "#e7bc91",
  },
  {
    icon: UtensilsCrossed,
    title: "Catering Services",
    description: "Delicious cuisine for every taste",
    color: "#ffedd8",
  },
  {
    icon: Music,
    title: "Professional Stage",
    description: "Perfect setup for entertainment",
    color: "#e7bc91",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    description: "Fully accessible for all guests",
    color: "#ffedd8",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Easy to find and reach",
    color: "#e7bc91",
  },
]

export function FeaturesGrid() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.3 },
    )

    const elements = document.querySelectorAll(".feature-item")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 px-6 bg-[#f3d5b5]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#603808] mb-4">
            <span className="text-balance">Why Choose Our Venue</span>
          </h2>
          <p className="text-lg text-[#8b5e34] max-w-2xl mx-auto">
            <span className="text-balance">
              Everything you need for a perfect celebration, all in one beautiful location
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isVisible = visibleItems.includes(index)

            return (
              <div
                key={index}
                data-index={index}
                className={`feature-item group cursor-pointer ${isVisible ? "animate-stagger-fade-in" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full"
                  style={{ backgroundColor: feature.color }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-[#bc8a5f] rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-xl text-[#603808]">{feature.title}</h3>
                    <p className="text-[#8b5e34] leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

