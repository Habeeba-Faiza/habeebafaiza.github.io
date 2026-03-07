'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
]

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl md:text-2xl font-bold text-neutral-900">
            Habeeba Faiza
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-neutral-700 hover:text-neutral-900 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
