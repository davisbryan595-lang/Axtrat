import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-float-in">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Premium Mobile Detailing</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
                Your Car Deserves <span className="text-primary">Excellence</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Professional mobile auto detailing services that come to you. We bring showroom shine to your driveway
                across North Texas.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                Book Your Service
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5 bg-transparent">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">5★</p>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 lg:h-full min-h-96 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-3xl" />
            <div className="relative w-full h-full bg-gradient-to-br from-card to-card/50 rounded-3xl border border-primary/20 flex items-center justify-center overflow-hidden">
              <Image src="/luxury-car-being-detailed-with-professional-detail.jpg" alt="Premium car detailing" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
