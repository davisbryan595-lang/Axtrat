"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-black border-t border-amber-500/20 relative overflow-hidden">
      {/* Animated glow line */}
      <motion.div
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"
        animate={{ x: [-1000, 1000] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        style={{ width: "100%" }}
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/axtrat-HLon88uvbeflzh8qpR5wTfroNTSV3N.jpg"
              alt="Axtrat"
              width={50}
              height={50}
              className="mb-4"
            />
            <p className="text-gray-400 text-sm">Premium mobile auto detailing</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Pricing"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="text-gray-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {["Mobile Detailing", "Paint Correction", "Paint Protection"].map((service) => (
                <li key={service} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:9725331176" className="text-gray-400 hover:text-amber-500 transition-colors">
                  (972) 533-1176
                </a>
              </li>
              <li>
                <a
                  href="mailto:Axtratautodetailing@gmail.com"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Email Us
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          className="border-t border-amber-500/20 pt-8 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} Axtrat Mobile Auto Detailing. All rights reserved.</p>
          <p className="mt-2 text-amber-500 font-semibold">Started with a Dream, Built on Hard Work</p>
        </motion.div>
      </div>
    </footer>
  )
}
