import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export const metadata = {
  title: 'الجامعات الشريكة - BCT Consulting & Training',
  description: 'تصفح قائمة الجامعات العريقة التي نتعاون معها',
}

const TOP_UNIVERSITIES = [
  { name: 'جامعة أكسفورد', country: '🇬🇧 المملكة المتحدة', rank: 'الأولى عالمياً' },
  { name: 'جامعة كامبريدج', country: '🇬🇧 المملكة المتحدة', rank: 'الثانية عالمياً' },
  { name: 'معهد ماساتشوستس MIT', country: '🇺🇸 الولايات المتحدة', rank: 'الثالثة عالمياً' },
  { name: 'جامعة هارفارد', country: '🇺🇸 الولايات المتحدة', rank: 'الرابعة عالمياً' },
  { name: 'جامعة ستانفورد', country: '🇺🇸 الولايات المتحدة', rank: 'الخامسة عالمياً' },
  { name: 'جامعة ييل', country: '🇺🇸 الولايات المتحدة', rank: 'العاشرة عالمياً' },
]

const UNIVERSITIES_BY_FIELD = {
  'الهندسة والتكنولوجيا': [
    'MIT', 'Stanford', 'Berkeley', 'Imperial College', 'ETH Zurich'
  ],
  'الطب والعلوم': [
    'Oxford', 'Cambridge', 'Harvard', 'Johns Hopkins', 'Karolinska'
  ],
  'الأعمال والاقتصاد': [
    'INSEAD', 'London Business School', 'Harvard Business School', 'Yale SOM'
  ],
  'الفنون والعلوم الإنسانية': [
    'Oxford', 'Cambridge', 'Princeton', 'Yale', 'Columbia'
  ],
}

export default function Universities() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary/10 to-background pt-20 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              الجامعات الشريكة
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              شراكات استراتيجية مع أكثر من 200 جامعة عريقة حول العالم
            </p>
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">
            أعرق الجامعات
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOP_UNIVERSITIES.map((uni, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/20 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-primary mb-2">{uni.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{uni.country}</p>
                <span className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                  {uni.rank}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universities by Field */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">
            الجامعات حسب التخصص
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(UNIVERSITIES_BY_FIELD).map(([field, unis], index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-border"
              >
                <h3 className="text-2xl font-bold text-primary mb-6">{field}</h3>
                <div className="space-y-3">
                  {unis.map((uni, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                    >
                      <span className="text-secondary font-bold">★</span>
                      <span className="text-muted-foreground font-medium">{uni}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Partner Universities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">
            لماذا جامعاتنا الشريكة؟
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'معترف بها عالمياً',
                description: 'شهادات معترف بها من أفضل أصحاب العمل حول العالم',
              },
              {
                title: 'معايير أكاديمية عالية',
                description: 'تعليم عالي المستوى مع أساتذة متخصصين',
              },
              {
                title: 'فرص دولية',
                description: 'شبكة عالمية وفرص تبادل طلاب وتدريب',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20"
              >
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
