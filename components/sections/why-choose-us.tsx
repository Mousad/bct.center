'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-[#ffffff]">

      <div className="max-w-7xl mx-auto px-2">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[10px] shadow-2xl"
        >

          {/* Image */}

          <div className="relative h-[420px] lg:h-[650px]">

            <Image
              src="https://i.pinimg.com/1200x/b3/20/ce/b320ceee8b272f4857dd6e05e1baf95f.jpg"
              alt="BCT"
              fill
              priority
              className="object-cover"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}

            <div className="absolute inset-0 flex items-center">

              <div className="max-w-2xl px-5 lg:px-16">

                <span className="inline-flex items-center rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1 text-white mb-6">
                  من نحن
                </span>

                <h2 className="text-3xl lg:text-6xl font-bold text-white leading-tight">

                  نصنع مستقبلك

                  <span className="block text-[#f4a423]">
                    الأكاديمي بثقة
                  </span>

                </h2>

                <p className="mt-6 text-lg lg:text-xl text-white/90 leading-7">
                  BCT للاستشارات والتدريب هي مؤسسة متخصصة في
                  الدراسة بالخارج، المنح الدراسية، القبول الجامعي،
                  استخراج الشهادات والاستشارات التعليمية، مع متابعة
                  مستمرة للطالب حتى بداية رحلته الأكاديمية.
                </p>

                <div className="flex flex-wrap gap-4 mt-5">
                                    <Link
                    href="/about"
                    className="inline-flex items-center gap-2 bg-[#f4a423] hover:bg-[#d89216] transition-all duration-300 text-white font-bold px-8 py-2 rounded-[3px]"
                  >
                     المزيد
                    <ArrowLeft size={15} />
                  </Link>
                </div>

                {/* Stats */}
               

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}