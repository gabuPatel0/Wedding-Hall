"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { GalleryLightbox } from "@/components/gallery-lightbox"

const galleryImages = [
  {
    src: "/elegant-wedding-ceremony-setup-with-beautiful-deco.jpg",
    alt: "Wedding ceremony setup",
    caption: "Wedding Ceremony Setup",
    category: "Weddings",
    size: "large", // 2x2 grid
  },
  {
    src: "/wedding-reception-hall-with-elegant-table-settings.jpg",
    alt: "Reception hall",
    caption: "Reception Hall",
    category: "Weddings",
    size: "medium", // 1x2 grid
  },
  {
    src: "/beautiful-outdoor-wedding-lawn-area.jpg",
    alt: "Outdoor lawn area",
    caption: "Outdoor Lawn Area",
    category: "Weddings",
    size: "medium",
  },
  {
    src: "/wedding-hall-stage-with-professional-lighting.jpg",
    alt: "Professional stage",
    caption: "Professional Stage Setup",
    category: "Corporate Events",
    size: "wide", // 2x1 grid
  },
  {
    src: "/images/service-corporate.png",
    alt: "Corporate event setup",
    caption: "Corporate Event Setup",
    category: "Corporate Events",
    size: "small",
  },
  {
    src: "/birthday-party-decor.png",
    alt: "Birthday party decoration",
    caption: "Birthday Celebration",
    category: "Birthdays",
    size: "medium",
  },
  {
    src: "/cultural-gathering-traditional-setup.jpg",
    alt: "Cultural gathering setup",
    caption: "Cultural Gathering",
    category: "Cultural Gatherings",
    size: "wide",
  },
  {
    src: "/wedding-reception-dance-floor.jpg",
    alt: "Dance floor setup",
    caption: "Dance Floor",
    category: "Weddings",
    size: "medium",
  },
  {
    src: "/elegant-dining-setup-wedding.jpg",
    alt: "Dining setup",
    caption: "Elegant Dining",
    category: "Weddings",
    size: "small",
  },
  {
    src: "/outdoor-garden-wedding-ceremony.jpg",
    alt: "Garden ceremony",
    caption: "Garden Ceremony",
    category: "Weddings",
    size: "large",
  },
  {
    src: "/corporate-meeting-room-setup.jpg",
    alt: "Meeting room",
    caption: "Meeting Room",
    category: "Corporate Events",
    size: "small",
  },
  {
    src: "/traditional-cultural-wedding-decor.jpg",
    alt: "Traditional wedding decor",
    caption: "Traditional Decor",
    category: "Cultural Gatherings",
    size: "medium",
  },
]

const categories = ["All", "Weddings", "Corporate Events", "Birthdays", "Cultural Gatherings"]

export function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("gallery-grid")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const getGridClass = (size: string) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2"
      case "wide":
        return "md:col-span-2"
      case "medium":
        return "md:row-span-2"
      default:
        return ""
    }
  }

  return (
    <section id="gallery-grid" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#8b5e34] hover:bg-[#6f4518] text-white"
                  : "border-[#d4a276] text-[#8b5e34] hover:bg-[#e7bc91] hover:text-[#603808]"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Bento Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px] transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {filteredImages.map((image, index) => (
            <div
              key={`${selectedCategory}-${index}`}
              className={`group cursor-pointer ${getGridClass(image.size)}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(index)}
            >
              <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg border-2 border-[#bc8a5f]/20 hover:shadow-2xl transition-all duration-500">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#603808]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-[family-name:var(--font-playfair)] text-lg font-semibold mb-1">
                      {image.caption}
                    </p>
                    <p className="text-sm text-[#ffedd8]/80">{image.category}</p>
                  </div>
                </div>
                {/* Hover zoom indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <GalleryLightbox
          images={filteredImages}
          isOpen={lightboxOpen}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setCurrentImageIndex}
        />
      </div>
    </section>
  )
}
