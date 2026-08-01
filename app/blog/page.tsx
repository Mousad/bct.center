import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export const metadata = {
  title: 'المدونة - BCT Consulting & Training',
  description: 'اقرأ أحدث النصائح والمقالات عن الدراسة في الخارج',
}

const BLOG_POSTS = [
  {
    id: 1,
    title: 'دليل شامل لاختيار الجامعة المناسبة',
    excerpt: 'تعرف على الخطوات الأساسية والعوامل المهمة عند اختيار الجامعة',
    date: '15 يناير 2024',
    category: 'الدراسة الجامعية',
    readTime: '8 دقائق',
  },
  {
    id: 2,
    title: 'كيفية الحصول على منحة دراسية شاملة',
    excerpt: 'نصائح عملية لزيادة فرصك في الحصول على منحة كاملة',
    date: '12 يناير 2024',
    category: 'المنح الدراسية',
    readTime: '6 دقائق',
  },
  {
    id: 3,
    title: 'استعدادك لاختبار IELTS: دليل شامل',
    excerpt: 'استراتيجيات وطرق فعالة للتحضير الجيد لاختبار IELTS',
    date: '10 يناير 2024',
    category: 'اختبارات اللغة',
    readTime: '10 دقائق',
  },
  {
    id: 4,
    title: 'أفضل الدول للدراسة الجامعية في 2024',
    excerpt: 'مقارنة بين أفضل الوجهات الدراسية وأسباب اختيارها',
    date: '8 يناير 2024',
    category: 'الدراسة بالخارج',
    readTime: '7 دقائق',
  },
  {
    id: 5,
    title: 'تجنب الأخطاء الشائعة في ملف الالتحاق',
    excerpt: 'الأخطاء التي يرتكبها الطلاب وكيفية تجنبها',
    date: '5 يناير 2024',
    category: 'تطبيقات الجامعات',
    readTime: '5 دقائق',
  },
  {
    id: 6,
    title: 'الحياة الطلابية في الجامعات الأجنبية',
    excerpt: 'تجربة الحياة اليومية والتكيف مع بيئة دراسية جديدة',
    date: '2 يناير 2024',
    category: 'تجارب الطلاب',
    readTime: '9 دقائق',
  },
]

export default function Blog() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary/10 to-background pt-20 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              المدونة
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              نصائح وإرشادات وتجارب من الخبراء والطلاب الناجحين
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="bg-gradient-to-r from-primary/20 to-secondary/20 h-40 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <span className="text-primary font-semibold group-hover:translate-x-1 transition-transform">
                      اقرأ المزيد →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">اشترك في النشرة البريدية</h2>
          <p className="text-muted-foreground mb-8">
            احصل على أحدث المقالات والنصائح مباشرة في بريدك الإلكتروني
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="بريدك الإلكتروني"
              className="flex-1 px-6 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              اشترك
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
