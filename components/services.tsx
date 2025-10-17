import { Card } from "@/components/ui/card"
import { Sparkles, Shield, Droplet, Wind } from "lucide-react"
import Image from "next/image"

export function Services() {
  const services = [
    {
      icon: Sparkles,
      title: "Exterior Detailing",
      description: "Professional wash, wax, and polish to restore your car's shine and protect the paint.",
      bgQuery: "professional car exterior detailing with wax and polish",
    },
    {
      icon: Droplet,
      title: "Interior Cleaning",
      description: "Deep cleaning of seats, carpets, and surfaces for a fresh, pristine interior.",
      bgQuery: "luxury car interior cleaning and detailing",
    },
    {
      icon: Shield,
      title: "Paint Protection",
      description: "Ceramic coating and paint protection film to keep your car looking new longer.",
      bgQuery: "ceramic coating application on luxury car paint",
    },
    {
      icon: Wind,
      title: "Engine Detailing",
      description: "Professional engine bay cleaning and detailing for a spotless finish.",
      bgQuery: "professional engine bay detailing and cleaning",
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive detailing solutions tailored to keep your vehicle looking pristine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group overflow-hidden relative"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src={`/.jpg?height=300&width=300&query=${service.bgQuery}`}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="p-6 space-y-4 relative z-10 group-hover:text-white transition-colors duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-gray-200 transition-colors leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
