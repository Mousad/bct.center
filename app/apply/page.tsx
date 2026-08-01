import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export const metadata = {
  title: 'قدم الآن - BCT Consulting & Training',
  description: 'ابدأ رحلتك معنا اليوم وحقق حلمك الأكاديمي',
}

export default function Apply() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />

    {/* Hero Section */}
<section className="relative min-h-[20vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/10 to-background pt-10 pb-10">

  {/* Decorative Background */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
    <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
  </div>

  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">

      <span className="inline-block mb-4 px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
        Start Your Journey
      </span>

      <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
        قدم الآن
      </h1>

      <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        ابدأ رحلتك الأكاديمية معنا واحصل على استشارة شاملة
        من فريق الخبراء لمساعدتك في اختيار الفرصة المناسبة.
      </p>

     

    </div>
  </div>

</section>
      {/* Application Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border border-border p-8">
            <form className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">المعلومات الشخصية</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="الاسم الكامل"
                    className="px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <input
                    type="email"
                    placeholder="البريد الإلكتروني"
                    className="px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="رقم الهاتف"
                    className="px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <input
                    type="text"
                    placeholder="الجنسية"
                    className="px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              {/* Academic Information */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">المعلومات الأكاديمية</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="اسم المدرسة / الجامعة الحالية"
                    className="px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <input
                    type="text"
                    placeholder="المعدل التراكمي GPA"
                    className="px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <select className="px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>المستوى الأكاديمي الحالي</option>
                    <option>الثانوية العامة</option>
                    <option>طالب بكالوريوس</option>
                    <option>خريج بكالوريوس</option>
                    <option>طالب ماجستير</option>
                  </select>
                  <input
                    type="text"
                    placeholder="التخصص المطلوب"
                    className="px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              {/* Study Preferences */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">تفضيلات الدراسة</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <select className="px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>الدول المفضلة</option>
                    <option>المملكة المتحدة</option>
                    <option>الولايات المتحدة</option>
                    <option>كندا</option>
                    <option>أستراليا</option>
                    <option>ألمانيا</option>
                    <option>سويسرا</option>
                  </select>
                  <input
                    type="text"
                    placeholder="أسماء الجامعات المفضلة"
                    className="px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">الخدمات المطلوبة</h3>
                <div className="space-y-3">
                  {[
                    'استشارات الدراسة الجامعية',
                    'تحضير ملفات الالتحاق',
                    'تحضير اختبارات اللغة',
                    'البحث عن المنح الدراسية',
                    'استشارات التأشيرة',
                    'التدريب والتطوير',
                  ].map((service, index) => (
                    <label key={index} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-border accent-primary"
                      />
                      <span className="text-muted-foreground">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label className="block text-muted-foreground mb-2">رسالة إضافية</label>
                <textarea
                  rows={5}
                  placeholder="أخبرنا عن أهدافك وطموحاتك..."
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              {/* Terms */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-border accent-primary mt-1"
                  required
                />
                <span className="text-sm text-muted-foreground">
                  أوافق على شروط الخدمة وسياسة الخصوصية
                </span>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors text-lg"
              >
                تقديم الطلب
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Why Apply */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">
            لماذا تختار BCT؟
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'خبرة 15 سنة',
                description: 'أكثر من 15 سنة من الخبرة في مساعدة الطلاب',
              },
              {
                title: 'نسبة نجاح 95%',
                description: 'معدل نجاح مرتفع في الالتحاق بالجامعات',
              },
              {
                title: 'دعم شامل',
                description: 'متابعة من البداية إلى الالتحاق والسفر',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-border text-center"
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
