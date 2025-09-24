import { GalleryHero } from "@/components/gallery-hero"
import { GalleryGrid } from "@/components/gallery-grid"
import { Footer } from "@/components/footer"

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <GalleryHero />
      <GalleryGrid />
      <Footer />
    </main>
  )
}
