'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function AboutContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/10 to-background pt-20 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              من نحن؟
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              BCT Consulting & Training هي شركة متخصصة في الاستشارات التعليمية والتدريب المهني
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-primary mb-6">قصتنا</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                تأسست BCT عام 2009 برؤية واضحة: مساعدة الطلاب العرب على تحقيق أحلامهم الأكاديمية والمهنية على المستوى العالمي. منذ البداية، التزمنا بتقديم خدمات استشارية عالية الجودة وتدريب متخصص.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                بدأنا برفقة فريق صغير من الخبراء، وتطورنا حتى أصبحنا شركة رائدة في مجال الاستشارات التعليمية. ساعدنا آلاف الطلاب في تحقيق أهدافهم الأكاديمية.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                اليوم، نفخر بشراكاتنا مع أكثر من 200 جامعة عريقة حول العالم، وبفريقنا من الخبراء المتخصصين الذين يعملون بشغف لنجاح طلابنا.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 border border-primary/10"
            >
              <div className="space-y-6">
                <div>
                  <p className="text-5xl font-bold text-primary">15+</p>
                  <p className="text-muted-foreground text-lg">سنة من الخبرة</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-primary">5000+</p>
                  <p className="text-muted-foreground text-lg">طالب استفادوا</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-primary">200+</p>
                  <p className="text-muted-foreground text-lg">جامعة شريكة</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-primary">95%</p>
                  <p className="text-muted-foreground text-lg">نسبة النجاح</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 border border-border"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">مهمتنا</h3>
              <p className="text-muted-foreground leading-relaxed">
                تمكين الطلاب العرب من الالتحاق بأفضل الجامعات العالمية من خلال تقديم استشارات تعليمية متميزة وتدريب متخصص يساهم في رفع مستوى مهاراتهم الأكاديمية واللغوية.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 border border-border"
            >
              <h3 className="text-2xl font-bold text-secondary mb-4">رؤيتنا</h3>
              <p className="text-muted-foreground leading-relaxed">
                أن نكون الشركة الرائدة في منطقة الشرق الأوسط في مجال الاستشارات التعليمية والتدريب، نساهم في بناء جيل من القادة والمتخصصين على المستوى العالمي.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Team Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-primary mb-16"
          >
            قيمنا الأساسية
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'الالتزام بالتميز',
                description: 'نسعى دائماً للحصول على أعلى معايير الجودة في جميع خدماتنا',
              },
              {
                title: 'النزاهة والشفافية',
                description: 'نعمل بصدق وشفافية كاملة مع جميع عملائنا وشركائنا',
              },
              {
                title: 'الابتكار والتطور',
                description: 'نتابع أحدث الأساليب والتقنيات التعليمية المتقدمة',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20"
              >
                <h3 className="text-2xl font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
