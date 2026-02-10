'use client'

import Link from 'next/link'
import { useState, useEffect, useMemo } from 'react'
import { Menu, X, User, Phone } from 'lucide-react'
import { NAV_ITEMS } from '@/lib/types'
import { createClient } from '@/lib/supabase/client'
import type { AuthChangeEvent, Session } from '@supabase/supabase-js'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [user, setUser] = useState<{ email: string } | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const supabase = useMemo(() => createClient(), [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        if (session?.user) {
          setUser({ email: session.user.email || '' })
        } else {
          setUser(null)
        }
      } catch (error) {
        console.error('Error getting session:', error)
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }

    checkSession()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event: AuthChangeEvent, session: Session | null) => {
      if (session?.user) {
        setUser({ email: session.user.email || '' })
      } else {
        setUser(null)
      }
      setIsLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [supabase])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center">
            <span className="text-2xl font-serif text-white tracking-wider transition-transform duration-300 group-hover:scale-105">
              The <span className="font-semibold italic">Office</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.filter(item => item.name !== 'Book nu' || user).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm text-white/80 hover:text-white transition-colors duration-200 py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent-light after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side: Phone + Auth */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+4530342272"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
            >
              <Phone size={14} />
              <span>30 34 22 72</span>
            </a>
            <span className="w-px h-6 bg-white/20" />
            {isLoading ? (
              <div className="w-20 h-9" />
            ) : user ? (
              <Link
                href="/min-side"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm transition-colors"
              >
                <User size={16} />
                <span>Min side</span>
              </Link>
            ) : (
              <Link
                href="/login"
                className="bg-white text-primary px-5 py-2 rounded-full text-sm font-medium hover:bg-accent-light transition-colors"
              >
                Log ind
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.filter(item => item.name !== 'Book nu' || user).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-4 rounded-lg transition-colors text-base"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
              <a
                href="tel:+4530342272"
                className="flex items-center gap-3 text-white bg-white/10 px-4 py-4 rounded-lg"
              >
                <Phone size={20} />
                <span className="text-base font-medium">30 34 22 72</span>
              </a>
              {!isLoading && (user ? (
                <Link
                  href="/min-side"
                  className="flex items-center gap-3 text-white bg-white/10 px-4 py-4 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <User size={20} />
                  <span className="text-base font-medium">Min side</span>
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="block bg-white text-primary px-4 py-4 rounded-lg font-medium text-center text-base"
                  onClick={() => setIsOpen(false)}
                >
                  Log ind
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
