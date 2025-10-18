"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div className="flex-shrink-0" whileHover={{ scale: 1.05 }} onClick={() => scrollToSection("home")}>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/axtrat-HLon88uvbeflzh8qpR5wTfroNTSV3N.jpg"
            alt="Axtrat Auto Detailing"
            width={60}
            height={60}
            className="cursor-pointer"
          />
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "About", "Services", "Pricing", "Contact"].map((item) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-white hover:text-amber-400 transition-colors text-sm font-medium"
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.button>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={() => scrollToSection("booking")}
          className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-2 rounded-lg transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Now
        </motion.button>
      </div>
    </motion.nav>
  )
}
