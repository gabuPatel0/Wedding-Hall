import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getImagePath } from "@/lib/utils"

export default function EventsPage() {
  const categories = [
    {
      title: "Weddings",
      description: "Romantic décor, floral highlights, and timeless celebrations.",
      image: getImagePath("./elegant-wedding-ceremony-with-beautiful-decoration.jpg"),
    },
    {
      title: "Corporate Events",
      description: "Classy seating, conferences, and gala setups.",
      image: getImagePath("./professional-corporate-event-setup-in-elegant-hall.jpg"),
    },
    {
      title: "Birthday Parties",
      description: "Vibrant, youthful celebrations tailored to your style.",
      image: getImagePath("./festive-birthday-party-setup-with-decorations.jpg"),
    },
    {
      title: "Cultural Gatherings",
      description: "Traditional décor and community vibes for meaningful moments.",
      image: getImagePath("./traditional-cultural-wedding-decor.jpg"),
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={getImagePath("./wedding-reception-hall-with-elegant-table-settings.jpg")}
            alt="Events hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#ffedd8]/90 via-[#f3d5b5]/70 to-[#d4a276]/60" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold text-[#603808] mb-4 animate-fade-in-up">
            <span className="text-balance">Events We Host</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#8b5e34] mb-8 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            <span className="text-balance">From timeless weddings to modern gatherings, we create unforgettable experiences.</span>
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button className="bg-[#bc8a5f] hover:bg-[#a47148] text-white px-8 py-4 text-lg font-semibold">Explore Options</Button>
          </div>
        </div>
      </section>

      {/* Categories Grid (2x2) */}
      <section className="py-20 px-6 bg-[#ffedd8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#603808] mb-3">
              <span className="text-balance">What We Can Host</span>
            </h2>
            <p className="text-[#8b5e34]">Choose from our most popular event types.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((c) => (
              <div key={c.title} className="group relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1">
                <img src={c.image} alt={c.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#583101]/60 via-[#603808]/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-semibold text-[#8b5e34] drop-shadow-sm">
                    {c.title}
                  </h3>
                  <p className="text-white/90 max-w-prose">{c.description}</p>
                  <Button
                    asChild
                    className="mt-4 w-fit bg-white/90 text-[#6f4518] hover:bg-white shadow-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
                  >
                    <Link href="#showcase">View More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional Showcase Sections */}
      <section id="showcase" className="py-20 px-6 bg-[#f3d5b5]/40">
        <div className="max-w-6xl mx-auto space-y-16">
          {categories.map((c, idx) => (
            <div key={c.title} className={`grid md:grid-cols-2 gap-10 items-center ${idx % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-[#e7bc91]">
                <img src={c.image} alt={c.title} className="w-full h-[340px] md:h-[420px] object-cover" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#603808] mb-4">{c.title}</h3>
                <p className="text-lg text-[#8b5e34] mb-6">{c.description}</p>
                <div className="flex gap-3">
                  <Button asChild className="bg-[#bc8a5f] hover:bg-[#a47148] text-white">
                    <Link href="/gallery">See in Gallery</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-[#bc8a5f] text-[#bc8a5f] hover:bg-[#bc8a5f] hover:text-white">
                    <Link href="/#contact-teaser">Enquire</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#f3d5b5] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[#ffedd8] via-transparent to-[#e7bc91]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#603808] mb-4">
            Your celebration deserves the perfect venue.
          </h3>
          <p className="text-[#8b5e34] mb-6">Tell us about your event and we’ll tailor the experience for you.</p>
          <Button asChild size="lg" className="bg-[#bc8a5f] hover:bg-[#a47148] text-white px-8 py-4 text-lg font-semibold">
            <Link href="/contact">Book Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
