import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-light tracking-wider">
                The <span className="font-semibold font-serif">Office</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-accent-light max-w-md">
              Dit professionelle coworking space i hjertet af Frederiksberg.
              Fællesskab, netværk og moderne faciliteter under ét tag.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Genveje</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/book" className="hover:text-white transition-colors">
                  Book lokale
                </Link>
              </li>
              <li>
                <Link href="/priser" className="hover:text-white transition-colors">
                  Priser
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-white transition-colors">
                  Kontakt os
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-white flex-shrink-0 mt-0.5" />
                <span>
                  Martensens Allé 8, kælderen<br />
                  1828 Frederiksberg
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-white flex-shrink-0" />
                <a href="mailto:michael@timeforlicensing.com" className="hover:text-white transition-colors">
                  michael@timeforlicensing.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-accent-light/20 text-center text-sm text-accent-light/60">
          <p>&copy; {new Date().getFullYear()} The Office. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  )
}
