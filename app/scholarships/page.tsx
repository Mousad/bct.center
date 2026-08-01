'use client'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import Link from "next/link"
import { Users, Globe, GraduationCap } from "lucide-react";

import {  Globe2, BadgeCheck } from "lucide-react";

const STATS = [
  {
    number: "5000+",
    title: "طالب",
    icon: Users,
  },
  {
    number: "4",
    title: "دول",
    icon: Globe,
  },
  {
    number: "95%",
    title: "نسبة القبول",
    icon: GraduationCap,
  },
];





const SCHOLARSHIPS = [
  {
    name: "منح كاملة",
    percentage: "100%",
    description: "تشمل الرسوم الدراسية والسكن والمعيشة.",
    image:
      "https://i.pinimg.com/736x/b2/b9/7f/b2b97fab420adedeb0f6c43592a6105a.jpg",
    href: "/apply",
  },
  {
    name: "منح جزئية",
    percentage: "50% - 75%",
    description: "تغطي جزءاً من الرسوم الدراسية.",
    image:
      "https://i.pinimg.com/736x/6a/04/d2/6a04d29e7e62d9ec6e3c47882fa63acb.jpg",
    href: "/scholarships/partial",
  },
  {
    name: "منح حكومية",
    percentage: "ممولة",
    description: "برامج ممولة من الحكومات والوزارات.",
    image:
      "https://i.pinimg.com/1200x/28/b6/63/28b663b21e280c1ef8f8a87d4ea7c678.jpg",
    href: "/scholarships/government",
  },
  {
    name: "منح التميز",
    percentage: "Merit",
    description: "للطلاب المتفوقين أكاديمياً.",
    image:
      "https://i.pinimg.com/736x/dc/29/b5/dc29b5869ddf212a42d62ee76355b01f.jpg",
    href: "/scholarships/excellence",
  },
]




