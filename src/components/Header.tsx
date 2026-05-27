import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS as navLinks } from '../constants'
import logo from '../assets/logo-removebg-preview-2.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logo} alt="Disflotas" className="h-12 w-auto" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="font-medium text-sm text-[#4355A1] transition-colors hover:text-[#F58434]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a
              href="#contacto"
              onClick={(e) => scrollToSection(e, '#contacto')}
              className="bg-[#F58434] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#e07020] transition-all hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              Contáctanos
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-[#4355A1] hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block px-4 py-3 text-[#4355A1] hover:bg-orange-50 hover:text-[#F58434] rounded-lg font-medium transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contacto"
                onClick={(e) => scrollToSection(e, '#contacto')}
                className="block bg-[#F58434] text-white text-center px-5 py-3 rounded-full font-semibold text-sm hover:bg-[#e07020] transition-colors"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
