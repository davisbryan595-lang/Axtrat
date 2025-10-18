"use client"

import { motion } from "framer-motion"
import { Droplet, Sparkles, Wind, Zap, Shield } from "lucide-react"
import Image from "next/image"

const services = [
  {
    id: 1,
    title: "Mobile Detailing",
    description: "We come to you with professional-grade equipment",
    icon: Droplet,
    image: "/mobile-car-wash-truck.jpg",
  },
  {
    id: 2,
    title: "Exterior Washes",
    description: "Premium exterior cleaning and protection",
    icon: Sparkles,
    image: "/car-exterior-wash-shiny.jpg",
  },
  {
    id: 3,
    title: "Interior Cleanings",
    description: "Deep clean and refresh your vehicle interior",
    icon: Wind,
    image: "/car-interior-detailing-clean.jpg",
  },
  {
    id: 4,
    title: "Paint Correction",
    description: "Remove swirls, scratches, and imperfections",
    icon: Zap,
    image: "/paint-correction-buffing.jpg",
  },
  {
    id: 5,
    title: "Paint Protection",
    description: "Ceramic coating and protective film application",
    icon: Shield,
    image: "/ceramic-coating-paint-protection.jpg",
  },
]

export default function Services() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="services" className="py-20 px-4 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our <span className="text-amber-500">Services</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                className="group relative bg-gradient-to-br from-amber-500/5 to-transparent border border-amber-500/20 rounded-lg overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-6 h-6 text-amber-500" />
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <motion.button
                    onClick={() => scrollToSection("booking")}
                    className="text-amber-500 font-semibold hover:text-amber-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Book This Service →
                  </motion.button>
                </div>

                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
