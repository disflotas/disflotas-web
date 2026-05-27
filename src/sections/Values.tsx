import { VALUES_LIST } from '../constants'

export default function Values() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#F58434] font-semibold text-xs uppercase tracking-[0.2em]">
            Nuestros principios
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4355A1] mt-3 mb-4 tracking-tight">
            Valores Institucionales
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Los principios que guían cada operación, decisión y relación en Disflotas.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES_LIST.map((value) => (
            <div
              key={value.name}
              className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-default border border-gray-100 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${value.accentColor} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300`}
              />
              <div className="relative">
                <div
                  className={`${value.iconBg} rounded-xl p-3 w-fit mb-5 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300`}
                >
                  <value.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#4355A1] mb-2">{value.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                <div
                  className={`mt-5 h-0.5 bg-gradient-to-r ${value.accentColor} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
