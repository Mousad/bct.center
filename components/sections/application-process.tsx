'use client'

import { motion } from 'framer-motion'
import { StepCard } from '@/components/cards'
import { APPLICATION_STEPS } from '@/lib/constants'

export function ApplicationProcessSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-15 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full mb-4">
            رحلتك معنا
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            خطوات التقديم
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            نتابع معك كل خطوة من خطوات رحلتك الأكاديمية
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {APPLICATION_STEPS.map((step) => (
            <motion.div key={step.step} variants={item}>
              <StepCard
                step={step.step}
                title={step.title}
                description={step.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
