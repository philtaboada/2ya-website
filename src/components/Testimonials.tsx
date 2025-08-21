export default function Testimonials() {
  const testimonials = [
    {
      name: 'Lucía Mendoza',
      role: 'Esteticista en Surco - 2YA PRO',
      text: '"Desde que uso 2YA, mi agenda está siempre llena. Los recordatorios automáticos han reducido mis inasistencias a casi cero. ¡Es como tener una asistente personal sin el costo!"',
      avatar: '/testimonial-1.jpg'
    },
    {
      name: 'Andrea Ramos',
      role: 'Clienta frecuente - Miembro desde 2022',
      text: '"Como miembro del Club 2YA ahorro más de S/100 al mes en mis citas de belleza. Los puntos extras son el mejor regalo para una amante del cuidado personal como yo. ¡Ya canjeé 3 servicios gratis este año!"',
      avatar: '/testimonial-2.jpg'
    },
    {
      name: 'Javier López',
      role: 'Dueño de Barberías Premium',
      text: '"Implementamos 2YA Enterprise en nuestras 3 barberías y en un mes aumentamos nuestras citas en un 40%. La integración con Instagram fue clave para atraer nuevos clientes. El soporte VIP resolvió todas nuestras dudas en minutos."',
      avatar: '/testimonial-3.jpg'
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in-up">
            Historias de éxito
          </h2>
          <p className="text-xl text-gray-dark animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Lo que dicen nuestros profesionales y clientes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-light rounded-2xl p-8 relative hover-lift animate-fade-in-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="absolute top-6 left-6 text-5xl opacity-10">"</div>
              <div className="relative z-10">
                <p className="text-gray-dark mb-8 leading-relaxed italic">
                  {testimonial.text}
                </p>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                    <p className="text-gray-dark text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