export default function Scholarships() {
   
  return (
    <>
      <Navbar />
      <WhatsAppButton />

      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden flex items-center justify-center">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/3c/36/7d/3c367defde79b7f0d2b9944816e01255.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 text-center px-6 max-w-4xl">

          <span className="px-5 py-1 rounded-full bg-white/10 backdrop-blur text-white border border-white/20">
             المنح الدراسية
          </span>

          <h1 className="text-4xl md:text-7xl font-bold text-white mt-6 leading-tight">
            ابدأ رحلتك نحو
            <span className="text-[#f4a423]"> منحة دراسية </span>
            ممولة
          </h1>

          <p className="text-white/90 mt-8 text-lg md:text-xl leading-9">
            نوفر لك أفضل فرص المنح الدراسية في ماليزيا والصين وتركيا ومصر
            مع متابعة كاملة لملفك حتى القبول النهائي.
          </p>

          <div className="flex justify-center gap-4 mt-10">

            <Link
              href="/apply"
              className="bg-[#f4a423] px-6 py-1 rounded-[5px] text-white font-bold"
            >
              قدم الآن
            </Link>

            <Link
              href="/contact"
              className="border border-white px-6 py-1 rounded-[5px] text-white"
            >
              استشارة مجانية
            </Link>

          </div>

        </div>

      </section>
            {/* ===========================
          أنواع المنح الدراسية
      ============================ */}

      <section className="py-17 bg-white">
        <div className="max-w-7xl mx-auto px-2">

          <div className="text-center mb-16">

            <span className="inline-block bg-[#0b6879]/10 text-[#0b6879] px-5 py-2 rounded-full font-semibold">
              أنواع المنح
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-[#0b6879] mt-5">
              اختر نوع المنحة المناسبة لك
            </h2>

            <p className="text-gray-500 text-lg mt-5 max-w-3xl mx-auto">
              نوفر أنواعًا مختلفة من المنح الدراسية لتناسب جميع الطلاب،
              اضغط على أي بطاقة لمعرفة التفاصيل الكاملة وشروط التقديم.
            </p>

          </div>

          <div className="grid lg:grid-cols-2  gap-5">

            {SCHOLARSHIPS.map((item, index) => (

              <Link
                href={item.href}
                key={index}
                className="group"
              >

                <div className="overflow-hidden rounded-[10px] border hover:shadow-2xl transition duration-500">

                  <div
                    className="h-60 bg-cover bg-center group-hover:scale-105 transition duration-700"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  />

                  <div className="p-5">

                    <div className="flex justify-between items-center">

                      <h3 className="text-[19px] font-bold text-[#0b6879]">
                        {item.name}
                      </h3>

                      <span className="bg-[#f4a423] text-white px-2 py-1 rounded-[10px] font-bold">
                        {item.percentage}
                      </span>

                    </div>

                    <p className="mt-5 text-gray-600 leading-5">
                      {item.description}
                    </p>

                    <button className="mt-5 bg-[#0b6879] hover:bg-[#084f5d] text-white px-3 py-2 rounded-[10px] transition">
                       التفاصيل
                    </button>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>
      </section>



    
            {/* ===========================
            أفضل الجامعات
      ============================ */}

      <section className="py-17 bg-white">

        <div className="max-w-7xl mx-auto px-2">

          <div className="text-center mb-10">

            <span className="inline-block px-5 py-2 rounded-full bg-[#0b6879]/10 text-[#0b6879] font-semibold">
              الجامعات
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0b6879] mt-5">
              أفضل الجامعات التي نتعامل معها
            </h2>

            <p className="text-gray-500 mt-5 max-w-3xl mx-auto">
              نقدم فرصًا للدراسة في جامعات عالمية معترف بها دوليًا، مع متابعة
              ملفك حتى الحصول على القبول النهائي.
            </p>

          </div>

          <div className="grid md:grid-cols-2 grid-cols-2 lg:grid-cols-4 gap-2">

           {[
  {
    name: "Universiti Malaya",
    country: "ماليزيا 🇲🇾",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTOZ3Uf5DArIKbPtT4O2mjQd0YC6nKDj_wML7av3lpKlXtrY72RN1oYyLa&s=10",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRildHvV_z9s4kEPvrBXWSRSirAjJKOC73k4EIZzTL7ww&s=10",
  },
  {
    name: "Tsinghua University",
    country: "الصين 🇨🇳",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg50VTGj3RC5n0_G34bm94j5lrWcMHKCFZH53pYEBop_a9mNTbrVNwJ2Q&s=10",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTII-U4PpGq3PWEnjufe6fKErz50n9GDvmmcOaYoNU1aA&s",
  },
  {
    name: "Istanbul University",
    country: "تركيا 🇹🇷",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh0pSAbf7HkUh269dC_oeBi2lSDPQlFz6-GbYOUJ7hDoRofCoCQYdCOVAu&s=10",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/%C4%B0stanbul_%C3%9Cniversitesi_Logo.svg/250px-%C4%B0stanbul_%C3%9Cniversitesi_Logo.svg.png",
  },
  {
    name: "Cairo University",
    country: "مصر 🇪🇬",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLBmXEnFDa4vQFyFr8k-EvibMSBVy0nSrRiKsdDTzl85m3DFrd0zjhXg6&s=10",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTagBO8efSTWAaOoShcm1M3ds2Fx54erLx3-B9f8oPABavGJA2S4HBu_bc&s=10",
  },
].map((item, index) => (
  <div
    key={index}
    className="bg-white rounded-[10px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 group"
  >
    {/* صورة الجامعة */}
    <div className="relative">

      <img
        src={item.image}
        alt={item.name}
        className="w-full h-32 object-cover group-hover:scale-105 transition duration-700"
      />

      {/* لوجو الجامعة */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">

        <div className="w-15 h-15 rounded-full bg-white shadow-xl border-2 border-white flex items-center justify-center">

          <img
            src={item.logo}
            alt={item.name}
            className="w-8 h-8 object-contain"
          />

        </div>

      </div>

    </div>

    {/* البيانات */}
    <div className="pt-10 pb-6 px-2 text-center">

      <h3 className="text-lg font-bold text-[#0b6879]">
        {item.name}
      </h3>

      <p className="text-gray-500 mt-2">
        {item.country}
      </p>

    </div>
  </div>
))}

          </div>

        </div>

      </section>

      {/* ===========================
             لماذا تختار BCT
      ============================ */}

      <section className="py-13 bg-[#0b6879] text-white">

        <div className="max-w-4xl mx-auto px-2">

          <div className="grid lg:grid-cols-2 gap-8 items-center">

            <div>

             

              <h2 className="text-4xl font-bold mt-5 leading-tight">
                لماذا يختار آلاف الطلاب
                <span className="text-[#f4a423]"> BCT </span>
                للدراسة بالخارج؟
              </h2>

              <p className="text-white/80 mt-8 leading-9 text-lg">
                لأننا نوفر متابعة كاملة للطالب منذ اختيار الجامعة
                وحتى استخراج التأشيرة والسفر، مع خبرة كبيرة في
                التقديم للجامعات والمنح الدراسية.
              </p>

              <div className="mt-10">

                <Link
                  href="/about"
                  className="bg-[#f4a423] px-4 py-2 rounded-[10px] text-white font-bold"
                >
                  تعرف علينا
                </Link>

              </div>

            </div>

            <div className="grid grid-cols-2 gap-4">

              {[
                "قبول جامعي مضمون",
                "استخراج التأشيرة",
                "متابعة حتى السفر",
                "استشارات مجانية",
                "جامعات معترف بها",
                "فريق متخصص",
              ].map((item, index) => (

                <div
                  key={index}
                  className="bg-white/10 backdrop-blur rounded-[10px] p-5 text-center"
                >

                  

                  <p className="font-semibold">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>
            {/* ===========================
          خطوات التقديم
      ============================ */}

      <section className="py-13 bg-white">

        <div className="max-w-7xl mx-auto px-2">

          <div className="text-center mb-16">

            <span className="inline-block px-5 py-2 rounded-full bg-[#0b6879]/10 text-[#0b6879] font-semibold">
              خطوات التقديم
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-[#0b6879] mt-5">
              رحلتك تبدأ معنا في <span className=" text-[#f4a423]">5 خطوات</span> 
            </h2>

          </div>

          <div className="grid lg:grid-cols-5 grid-cols-2 gap-3">

            {[
              {
                step: "01",
                title: "استشارة مجانية",
                text: "تقييم ملف الطالب واختيار أفضل دولة."
              },
              {
                step: "02",
                title: "اختيار الجامعة",
                text: "ترشيح الجامعة المناسبة حسب التخصص."
              },
              {
                step: "03",
                title: "تجهيز الملفات",
                text: "مراجعة وتجهيز جميع المستندات."
              },
              {
                step: "04",
                title: "التقديم",
                text: "إرسال الطلب ومتابعة القبول."
              },
              {
                step: "05",
                title: "اجراءات",
                text: "استخراج التأشيرة  واجراءت السفر."
              },
              {
                step: "06",
                title: "السفر",
                text: "استخراج التأشيرة والاستعداد للسفر."
              }

            ].map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-[10px] shadow-lg p-5 text-center hover:-translate-y-2 transition duration-500"
              >

                <div className="w-10 h-10 rounded-full bg-[#f4a423] text-white flex items-center justify-center mx-auto text-[17px] font-bold">

                  {item.step}

                </div>

                <h3 className="mt-4 text-[16px] font-bold text-[#0b6879]">

                  {item.title}

                </h3>

                <p className="mt-2 text-gray-500 leading-8">

                  {item.text}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ===========================
          المستندات المطلوبة
      ============================ */}

      <section className="py-13 bg-white">

        <div className="max-w-7xl mx-auto px-2">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

           

            <div>

             

              <h2 className="text-4xl font-bold mt-6 text-[#0b6879]">

                المستندات المطلوبة

              </h2>

              <div className="mt-10 space-y-5">

                {[
                  "جواز السفر",
                  "الشهادة الدراسية",
                  "كشف الدرجات",
                  "صورة شخصية",
                  "السيرة الذاتية",
                  "شهادة اللغة (إن وجدت)",
                  "خطاب الدافع",
                  "خطابات التوصية"

                ].map((item,index)=>(

                  <div
                    key={index}
                    className="flex items-center gap-3 bg-slate-50 p-3 rounded-[10px]"
                  >

                    <div className="w-7 h-7 rounded-full bg-[#0b6879] text-white flex items-center justify-center">

                      ✓

                    </div>

                    <p className="font-medium">

                      {item}

                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ===========================
            إحصائيات
      ============================ */}

     <section className="py-8 bg-[#0b6879]">

  <div className="max-w-6xl mx-auto px-2">

    <div className="grid grid-cols-3 gap-8">

      {[
        {
          number: "5000+",
          title: "طالب",
          icon: Users,
        },
        {
          number: "4",
          title: "دول",
          icon: Globe2,
        },
        {
          number: "95%",
          title: " القبول",
          icon: BadgeCheck,
        },
      ].map((item, index) => {

        const Icon = item.icon;

        return (

          <div
            key={index}
            className="text-center text-white"
          >

            {/* الأيقونة */}
            <div className="w-13 h-13 mx-auto mb-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">

              <Icon
                size={30}
                className="text-[#f4a423]"
              />

            </div>

            {/* الرقم */}
            <h2 className="text-[17px] md:text-6xl font-extrabold text-[#f4a423]">

              {item.number}

            </h2>

            {/* العنوان */}
            <p className="mt-3 text-sm md:text-xl">

              {item.title}

            </p>

          </div>

        );

      })}

    </div>

  </div>

</section>
            {/* ===========================
            الأسئلة الشائعة
      ============================ */}

      <section className="py-13 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="inline-block px-5 py-2 rounded-full bg-[#0b6879]/10 text-[#0b6879] font-semibold">
              الأسئلة الشائعة
            </span>

            <h2 className="text-2xl md:text-5xl font-bold text-[#0b6879] mt-3">
              أكثر الأسئلة التي تصلنا
            </h2>

          </div>

          <div className="space-y-3">

            {[
              {
                q: "هل توجد منح ممولة بالكامل؟",
                a: "نعم، نوفر منحًا ممولة بالكامل في عدة دول حسب شروط كل جامعة."
              },
              {
                q: "هل أحتاج شهادة لغة؟",
                a: "يعتمد ذلك على الجامعة والدولة، وبعض الجامعات توفر قبولًا بدون IELTS."
              },
              {
                q: "كم تستغرق إجراءات القبول؟",
                a: "عادةً من أسبوعين إلى 8 أسابيع حسب الجامعة."
              },
              {
                q: "هل تساعدون في استخراج التأشيرة؟",
                a: "نعم، نتابع معك جميع إجراءات التأشيرة حتى السفر."
              }

            ].map((item, index) => (

              <details
                key={index}
                className="group bg-slate-50 rounded-[10px] p-3 cursor-pointer"
              >
                <summary className="flex justify-between items-center list-none font-bold text-[#0b6879] text-[17px]">
                  {item.q}
                  <span className="group-open:rotate-45 transition text-3xl">
                    +
                  </span>
                </summary>

                <p className="mt-5 text-gray-600 leading-8">
                  {item.a}
                </p>
              </details>

            ))}

          </div>

        </div>

      </section>

      {/* ===========================
             CTA النهائي
      ============================ */}

      <section className="relative overflow-hidden py-13">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644')",
          }}
        />

        <div className="absolute inset-0 bg-[#0b6879]/85" />

        <div className="relative max-w-5xl mx-auto text-center px-6 text-white">

          <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20">
            ابدأ الآن
          </span>

          <h2 className="text-3xl md:text-6xl font-bold mt-3 leading-tight">

            مستقبلك يبدأ
            <span className="text-[#f4a423]">
              {" "}اليوم{" "}
            </span>

            مع   <span className="text-[#f4a423]">
              {" "}BCT{" "}
            </span>

          </h2>

          <p className="mt-5 text-xl leading-9 text-white/90 max-w-3xl mx-auto">

            لا تضيع الفرصة، دع فريق BCT يساعدك في الحصول على قبول جامعي
            ومنحة دراسية ومتابعة جميع إجراءات السفر.

          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-8">

            <Link
              href="/apply"
              className="bg-[#f4a423] hover:bg-[#d89216] transition px-3 py-2 rounded-[10px] font-bold"
            >
              قدم الآن
            </Link>

            <Link
              href="https://wa.me/201508955586"
              className="border border-white hover:bg-white hover:text-[#0b6879] transition px-4 py-2 rounded-[10px] font-bold"
            >
              تواصل عبر واتساب
            </Link>

          </div>

        </div>

      </section>

      <Footer />

    </>
  )
}