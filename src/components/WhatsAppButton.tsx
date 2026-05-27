import { MessageCircle } from 'lucide-react'
import { CONTACT_INFO } from '../constants'

export default function WhatsAppButton() {
  return (
    <a
      href={CONTACT_INFO.whatsapp.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl shadow-green-500/40 transition-all hover:scale-105 hover:shadow-green-500/60 group"
    >
      <div className="p-4">
        <MessageCircle className="w-6 h-6" />
      </div>
      <span className="text-sm font-semibold max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:pr-5 transition-all duration-300 ease-out">
        WhatsApp
      </span>
    </a>
  )
}
