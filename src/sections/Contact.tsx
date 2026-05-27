import { Phone, Mail, MapPin, Building } from 'lucide-react'
import { CONTACT_CONTENT, CONTACT_INFO } from '../constants'

export default function Contact() {
  const { sectionLabel, title, description } = CONTACT_CONTENT
  const { adminPhones, comercialPhone, email, address } = CONTACT_INFO

  return (
    <section id="contacto" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#F58434] font-semibold text-xs uppercase tracking-[0.2em]">
            {sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4355A1] mt-3 mb-4 tracking-tight">
            {title}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">{description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Administración */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-[#4355A1]/8 rounded-xl p-3 w-fit mb-4">
              <Phone className="w-5 h-5 text-[#4355A1]" />
            </div>
            <h4 className="font-bold text-[#4355A1] text-sm mb-3">Administración</h4>
            <div className="space-y-2">
              {adminPhones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="block text-gray-600 hover:text-[#F58434] text-sm transition-colors"
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>

          {/* Comercial */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-[#F58434]/10 rounded-xl p-3 w-fit mb-4">
              <Building className="w-5 h-5 text-[#F58434]" />
            </div>
            <h4 className="font-bold text-[#4355A1] text-sm mb-3">Comercial</h4>
            <a
              href={`tel:${comercialPhone.replace(/\s/g, '')}`}
              className="block text-gray-600 hover:text-[#F58434] text-sm transition-colors"
            >
              {comercialPhone}
            </a>
          </div>

          {/* Correo */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-[#4355A1]/8 rounded-xl p-3 w-fit mb-4">
              <Mail className="w-5 h-5 text-[#4355A1]" />
            </div>
            <h4 className="font-bold text-[#4355A1] text-sm mb-3">Correo electrónico</h4>
            <a
              href={`mailto:${email}`}
              className="block text-gray-600 hover:text-[#F58434] text-sm transition-colors break-all"
            >
              {email}
            </a>
          </div>

          {/* Dirección */}
          <div className="bg-gradient-to-br from-[#4355A1] to-[#2a3575] rounded-2xl p-6 text-white shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-white/10 rounded-xl p-3 w-fit mb-4">
              <MapPin className="w-5 h-5 text-[#F58434]" />
            </div>
            <h4 className="font-bold text-sm mb-3">Dirección</h4>
            <div className="text-white/80 text-sm leading-relaxed">
              <p>{address.street}</p>
              <p>{address.office}</p>
              <p className="text-[#F58434] font-medium mt-1">{address.city}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
