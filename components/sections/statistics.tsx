'use client'

import { motion } from 'framer-motion'
import { StatisticCard } from '@/components/cards'
import { STATISTICS } from '@/lib/constants'

export function StatisticsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1 },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            إنجازاتنا
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            أرقام تتحدث عن نجاحنا وتميزنا
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {STATISTICS.map((stat, index) => (
            <motion.div key={index} variants={item}>
              <StatisticCard number={stat.number} label={stat.label} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
