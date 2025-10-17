import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function About() {
  const highlights = [
    "Mobile service comes to your location",
    "Premium eco-friendly products",
    "Certified professional detailers",
    "Satisfaction guaranteed",
  ]

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Visual */}
          <div className="relative h-96 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-3xl" />
            <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl border border-primary/20 flex items-center justify-center overflow-hidden">
              <Image src="/professional-auto-detailing-team-working-on-luxury.jpg" alt="Axtrat detailing team" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-8">
                <div className="text-center space-y-2">
                  <div className="text-5xl font-bold text-primary">10+</div>
                  <p className="text-white font-semibold">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
                About <span className="text-primary">Axtrat</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Started with a dream and built on hard work, Axtrat Mobile Auto Detailing has become the trusted choice
                for premium car care across North Texas. We combine professional expertise with convenient mobile
                service to deliver showroom-quality results.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
