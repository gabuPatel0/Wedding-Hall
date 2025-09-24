import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const values = [
    {
      title: "Elegance",
      description: "Thoughtful design and decor that elevate every celebration.",
      color: "#e7bc91",
    },
    {
      title: "Hospitality",
      description: "Warm, attentive service that makes guests feel at home.",
      color: "#f3d5b5",
    },
    {
      title: "Flexibility",
      description: "Spaces and packages tailored to your vision and budget.",
      color: "#e7bc91",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffedd8] via-[#f3d5b5] to-[#e7bc91]" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold text-[#603808] mb-4 animate-fade-in-up">
            <span className="text-balance">About Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#8b5e34] animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            <span className="text-balance">A venue built with love, tradition, and a vision for timeless celebrations.</span>
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#603808] mb-6">
              Our Story
            </h2>
            <p className="text-lg text-[#8b5e34] leading-relaxed mb-4">
              Founded in 1998, our venue began as a family dream: a warm, elegant space where life's most important moments
              could be celebrated with grace. Over the years, we've hosted hundreds of weddings, corporate events, cultural
              gatherings, and milestones—each one unique, every one unforgettable.
            </p>
            <p className="text-lg text-[#8b5e34] leading-relaxed">
              In 2015, we expanded to welcome larger celebrations and modern amenities, all while preserving the charm and
              tradition our guests love. Today, we proudly host 500+ events and continue to craft experiences that feel
              personal, thoughtful, and timeless.
            </p>

            {/* Timeline */}
            <div className="mt-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                {[
                  { year: "1998", label: "Founded" },
                  { year: "2015", label: "Expanded" },
                  { year: "500+", label: "Events Hosted" },
                ].map((t, i) => (
                  <div key={t.year} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#603808] font-semibold" style={{ backgroundColor: i % 2 ? "#f3d5b5" : "#e7bc91" }}>
                      {t.year}
                    </div>
                    <span className="text-[#8b5e34]">{t.label}</span>
                    {i < 2 && <div className="hidden sm:block w-10 h-[2px] bg-[#d4a276] mx-2" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="justify-self-center w-full max-w-xl">
            <div className="rounded-3xl p-3" style={{ backgroundColor: "#ffedd8", border: "2px solid #d4a276" }}>
              <img
                src="/elegant-wedding-hall-interior-with-beautiful-table.jpg"
                alt="Our venue interior"
                className="w-full h-[360px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Highlight */}
      <section className="py-20 px-6 bg-[#ffedd8]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#603808] mb-4">Our Location</h3>
            <p className="text-[#8b5e34] mb-4">
              Located in the heart of the city, easily accessible from all major routes.
            </p>
            <p className="text-[#8b5e34]">
              Plenty of parking, nearby accommodations, and convenient transit options for your guests.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-[#e7bc91]">
            <iframe
              title="Venue Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31514.983934176765!2d72.823!3d21.170!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEwJzEyLjAiTiA3MsKwNDknMjIuOCJF!5e0!3m2!1sen!2s!4v1710000000000"
              width="100%"
              height="380"
              loading="lazy"
              className="w-full"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Values & Mission */}
      <section className="py-20 px-6 bg-[#f3d5b5]/40">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#603808] text-center mb-12">
            What We Value
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="text-center p-8 rounded-2xl bg-white/50 shadow-sm border border-[#e7bc91]">
                <div
                  className="mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center text-[#603808] font-semibold"
                  style={{ backgroundColor: v.color }}
                  aria-hidden
                >
                  {v.title[0]}
                </div>
                <h4 className="text-xl font-semibold text-[#603808] mb-2">{v.title}</h4>
                <p className="text-[#8b5e34]">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#f3d5b5] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[#ffedd8] via-transparent to-[#e7bc91]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#603808] mb-4">
            We’d love to host your special day.
          </h3>
          <Button asChild size="lg" className="bg-[#bc8a5f] hover:bg-[#a47148] text-white px-8 py-4 text-lg font-semibold">
            <a href="/contact">Get in Touch</a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
