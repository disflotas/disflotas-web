import supertransporte from '../assets/supertransporte-removebg-preview.png'
import minTransporte from '../assets/MinTransporte2024 comp.png'

export default function Badges() {
  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16">
          <span className="text-gray-400 text-xs uppercase tracking-[0.2em] font-semibold shrink-0">
            Avalado por
          </span>
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-16">
            <img
              src={supertransporte}
              alt="Vigilado SuperTransporte"
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            />
            <div className="hidden sm:block w-px h-10 bg-gray-200" />
            <img
              src={minTransporte}
              alt="Ministerio de Transporte"
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
