'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react'

import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
  className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
    isScrolled
      ? 'bg-white shadow-lg'
      : 'bg-white/80 backdrop-blur-md'
  }`}
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-17">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center overflow-hidden">
    <Image
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9A8ATN6aIzuA5rI0I6MQtGs9ADSx8VPBXUtg3Lx-GQjK5MFa3"
      alt="BCT"
      width={50}
      height={50}
      className="w-full h-full object-cover"
    />
  </div>

 
</Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg transition-colors font-medium ${
                  link.highlight
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-2 mt-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                    link.highlight
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
