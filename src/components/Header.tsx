'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src="/logo2yaApp.svg"
                alt="2YA Logo"
                className="w-12 h-12 object-contain"
              />
            </div>  
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#value" className="text-dark hover:text-primary transition-colors duration-300 relative group">
              Beneficios
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#features" className="text-dark hover:text-primary transition-colors duration-300 relative group">
              Funcionalidades
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#plans" className="text-dark hover:text-primary transition-colors duration-300 relative group">
              Planes
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#testimonials" className="text-dark hover:text-primary transition-colors duration-300 relative group">
              Testimonios
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#faq" className="text-dark hover:text-primary transition-colors duration-300 relative group">
              Preguntas
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transform transition-all duration-300">
              <i className="fas fa-download mr-2"></i>
              Descargar App
            </a>
          </nav>

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
              <a href="#value" className="text-dark hover:text-primary transition-colors duration-300">Beneficios</a>
              <a href="#features" className="text-dark hover:text-primary transition-colors duration-300">Funcionalidades</a>
              <a href="#plans" className="text-dark hover:text-primary transition-colors duration-300">Planes</a>
              <a href="#testimonials" className="text-dark hover:text-primary transition-colors duration-300">Testimonios</a>
              <a href="#faq" className="text-dark hover:text-primary transition-colors duration-300">Preguntas</a>
              <a href="#" className="bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-full font-semibold text-center">
                <i className="fas fa-download mr-2"></i>
                Descargar App
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
