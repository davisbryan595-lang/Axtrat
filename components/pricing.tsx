"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const pricingTiers = [
  {
    name: "Exterior Wash",
    price: "Starting from $49",
    description: "Professional exterior cleaning",
    features: ["Hand wash", "Tire shine", "Quick dry"],
  },
  {
    name: "Full Detail",
    price: "Starting from $149",
    description: "Complete interior & exterior",
    features: ["Exterior wash", "Interior vacuum", "Dashboard detail", "Window cleaning"],
    featured: true,
  },
  {
    name: "Premium Package",
    price: "Starting from $299",
    description: "Ultimate detailing experience",
    features: ["Full detail", "Paint correction", "Ceramic coating", "Leather treatment"],
  },
]

export default function Pricing() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-black to-amber-950/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our <span className="text-amber-500">Pricing</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`relative rounded-lg overflow-hidden backdrop-blur-sm transition-all ${
                tier.featured
                  ? "border-2 border-amber-500 bg-amber-500/10 md:scale-105"
                  : "border border-amber-500/30 bg-black/50"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ boxShadow: "0 0 30px rgba(255, 165, 0, 0.3)" }}
            >
              {tier.featured && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-center py-2 font-bold text-sm">
                  MOST POPULAR
                </div>
              )}

              <div className={`p-8 ${tier.featured ? "pt-16" : ""}`}>
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{tier.description}</p>
                <div className="text-3xl font-bold text-amber-500 mb-6">{tier.price}</div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-amber-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  onClick={() => scrollToSection("booking")}
                  className={`w-full font-bold py-3 rounded-lg transition-all ${
                    tier.featured
                      ? "bg-amber-500 text-black hover:bg-amber-600"
                      : "border border-amber-500 text-amber-500 hover:bg-amber-500/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
