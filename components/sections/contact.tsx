'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

export function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-[#0b6879]/10 text-[#0b6879] font-semibold mb-5">
            تواصل معنا
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0b6879]">
            زور مكتب BCT
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            يسعدنا استقبالكم والإجابة على جميع استفساراتكم حول الدراسة بالخارج والمنح الدراسية.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {/* Address */}
            <div className="flex gap-5 p-6 rounded-3xl shadow-lg border">

              <div className="w-16 h-16 rounded-2xl bg-[#0b6879] text-white flex items-center justify-center">
                <MapPin size={28} />
              </div>

              <div>

                <h3 className="font-bold text-xl text-[#0b6879] mb-2">
                  عنوان المكتب
                </h3>

                <p className="text-gray-600 leading-8">
                  الدقي - شارع أحمد الشاطوري
                  <br />
                  بجوار السفارة السودانية سابقاً
                  <br />
                  عمارة 10B - الدور الخامس
                  <br />
                  القاهرة - مصر
                </p>

              </div>

            </div>

            {/* Phone */}

            <div className="flex gap-5 p-6 rounded-3xl shadow-lg border">

              <div className="w-16 h-16 rounded-2xl bg-[#f4a423] text-white flex items-center justify-center">
                <Phone size={28} />
              </div>

              <div>

                <h3 className="font-bold text-xl text-[#0b6879] mb-2">
                  الهاتف
                </h3>

                <p className="text-gray-600">
                  +20 150 895 5586
                </p>

                <p className="text-gray-600">
                  +20 15 5823 6768
                </p>

              </div>

            </div>

            {/* Email */}

            <div className="flex gap-5 p-6 rounded-3xl shadow-lg border">

              <div className="w-16 h-16 rounded-2xl bg-[#0b6879] text-white flex items-center justify-center">
                <Mail size={28} />
              </div>

              <div>

                <h3 className="font-bold text-xl text-[#0b6879] mb-2">
                  البريد الإلكتروني
                </h3>

                <p className="text-gray-600">
                  bashdar315@gmail.com
                </p>

              </div>

            </div>

            {/* Button */}

          

          </motion.div>

          {/* Google Map */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl shadow-2xl border"
          >

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.1322644719403!2d31.2094566!3d30.0330631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145847de03d6ebe1%3A0x5cbac623644805c2!2sFunk%20Rabbit%20Agency!5e0!3m2!1sar!2seg!4v1785423007414!5m2!1sar!2seg"
              width="100%"
              height="340"
              loading="lazy"
              allowFullScreen
              className="w-full border-0"
            />

          </motion.div>

        </div>

      </div>
    </section>
  )
}