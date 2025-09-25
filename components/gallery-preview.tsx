"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const galleryImages = [
  {
    src: require("./elegant-wedding-ceremony-setup-with-beautiful-deco.jpg"),
    alt: "Wedding ceremony setup",
    caption: "Ceremony Setup",
  },
  {
    src: require("./wedding-reception-hall-with-elegant-table-settings.jpg"),
    alt: "Reception hall",
    caption: "Reception Hall",
  },
  {
    src: require("./beautiful-outdoor-wedding-lawn-area.jpg"),
    alt: "Outdoor lawn area",
    caption: "Outdoor Lawn",
  },
  {
    src: require("./wedding-hall-stage-with-professional-lighting.jpg"),
    alt: "Professional stage",
    caption: "Professional Stage",
  },
]

export function GalleryPreview() {
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

    const element = document.getElementById("gallery-preview")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="gallery-preview" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#603808] mb-4">
            <span className="text-balance">See Our Beautiful Venue</span>
          </h2>
          <p className="text-lg text-[#8b5e34] max-w-2xl mx-auto">
            <span className="text-balance">
              Take a glimpse at the elegant spaces where your special moments will unfold
            </span>
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 ${isVisible ? "animate-stagger-fade-in" : ""}`}
        >
          {galleryImages.map((image, index) => (
            <div key={index} className="group cursor-pointer" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden rounded-2xl shadow-lg border-2 border-[#bc8a5f]/20">
                <img
                  src={image.src || "./placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#603808]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">{image.caption}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-[#bc8a5f] hover:bg-gradient-to-r hover:from-[#d4a276] hover:to-[#8b5e34] text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
            asChild
          >
            <a href="/gallery">View Full Gallery</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

