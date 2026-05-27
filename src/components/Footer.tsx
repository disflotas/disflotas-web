import { Mail, MapPin } from 'lucide-react'
import { NAV_LINKS as navLinks, CONTACT_INFO, FOOTER_CONTENT } from '../constants'
import logo from '../assets/logo-removebg-preview-2.png'

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z" />
  </svg>
)

const socialLinks = [
  { Icon: InstagramIcon, href: 'https://www.instagram.com/disflotas/', label: 'Instagram' },
  { Icon: TikTokIcon, href: 'https://www.tiktok.com/@disflotas', label: 'TikTok' },
]

export default function Footer() {
  const { tagline, copyright, location } = FOOTER_CONTENT
  const { email, address } = CONTACT_INFO
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-br from-[#2a3575] to-[#1a2560] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <img src={logo} alt="Disflotas" className="h-14 w-auto brightness-0 invert" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              {tagline}
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="bg-white/8 hover:bg-[#F58434] rounded-xl p-2.5 transition-all hover:scale-110 hover:shadow-lg"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-5 text-[#F58434]">
              Navegación
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-white/60 hover:text-[#F58434] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-5 text-[#F58434]">
              Contacto
            </h4>
            <div className="space-y-3">

              <a
                href={`mailto:${email}`}
                className="flex items-start gap-2.5 text-white/60 hover:text-white text-sm transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-[#F58434] mt-0.5 flex-shrink-0" />
                {email}
              </a>
              <div className="flex items-start gap-2.5 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-[#F58434] mt-0.5 flex-shrink-0" />
                <span>
                  {address.shortLine1}
                  <br />
                  {address.shortLine2}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">{copyright}</p>
          <p className="text-white/25 text-xs">{location}</p>
        </div>
      </div>
    </footer>
  )
}
