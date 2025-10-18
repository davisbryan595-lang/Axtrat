# Axtrat Mobile Auto Detailing

A premium, cinematic one-page website for Axtrat Mobile Auto Detailing serving North Texas.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion for engaging interactions
- **Premium Aesthetic**: Black & gold theme with cinematic feel
- **Booking System**: Interactive form for service scheduling
- **Contact Integration**: Contact form with API endpoints
- **Optimized Images**: Next.js Image component for performance
- **SEO Ready**: Proper meta tags and semantic HTML

## Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Images**: Next.js Image component

## Sections

1. **Navbar** - Sticky navigation with smooth scroll
2. **Hero** - Fullscreen cinematic hero with CTA buttons
3. **About** - Company story with stat counters
4. **Services** - 5 service cards with hover effects
5. **Pricing** - 3-tier pricing with featured option
6. **Booking** - Interactive booking form with validation
7. **Contact** - Contact form and service area information
8. **Footer** - Links and copyright

## Customization

### Colors
Edit the color variables in `app/globals.css`:
- `--gold`: Primary brand color (#FFA500)
- `--gold-light`: Lighter gold (#FFB84D)
- `--gold-dark`: Darker gold (#E69500)

### Contact Information
Update in `components/contact.tsx`:
- Phone: (972) 533-1176
- Email: Axtratautodetailing@gmail.com
- Service areas list

### Images
Replace placeholder images with real photos:
- Hero background
- Service images
- About section image

## API Endpoints

- `POST /api/booking` - Handle booking submissions
- `POST /api/contact` - Handle contact form submissions

## Future Enhancements

- Email service integration (SendGrid, Resend)
- Database integration for bookings
- Payment processing (Stripe)
- Admin dashboard
- Customer testimonials section
- Before/after gallery

## Deployment

Deploy to Vercel with one click:

\`\`\`bash
npm install
npm run build
npm start
\`\`\`

Or use the Vercel CLI:

\`\`\`bash
vercel
\`\`\`

## License

© 2025 Axtrat Mobile Auto Detailing. All rights reserved.
