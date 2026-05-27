import { useState, useEffect } from 'react'
import { TEAM_CONTENT, TEAM_HIGHLIGHTS } from '../constants'
import img2 from '../assets/IMG_2.jpeg'
import img3 from '../assets/IMG_3.png'
import img4 from '../assets/IMG_4.jpeg'

const GALLERY = [img2, img3, img4]

export default function Team() {
  const { sectionLabel, title, description } = TEAM_CONTENT
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % GALLERY.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="equipo" className="py-24 bg-gradient-to-br from-[#4355A1] via-[#3a4a8e] to-[#2a3575] relative overflow-hidden">
      {/* Background decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#F58434] opacity-[0.08] blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-white opacity-[0.04] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: Text */}
          <div>
            <span className="text-[#F58434] font-semibold text-xs uppercase tracking-[0.2em]">
              {sectionLabel}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-6 tracking-tight leading-tight">
              {title}
            </h2>
            <p className="text-white/75 leading-relaxed mb-8 text-base sm:text-lg">{description}</p>

            <div className="space-y-4">
              {TEAM_HIGHLIGHTS.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="bg-[#F58434] rounded-xl p-2.5 flex-shrink-0 shadow-lg shadow-orange-500/20">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/85 text-sm leading-relaxed pt-1">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Gallery */}
          <div>
            {/* Team image gallery */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 h-120 shadow-xl">
              {GALLERY.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Equipo Disflotas ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    i === current ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              {/* Dot indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {GALLERY.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current ? 'bg-[#F58434] w-5' : 'bg-white/50'
                    }`}
                    aria-label={`Imagen ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
