import {
  Heart,
  Shield,
  CheckCircle,
  Star,
  Users,
  Lightbulb,
  ShieldCheck,
  FileText,
  Lock,
  Truck,
  TrendingUp,
  Clock,
  Globe,
  Award,
  CheckSquare,
  MapPin,
  Package,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { href: '#quienes-somos', label: '¿Quiénes somos?' },
  { href: '#equipo', label: 'Nuestro equipo' },
  { href: '#politicas', label: 'Políticas' },
  { href: '#contacto', label: 'Contáctanos' },
]

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const HERO_CONTENT = {
  badge: 'Soluciones logísticas en Colombia',
  title: 'Distribución y flotas en',
  titleHighlight: 'outsourcing',
  titleEnd: 'de carga',
  subtitle:
    'Confía en expertos en distribución y gestión de flotas de carga para alcanzar tus objetivos sin límites.',
  ctaPrimary: 'Solicitar información',
  ctaWhatsApp: 'Hablar por WhatsApp',
}

export const HERO_STATS = [
  { value: '10+', label: 'Años de experiencia' },
  { value: '20+', label: 'Clientes satisfechos' },
]

export const HERO_FLOATING_BADGES = [
  { icon: Truck, text: 'Flota activa' },
  { icon: Package, text: 'Entrega puntual' },
  { icon: MapPin, text: 'Cobertura nacional' },
]

// ─── About ────────────────────────────────────────────────────────────────────

export const ABOUT_CONTENT = {
  sectionLabel: '¿Quiénes somos?',
  title: 'Tu aliado estratégico en logística',
  description:
    'Disflotas es una empresa colombiana especializada en transporte de carga, distribución de última milla y outsourcing de flotas. Brindamos soluciones logísticas integrales que permiten a nuestros clientes enfocarse en su negocio mientras nosotros nos encargamos de la operación.',
  mission: {
    title: 'Misión',
    text: 'Aliado estratégico y especializado en soluciones de transporte de carga, distribución ultima milla y suministro de flotas de vehículos para el traslado de mercancías a nivel nacional, con excelentes niveles de servicio y personal calificado.',
  },
  vision: {
    title: 'Visión',
    text: 'Tenemos como alcance en el 2030, ser una empresa reconocida a nivel nacional con altos niveles de servicio en el suministro outsourcing de flotas de transportes de carga, contribuyendo en lo social y el desarrollo comercial de sus aliados y el país.',
  },
}

export const ABOUT_SERVICES = [
  { icon: Truck, label: 'Transporte de carga', desc: 'Flota moderna y segura' },
  { icon: Package, label: 'Distribución última milla', desc: 'Entrega eficiente y puntual' },
  { icon: MapPin, label: 'Cobertura nacional', desc: 'Todo Colombia' },
]

// ─── Values ───────────────────────────────────────────────────────────────────

export type Value = {
  icon: LucideIcon
  name: string
  description: string
  iconBg: string
  accentColor: string
}

export const VALUES_LIST: Value[] = [
  {
    icon: Heart,
    name: 'Respeto',
    description:
      'Tratamos a cada persona con dignidad y consideración, valorando la diversidad y las diferencias en cada interacción.',
    iconBg: 'bg-rose-500',
    accentColor: 'from-rose-500 to-rose-600',
  },
  {
    icon: Shield,
    name: 'Honestidad',
    description:
      'Actuamos con transparencia e integridad en cada operación y decisión de negocio, construyendo relaciones de confianza.',
    iconBg: 'bg-[#4355A1]',
    accentColor: 'from-[#4355A1] to-[#2a3575]',
  },
  {
    icon: CheckCircle,
    name: 'Cumplimiento',
    description:
      'Nos comprometemos a entregar siempre en los tiempos acordados, respetando cada promesa hecha a nuestros clientes.',
    iconBg: 'bg-[#F58434]',
    accentColor: 'from-[#F58434] to-orange-600',
  },
  {
    icon: Star,
    name: 'Honradez',
    description:
      'Obramos con rectitud y responsabilidad en cada acto, siendo fieles a nuestros principios éticos y morales.',
    iconBg: 'bg-amber-500',
    accentColor: 'from-amber-500 to-amber-600',
  },
  {
    icon: Users,
    name: 'Trabajo en equipo',
    description:
      'Creemos que juntos somos más fuertes. Colaboramos con sinergia para alcanzar metas comunes y superar desafíos.',
    iconBg: 'bg-emerald-500',
    accentColor: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Lightbulb,
    name: 'Innovación',
    description:
      'Adoptamos tecnología y nuevos enfoques para mejorar continuamente nuestros servicios y superar las expectativas.',
    iconBg: 'bg-violet-500',
    accentColor: 'from-violet-500 to-violet-600',
  },
]

// ─── Team ─────────────────────────────────────────────────────────────────────

