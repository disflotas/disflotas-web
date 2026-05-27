import { ShieldCheck, ArrowRight } from 'lucide-react'
import { POLICIES_LIST, POLICIES_CONTENT } from '../constants'

export default function Policies() {
  const { sectionLabel, title, description, footerNote } = POLICIES_CONTENT

  return (
    <section id="politicas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#F58434] font-semibold text-xs uppercase tracking-[0.2em]">
            {sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4355A1] mt-3 mb-4 tracking-tight">
            {title}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">{description}</p>
        </div>

        {/* Policies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POLICIES_LIST.map((policy) => (
            <div
              key={policy.name}
              className={`group relative border border-gray-100 ${policy.border} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent ${policy.color} opacity-0 group-hover:opacity-40 transition-opacity`} />

              <div className={`${policy.bg} rounded-xl p-3.5 w-fit mb-5 group-hover:scale-105 transition-transform`}>
                <policy.icon className={`w-6 h-6 ${policy.color}`} />
              </div>

              <h3 className="font-bold text-[#4355A1] text-base mb-1">{policy.name}</h3>
              <p className={`text-xs font-semibold ${policy.color} mb-3`}>{policy.subtitle}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{policy.description}</p>

            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <ShieldCheck className="w-10 h-10 text-[#4355A1] flex-shrink-0" />
          <div>
            <p className="font-semibold text-[#4355A1] text-sm">
              Comprometidos con la legalidad y la seguridad
            </p>
            <p className="text-gray-500 text-sm mt-0.5">{footerNote}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
