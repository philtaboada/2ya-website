'use client'

import { useState } from 'react'

interface WaitlistFormProps {
  email: string
  setEmail: (email: string) => void
  userType: 'professional' | 'client' | null
  setUserType: (type: 'professional' | 'client' | null) => void
  onSubmit: (e: React.FormEvent) => void
}

export default function WaitlistForm({ email, setEmail, userType, setUserType, onSubmit }: WaitlistFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [emailError, setEmailError] = useState('')

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    if (value && !validateEmail(value)) {
      setEmailError('Por favor ingresa un email válido')
    } else {
      setEmailError('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !userType || !validateEmail(email)) return

    setIsLoading(true)

    // Simular delay de envío
    setTimeout(() => {
      onSubmit(e)
      setIsLoading(false)
    }, 1500)
  }

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-primary/10 via-white to-secondary/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
            Sé de los primeros en revolucionar el sector belleza
          </h2>
          <p className="text-lg text-gray-dark max-w-2xl mx-auto">
            Únete a nuestra lista de espera exclusiva y recibe beneficios únicos cuando lancemos 2YA
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-primary/10">
            {/* User Type Selection */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-dark mb-4">
                ¿Eres profesional de la belleza o cliente?
              </label>
              <div className="grid sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setUserType('professional')}
                  className={`p-6 rounded-2xl border-2 text-left transition-all duration-300 ${
                    userType === 'professional'
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-gray-200 hover:border-primary/50 hover:bg-primary/5'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <i className="fas fa-user-tie text-primary"></i>
                    </div>
                    <span className="font-semibold">Profesional</span>
                  </div>
                  <p className="text-sm text-gray-dark">
                    Estilistas, barberías, salones de belleza, spas...
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setUserType('client')}
                  className={`p-6 rounded-2xl border-2 text-left transition-all duration-300 ${
                    userType === 'client'
                      ? 'border-secondary bg-secondary/10 text-primary'
                      : 'border-gray-200 hover:border-secondary/50 hover:bg-secondary/5'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                      <i className="fas fa-user text-primary"></i>
                    </div>
                    <span className="font-semibold">Cliente</span>
                  </div>
                  <p className="text-sm text-gray-dark">
                    Personas que buscan servicios de belleza y cuidado personal
                  </p>
                </button>
              </div>
            </div>

            {/* Email Input */}
            <div className="mb-8">
              <label htmlFor="email" className="block text-lg font-semibold text-dark mb-3">
                Tu email para notificaciones exclusivas
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="tu@email.com"
                  className={`w-full px-6 py-4 text-lg border-2 rounded-2xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                    emailError
                      ? 'border-danger focus:border-danger focus:ring-danger/20'
                      : email
                      ? 'border-success focus:border-success focus:ring-success/20'
                      : 'border-gray-200 focus:border-primary focus:ring-primary/20'
                  }`}
                  required
                />
                {email && !emailError && (
                  <i className="fas fa-check-circle absolute right-4 top-1/2 transform -translate-y-1/2 text-success"></i>
                )}
                {emailError && (
                  <i className="fas fa-exclamation-circle absolute right-4 top-1/2 transform -translate-y-1/2 text-danger"></i>
                )}
              </div>
              {emailError && (
                <p className="text-danger text-sm mt-2 flex items-center">
                  <i className="fas fa-exclamation-triangle mr-2"></i>
                  {emailError}
                </p>
              )}
            </div>

            {/* Benefits List */}
            <div className="mb-8 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/10">
              <h3 className="font-semibold text-dark mb-3 flex items-center">
                <i className="fas fa-gift text-primary mr-2"></i>
                Beneficios exclusivos para la lista de espera:
              </h3>
              <ul className="space-y-2 text-sm text-gray-dark">
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  Acceso anticipado a la plataforma
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  Descuentos especiales en suscripción (primeros 100)
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  Invitaciones a eventos exclusivos
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  Tutoriales y capacitaciones gratuitas
                </li>
              </ul>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!email || !userType || !!emailError || isLoading}
              className={`w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 ${
                !email || !userType || !!emailError || isLoading
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-primary to-primary-light text-white hover:shadow-xl hover:scale-105 transform'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <i className="fas fa-spinner fa-spin mr-3"></i>
                  Registrando...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <i className="fas fa-rocket mr-3"></i>
                  ¡QUIERO SER DE LOS PRIMEROS!
                </div>
              )}
            </button>

            {/* Privacy Note */}
            <p className="text-xs text-gray-dark text-center mt-4">
              <i className="fas fa-shield-alt mr-1"></i>
              Tus datos están seguros y nunca los compartiremos. Solo te contactaremos para el lanzamiento.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
