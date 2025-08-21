export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: 'fa-search',
      title: 'Busca',
      description: 'Encuentra el servicio que necesitas entre miles de profesionales verificados'
    },
    {
      number: 2,
      icon: 'fa-calendar-check',
      title: 'Reserva',
      description: 'Elige fecha, hora y reserva en segundos con solo unos clics'
    },
    {
      number: 3,
      icon: 'fa-bell',
      title: 'Confirma',
      description: 'Recibe recordatorios automáticos por WhatsApp y SMS'
    },
    {
      number: 4,
      icon: 'fa-gift',
      title: 'Disfruta',
      description: 'Acumula puntos y gana recompensas en cada cita'
    }
  ]

  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in-up">
            ¿Cómo funciona 2YA?
          </h2>
          <p className="text-xl text-gray-dark animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Simple, rápido y sin complicaciones
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="text-center relative animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-primary-light z-0"></div>
              )}

              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {step.number}
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4 -mt-16">
                  <i className={`fas ${step.icon} text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{step.title}</h3>
                <p className="text-gray-dark leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
