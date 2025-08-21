export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 lg:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            Tu cita perfecta,<br />
            <span className="text-secondary">a un clic</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <strong>2YA</strong> conecta a <strong>profesionales</strong>, <strong>negocios</strong> y <strong>clientes</strong> en la plataforma líder de citas y promociones de belleza en Perú
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <a href="#" className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 flex items-center justify-center">
              <i className="fas fa-download mr-3"></i>
              Descargar App
            </a>
            <a href="#" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center">
              <i className="fas fa-user-tie mr-3"></i>
              Soy Profesional
            </a>
          </div>

          {/* App mockup placeholder */}
          <div className="animate-scale-in" style={{animationDelay: '0.6s'}}>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-md mx-auto border border-white/20 hover-lift">
              <div className="bg-gradient-to-br from-secondary to-primary-light rounded-2xl p-6 text-center">
                <i className="fas fa-mobile-alt text-4xl text-white mb-4"></i>
                <p className="text-white font-semibold">App 2YA</p>
                <p className="text-white/80 text-sm">Disponible en iOS y Android</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
