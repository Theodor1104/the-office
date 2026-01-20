'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, User } from 'lucide-react'
import { NAV_ITEMS } from '@/lib/types'

interface NavigationProps {
  user?: { email: string; is_member: boolean } | null
}

export default function Navigation({ user }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-primary text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-light tracking-wider">
              The <span className="font-semibold">Office</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-white transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Auth Button */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <Link
                href="/min-side"
                className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors"
              >
                <User size={18} />
                <span className="text-sm font-medium">Min side</span>
              </Link>
            ) : (
              <Link
                href="/login"
                className="bg-white text-black px-6 py-2 rounded font-medium hover:bg-gray-200 transition-colors"
              >
                Log ind
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-sm font-medium hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/20 mt-4">
              {user ? (
                <Link
                  href="/min-side"
                  className="flex items-center space-x-2 text-white"
                  onClick={() => setIsOpen(false)}
                >
                  <User size={18} />
                  <span>Min side</span>
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="inline-block bg-white text-black px-6 py-2 rounded font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Log ind
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
