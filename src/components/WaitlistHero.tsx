/* eslint-disable @next/next/no-img-element */

export default function WaitlistHero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/10"></div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-16 w-16 h-16 bg-secondary/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-24 left-20 w-12 h-12 bg-accent/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Badge/Trust Element */}
            <div className="inline-flex items-center bg-white/90 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
              <i className="fas fa-star text-accent mr-2"></i>
              <span className="text-sm font-semibold text-primary">PRÓXIMAMENTE - LISTA DE ESPERA EXCLUSIVA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6 leading-tight animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              La revolución de la
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> belleza</span>
              <br />en Perú
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-dark mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <strong>¿Perdiste citas? ¿Tus clientes no te encuentran? ¿Gastas fortunas en marketing?</strong>
              <br /><br />
              2YA llega para conectar <strong>profesionales de la belleza</strong> con <strong>clientes</strong> que los buscan, creando la comunidad más grande del sector en Perú.
            </p>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-primary/10 hover-lift">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center">
                  <i className="fas fa-users text-white text-sm"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-dark">+1,000 profesionales</h3>
                  <p className="text-sm text-gray-dark">Conectados en la plataforma</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-primary/10 hover-lift">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary to-primary-light rounded-full flex items-center justify-center">
                  <i className="fas fa-calendar-check text-white text-sm"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-dark">50% más citas</h3>
                  <p className="text-sm text-gray-dark">Incremento promedio</p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start space-x-6 text-sm text-gray-dark animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center space-x-2">
                <i className="fas fa-shield-alt text-primary"></i>
                <span>Datos seguros</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-clock text-primary"></i>
                <span>Lanzamiento Q1 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt text-primary"></i>
                <span>100% enfocado en Perú</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <div className="relative">
              {/* Main App Preview */}
              <div className="bg-gradient-to-br from-white to-light rounded-3xl p-6 shadow-2xl border border-primary/10 hover-lift">
                <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 text-center text-white">
                                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/logo2yaApp.svg"
                    alt="2YA App Logo"
                    className="w-8 h-8 object-contain filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">2YA App</h3>
                <p className="text-white/90 text-sm mb-4">La app que transformará el sector belleza en Perú</p>

                  {/* Mock Features */}
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-check-circle text-secondary text-sm"></i>
                      <span className="text-sm">Sistema de citas inteligente</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-check-circle text-secondary text-sm"></i>
                      <span className="text-sm">Marketing automatizado</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-check-circle text-secondary text-sm"></i>
                      <span className="text-sm">Gestión de clientes</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Notification */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-primary/20 animate-bounce">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-success to-primary-light rounded-full flex items-center justify-center">
                    <i className="fas fa-bell text-white text-sm"></i>
                  </div>
                  <div>
                    <p className="text-xs text-gray-dark">¡Nueva cita!</p>
                    <p className="text-sm font-semibold text-dark">María González</p>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-primary/20">
                <div className="text-center">
                  <p className="text-lg font-bold text-primary">2,500+</p>
                  <p className="text-xs text-gray-dark">Usuarios en lista de espera</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
