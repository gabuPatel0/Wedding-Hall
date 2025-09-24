"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Link from "next/link"

export function AboutPreview() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("about-preview")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about-preview" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isVisible ? "animate-stagger-fade-in" : "opacity-0"}`}>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#603808]">
              <span className="text-balance">Where Dreams Come to Life</span>
            </h2>
            <p className="text-lg text-[#8b5e34] leading-relaxed">
              Our elegant wedding Hall has been the backdrop for countless love stories and celebrations. With spacious
              interiors, beautiful architecture, and attention to every detail, we create the perfect atmosphere for
              your special day.
            </p>
            <p className="text-lg text-[#8b5e34] leading-relaxed">
              From intimate gatherings to grand celebrations, our venue adapts to your vision while maintaining the
              timeless elegance that makes every moment unforgettable.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-[#bc8a5f] text-[#bc8a5f] hover:bg-[#bc8a5f] hover:text-white transition-all duration-300 bg-transparent"
            >
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>

          <div className={`${isVisible ? "animate-stagger-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <div className="bg-[#f3d5b5] p-6 rounded-2xl shadow-lg">
              <img
                src="/elegant-wedding-hall-interior-with-beautiful-table.jpg"
                alt="Wedding Hall interior"
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
