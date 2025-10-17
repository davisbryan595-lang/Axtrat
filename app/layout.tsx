import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Axtrat Mobile Auto Detailing | Premium Car Detailing in North Texas",
  description:
    "Professional mobile auto detailing services in Flower Mound, Lewisville, Frisco, and surrounding North Texas areas. Premium car detailing, paint protection, and interior cleaning.",
  generator: "v0.app",
  openGraph: {
    title: "Axtrat Mobile Auto Detailing",
    description: "Started with a Dream, Built on Hard Work",
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
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
