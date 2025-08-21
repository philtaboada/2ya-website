export default function Memberships() {
  return (
    <section className="py-20 bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up" style={{ color: '#FEA3B4 !important' }}>
            Membresías para Clientes
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 2YA Club */}
          <div className="bg-white rounded-2xl overflow-hidden hover-lift animate-fade-in-up">
            <div className="bg-gradient-to-br from-primary to-primary-light p-8 text-center">
              <h3 className="text-3xl font-bold text-white mb-2">2YA CLUB</h3>
              <p className="text-white/90">Para clientes frecuentes</p>
            </div>

            <div className="p-8">
              <div className="text-center mb-8">
                <span className="text-4xl font-bold text-primary">S/19</span>
                <span style={{ color: '#666666 !important' }}>/mes</span>
                <p className="text-sm mt-2" style={{ color: '#666666 !important' }}>o S/190 anual (15% descuento)</p>
              </div>

              <ul className="space-y-4 mb-8 text-primary-dark">
                <li className="flex items-start">
                  <i className="fas fa-check mr-3 mt-1" style={{ color: '#FF4384 !important' }}></i>
                  <span><strong>15% OFF</strong> en todas tus citas</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check mr-3 mt-1" style={{ color: '#FF4384 !important' }}></i>
                  <span><strong>5% OFF</strong> en productos de belleza</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check mr-3 mt-1" style={{ color: '#FF4384 !important' }}></i>
                  <span><strong>Envío gratis</strong> en compras desde S/30</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check mr-3 mt-1" style={{ color: '#FF4384 !important' }}></i>
                  <span><strong>Acceso anticipado</strong> a ofertas especiales</span>
                </li>
              </ul>

              <button className="w-full bg-gradient-to-r from-primary to-primary-light text-white py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transform transition-all duration-300">
                <i className="fas fa-crown mr-2"></i>
                Unirse al Club
              </button>
            </div>
          </div>

          {/* Puntos Plus */}
          <div className="bg-white rounded-2xl overflow-hidden hover-lift animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="bg-gradient-to-br from-primary-light to-secondary p-8 text-center">
              <h3 className="text-3xl font-bold text-white mb-2">PUNTOS PLUS</h3>
              <p className="text-white/90">Recarga y gana más</p>
            </div>

            <div className="p-8">
              <div className="text-center mb-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <span className="text-2xl font-bold text-primary block">S/100</span>
                    <span className="text-sm" style={{ color: '#666666 !important' }}>= S/120</span>
                    <span className="bg-success text-white text-xs px-2 py-1 rounded-full w-fit block mt-1 mx-auto">+20%</span>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-primary block">S/200</span>
                    <span className="text-sm" style={{ color: '#666666 !important' }}>= S/250</span>
                    <span className="bg-success text-white text-xs px-2 py-1 rounded-full w-fit block mt-1 mx-auto">+25%</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-4 mb-8 text-primary-dark">
                <li className="flex items-start">
                  <i className="fas fa-check mr-3 mt-1" style={{ color: '#FF4384 !important' }}></i>
                  <span><strong>1 punto = S/1</strong> en citas y productos</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check mr-3 mt-1" style={{ color: '#FF4384 !important' }}></i>
                  <span><strong>Nivel Bronce</strong> (500 pts): Servicio básico gratis</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check mr-3 mt-1" style={{ color: '#FF4384 !important' }}></i>
                  <span><strong>Nivel Plata</strong> (1,000 pts): Producto de regalo</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check mr-3 mt-1" style={{ color: '#FF4384 !important' }}></i>
                  <span><strong>Nivel Oro</strong> (2,000 pts): Día de spa completo</span>
                </li>
              </ul>

              <button className="w-full bg-gradient-to-r from-primary-light to-secondary text-white py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transform transition-all duration-300">
                <i className="fas fa-wallet mr-2"></i>
                Recargar ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
