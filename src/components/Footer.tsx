export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src="/logo2yaApp.svg"
                  alt="2YA Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>
            <p className="opacity-80 leading-relaxed mb-6">
              La plataforma líder de citas de belleza en Perú, conectando profesionales y clientes desde 2021.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-light transition-colors duration-300">
                <i className="fab fa-apple text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-light transition-colors duration-300">
                <i className="fab fa-google-play text-white"></i>
              </a>
            </div>
          </div>

          {/* Para Profesionales */}
          <div>
            <h3 className="text-primary-lighter font-semibold mb-4">Para Profesionales</h3>
            <ul className="space-y-3">
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-primary-lighter transition-colors duration-300">Regístrate</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-primary-lighter transition-colors duration-300">Planes y precios</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-primary-lighter transition-colors duration-300">Recursos</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-primary-lighter transition-colors duration-300">Blog para profesionales</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-primary-lighter transition-colors duration-300">Centro de ayuda</a></li>
            </ul>
          </div>

          {/* Para Clientes */}
          <div>
            <h3 className="text-primary-lighter font-semibold mb-4">Para Clientes</h3>
            <ul className="space-y-3">
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-primary-lighter transition-colors duration-300">Buscar profesionales</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-primary-lighter transition-colors duration-300">Membresía Club</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-primary-lighter transition-colors duration-300">Puntos Plus</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-primary-lighter transition-colors duration-300">Ofertas especiales</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-primary-lighter transition-colors duration-300">Preguntas frecuentes</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-primary-lighter font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 opacity-60"></i>
                <a href="mailto:hola@2ya.pe" className="opacity-80 hover:opacity-100 hover:text-primary-lighter transition-colors duration-300">hola@2ya.pe</a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone mr-3 opacity-60"></i>
                <a href="tel:+51987654321" className="opacity-80 hover:opacity-100 hover:text-primary-lighter transition-colors duration-300">(01) 987 654 321</a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mr-3 opacity-60 mt-1"></i>
                <span className="opacity-80">Av. Petit Thouars 123, Lima</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex space-x-3 mt-6">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-light transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-light transition-colors duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-light transition-colors duration-300">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-light transition-colors duration-300">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="opacity-70 text-sm">
            © {new Date().getFullYear()} 2YA. Todos los derechos reservados. |
            <a href="#" className="hover:text-primary-lighter transition-colors duration-300 ml-1">Términos y condiciones</a> |
            <a href="#" className="hover:text-primary-lighter transition-colors duration-300 ml-1">Política de privacidad</a>
          </p>
          <p className="opacity-70 text-sm mt-2">Hecho con ❤️ en Perú</p>
        </div>
      </div>
    </footer>
  )
}
