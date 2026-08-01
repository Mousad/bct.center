'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export function HeroSection() {
  return (
<section className="relative min-h-screen overflow-x-hidden overflow-y-hidden">
      {/* Video Background */}
    <video
  className="absolute inset-0 w-full h-full object-cover"
  autoPlay
  muted
  loop
  playsInline
>
  <source src="/Video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/7" />

      {/* Gradient */}

      {/* Content */}
<div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-7xl w-full mx-auto px-3">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="max-w-3xl"
          >

            <span className="inline-flex items-center rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-5 py-2 text-white text-sm mb-6">
              🎓 استشارات تعليمية احترافية
            </span>

            <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight">

              ابدأ رحلتك

              <span className="text-[#f4a423]">
                {" "}الدراسية{" "}
              </span>

              مع

              <br />

              BCT Consulting
            </h1>

            <p className="mt-5 text-xl text-white/85 leading-7 max-w-2xl">
              نساعد الطلاب في الدراسة بالخارج، استخراج الشهادات،
              التقديم للجامعات، المنح الدراسية، والاستشارات التعليمية
              حتى الحصول على القبول والسفر.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                href="/apply"
                className="bg-[#f4a423] hover:bg-[#d89216] transition text-white font-bold px-5 py-2 rounded-[10px]"
              >
                ابدأ الآن
              </Link>

              <Link
                href="/services"
                className="border border-white text-white hover:bg-white hover:text-[#0b6879] transition px-5 py-2 rounded-[10px] flex items-center gap-2"
              >
                خدماتنا
                <ArrowLeft size={18} />
              </Link>

            </div>
                        {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-10 max-w-2xl">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: .2 }}
                className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[3px] p-2 text-center"
              >
                <h3 className="text-2xl font-extrabold text-[#f4a423]">
                  5000+
                </h3>

                <p className="text-white/80 mt-2">
                  طالب
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: .4 }}
                className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[3px] p-2 text-center"
              >
                <h3 className="text-2xl font-extrabold text-[#f4a423]">
                  70+
                </h3>

                <p className="text-white/80 mt-2">
                  جامعة
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: .6 }}
                className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[3px] p-2 text-center"
              >
                <h3 className="text-2xl font-extrabold text-[#f4a423]">
                  10+
                </h3>

                <p className="text-white/80 mt-2">
                  دول
                </p>
              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}