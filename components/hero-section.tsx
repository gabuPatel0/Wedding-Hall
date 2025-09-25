"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const sectionRef = useRef<HTMLElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const subtitleRef = useRef<HTMLParagraphElement | null>(null)
  const ctaWrapRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Ensure video is muted at DOM level for autoplay (iOS/Safari)
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    try {
      v.muted = true
      // set muted attribute to ensure autoplay policies treat it as muted
      v.setAttribute("muted", "")
      // playsInline is already set via prop, reinforce at DOM level
      v.setAttribute("playsinline", "")
    } catch {}
  }, [])

  // Safety timeout: if the video takes too long or errors, reveal the page anyway
  useEffect(() => {
    if (videoReady) return
    const t = setTimeout(() => setVideoReady(true), 7000)
    return () => clearTimeout(t)
  }, [videoReady])

  // GSAP animations & parallax after video is ready
  useEffect(() => {
    if (!videoReady) return
    // Register plugin once in the client
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Entrance animations
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } })
      tl.fromTo(
        titleRef.current,
        { y: 24, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.7 },
      )
        .fromTo(
          subtitleRef.current,
          { y: 18, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.6 },
          "-=0.3",
        )
        .fromTo(
          ctaWrapRef.current,
          { y: 12, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.6 },
          "-=0.25",
        )

      // Parallax on background video
      if (videoRef.current && sectionRef.current) {
        gsap.to(videoRef.current, {
          yPercent: 10, // subtle parallax
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=120%",
            scrub: true,
          },
        })
      }
    }, sectionRef)

    return () => {
      ctx.revert()
      ScrollTrigger.killAll()
    }
  }, [videoReady])

  return (
    <section ref={sectionRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video (muted) */}
      <div className="absolute inset-0 z-0 will-change-transform">
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-500 ${videoReady ? "opacity-100" : "opacity-0"}`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/placeholder.jpg"
          aria-hidden="true"
          onLoadedMetadata={() => setVideoReady(true)}
          onLoadedData={() => setVideoReady(true)}
          onCanPlay={() => setVideoReady(true)}
          onCanPlayThrough={() => setVideoReady(true)}
          onError={() => setVideoReady(true)}
          onPlay={() => setVideoReady(true)}
        >
          <source src="./video.mp4" type="video/mp4" />
        </video>
      </div>


      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1
          ref={titleRef}
          className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold text-[#603808] mb-6 leading-tight opacity-0"
        >
          <span className="text-balance">Celebrate Your Moments in Style</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-[#8b5e34] mb-8 font-medium opacity-0"
        >
          <span className="text-balance">Spacious, Elegant, and Perfect for Every Occasion</span>
        </p>

        <div ref={ctaWrapRef} className="flex flex-col sm:flex-row gap-4 justify-center opacity-0">
          {/* <Button
            size="lg"
            className="bg-[#bc8a5f] hover:bg-gradient-to-r hover:from-[#d4a276] hover:to-[#8b5e34] text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Book Your Event
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-[#bc8a5f] text-[#bc8a5f] hover:bg-[#bc8a5f] hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent"
            asChild
          >
            <a href="/gallery">View Gallery</a>
          </Button> */}
        </div>
      </div>
    </section>
  )
}
