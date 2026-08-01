import { Navbar } from '@/components/navbar'
import Link from "next/link";
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { ServiceCard } from '@/components/cards'
import {
  MessageCircle,
  Search,
  FileCheck,
  BadgeCheck,
  Plane,
} from "lucide-react";

import {
  Award,
  GraduationCap,
  Globe2,
  Headphones,
  ShieldCheck,
  Users,
} from "lucide-react";


export const metadata = {
  title: 'خدماتنا - BCT Consulting & Training',
  description: 'استكشف جميع خدمات الاستشارات التعليمية والتدريب المتاحة',
}
const FAQS = [
  {
    question: "ما هي الدول التي توفرون الدراسة فيها؟",
    answer:
      "نوفر خدمات الدراسة في ماليزيا، الصين، تركيا، ومصر، مع متابعة كاملة لجميع إجراءات القبول.",
  },
  {
    question: "هل تقدمون منحاً دراسية؟",
    answer:
      "نعم، نساعد الطلاب في التقديم على المنح الدراسية الكاملة والجزئية حسب شروط كل جامعة.",
  },
  {
    question: "هل تساعدون في استخراج التأشيرة؟",
    answer:
      "نعم، نقدم خدمة استخراج التأشيرة وتجهيز جميع المستندات المطلوبة حتى صدورها.",
  },
  {
    question: "هل توفرون السكن والاستقبال؟",
    answer:
      "نوفر خيارات سكن متعددة بالإضافة إلى خدمة الاستقبال من المطار عند الوصول.",
  },
  {
    question: "كم تستغرق إجراءات القبول؟",
    answer:
      "تختلف حسب الجامعة والدولة، ولكن غالباً تستغرق من أسبوعين إلى ثمانية أسابيع.",
  },
];

const FEATURES = [
  {
    title: "خبرة طويلة",
    description: "أكثر من 15 عاماً في مجال الاستشارات التعليمية.",
    icon: Award,
  },
  {
    title: "جامعات معتمدة",
    description: "شراكات مع جامعات عالمية معترف بها.",
    icon: GraduationCap,
  },
  {
    title: "دول متعددة",
    description: "ماليزيا، الصين، تركيا، ومصر.",
    icon: Globe2,
  },
  {
    title: "دعم مستمر",
    description: "متابعة الطالب حتى بعد الوصول إلى الجامعة.",
    icon: Headphones,
  },
  {
    title: "قبول موثوق",
    description: "إجراءات احترافية ترفع فرص الحصول على القبول.",
    icon: ShieldCheck,
  },
  {
    title: "آلاف الطلاب",
    description: "ساعدنا آلاف الطلاب في تحقيق أحلامهم الدراسية.",
    icon: Users,
  },
];

const STEPS = [
  {
    number: "01",
    title: "استشارة مجانية",
    description:
      "نستمع إلى أهدافك ونحدد أفضل الخيارات المناسبة لك.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "اختيار الجامعة",
    description:
      "نساعدك في اختيار الدولة والجامعة والتخصص المناسب.",
    icon: Search,
  },
  {
    number: "03",
    title: "التقديم",
    description:
      "نتولى تجهيز جميع المستندات وإرسال طلب القبول.",
    icon: FileCheck,
  },
  {
    number: "04",
    title: "الحصول على القبول",
    description:
      "نتابع طلبك حتى صدور خطاب القبول الرسمي.",
    icon: BadgeCheck,
  },
  {
    number: "05",
    title: "السفر وبداية الدراسة",
    description:
      "نساعدك في التأشيرة والسكن والاستقبال حتى تبدأ دراستك.",
    icon: Plane,
  },
];

