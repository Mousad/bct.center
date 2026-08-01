import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
     import Link from "next/link";

     import {
  GraduationCap,
  Briefcase,
  Globe2,
  Languages,
  Users,
  Award,
} from "lucide-react";


export const metadata = {
  title: 'الدراسة في الخارج - BCT Consulting & Training',
  description: 'استكشف أفضل الوجهات الدراسية حول العالم مع BCT',
}

const DESTINATIONS = [
  {
    name: "ماليزيا",
    image: "https://i.pinimg.com/1200x/b1/af/04/b1af046e746d9611285ebfdf897fe83a.jpg",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrVsqX25Js8WUB42CFmoOyHgLtPwU6ir-FnwPQ2Zqpjw&s=10",
    description:
      "واحدة من أفضل الوجهات الدراسية في آسيا، تتميز بجامعات عالمية ورسوم دراسية مناسبة.",
    universities: "40+ جامعة",
    highlights: [
      "جامعات معترف بها عالمياً",
      "تكاليف معيشة مناسبة",
      "بيئة آمنة ومتنوعة",
    ],
    href: "/apply",
  },

  {
    name: "الصين",
    image: "https://i.pinimg.com/736x/bc/88/19/bc8819e374301c398ff9cf36e3d8e38f.jpg",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk7EV78s7gK5lS_vJxN30Uw02CZ-hJczKU1SJslh4VLA&s=10",
    description:
      "وجهة تعليمية متقدمة تضم جامعات ضمن أفضل التصنيفات العالمية مع العديد من المنح.",
    universities: "300+ جامعة",
    highlights: [
      "منح دراسية متنوعة",
      "جامعات عالمية",
      "تخصصات هندسية وطبية قوية",
    ],
    href: "/apply",
  },

  {
    name: "تركيا",
    image: "https://i.pinimg.com/736x/11/1d/45/111d45f99571e5980ffe48edfaf39222.jpg",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0tKcprJTaQ6DfIDZF7I_siJxH5X6ixY5dFIQTPErYXQ&s",
    description:
      "دراسة بجودة أوروبية وتكاليف مناسبة مع بيئة ثقافية قريبة من العالم العربي.",
    universities: "200+ جامعة",
    highlights: [
      "رسوم مناسبة",
      "جامعات حكومية وخاصة",
      "برامج باللغة الإنجليزية",
    ],
    href: "/apply",
  },

  {
    name: "مصر",
    image: "https://i.pinimg.com/236x/83/25/19/8325194da7cff45346fd6e2b9e87a867.jpg",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVUDTkqYOhGLx4ajskXasscebbtrgn3i2Pi7EQQ2mswg&s",
    description:
      "جامعات عريقة وبرامج أكاديمية متنوعة مع سهولة الدراسة للطلاب العرب.",
    universities: "70+ جامعة",
    highlights: [
      "جامعات تاريخية",
      "تكاليف مناسبة",
      "سهولة الإجراءات",
    ],
    href: "/apply",
  },
];
const BENEFITS = [
  {
    title: "شهادة معترف بها عالمياً",
    description: "احصل على مؤهل أكاديمي يفتح لك أبواب العمل والدراسات العليا حول العالم.",
    icon: GraduationCap,
  },
  {
    title: "فرص وظيفية أكبر",
    description: "تعزز الدراسة بالخارج من فرصك في الحصول على وظائف داخل وخارج بلدك.",
    icon: Briefcase,
  },
  {
    title: "اكتساب خبرات دولية",
    description: "التعلم في بيئة متعددة الثقافات يمنحك خبرة عالمية مميزة.",
    icon: Globe2,
  },
  {
    title: "تطوير اللغة",
    description: "تعيش اللغة يومياً مما يساعدك على إتقانها بسرعة.",
    icon: Languages,
  },
  {
    title: "بناء شبكة علاقات",
    description: "تعرف على طلاب وأساتذة من مختلف دول العالم.",
    icon: Users,
  },
  {
    title: "مستقبل أكاديمي ومهني أفضل",
    description: "الجامعات العالمية تمنحك فرصاً أكبر للتطور والنجاح.",
    icon: Award,
  },
];

