"use client"

import { useEffect, useState } from "react"
import { Heart, Building, Cake, Music } from "lucide-react"
import { Button } from "@/components/ui/button"

const eventTypes = [
  {
    icon: Heart,
    title: "Weddings",
    description: "Create magical moments on your special day with our elegant wedding packages",
    image: "/elegant-wedding-ceremony-with-beautiful-decoration.jpg",
    color: "#f3d5b5",
  },
  {
    icon: Building,
    title: "Corporate Events",
    description: "Professional venues for conferences, meetings, and corporate celebrations",
    image: "/professional-corporate-event-setup-in-elegant-hall.jpg",
    color: "#e7bc91",
  },
  {
    icon: Cake,
    title: "Birthday Parties",
    description: "Celebrate life's milestones with unforgettable birthday celebrations",
    image: "/festive-birthday-party-setup-with-decorations.jpg",
    color: "#d4a276",
  },
  {
    icon: Music,
    title: "Cultural Events",
    description: "Honor traditions and celebrate culture in our versatile event spaces",
    image: "/cultural-event-celebration-with-traditional-decora.jpg",
    color: "#f3d5b5",
  },
]

export function EventsShowcase() {
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

    const elements = document.querySelectorAll(".event-card")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 px-6 bg-[#f3d5b5]/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#603808] mb-4">
            <span className="text-balance">Perfect for Every Occasion</span>
          </h2>
          <p className="text-lg text-[#8b5e34] max-w-2xl mx-auto">
            <span className="text-balance">
              From intimate gatherings to grand celebrations, we make every event memorable
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {eventTypes.map((event, index) => {
            const Icon = event.icon
            const isVisible = visibleItems.includes(index)

            return (
              <div
                key={index}
                data-index={index}
                className={`event-card group cursor-pointer ${isVisible ? "animate-stagger-fade-in" : ""}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div
                  className="rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full"
                  style={{ backgroundColor: event.color }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 p-3 bg-[#bc8a5f] rounded-full">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-semibold text-xl text-[#603808] mb-3">{event.title}</h3>
                    <p className="text-[#8b5e34] leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="bg-[#bc8a5f] hover:bg-[#a47148] text-white px-8 py-4 text-lg font-semibold">
            <a href="/events">View Events</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

