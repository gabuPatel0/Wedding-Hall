import { HeroSection } from "@/components/hero-section"
import { AboutPreview } from "@/components/about-preview"
import { FeaturesGrid } from "@/components/features-grid"
import { GalleryPreview } from "@/components/gallery-preview"
import { EventsShowcase } from "@/components/events-showcase"
import { TestimonialsTeaser } from "@/components/testimonials-teaser"
import { ContactTeaser } from "@/components/contact-teaser"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutPreview />
      <FeaturesGrid />
      <GalleryPreview />
      <EventsShowcase />
      <TestimonialsTeaser />
      <ContactTeaser />
      <Footer />
    </main>
  )
}
