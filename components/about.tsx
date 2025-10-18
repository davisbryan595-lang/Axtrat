"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import CountUp from "./count-up"
import Image from "next/image"

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section id="about" className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background shimmer */}
      <div className="absolute inset-0 shimmer-bg opacity-5" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About <span className="text-amber-500">Axtrat</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center" ref={ref}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-lg overflow-hidden glow-gold"
          >
            <Image src="/professional-auto-detailing-interior-cleaning.jpg" alt="Axtrat detailing work" fill className="object-cover" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Axtrat Auto Detailing was born from a passion for perfection and a commitment to excellence. What started
              as a dream has evolved into a trusted name in mobile auto detailing across North Texas.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We bring premium detailing services directly to you, combining cutting-edge techniques with meticulous
              attention to detail. Every vehicle we touch receives the care and precision it deserves.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {inView && (
                <>
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 text-center">
                    <CountUp end={500} duration={2} />
                    <p className="text-gray-400 text-sm mt-2">Cars Detailed</p>
                  </div>
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 text-center">
                    <CountUp end={450} duration={2} />
                    <p className="text-gray-400 text-sm mt-2">Happy Clients</p>
                  </div>
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 text-center">
                    <CountUp end={5} duration={2} />
                    <p className="text-gray-400 text-sm mt-2">Years Experience</p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
