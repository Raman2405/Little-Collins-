import Link from 'next/link'
import { Facebook, Instagram, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background via-secondary/20 to-background border-t">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold gradient-text">Visit Us</h3>
            <div className="space-y-2">
              <p className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" />
                <span>667 Lexington Ave, New York, NY 10022</span>
              </p>
              <p className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+12123081969" className="hover:text-accent transition-colors">
                  +1 (212) 308-1969
                </a>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold gradient-text">Hours</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Monday - Friday: 7am - 4pm</p>
              <p>Saturday - Sunday: 8am - 4pm</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold gradient-text">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/littlecollinsnyc/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/LittleCollinsNYC"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <Link href="/order" className="btn-primary inline-block">
              Order Online
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Little Collins NYC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 