const SERVICES = [
  {
    title: "الدراسة في ماليزيا",
    description: "قبول جامعي، تأشيرة، سكن، واستقبال من المطار.",
    image: "https://i.pinimg.com/736x/96/69/5b/96695bea005b17868d9f4b357a8ddaca.jpg",
    href: "/scholarships",
  },
  {
    title: "الدراسة في الصين",
    description: "أفضل الجامعات الصينية والمنح الدراسية.",
    image: "https://i.pinimg.com/736x/31/08/54/31085438339fe8d01c22c48c9bac2932.jpg",
    href: "/scholarships",
  },
  {
    title: "الدراسة في تركيا",
    description: "جامعات حكومية وخاصة برسوم مناسبة.",
    image: "https://i.pinimg.com/736x/11/1d/45/111d45f99571e5980ffe48edfaf39222.jpg",
    href: "/scholarships",
  },
  {
    title: "الدراسة في مصر",
    description: "قبول في الجامعات المصرية المعتمدة.",
    image: "https://i.pinimg.com/236x/af/df/19/afdf1914ec7cb3bdf81761b4b439c41d.jpg",
    href: "/scholarships",
  },
  {
    title: "المنح الدراسية",
    description: "منح ممولة بالكامل وجزئية.",
    image: "https://i.pinimg.com/736x/1d/68/04/1d68041835324a83583595071e6eb95c.jpg",
    href: "/scholarships",
  },
  {
    title: "التأشيرة والسكن",
    description: "متابعة التأشيرة والسكن حتى السفر.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxoLGte-LZ4UyQ91zVVJ1s-fMHZ2-CXSyXQhFbaZ2ccA&s=10",
    href: "/contact",
  },
];

export default function Services() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />

    {/* Hero Section */}

<section className="relative h-[70vh] flex items-center justify-center overflow-hidden">

  {/* Background Image */}

  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80')",
    }}
  />

  {/* Overlay */}

  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}

  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

    

    <h1 className="text-2xl md:text-7xl font-extrabold text-white leading-tight mb-6">

      خدمات تعليمية
      <span className="text-[#f4a423]"> متكاملة </span>

      لتحقيق مستقبلك الأكاديمي

    </h1>

    <p className="text-lg md:text-xl text-white/90 leading-9 max-w-3xl mx-auto mb-10">

      نقدم حلولاً متكاملة للدراسة بالخارج، تشمل القبول الجامعي،
      المنح الدراسية، استخراج التأشيرة، السكن، والاستشارات التعليمية
      حتى تبدأ رحلتك الأكاديمية بثقة.

    </p>

    <div className="flex flex-wrap justify-center gap-4">

      <Link
        href="/apply"
        className="bg-[#f4a423] hover:bg-[#d89216] transition text-white font-bold px-5 py-2 rounded-[10px]"
      >
        قدم الآن
      </Link>

      <Link
        href="/contact"
        className="border border-white text-white hover:bg-white hover:text-[#0b6879] transition px-5 py-2 rounded-[10px]"
      >
        احجز استشارة 
      </Link>

    </div>

  </div>

