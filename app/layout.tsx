import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Axtrat Auto Detailing | Mobile Detailing in North Texas",
  description:
    "Premium mobile auto detailing services in Flower Mound, Lewisville, Frisco, and surrounding North Texas areas. Started with a Dream, Built on Hard Work.",
  generator: "v0.app",
  openGraph: {
    title: "Axtrat Auto Detailing",
    description: "Premium mobile auto detailing services in North Texas",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased bg-black text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
