import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Service Area",
      details: ["Flower Mound", "Lewisville", "Frisco", "North Texas"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["(972) 555-0123", "Available 7 days a week"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@axtrat.com", "Response within 2 hours"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Monday - Sunday", "7:00 AM - 7:00 PM"],
    },
  ]

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We're here to help. Contact us today to schedule your service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <Card
                key={index}
                className="bg-card border-border p-6 text-center hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Schedule Your Appointment
          </Button>
        </div>
      </div>
    </section>
  )
}
