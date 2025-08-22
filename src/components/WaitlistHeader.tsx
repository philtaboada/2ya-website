'use client'

/* eslint-disable @next/next/no-img-element */

import { useState } from 'react'
import Link from 'next/link'

export default function WaitlistHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <img
                src="/logo2yaApp.svg"
                alt="2YA Logo"
                className="w-12 h-12 object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#value" className="text-dark hover:text-primary transition-colors duration-300 relative group">
              Sobre 2YA
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/#features" className="text-dark hover:text-primary transition-colors duration-300 relative group">
              Funcionalidades
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/#testimonials" className="text-dark hover:text-primary transition-colors duration-300 relative group">
              Testimonios
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/" className="bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transform transition-all duration-300">
              <i className="fas fa-arrow-left mr-2"></i>
              Volver al Inicio
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl text-dark`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in-up">
            <nav className="flex flex-col space-y-4">
              <Link href="/#value" className="text-dark hover:text-primary transition-colors duration-300">Sobre 2YA</Link>
              <Link href="/#features" className="text-dark hover:text-primary transition-colors duration-300">Funcionalidades</Link>
              <Link href="/#testimonials" className="text-dark hover:text-primary transition-colors duration-300">Testimonios</Link>
              <Link href="/" className="bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-full font-semibold text-center">
                <i className="fas fa-arrow-left mr-2"></i>
                Volver al Inicio
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
