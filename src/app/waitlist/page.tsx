'use client'

/* eslint-disable @next/next/no-img-element */

import { useState } from 'react'
import WaitlistHeader from '@/components/WaitlistHeader'
import WaitlistHero from '@/components/WaitlistHero'
import WaitlistForm from '@/components/WaitlistForm'
import TrustElements from '@/components/TrustElements'
import WaitlistFooter from '@/components/WaitlistFooter'
import WaitlistProgress from '@/components/WaitlistProgress'

export default function WaitlistPage() {
  const [email, setEmail] = useState('')
  const [userType, setUserType] = useState<'professional' | 'client' | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !userType) return

    // Aquí iría la lógica para enviar el email a tu backend
    console.log('Email registrado:', email, 'Tipo:', userType)

    // Simular envío
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-light via-white to-light">
      <WaitlistHeader />

      <main>
        {!isSubmitted ? (
          <>
            <WaitlistHero />
            <WaitlistForm
              email={email}
              setEmail={setEmail}
              userType={userType}
              setUserType={setUserType}
              onSubmit={handleSubmit}
            />
            <TrustElements />
          </>
        ) : (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center animate-fade-in-up">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-primary/20">
                <img
                  src="/logo2yaApp.svg"
                  alt="2YA Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                ¡Te has registrado exitosamente!
              </h1>
              <p className="text-xl text-gray-dark mb-8 max-w-2xl mx-auto">
                Serás uno de los primeros en conocer cuando lancemos 2YA.
                Te notificaremos sobre el lanzamiento y tendrás acceso exclusivo a funciones premium.
              </p>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
                <p className="text-primary font-semibold mb-2">¿Qué sigue?</p>
                <ul className="text-gray-dark text-left max-w-md mx-auto space-y-2">
                  <li className="flex items-center">
                    <i className="fas fa-envelope text-primary mr-3"></i>
                    Revisa tu email para confirmar la suscripción
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-bell text-primary mr-3"></i>
                    Te notificaremos cuando la app esté lista
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-gift text-primary mr-3"></i>
                    Acceso exclusivo a funciones premium por tiempo limitado
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </main>

      <WaitlistFooter />
      <WaitlistProgress />
    </div>
  )
}