export const TEAM_CONTENT = {
  sectionLabel: 'Nuestro equipo',
  title: 'Expertos en distribución y gestión de flotas',
  description:
    'Contamos con profesionales altamente capacitados en distribución y gestión de flotas, que trabajan juntos para ofrecerte soluciones personalizadas, eficientes y adaptadas a las necesidades de tu negocio. Cada funcionario aporta su experiencia y compromiso para garantizar entregas puntuales, operaciones fluidas y el más alto nivel de calidad en el servicio.',
  imagePlaceholder: 'Nuestro equipo de trabajo',
  imageSub: 'Profesionales comprometidos',
}

export type TeamStat = {
  icon: LucideIcon
  value: string
  label: string
  sub: string
}

export const TEAM_STATS: TeamStat[] = [
  { icon: TrendingUp, value: '500+', label: 'Operaciones eficientes', sub: 'por mes' },
  { icon: Clock, value: '98%', label: 'Entregas puntuales', sub: 'tasa de cumplimiento' },
  { icon: Globe, value: 'Nacional', label: 'Cobertura', sub: 'en Colombia' },
]

export const TEAM_HIGHLIGHTS = [
  { icon: Award, text: 'Equipo certificado con amplia experiencia en logística y transporte de carga' },
  { icon: Users, text: 'Operadores especializados en cada tipo y categoría de carga' },
  { icon: CheckSquare, text: 'Soluciones personalizadas, escalables y adaptadas a tu negocio' },
]

// ─── Policies ─────────────────────────────────────────────────────────────────

export type Policy = {
  icon: LucideIcon
  name: string
  subtitle: string
  description: string
  color: string
  bg: string
  border: string
}

export const POLICIES_LIST: Policy[] = [
  {
    icon: ShieldCheck,
    name: 'Programa PESV',
    subtitle: 'Resolución 40595 del 2022',
    description:
      'Plan Estratégico de Seguridad Vial que garantiza la seguridad de todos los actores viales en nuestras operaciones de transporte.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'hover:border-blue-400',
  },
  {
    icon: FileText,
    name: 'Programa SST',
    subtitle: 'Resolución 0312 del 2019',
    description:
      'Sistema de Gestión de Seguridad y Salud en el Trabajo que protege el bienestar de nuestros colaboradores y operadores.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'hover:border-emerald-400',
  },
  {
    icon: Lock,
    name: 'Programa SIPLAFT',
    subtitle: 'Sistema de control',
    description:
      'Sistema de prevención y control del lavado de activos y financiación del terrorismo en nuestras operaciones logísticas.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'hover:border-violet-400',
  },
  {
    icon: Truck,
    name: 'RNDC',
    subtitle: 'Registro Nacional de Despachos de Carga',
    description:
      'Registro oficial que garantiza la trazabilidad y legalidad de todos los despachos de carga realizados por nuestra flota.',
    color: 'text-[#F58434]',
    bg: 'bg-orange-50',
    border: 'hover:border-[#F58434]',
  },
]

export const POLICIES_CONTENT = {
  sectionLabel: 'Transparencia y cumplimiento',
  title: 'Políticas del Sistema de Gestión Integrado',
  description:
    'Operamos bajo estrictos estándares normativos que garantizan seguridad, calidad y transparencia en cada servicio que prestamos.',
  footerNote:
    'Todas nuestras operaciones están respaldadas por los marcos normativos vigentes en Colombia. Puedes solicitar información sobre nuestras certificaciones contactándonos.',
}

// ─── Contact ──────────────────────────────────────────────────────────────────

export const CONTACT_CONTENT = {
  sectionLabel: 'Contáctanos',
  title: 'Hablemos de tu operación logística',
  description:
    'Estamos listos para diseñar la solución perfecta para tu empresa. Un asesor te atenderá a la brevedad posible.',
  successTitle: '¡Mensaje enviado!',
  successMessage: 'Hemos recibido tu solicitud. Nos pondremos en contacto contigo muy pronto.',
  submitLabel: 'Enviar mensaje',
  sendingLabel: 'Enviando...',
  retryLabel: 'Enviar otro mensaje',
}

export const CONTACT_INFO = {
  adminPhones: ['+57 317 484 0965', '+57 310 837 4427', '+57 304 356 3971'],
  comercialPhone: '+57 305 283 6787',
  email: 'informacion@disflotas.com',
  address: {
    street: 'Carrera 49 No 61 Sur - 68',
    office: 'Oficina 107',
    city: 'Sabaneta, Antioquia',
    shortLine1: 'Cra 49 No 61 Sur - 68,',
    shortLine2: 'Of. 107, Sabaneta, Ant.',
  },
  whatsapp: {
    url: 'https://api.whatsapp.com/send?phone=3052836787',
  },
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export const FOOTER_CONTENT = {
  tagline:
    'Tu aliado estratégico en logística, distribución y gestión de flotas. Llevamos tu carga a cualquier destino con seguridad y puntualidad.',
  copyright: 'Disflotas © 2026. Todos los derechos reservados.',
  location: 'Sabaneta, Antioquia, Colombia',
}

export const SOCIAL_LINKS = [
  { href: 'https://www.instagram.com/disflotas/', label: 'Instagram' },
  { href: 'https://www.tiktok.com/@disflotas', label: 'TikTok' },
]
