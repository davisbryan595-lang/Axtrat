import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function Pricing() {
  const packages = [
    {
      name: "Basic Wash",
      price: "$79",
      description: "Perfect for regular maintenance",
      features: ["Exterior wash", "Tire shine", "Air freshener", "Mobile service"],
      popular: false,
    },
    {
      name: "Premium Detail",
      price: "$149",
      description: "Our most popular choice",
      features: [
        "Everything in Basic",
        "Interior vacuum & wipe",
        "Wax application",
        "Window cleaning",
        "Undercarriage rinse",
      ],
      popular: true,
    },
    {
      name: "Luxury Package",
      price: "$249",
      description: "Complete transformation",
      features: [
        "Everything in Premium",
        "Ceramic coating",
        "Deep interior cleaning",
        "Engine bay detailing",
        "Paint protection film",
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package for your vehicle's needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative border transition-all duration-300 ${
                pkg.popular
                  ? "border-primary bg-card ring-2 ring-primary/20 md:scale-105"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                  <p className="text-sm text-muted-foreground">per service</p>
                </div>

                <Button
                  className={`w-full ${
                    pkg.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/90 text-foreground"
                  }`}
                >
                  Book Now
                </Button>

                <div className="space-y-3 pt-6 border-t border-border">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
