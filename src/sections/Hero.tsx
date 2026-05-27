import { MessageCircle, ChevronRight } from 'lucide-react'
import { HERO_CONTENT, HERO_STATS, HERO_FLOATING_BADGES, CONTACT_INFO } from '../constants'

const TruckIllustration = () => (
  <svg viewBox="0 0 500 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xl drop-shadow-2xl">
    <path d="M0 295 L500 295" stroke="white" strokeOpacity="0.08" strokeWidth="3" strokeDasharray="20 10" />
    <circle cx="430" cy="155" r="80" fill="#F58434" fillOpacity="0.08" />
    <circle cx="80" cy="200" r="60" fill="#F58434" fillOpacity="0.06" />
    <path d="M75 95 Q175 45 260 62 Q345 78 420 72" stroke="#F58434" strokeWidth="2" strokeDasharray="7 4" strokeOpacity="0.7" />
    <circle cx="75" cy="95" r="10" fill="#F58434" />
    <circle cx="75" cy="95" r="5" fill="white" />
    <circle cx="260" cy="62" r="9" fill="white" fillOpacity="0.85" />
    <circle cx="260" cy="62" r="4.5" fill="#4355A1" />
    <circle cx="420" cy="72" r="10" fill="#F58434" />
    <circle cx="420" cy="72" r="5" fill="white" />
    <rect x="443" y="105" width="44" height="44" rx="8" fill="white" fillOpacity="0.12" stroke="white" strokeWidth="1.5" strokeOpacity="0.3" />
    <line x1="443" y1="127" x2="487" y2="127" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
    <line x1="465" y1="105" x2="465" y2="149" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
    <rect x="14" y="110" width="38" height="38" rx="6" fill="#F58434" fillOpacity="0.3" />
    <line x1="14" y1="129" x2="52" y2="129" stroke="white" strokeOpacity="0.4" strokeWidth="1.5" />
    <line x1="33" y1="110" x2="33" y2="148" stroke="white" strokeOpacity="0.4" strokeWidth="1.5" />
    <line x1="8" y1="195" x2="55" y2="195" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeOpacity="0.85" />
    <line x1="8" y1="213" x2="48" y2="213" stroke="#F58434" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.75" />
    <line x1="8" y1="230" x2="40" y2="230" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.55" />
    <rect x="55" y="152" width="262" height="118" rx="8" fill="#F58434" />
    <rect x="55" y="152" width="262" height="26" rx="0" fill="white" fillOpacity="0.18" />
    <line x1="186" y1="152" x2="186" y2="270" stroke="white" strokeOpacity="0.12" strokeWidth="2" />
    <rect x="70" y="188" width="232" height="70" rx="6" fill="white" fillOpacity="0.08" />
    <rect x="85" y="202" width="120" height="8" rx="3" fill="white" fillOpacity="0.3" />
    <rect x="85" y="218" width="80" height="6" rx="3" fill="white" fillOpacity="0.2" />
    <rect x="314" y="128" width="132" height="142" rx="12" fill="#e07020" />
    <rect x="325" y="141" width="68" height="78" rx="9" fill="#93c5fd" fillOpacity="0.75" />
    <rect x="330" y="146" width="20" height="12" rx="3" fill="white" fillOpacity="0.4" />
    <rect x="399" y="148" width="36" height="50" rx="7" fill="#93c5fd" fillOpacity="0.65" />
    <rect x="437" y="208" width="16" height="42" rx="5" fill="#c05a10" />
    <ellipse cx="441" cy="200" rx="10" ry="8" fill="#FCD34D" fillOpacity="0.95" />
    <ellipse cx="441" cy="200" rx="16" ry="12" fill="#FCD34D" fillOpacity="0.15" />
    <rect x="401" y="203" width="24" height="4" rx="2" fill="white" fillOpacity="0.4" />
    <rect x="309" y="170" width="10" height="60" rx="2" fill="#c05a10" />
    <rect x="95" y="262" width="350" height="14" rx="7" fill="#1a2560" />
    <circle cx="130" cy="283" r="29" fill="#1a2560" />
    <circle cx="130" cy="283" r="20" fill="#2d3a7c" />
    <circle cx="130" cy="283" r="10" fill="#1a2560" />
    <circle cx="130" cy="283" r="4" fill="#F58434" />
    <circle cx="248" cy="283" r="29" fill="#1a2560" />
    <circle cx="248" cy="283" r="20" fill="#2d3a7c" />
    <circle cx="248" cy="283" r="10" fill="#1a2560" />
    <circle cx="248" cy="283" r="4" fill="#F58434" />
    <circle cx="390" cy="283" r="29" fill="#1a2560" />
    <circle cx="390" cy="283" r="20" fill="#2d3a7c" />
    <circle cx="390" cy="283" r="10" fill="#1a2560" />
    <circle cx="390" cy="283" r="4" fill="#F58434" />
    <ellipse cx="255" cy="318" rx="205" ry="9" fill="black" fillOpacity="0.18" />
    {Array.from({ length: 5 }).map((_, i) =>
      Array.from({ length: 4 }).map((_, j) => (
        <circle key={`d-${i}-${j}`} cx={340 + i * 28} cy={108 + j * 22} r="2" fill="white" fillOpacity="0.12" />
      ))
    )}
  </svg>
)

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault()
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const { badge, title, titleHighlight, titleEnd, subtitle, ctaPrimary, ctaWhatsApp } = HERO_CONTENT
  const { url: waUrl } = CONTACT_INFO.whatsapp

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#4355A1] via-[#3a4a8e] to-[#2a3575]">
      {/* Background decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-48 -right-48 w-[500px] h-[500px] rounded-full bg-[#F58434] opacity-[0.07] blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-white opacity-[0.04] blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-72 h-72 rounded-full bg-[#F58434] opacity-[0.05] blur-3xl" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
        {/* Left: Content */}
        <div>
          <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#F58434] animate-pulse" />
            <span className="text-white/90 text-sm font-medium">{badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
            {title}{' '}
            <span className="text-[#F58434] italic">{titleHighlight}</span>{' '}
            {titleEnd}
          </h1>

          <p className="text-lg text-white/75 leading-relaxed mb-10 max-w-lg">{subtitle}</p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contacto"
              onClick={(e) => scrollToSection(e, '#contacto')}
              className="inline-flex items-center gap-2 bg-[#F58434] text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-[#e07020] transition-all hover:shadow-2xl hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              {ctaPrimary}
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-white/20 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-green-400" />
              {ctaWhatsApp}
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-3 gap-4">
            {HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#F58434]">{stat.value}</div>
                <div className="text-white/60 text-xs sm:text-sm mt-1 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Truck Illustration */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg">
            <TruckIllustration />

            {/* Floating badges */}
            {HERO_FLOATING_BADGES.map((badge, i) => {
              const positions = [
                'absolute top-4 left-0',
                'absolute bottom-16 right-0',
                'absolute top-1/2 -translate-y-1/2 -right-2',
              ]
              const styles = [
                'bg-white/10 backdrop-blur-md border border-white/15 text-white',
                'bg-white/10 backdrop-blur-md border border-white/15 text-white',
                'bg-[#F58434] text-white shadow-lg',
              ]
              return (
                <div key={badge.text} className={`${positions[i]} ${styles[i]} rounded-xl px-3 py-2 flex items-center gap-2 text-xs font-medium`}>
                  <badge.icon className="w-3.5 h-3.5" />
                  <span>{badge.text}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 80H1440V44C1440 44 1100 0 720 0C340 0 0 44 0 44V80Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
