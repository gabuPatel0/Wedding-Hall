"use client"

import { useEffect, useState } from "react"

export function GalleryHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-[#ffedd8] to-[#f3d5b5] overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-bold text-[#603808] mb-6">
            <span className="text-balance">Our Gallery</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#8b5e34] max-w-2xl mx-auto mb-8">
            <span className="text-balance">A glimpse of elegance, memories, and celebrations</span>
          </p>
        </div>

        {/* Scroll hint animation */}
        <div
          className={`mt-12 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="animate-bounce">
            <svg className="w-6 h-6 mx-auto text-[#bc8a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