const FAQS = [
  {
    question: "ما هي الدول التي توفرون الدراسة فيها؟",
    answer:
      "نوفر خدمات الدراسة في ماليزيا، الصين، تركيا، ومصر، مع متابعة كاملة لجميع إجراءات القبول.",
  },
  {
    question: "هل يمكنني التقديم بدون شهادة لغة؟",
    answer:
      "نعم، بعض الجامعات توفر قبولاً مشروطاً مع إمكانية دراسة اللغة قبل بدء التخصص.",
  },
  {
    question: "هل تساعدون في استخراج التأشيرة؟",
    answer:
      "نعم، نتولى تجهيز ملف التأشيرة ومتابعة جميع الإجراءات حتى صدورها.",
  },
  {
    question: "هل توفرون السكن والاستقبال؟",
    answer:
      "نساعد في حجز السكن المناسب بالإضافة إلى خدمة الاستقبال من المطار.",
  },
  {
    question: "كم تستغرق إجراءات القبول؟",
    answer:
      "تختلف حسب الجامعة، ولكن غالباً ما تستغرق من أسبوعين إلى ثمانية أسابيع.",
  },
  {
    question: "هل يمكنني الحصول على منحة دراسية؟",
    answer:
      "نساعد الطلاب في التقديم على المنح الكاملة والجزئية حسب شروط كل جامعة.",
  },
];


export default function Destinations() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}

{/* Hero Section */}

<section className="relative h-[70vh] flex items-center justify-center overflow-hidden">

  {/* Background Image */}

  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://i.pinimg.com/736x/1e/06/61/1e06610deb9de7d93abedfabbd14e7b0.jpg')",
    }}
  />

  {/* Overlay */}

  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}

  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

    <span className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold mb-6">

      الدراسة في الخارج

    </span>

    <h1 className="text-2xl md:text-7xl font-extrabold text-white leading-tight mb-6">

      مستقبلك يبدأ من
      <span className="text-[#f4a423]"> الجامعة المناسبة </span>

    </h1>

    <p className="text-lg md:text-xl text-white/90 leading-9 max-w-3xl mx-auto mb-10">

      نوفر لك أفضل فرص الدراسة في
      <span className="font-semibold text-[#f4a423]">
        {" "}ماليزيا، الصين، تركيا، ومصر{" "}
      </span>
      مع متابعة كاملة لخطوات القبول الجامعي، التأشيرة، السكن،
      والاستقبال حتى تبدأ رحلتك الأكاديمية بكل ثقة.

    </p>

    <div className="flex flex-wrap justify-center gap-4">

      <Link
        href="/contact"
        className="bg-[#f4a423] hover:bg-[#d89216] transition text-white font-bold px-5 py-2 rounded-[10px]"
      >
        ابدأ رحلتك
      </Link>

      <Link
        href="/scholarships"
        className="border border-white text-white hover:bg-white hover:text-[#0b6879] transition px-5 py-2 rounded-[10px]"
      >
        تصفح المنح
      </Link>

    </div>

    {/* Statistics */}

  

  </div>