</section>

      {/* Services Grid */}
      

    
      <section className="py-16 bg-slate-50">

  <div className="max-w-7xl mx-auto px-2">

    <div className="text-center mb-16">

      <span className="inline-block px-5 py-2 rounded-full bg-[#0b6879]/10 text-[#0b6879] font-semibold">
        لماذا نحن؟
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-5 text-[#0b6879]">
        لماذا يختار الطلاب
        <span className="text-[#f4a423]"> BCT </span>
      </h2>

      <p className="text-gray-500 mt-5 max-w-3xl mx-auto">
        نؤمن أن نجاح الطالب يبدأ باختيار الشريك المناسب، لذلك نقدم خدمات متكاملة وخبرة حقيقية في مجال الدراسة بالخارج.
      </p>

    </div>

    <div className="grid md:grid-cols-2 grid-cols-2 lg:grid-cols-3 gap-4">

      {FEATURES.map((item, index) => {

        const Icon = item.icon;

        return (

          <div
            key={index}
            className="bg-white rounded-[10px] p-5 shadow-md hover:shadow-xl  transition duration-300 group border border-gray-100"
          >

            <div className="w-10   h-10 rounded-2xl bg-[#0b6879]/10 flex items-center justify-center mb-6 group-hover:bg-[#0b6879] transition">

              <Icon
                size={32}
                className="text-[#0b6879] group-hover:text-white transition"
              />

            </div>

            <h3 className="text-[16px] font-bold text-[#0b6879] mb-2">

              {item.title}

            </h3>

            <p className="text-gray-500 leading-5">

              {item.description}

            </p>

          </div>

        );

      })}

    </div>

  </div>

</section>
{/* Services */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-2">

    <div className="text-center mb-8">

      <span className="inline-block px-2 py-1 rounded-full bg-[#0b6879]/10 text-[#0b6879] font-semibold">
        خدمات BCT
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-3 text-[#0b6879]">
        كل ما تحتاجه للدراسة بالخارج
      </h2>

      <p className="text-gray-500 mt-5 max-w-3xl mx-auto">
        نقدم خدمات متكاملة تبدأ من الاستشارة وحتى وصولك إلى الجامعة.
      </p>

    </div>

    <div className="grid md:grid-cols-2 grid-cols-2 lg:grid-cols-3 gap-3">

      {SERVICES.map((service, index) => (

        <Link
          href={service.href}
          key={index}
          className="group bg-white rounded-[10px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
        >

          <div className="overflow-hidden">

            <img
              src={service.image}
              alt={service.title}
              className="w-full h-46 object-cover group-hover:scale-110 transition duration-700"
            />

          </div>

          <div className="p-4">

            <h3 className="text-[14px] font-bold text-[#0b6879]">
              {service.title}
            </h3>

            <p className="text-gray-500 mt-2 leading-5">
              {service.description}
            </p>

           

          </div>

        </Link>

      ))}

    </div>

  </div>

</section>

{/* How We Work */}

<section className="py-24 bg-slate-50">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">

      <span className="inline-block px-5 py-2 rounded-full bg-[#0b6879]/10 text-[#0b6879] font-semibold">
        آلية العمل
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-5 text-[#0b6879]">

        رحلتك معنا في
        <span className="text-[#f4a423]"> 5 خطوات </span>

      </h2>

      <p className="text-gray-500 mt-5 max-w-3xl mx-auto">

        نهتم بكل التفاصيل حتى تصل إلى جامعتك بأفضل تجربة ممكنة.

      </p>

    </div>

    <div className="grid md:grid-cols-5 grid-cols-2 gap-8">

      {STEPS.map((step, index) => {

        const Icon = step.icon;

        return (

          <div
            key={index}
            className="relative text-center group"
          >

            <div className="w-15 h-15 mx-auto rounded-full bg-[#0b6879] flex items-center justify-center group-hover:bg-[#f4a423] transition">

              <Icon
                size={26}
                className="text-white"
              />

            </div>

            

            <h3 className="mt-3 text-[18px] font-bold text-[#0b6879]">
              {step.title}
            </h3>

            <p className="mt-4 text-gray-500 leading-8">
              {step.description}
            </p>

          </div>

        );

      })}

    </div>

  </div>

</section>

  {/* Additional Services Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2  gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                خدمات مخصصة لك
              </h2>
              <ul className="space-y-4">
                {[
                  'استشارات فردية مخصصة',
                  'متابعة شاملة من البداية إلى النهاية',
                  'دعم تقني 24/7',
                  'برامج تدريب متقدمة',
                  'شراكات مع أفضل الجامعات',
                  'ضمان رضا العملاء',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent font-bold text-lg">✓</span>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-12 border border-primary/10">
              <div className="space-y-6">
                <div>
                  <p className="text-4xl font-bold text-primary mb-2">مرونة</p>
                  <p className="text-muted-foreground">خدمات تتكيف مع احتياجاتك الشخصية</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-secondary mb-2">كفاءة</p>
                  <p className="text-muted-foreground">فريق متخصص وخبير في مجاله</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-accent mb-2">نتائج</p>
                  <p className="text-muted-foreground">معدل نجاح مرتفع وموثق</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}

<section className="py-24 bg-white">

  <div className="max-w-5xl mx-auto px-2">

    <div className="text-center mb-10">

      <span className="inline-block px-3 py-1 rounded-full bg-[#f4a423]/10 text-[#f4a423] font-semibold">
        الأسئلة الشائعة
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-5 text-[#0b6879]">
        لديك سؤال؟
      </h2>

      <p className="text-gray-500 mt-5">
        إليك أكثر الأسئلة التي يطرحها الطلاب قبل بدء رحلتهم الدراسية.
      </p>

    </div>

    <div className="space-y-6">

      {FAQS.map((item, index) => (

        <details
          key={index}
          className="group bg-slate-50 rounded-2xl p-4 cursor-pointer"
        >

          <summary className="flex justify-between items-center font-bold text-[15px] text-[#0b6879] list-none">

            {item.question}

            <span className="text-2xl transition group-open:rotate-45">
              +
            </span>

          </summary>

          <p className="mt-5 text-gray-600 leading-8">

            {item.answer}

          </p>

        </details>

      ))}

    </div>

  </div>

</section>
      

      <Footer />
    </>
  )
}
