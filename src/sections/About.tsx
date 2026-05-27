import { Target, Eye } from 'lucide-react'
import { ABOUT_CONTENT, ABOUT_SERVICES } from '../constants'

export default function About() {
  const { sectionLabel, title, description, mission, vision } = ABOUT_CONTENT

  return (
    <section id="quienes-somos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#F58434] font-semibold text-xs uppercase tracking-[0.2em]">
            {sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4355A1] mt-3 mb-5 tracking-tight">
            {title}
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Services Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {ABOUT_SERVICES.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#F58434] hover:bg-orange-50 transition-all group"
            >
              <div className="bg-[#4355A1] group-hover:bg-[#F58434] rounded-xl p-3 transition-colors flex-shrink-0">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-[#4355A1] text-sm">{item.label}</div>
                <div className="text-gray-500 text-xs mt-0.5">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="relative bg-gradient-to-br from-[#4355A1] to-[#2a3575] rounded-3xl p-8 text-white overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all hover:-translate-y-1">
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/5" />
            <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-[#F58434]/10" />
            <div className="relative">
              <div className="bg-[#F58434] rounded-2xl p-3.5 w-fit mb-6 shadow-lg shadow-orange-500/30">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{mission.title}</h3>
              <p className="text-white/80 leading-relaxed text-sm sm:text-base">{mission.text}</p>
            </div>
          </div>

          {/* Vision */}
          <div className="relative bg-gradient-to-br from-[#F58434] to-[#d96e1a] rounded-3xl p-8 text-white overflow-hidden hover:shadow-2xl hover:shadow-orange-500/30 transition-all hover:-translate-y-1">
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/5" />
            <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-white/5" />
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3.5 w-fit mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{vision.title}</h3>
              <p className="text-white/90 leading-relaxed text-sm sm:text-base">{vision.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
