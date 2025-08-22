/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'

export default function WaitlistFooter() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src="/logo2yaApp.svg"
                  alt="2YA Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="text-2xl font-bold">2YA</span>
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              La plataforma que revolucionará el sector de la belleza en Perú.
              Conectamos profesionales con clientes de manera inteligente y eficiente.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-primary transition-colors duration-300">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-white/80 hover:text-primary transition-colors duration-300">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-white/80 hover:text-primary transition-colors duration-300">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#value" className="text-white/80 hover:text-primary transition-colors duration-300">
                  Sobre 2YA
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-white/80 hover:text-primary transition-colors duration-300">
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-white/80 hover:text-primary transition-colors duration-300">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-white/80 hover:text-primary transition-colors duration-300">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2 text-primary"></i>
                hola@2ya.pe
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone mr-2 text-primary"></i>
                +51 999 999 999
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2 text-primary"></i>
                Lima, Perú
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 2YA. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-primary transition-colors duration-300 text-sm">
              Política de Privacidad
            </a>
            <a href="#" className="text-white/60 hover:text-primary transition-colors duration-300 text-sm">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
