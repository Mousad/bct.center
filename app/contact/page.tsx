import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { FaFacebookF, FaInstagram } from "react-icons/fa";


import {
  

  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";




import {
  ShieldCheck,
  Headphones,
  GraduationCap,
  FileCheck,
  Globe,
  BadgeCheck,
} from "lucide-react";
const FEATURES = [
  {
    title: "استشارة مجانية",
    description: "نقدم استشارة تعليمية لمساعدتك في اختيار أفضل وجهة دراسية.",
    icon: Headphones,
  },
  {
    title: "قبول جامعي مضمون",
    description: "متابعة احترافية لزيادة فرص الحصول على القبول.",
    icon: GraduationCap,
  },
  {
    title: "استخراج التأشيرة",
    description: "نساعدك في تجهيز ملف التأشيرة ومتابعة جميع الإجراءات.",
    icon: FileCheck,
  },
  {
    title: "جامعات معتمدة",
    description: "نتعامل مع جامعات معترف بها دولياً في عدة دول.",
    icon: Globe,
  },
  {
    title: "دعم حتى السفر",
    description: "لا تنتهي خدماتنا عند القبول، بل نرافقك حتى وصولك.",
    icon: ShieldCheck,
  },
  {
    title: "خبرة وثقة",
    description: "سنوات من الخبرة وآلاف الطلاب الذين حققوا حلم الدراسة.",
    icon: BadgeCheck,
  },
];
const CONTACT_INFO = [
  {
    icon: MapPin,
    title: "العنوان",
    value: "القاهرة، جمهورية مصر العربية",
  },
  {
    icon: Phone,
    title: "رقم الهاتف",
    value: "+20 100 123 4567",
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: "info@bctconsulting.com",
  },
  {
    icon: Clock,
    title: "ساعات العمل",
    value: "الأحد - الخميس | 9:00 صباحاً - 6:00 مساءً",
  },
];
const SERVICES = [
  "الدراسة في الخارج",
  "المنح الدراسية",
  "التأشيرة",
  "القبول الجامعي",
  "الدورات التدريبية",
  "استشارة مجانية",
];


export const metadata = {
  title: 'تواصل معنا - BCT Consulting & Training',
  description: 'تواصل مع فريقنا للاستفسار عن الخدمات والاستشارات',
}

export default function Contact() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
     <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-accent/10 to-background pt-20 pb-20">
  
  {/* Background decoration */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
    <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
  </div>

  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">

      <span className="inline-block mb-4 px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
        Contact Us
      </span>

      <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
        تواصل معنا
      </h1>

      <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        نحن هنا للإجابة على جميع استفساراتك ومساعدتك في رحلتك الأكاديمية 
        والوصول إلى أفضل الفرص التعليمية.
      </p>

      <div className="mt-8 flex flex sm:flex-row gap-4 justify-center">
        
        <a
          href="#contact-form"
          className="px-5 py-2 rounded-xl bg-primary text-white font-semibold hover:opacity-90 transition"
        >
          أرسل استفسارك
        </a>

        <a
          href="https://wa.me/"
          className="px-5 py-2 rounded-xl border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition"
        >
          واتساب
        </a>

      </div>

    </div>
  </div>

</section>

      {/* Contact Information */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <span className="inline-block px-5 py-2 rounded-full bg-[#0b6879]/10 text-[#0b6879] font-semibold">
        معلومات التواصل
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-[#0b6879] mt-5">
        نحن دائماً في خدمتك
      </h2>

      <p className="text-gray-500 mt-5 max-w-3xl mx-auto">
        يمكنك التواصل معنا عبر الهاتف أو البريد الإلكتروني أو زيارة مكتبنا، وسيسعد فريقنا بالإجابة على جميع استفساراتك.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {CONTACT_INFO.map((item, index) => {

        const Icon = item.icon;

        return (

          <div
            key={index}
            className="bg-slate-50 rounded-3xl p-8 text-center hover:shadow-xl transition"
          >

            <div className="w-16 h-16 mx-auto rounded-full bg-[#0b6879] flex items-center justify-center mb-6">

              <Icon
                size={30}
                className="text-[#f4a423]"
              />

            </div>

            <h3 className="text-xl font-bold text-[#0b6879] mb-3">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-7">
              {item.value}
            </p>

          </div>

        );

      })}

    </div>

  </div>

</section>

{/* Contact Form */}

<section className="py-24 bg-slate-50">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left */}

      <div>

        <span className="inline-block px-5 py-2 rounded-full bg-[#f4a423]/10 text-[#f4a423] font-semibold">

          أرسل طلبك

        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-[#0b6879] mt-5">

          دعنا نساعدك في تحقيق حلمك الدراسي

        </h2>

        <p className="text-gray-500 mt-6 leading-8">

          املأ النموذج وسيتواصل معك أحد مستشارينا في أقرب وقت للإجابة على جميع استفساراتك ومساعدتك في اختيار أفضل جامعة وبرنامج يناسبك.

        </p>

      </div>

      {/* Right */}

      <div className="bg-white rounded-3xl shadow-xl p-8">

        <form className="space-y-6">

          <input
            type="text"
            placeholder="الاسم الكامل"
            className="w-full h-14 rounded-xl border border-gray-200 px-5 outline-none focus:border-[#0b6879]"
          />

          <input
            type="tel"
            placeholder="رقم الهاتف"
            className="w-full h-14 rounded-xl border border-gray-200 px-5 outline-none focus:border-[#0b6879]"
          />

          <input
            type="email"
            placeholder="البريد الإلكتروني"
            className="w-full h-14 rounded-xl border border-gray-200 px-5 outline-none focus:border-[#0b6879]"
          />

          <input
            type="text"
            placeholder="الدولة"
            className="w-full h-14 rounded-xl border border-gray-200 px-5 outline-none focus:border-[#0b6879]"
          />

          <select
            className="w-full h-14 rounded-xl border border-gray-200 px-5 outline-none focus:border-[#0b6879]"
          >

            <option>اختر الخدمة</option>

            {SERVICES.map((service, index) => (

              <option key={index}>
                {service}
              </option>

            ))}

          </select>

          <textarea
            rows={5}
            placeholder="اكتب رسالتك..."
            className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-[#0b6879]"
          />

          <button
            className="w-full h-14 rounded-xl bg-[#0b6879] hover:bg-[#095766] transition text-white font-bold"
          >

            إرسال الطلب

          </button>

        </form>

      </div>

    </div>

  </div>

</section>

{/* Why Contact Us */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <span className="inline-block px-5 py-2 rounded-full bg-[#0b6879]/10 text-[#0b6879] font-semibold">
        لماذا BCT؟
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-[#0b6879] mt-5">
        لماذا تختار التواصل معنا؟
      </h2>

      <p className="text-gray-500 mt-5 max-w-3xl mx-auto">
        نرافقك في كل خطوة من رحلتك الدراسية، من الاستشارة الأولى وحتى وصولك إلى الجامعة.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {FEATURES.map((item, index) => {

        const Icon = item.icon;

        return (

          <div
            key={index}
            className="bg-slate-50 rounded-3xl p-8 hover:shadow-xl transition duration-300"
          >

            <div className="w-16 h-16 rounded-2xl bg-[#0b6879] flex items-center justify-center mb-6">

              <Icon
                size={30}
                className="text-[#f4a423]"
              />

            </div>

            <h3 className="text-2xl font-bold text-[#0b6879] mb-4">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-8">
              {item.description}
            </p>

          </div>

        );

      })}

    </div>

  </div>

</section>

{/* Social Media */}



      {/* Contact Content */}
     

      <Footer />
    </>
  )
}
