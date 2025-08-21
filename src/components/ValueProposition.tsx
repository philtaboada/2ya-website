import ScrollAnimation from './ScrollAnimation'

export default function ValueProposition() {
  return (
    <section id="value" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              ¿Te dedicas a la belleza o disfrutas cuidarte?
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Para profesionales */}
          <ScrollAnimation animation="slideInLeft" delay={200}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift hover-scale">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-light to-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-user-tie text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 text-center">Para profesionales</h3>
              <p className="text-gray-dark text-center leading-relaxed">
                Más visibilidad, agenda automatizada, mayor control de tus ingresos y herramientas para hacer crecer tu negocio.
              </p>
            </div>
          </ScrollAnimation>

          {/* Para clientes */}
          <ScrollAnimation animation="fadeInRight" delay={400}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift hover-scale">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-smile text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 text-center">Para clientes</h3>
              <p className="text-gray-dark text-center leading-relaxed">
                Citas al instante, descuentos exclusivos, puntos acumulables y los mejores servicios de belleza cerca de ti.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
