"use client"

import { useEffect, useState } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah & Michael",
    event: "Wedding",
  image: "./happy-couple-portrait.png",
    quote: "Our wedding day was absolutely perfect! The venue was stunning and the staff made everything seamless.",
    rating: 5,
  },
  {
    name: "Corporate Solutions Inc.",
    event: "Corporate Event",
  image: "./professional-business-person.png",
    quote: "Professional, elegant, and perfectly organized. Our annual conference was a huge success!",
    rating: 5,
  },
  {
    name: "The Johnson Family",
    event: "Birthday Celebration",
  image: "./happy-family-portrait.jpg",
    quote: "What a wonderful celebration! The venue made our grandmother's 80th birthday truly special.",
    rating: 5,
  },
]

export function TestimonialsTeaser() {
  const [currentIndex, setCurrentIndex] = useState(0)
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

    const element = document.getElementById("testimonials")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#603808] mb-4">
            <span className="text-balance">What Our Clients Say</span>
          </h2>
          <p className="text-lg text-[#8b5e34] mb-16 max-w-2xl mx-auto">
            <span className="text-balance">
              Don't just take our word for it - hear from the families and organizations who've celebrated with us
            </span>
          </p>
        </div>

        <div
          className={`bg-[#ffedd8] rounded-3xl p-12 shadow-lg ${isVisible ? "animate-stagger-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "0.3s" }}
        >
          <div className="flex justify-center mb-6">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-[#bc8a5f] fill-current" />
            ))}
          </div>

          <blockquote className="text-xl md:text-2xl text-[#603808] font-medium mb-8 leading-relaxed">
            <span className="text-balance">"{currentTestimonial.quote}"</span>
          </blockquote>

          <div className="flex items-center justify-center space-x-4">
            <img
              src={currentTestimonial.image || "/placeholder.svg"}
              alt={currentTestimonial.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-[#bc8a5f]"
            />
            <div className="text-left">
              <p className="font-semibold text-[#603808] text-lg">{currentTestimonial.name}</p>
              <p className="text-[#8b5e34]">{currentTestimonial.event}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-[#bc8a5f]" : "bg-[#d4a276]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