</section>

 {/* Why Study Abroad */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">
            لماذا الدراسة في الخارج؟
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'تعليم عالمي المستوى',
                description: 'اكتسب مهارات وشهادات معترف بها عالمياً',
              },
              {
                title: 'تطور شخصي',
                description: 'اكتسب استقلالية وثقة عالية بالنفس',
              },
              {
                title: 'فرص عمل',
                description: 'افتح آفاقاً وظيفية جديدة وعالمية',
              },
              {
                title: 'شبكة دولية',
                description: 'ابنِ علاقات مهنية وشخصية مستدامة',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-border"
              >
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-2">

    <div className="text-center mb-16">

      <span className="inline-block px-5 py-2 rounded-full bg-[#0b6879]/10 text-[#0b6879] font-semibold">
        وجهات الدراسة
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-5 text-[#0b6879]">

        اختر الدولة المناسبة لك

      </h2>

      <p className="text-gray-500 mt-5 max-w-3xl mx-auto">

        نوفر فرص الدراسة في أفضل الجامعات مع متابعة كاملة حتى حصولك على القبول.

      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {DESTINATIONS.map((country, index) => (

        <Link
          href={country.href}
          key={index}
          className="group"
        >

          <div className="bg-white rounded-[10px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">

            <div className="relative">

              <img
                src={country.image}
                alt={country.name}
                className="w-full h-62 object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">

                <div className="w-20 h-20 rounded-full bg-white shadow-xl p-2">

                  <img
                    src={country.logo}
                    alt={country.name}
                    className="w-full h-full object-contain rounded-full"
                  />

                </div>

              </div>

            </div>

            <div className="pt-14 pb-8 px-6">

              <h3 className="text-2xl font-bold text-center text-[#0b6879]">

                {country.name}

              </h3>

              <p className="text-center text-gray-500 mt-3 leading-7">

                {country.description}

              </p>

              <div className="mt-6 text-center">

                <span className="inline-block bg-[#f4a423]/10 text-[#f4a423] px-4 py-2 rounded-full font-semibold">

                  {country.universities}

                </span>

              </div>

              <div className="mt-6 space-y-3">

                {country.highlights.map((item, i) => (

                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >

                    <div className="w-2 h-2 rounded-full bg-[#f4a423]" />

                    <p className="text-gray-600 text-sm">

                      {item}

                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </Link>

      ))}

    </div>

  </div>

</section>

     
      {/* Countries */}
{/* Why Study Abroad */}

<section className="py-24 bg-slate-50">

  <div className="max-w-7xl mx-auto px-2">

    <div className="text-center mb-10">

      <span className="inline-block px-5 py-2 rounded-full bg-[#f4a423]/10 text-[#f4a423] font-semibold">
        مميزات الدراسة
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-[#0b6879] mt-5">
        لماذا الدراسة في الخارج؟
      </h2>

      <p className="text-gray-500 mt-5 max-w-3xl mx-auto">
        الدراسة في الخارج ليست مجرد شهادة جامعية، بل تجربة متكاملة تصنع مستقبلك.
      </p>

    </div>

    <div className="grid md:grid-cols-2 grid-cols-2 lg:grid-cols-3 gap-3">

      {BENEFITS.map((item, index) => {

        const Icon = item.icon;

        return (

          <div
            key={index}
            className="bg-white rounded-[10px] p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
          >

            <div className="w-10 h-10 rounded-2xl bg-[#0b6879]/10 flex items-center justify-center mb-6 group-hover:bg-[#0b6879] transition">

              <Icon
                size={25}
                className="text-[#0b6879] group-hover:text-white transition"
              />

            </div>

            <h3 className="text-[14px] font-bold text-[#0b6879] mb-2">
              {item.title}
            </h3>

            <p className="text-gray-500 leading-6">
              {item.description}
            </p>

          </div>

        );

      })}

    </div>

  </div>

</section>
{/* FAQ */}

<section className="py-24 bg-slate-50">

  <div className="max-w-5xl mx-auto px-6">

    <div className="text-center mb-16">

      <span className="inline-block px-5 py-2 rounded-full bg-[#f4a423]/10 text-[#f4a423] font-semibold">
        الأسئلة الشائعة
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-5 text-[#0b6879]">
        كل ما تريد معرفته
      </h2>

      <p className="text-gray-500 mt-5">
        إذا كان لديك أي استفسار، ستجد الإجابة هنا.
      </p>

    </div>

    <div className="space-y-5">

      {FAQS.map((faq, index) => (

        <details
          key={index}
          className="group bg-white rounded-[10px] shadow-sm p-4 cursor-pointer"
        >

          <summary className="flex justify-between items-center text-[14px] font-bold text-[#0b6879] list-none">

            {faq.question}

            <span className="text-3xl text-[#f4a423] group-open:rotate-45 transition">

              +

            </span>

          </summary>

          <p className="mt-5 text-gray-600 leading-8">

            {faq.answer}

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
