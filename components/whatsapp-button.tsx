'use client'

import { FaWhatsapp } from 'react-icons/fa'

export function WhatsAppButton() {

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      'السلام عليكم ورحمة الله وبركاته، أود الاستفسار عن خدماتكم'
    )

    window.open(
      `https://wa.me/201508955586?text=${message}`,
      '_blank'
    )
  }

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-5 right-5 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-40"
      aria-label="التواصل عبر WhatsApp"
    >
      <FaWhatsapp size={34} />
    </button>
  )
}