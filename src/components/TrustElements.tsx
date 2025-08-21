export default function TrustElements() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
            ¿Por qué 2YA será el líder en belleza peruana?
          </h2>
          <p className="text-lg text-gray-dark max-w-2xl mx-auto">
            Hemos estudiado el mercado y creado la solución que el sector necesita
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column - Problem & Solution */}
          <div>
            <h3 className="text-2xl font-bold text-dark mb-8">El problema del sector belleza en Perú:</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-2xl border border-red-100">
                <div className="w-10 h-10 bg-danger/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-exclamation-triangle text-danger"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-dark mb-2">Falta de visibilidad</h4>
                  <p className="text-gray-dark text-sm">Los profesionales no encuentran clientes y los clientes no encuentran profesionales confiables</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-2xl border border-red-100">
                <div className="w-10 h-10 bg-danger/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-exclamation-triangle text-danger"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-dark mb-2">Sistema de citas obsoleto</h4>
                  <p className="text-gray-dark text-sm">Llamadas, WhatsApp desorganizado, pérdida de citas importantes</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-2xl border border-red-100">
                <div className="w-10 h-10 bg-danger/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-exclamation-triangle text-danger"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-dark mb-2">Marketing ineficiente</h4>
                  <p className="text-gray-dark text-sm">Gastos elevados en publicidad sin resultados medibles</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-gradient-to-r from-success/10 to-primary/10 rounded-2xl border border-success/20">
              <h4 className="text-xl font-bold text-dark mb-4 flex items-center">
                <i className="fas fa-lightbulb text-primary mr-3"></i>
                Nuestra solución:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-dark">
                  <i className="fas fa-check text-success mr-3"></i>
                  <span><strong>Plataforma unificada:</strong> Todo en un solo lugar</span>
                </li>
                <li className="flex items-center text-gray-dark">
                  <i className="fas fa-check text-success mr-3"></i>
                  <span><strong>Inteligencia artificial:</strong> Matching perfecto entre profesionales y clientes</span>
                </li>
                <li className="flex items-center text-gray-dark">
                  <i className="fas fa-check text-success mr-3"></i>
                  <span><strong>Marketing automatizado:</strong> Más clientes con menos esfuerzo</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Stats & Trust */}
          <div className="space-y-8">
            {/* Market Stats */}
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">Mercado Peruano de Belleza</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">S/ 2,500M</div>
                  <div className="text-white/80 text-sm">Tamaño del mercado</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">15,000+</div>
                  <div className="text-white/80 text-sm">Profesionales</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">85%</div>
                  <div className="text-white/80 text-sm">Sin digitalización</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">60%</div>
                  <div className="text-white/80 text-sm">Crecimiento anual</div>
                </div>
              </div>
              <p className="text-white/80 text-sm text-center mt-6">
                *Datos basados en estudios de mercado 2024
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-primary/10">
              <h3 className="text-xl font-bold text-dark mb-6 text-center">¿Por qué confiar en 2YA?</h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-3 bg-light rounded-xl">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-users text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark">Equipo experto</h4>
                    <p className="text-sm text-gray-dark">Más de 10 años en tecnología y belleza</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3 bg-light rounded-xl">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-shield-alt text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark">Datos seguros</h4>
                    <p className="text-sm text-gray-dark">Certificación SSL y cumplimiento normativo</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3 bg-light rounded-xl">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark">100% Peruano</h4>
                    <p className="text-sm text-gray-dark">Desarrollado por y para peruanos</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3 bg-light rounded-xl">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-rocket text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark">Lanzamiento pronto</h4>
                    <p className="text-sm text-gray-dark">Beta cerrada programada para Q1 2025</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Early Adopter Badge */}
            <div className="bg-gradient-to-r from-accent/20 to-accent/10 rounded-2xl p-6 border border-accent/30 text-center">
              <div className="w-16 h-16 bg-accent/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-star text-accent text-2xl"></i>
              </div>
              <h4 className="font-bold text-dark mb-2">Early Adopter Program</h4>
              <p className="text-sm text-gray-dark">
                Los primeros 500 registrados recibirán acceso gratuito por 6 meses
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <p className="text-gray-dark mb-6">Empresas que confían en nuestro equipo:</p>
            <div className="flex flex-wrap justify-center items-center space-x-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">StartupPerú</div>
              <div className="text-2xl font-bold text-gray-400">BeautyTech</div>
              <div className="text-2xl font-bold text-gray-400">InnovateLab</div>
              <div className="text-2xl font-bold text-gray-400">DigitalBeauty</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
