'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { TESTIMONIALS } from '@/lib/constants'

export function TestimonialsSection() {

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      direction: 'rtl'
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: true,
      }),
    ]
  )

  return (
    <section className="py-24 bg-[#ffffff]">

      <div className="max-w-7xl mx-auto px-2">

        {/* Header */}

        <motion.div
          initial={{ opacity:0,y:30 }}
          whileInView={{ opacity:1,y:0 }}
          transition={{ duration:.6 }}
          viewport={{ once:true }}
          className="text-center mb-14"
        >

          <span className="inline-flex px-5 py-2 rounded-full bg-[#0b6879]/10 text-[#0b6879] font-semibold mb-5">
            قصص النجاح
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0b6879]">
            ماذا يقول طلابنا؟
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            نفتخر بثقة طلابنا ونشارككم بعض تجاربهم مع فريق BCT.
          </p>

        </motion.div>

        <div
          className="overflow-hidden"
          ref={emblaRef}
        >

          <div className="flex">

            {TESTIMONIALS.map((item,index)=>(

              <div
                key={index}
                className="flex-[0_0_90%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-5"
              >

                <motion.div
                  whileHover={{y:-8}}
                  transition={{duration:.3}}
                  className="bg-white rounded-[10px] shadow-xl overflow-hidden h-full border border-slate-200"
                >
                                    {/* Top */}
                  <div className="p-8">

                    <div className="flex items-center gap-4">

                      <Image
                        src={item.image}
                        alt={item.name}
                        width={70}
                        height={70}
                        className="rounded-full border-2 border-[#0b6879] object-cover"
                      />

                      <div>

                        <h3 className="text-xl font-bold text-[#0b6879]">
                          {item.name}
                        </h3>

                        <p className="text-gray-500">
                          {item.title}
                        </p>

                      </div>

                    </div>

                    {/* Rating */}

                    <div className="flex gap-1 mt-6 mb-5">

                      {[...Array(5)].map((_, i) => (

                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#f4a423"
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                        >
                          <path d="M12 2l3.09 6.26 6.91.99-5 4.87L18.18 21 12 17.77 5.82 21 7 14.12l-5-4.87 6.91-.99L12 2z"/>
                        </svg>

                      ))}

                    </div>

                    <p className="leading-8 text-gray-600">
                      {item.content}
                    </p>

                  </div>

                  {/* Bottom */}

                  

                </motion.div>

              </div>

            ))}
                      </div>

        </div>

        {/* Hint */}
        

      </div>

    </section>
  )
}