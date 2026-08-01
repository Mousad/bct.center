'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FAQ_ITEMS } from '@/lib/constants'

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <motion.div
      className="border border-border rounded-xl overflow-hidden"
      layout
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-right flex items-center justify-between gap-4 hover:bg-muted transition-colors"
      >
        <ChevronDown
          size={20}
          className={`transition-transform duration-300 text-secondary flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
        <h3 className="font-semibold text-lg text-foreground flex-1">{question}</h3>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-border bg-muted/50"
          >
            <p className="px-6 py-4 text-foreground/70 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 px-2  sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
         
          <h2 className="text-4xl md:text-5xl font-bold text-[#0b6879] mb-4">
            هل لديك أسئلة؟
          </h2>
          <p className="text-xl text-foreground/70">
            إليك إجابات على أكثر الأسئلة شيوعاً
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={index === openIndex}
              onToggle={() => setOpenIndex(index === openIndex ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>

    
  )
}
