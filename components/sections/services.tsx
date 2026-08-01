'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const categories = [
  {
    id: 1,
    title: 'الدراسة بالخارج',
    description: 'اكتشف أفضل الوجهات   ',
    image: 'https://i.pinimg.com/736x/b2/b9/7f/b2b97fab420adedeb0f6c43592a6105a.jpg',
    href: '/destinations',
  },
  {
    id: 2,
    title: 'المنح الدراسية',
    description: 'فرص ومنح ممولة   ',
    image: 'https://i.pinimg.com/736x/14/d1/af/14d1af79b6213fbc7aedba7bc5031c4b.jpg',
    href: '/scholarships',
  },
  {
    id: 3,
    title: 'الخدمات التعليمية',
    description: 'استشارات، قبول جامعي، استخراج شهادات وأكثر',
    image: 'https://i.pinimg.com/736x/9a/b7/98/9ab798a2c090c91551baf28ad6258c4d.jpg',
    href: '/services',
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-2">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-[#0b6879]/10 text-[#0b6879] font-semibold mb-5">
            خدمات BCT
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0b6879]">
            اختر الخدمة التي تناسبك
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            نقدم مجموعة متكاملة من الخدمات التعليمية لمساعدتك في بناء مستقبلك الأكاديمي.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">

          {categories.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -8 }}
              transition={{ duration: .3 }}
              className={`${
                item.id === 3 ? 'col-span-2 lg:col-span-1' : ''
              }`}
            >
              <Link href={item.href}>
                <div className="group relative overflow-hidden rounded-[8px] h-[200px] lg:h-[420px] cursor-pointer shadow-xl">
                                    <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-all duration-500 group-hover:from-black/90" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">

                    <span className="inline-block w-fit bg-[#f4a423] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      BCT
                    </span>

                    <h3 className="text-[19px] lg:text-3xl font-bold text-white mb-3">
                      {item.title}
                    </h3>

                    <p className="text-white/80 leading-7 mb-5">
                      {item.description}
                    </p>

                   

                  </div>

                </div>
              </Link>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}