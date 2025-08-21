'use client'

import { useState } from 'react'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: '¿Necesito tarjeta de crédito para registrarme?',
      answer: 'No es necesario. Puedes crear tu cuenta completamente gratis y explorar todas las funciones antes de decidirte por un plan. Para los profesionales, solo se requiere tarjeta cuando activas un plan premium.'
    },
    {
      question: '¿Puedo cancelar mi membresía cuando quiera?',
      answer: 'Sí, puedes cancelar en cualquier momento sin penalidades ni contratos forzosos. Para planes anuales, ofrecemos reembolso prorrateado por los meses no utilizados.'
    },
    {
      question: '¿2YA está disponible fuera de Lima?',
      answer: '¡Sí! Actualmente tenemos cobertura en las principales ciudades de Perú, incluyendo Arequipa, Trujillo, Chiclayo, Cusco y más. Estamos expandiéndonos constantemente.'
    },
    {
      question: '¿Qué pasa si no asisto a mi cita programada?',
      answer: 'Puedes cancelar o reprogramar sin costo hasta 24 horas antes. Las cancelaciones de última hora pueden incurrir en cargos según la política de cada profesional, la cual verás claramente al reservar.'
    },
    {
      question: '¿Cómo funcionan los puntos y recompensas?',
      answer: 'Por cada sol que gastas en citas o productos, ganas 1 punto. Estos puntos son acumulables y canjeables por servicios gratis, productos exclusivos y beneficios especiales. Los niveles Bronce, Plata y Oro ofrecen ventajas adicionales.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in-up">
            Preguntas frecuentes
          </h2>
          <p className="text-xl text-gray-dark animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Todo lo que necesitas saber sobre 2YA
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-light rounded-xl overflow-hidden hover-lift animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
              >
                <span className="font-semibold text-primary pr-4">{faq.question}</span>
                <i className={`fas fa-chevron-down text-primary transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}></i>
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-4 animate-fade-in-up">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-dark leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
