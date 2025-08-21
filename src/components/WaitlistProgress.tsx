'use client'

import { useState, useEffect } from 'react'

export default function WaitlistProgress() {
  const [currentCount, setCurrentCount] = useState(2475)
  const [targetCount] = useState(3000)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Simular contador dinámico
    const interval = setInterval(() => {
      setCurrentCount(prev => {
        if (prev >= targetCount) return targetCount
        return prev + Math.floor(Math.random() * 3)
      })
    }, 8000) // Incrementa cada 8 segundos

    // Mostrar el componente después de un delay
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => {
      clearInterval(interval)
      clearTimeout(visibilityTimer)
    }
  }, [targetCount])

  const progressPercentage = (currentCount / targetCount) * 100

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-primary/20 hover-lift">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-primary/20">
            <img
              src="/logo2yaApp.svg"
              alt="2YA Logo"
              className="w-6 h-6 object-contain"
            />
          </div>
          <div>
            <p className="text-xs text-gray-dark font-semibold">Lista de Espera</p>
            <p className="text-lg font-bold text-dark">{currentCount.toLocaleString()}</p>
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
          <div
            className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        <p className="text-xs text-gray-dark text-center">
          Meta: {targetCount.toLocaleString()} usuarios
        </p>

        {currentCount >= targetCount && (
          <div className="mt-3 p-2 bg-success/10 rounded-lg border border-success/20">
            <p className="text-xs text-success font-semibold text-center">
              <i className="fas fa-check-circle mr-1"></i>
              ¡Meta alcanzada!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
