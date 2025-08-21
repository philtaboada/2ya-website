'use client'

import { useState } from 'react'

export default function Features() {
  const [activeTab, setActiveTab] = useState('professionals')

  const professionalFeatures = [
    {
      icon: 'fa-calendar-alt',
      title: 'Agenda inteligente',
      description: 'Gestiona tus citas 24/7 con recordatorios automáticos por WhatsApp y SMS. Reduce las inasistencias hasta en un 70%.'
    },
    {
      icon: 'fa-chart-line',
      title: 'Perfil destacado',
      description: 'Presencia premium en nuestro marketplace con reseñas verificadas y portafolio visual de tus trabajos.'
    },
    {
      icon: 'fa-bullhorn',
      title: 'Herramientas de marketing',
      description: 'Crea promociones, descuentos y paquetes especiales directamente desde la app. Atrae más clientes sin esfuerzo.'
    }
  ]

  const clientFeatures = [
    {
      icon: 'fa-mobile-alt',
      title: 'Reserva en segundos',
      description: 'Encuentra y reserva con tu profesional favorito en menos de 1 minuto, desde cualquier dispositivo.'
    },
    {
      icon: 'fa-tags',
      title: 'Descuentos exclusivos',
      description: 'Accede a ofertas especiales solo para usuarios 2YA y ahorra en todos tus servicios de belleza.'
    },
    {
      icon: 'fa-gift',
      title: 'Programa de recompensas',
      description: 'Gana puntos en cada cita y canjéalos por servicios gratis, productos exclusivos y beneficios especiales.'
    }
  ]

  const features = activeTab === 'professionals' ? professionalFeatures : clientFeatures

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in-up">
            Funcionalidades destacadas
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-full p-2 flex">
            <button
              onClick={() => setActiveTab('professionals')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'professionals'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-gray-dark hover:text-primary'
              }`}
            >
              Para Profesionales
            </button>
            <button
              onClick={() => setActiveTab('clients')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'clients'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-gray-dark hover:text-primary'
              }`}
            >
              Para Clientes
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-light rounded-2xl p-8 text-center hover-lift animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`fas ${feature.icon} text-xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{feature.title}</h3>
              <p className="text-gray-dark leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
