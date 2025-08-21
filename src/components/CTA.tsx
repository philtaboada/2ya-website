export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            ¿Listo para transformar tu<br />
            <span className="text-secondary">experiencia de belleza?</span>
          </h2>

          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
            Únete a miles de profesionales y clientes que ya disfrutan de la comodidad de 2YA
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <a href="#" className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 flex items-center justify-center">
              <i className="fas fa-download mr-3"></i>
              Descargar App
            </a>
            <a href="#" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center">
              <i className="fas fa-user-tie mr-3"></i>
              Registro Profesional
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
