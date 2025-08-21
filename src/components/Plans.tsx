'use client'

import { useState } from 'react'

export default function Plans() {
  const [billingCycle, setBillingCycle] = useState('monthly')

  const plans = [
    {
      name: '2YA START',
      subtitle: 'Para emprendedores',
      monthlyPrice: 'S/69',
      yearlyPrice: 'S/690',
      yearlySavings: 'Ahorras S/138 + 1 mes gratis',
      features: [
        '100 citas/mes incluídas',
        'Recordatorios automáticos',
        'Perfil destacado en marketplace',
        'Solo 10% de comisión',
        'Plantillas de promoción',
        'Soporte básico'
      ],
      popular: false
    },
    {
      name: '2YA PRO',
      subtitle: 'Para negocios establecidos',
      monthlyPrice: 'S/149',
      yearlyPrice: 'S/1,490',
      yearlySavings: 'Ahorras S/298 + 2 meses gratis',
      features: [
        'Citas ilimitadas',
        'Integración Google Calendar y Meta',
        'Solo 5% de comisión',
        '2 productos destacados/mes',
        'Email marketing (500 contactos)',
        'Analytics en tiempo real'
      ],
      popular: true
    },
    {
      name: '2YA ENTERPRISE',
      subtitle: 'Para cadenas y franquicias',
      monthlyPrice: 'S/279',
      yearlyPrice: 'S/2,790',
      yearlySavings: 'Ahorras S/558 + 3 meses gratis',
      features: [
        'Web app personalizada',
        '0% de comisión',
        'Gestor de inventario',
        'Soporte VIP prioritario',
        'Asesoría de marketing mensual',
        'Reportes personalizados'
      ],
      popular: false
    }
  ]

  return (
    <section id="plans" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in-up">
            Planes para Profesionales
          </h2>
          <p className="text-xl text-gray-dark animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Diseñados para crecer con tu negocio
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg flex">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-primary text-white'
                  : 'text-gray-dark hover:text-primary'
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                billingCycle === 'yearly'
                  ? 'bg-primary text-white'
                  : 'text-gray-dark hover:text-primary'
              }`}
            >
              Anual (Ahorra 20%)
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover-lift animate-fade-in-up relative ${
                plan.popular ? 'border-2 border-primary scale-105' : ''
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-accent text-dark text-center py-2 font-bold text-sm">
                  ⭐ POPULAR
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                <div className={`w-full h-32 rounded-xl mb-6 flex items-center justify-center ${
                  plan.popular
                    ? 'bg-gradient-to-br from-primary-light to-primary'
                    : 'bg-gradient-to-br from-primary to-primary-dark'
                }`}>
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="opacity-90">{plan.subtitle}</p>
                  </div>
                </div>

                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    <span className="text-lg text-gray-dark font-normal">
                      /{billingCycle === 'monthly' ? 'mes' : 'año'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="text-success text-sm font-semibold">{plan.yearlySavings}</p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <i className="fas fa-check text-primary-light mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-dark">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary to-primary-dark text-white hover:shadow-xl hover:scale-105'
                    : 'bg-gradient-to-r from-primary-light to-primary text-white hover:shadow-lg'
                }`}>
                  {plan.popular ? 'Elegir este plan' : 'Empezar ahora'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
