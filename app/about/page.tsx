import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import {
  CalendarDays,
  GraduationCap,
  Building2,
  BadgeCheck,
} from "lucide-react";
export const metadata = {
  title: 'من نحن - BCT Consulting & Training',
  description: 'تعرف على فريق BCT المتخصص في الاستشارات التعليمية والتدريب',
}


export default function About() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />

      

      {/* Hero Section */}
   <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">

  {/* Background */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('https://i.pinimg.com/736x/a5/71/f5/a571f5225ece8b4bd570a4bad355e0ba.jpg')",
    }}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Gradient */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">

   

    <h1 className="text-3xl md:text-7xl font-extrabold text-white leading-tight">

      نبني مستقبلك
      <span className="text-[#f4a423]">
        {" "}التعليمي{" "}
      </span>

      بثقة

    </h1>

    <p className="text-lg md:text-xl text-white/90 leading-9 max-w-3xl mx-auto mt-4">

      منذ أكثر من 15 عاماً نساعد الطلاب في اختيار أفضل الجامعات العالمية،
      والحصول على القبول الدراسي، وإنهاء جميع إجراءات التأشيرة والسفر،
      لنكون شريكك في بداية رحلة أكاديمية ناجحة.

    </p>

    <div className="flex flex-wrap justify-center gap-5 mt-10">

      <a
        href="/apply"
        className="bg-[#f4a423] hover:bg-[#d89216] transition px-4 py-2 rounded-[10px] text-white font-bold"
      >
        ابدأ رحلتك
      </a>

      <a
        href="/contact"
        className="border border-white text-white hover:bg-white hover:text-[#0b6879] transition px-4 py-2 rounded-[10px] font-bold"
      >
        تواصل معنا
      </a>

    </div>

    {/* Stats */}


  </div>

</section>

      {/* Our Story */}
      <section className="py-20 px-2 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
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
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-3">

  {[
    {
      number: "15+",
      title: "سنة من الخبرة",
      icon: CalendarDays,
    },
    {
      number: "5000+",
      title: "طالب استفاد",
      icon: GraduationCap,
    },
    {
      number: "200+",
      title: "جامعة شريكة",
      icon: Building2,
    },
    {
      number: "95%",
      title: "نسبة النجاح",
      icon: BadgeCheck,
    },
  ].map((item, index) => {
    const Icon = item.icon;

    return (
      <div
        key={index}
        className="bg-white rounded-[10px] shadow-lg border border-gray-100 p-3 hover:-translate-y-2 hover:shadow-2xl transition duration-300 text-center"
      >
        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#0b6879]/10 flex items-center justify-center">
          <Icon
            size={30}
            className="text-[#0b6879]"
          />
        </div>

        {/* Number */}
        <h3 className="text-[22px] font-extrabold text-[#f4a423]">
          {item.number}
        </h3>

        {/* Title */}
        <p className="mt-2 text-gray-600 font-medium">
          {item.title}
        </p>
      </div>
    );
  })}

</div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-14 px-2 sm:px-6 lg:px-8 bg-[#ffffff]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-7">
            <div className="bg-[#f8fafc] rounded-[10px] p-5 border border-border">
              <h3 className="text-2xl font-bold text-primary mb-4">مهمتنا</h3>
              <p className="text-muted-foreground leading-relaxed">
                تمكين الطلاب العرب من الالتحاق بأفضل الجامعات العالمية من خلال تقديم استشارات تعليمية متميزة وتدريب متخصص يساهم في رفع مستوى مهاراتهم الأكاديمية واللغوية.
              </p>
            </div>
            <div className="bg-[#f8fafc] rounded-[10px] p-5 border border-border">
              <h3 className="text-2xl font-bold text-secondary mb-4">رؤيتنا</h3>
              <p className="text-muted-foreground leading-relaxed">
                أن نكون الشركة الرائدة في منطقة الشرق الأوسط في مجال الاستشارات التعليمية والتدريب، نساهم في بناء جيل من القادة والمتخصصين على المستوى العالمي.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Values */}
      <section className="py-12 px-2 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">
            قيمنا الأساسية
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
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
              <div
                key={index}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-[10px] p-5 border border-primary/20"
              >
                <h3 className="text-[16px] font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-muted-foreground text-[11px] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}

    <div className="text-center mb-16">

      <span className="inline-block px-5 py-2 rounded-full bg-[#0b6879]/10 text-[#0b6879] font-semibold">
        فريق العمل
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-[#0b6879] mt-5">
        تعرف على
        <span className="text-[#f4a423]"> خبرائنا </span>
      </h2>

      <p className="text-gray-500 mt-5 max-w-3xl mx-auto">
        فريق من المستشارين التعليميين المتخصصين يعمل على مساعدتك في كل خطوة من رحلتك الدراسية.
      </p>

    </div>

    {/* المدير */}

<div className="max-w-md mx-auto mb-8">

  <div className="bg-white rounded-[10px] overflow-hidden shadow-xl hover:shadow-2xl transition group">

    <div className="overflow-hidden">

      <img
        src="	https://soob-portfolio.vercel.app/assets/user-image.jpg"
        alt="المدير التنفيذي"
        className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-700"
      />

    </div>

    <div className="p-7 text-center">

      <span className="inline-block px-2 py-1 rounded-full bg-[#f4a423]/10 text-[#f4a423] text-sm font-semibold mb-2">
        المدير التنفيذي
      </span>

      <h3 className="text-2xl font-bold text-[#0b6879]">
       مصعب محمد 
      </h3>

      <p className="text-gray-500 mt-2">
        Founder & CEO
      </p>

    </div>

  </div>

</div>

{/* الموظفون */}

<div className="grid grid-cols-2 gap-3">

  {[
    {
      name: "سارة خالد",
      job: "Admission Officer",
      image: "https://i.pinimg.com/736x/e5/91/d7/e591d7c7ac4264554e08d728aa6c4a0d.jpg",
    },
    {
      name: "أحمد علي",
      job: "Visa Specialist",
      image: "https://i.pinimg.com/736x/79/17/78/79177805d7ad26ed3e7675b6d9ac48e2.jpg",
    },
    {
      name: "ريم حسن",
      job: "Student Advisor",
      image: "https://i.pinimg.com/736x/c2/4d/0d/c24d0d7542ee6be66bf4270123c15df4.jpg",
    },
    {
      name: "عبدالله محمد",
      job: "Education Consultant",
      image: "https://i.pinimg.com/736x/73/46/2b/73462ba6c367936a0b1e7307f7b22b1e.jpg",
    },
  ].map((member, index) => (

    <div
      key={index}
      className="bg-white rounded-[10px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group"
    >

      <div className="overflow-hidden">

        <img
          src={member.image}
          alt={member.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
        />

      </div>

      <div className="p-3 text-center">

        <h3 className="text-[17px] md:text-2xl font-bold text-[#0b6879]">
          {member.name}
        </h3>

        <p className="text-[#f4a423] mt-2 text-[14px]">
          {member.job}
        </p>

      </div>

    </div>

  ))}

</div>

  </div>

</section>

<section className="py-15 relative overflow-hidden">

  {/* Background */}

  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://i.pinimg.com/1200x/dd/62/cd/dd62cd587b884350468abfb4e8c66bf5.jpg')",
    }}
  />

  {/* Overlay */}

  <div className="absolute inset-0 bg-[#0b6879]/85" />

  {/* Content */}

  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">

    <span className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">

       ابدأ مستقبلك اليوم

    </span>

    <h2 className="text-3xl md:text-6xl font-extrabold leading-tight">

      هل أنت مستعد لبدء
      <span className="text-[#f4a423]">

        {" "}رحلتك الدراسية{" "}

      </span>

      معنا؟

    </h2>

    <p className="mt-8 text-lg md:text-xl leading-9 text-white/90 max-w-3xl mx-auto">

      فريق BCT جاهز لمساعدتك في اختيار الجامعة المناسبة،
      تجهيز ملفك، التقديم، والحصول على القبول الدراسي حتى
      تبدأ رحلتك التعليمية بكل ثقة.

    </p>

    <div className="flex flex-wrap justify-center gap-5 mt-12">

      <a
        href="/apply"
        className="bg-[#f4a423] hover:bg-[#d89216] transition px-4 py-2 rounded-[10px] font-bold text-white"
      >
        قدم الآن
      </a>

      <a
        href="/contact"
        className="border border-white hover:bg-white hover:text-[#0b6879] transition px-4 py-2 rounded-[10px] font-bold"
      >
         استشارة مجانية
      </a>

    </div>

  </div>

</section>

<section className="py-14 bg-slate-50">

  <div className="max-w-6xl mx-auto px-2">

    <div className="text-center mb-16">

      <span className="inline-block px-5 py-2 rounded-full bg-[#0b6879]/10 text-[#0b6879] font-semibold">
        رحلتنا
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-[#0b6879] mt-5">
        محطات من
        <span className="text-[#f4a423]"> نجاحنا </span>
      </h2>

      <p className="text-gray-500 mt-5 max-w-3xl mx-auto">
        على مدار السنوات الماضية حققنا العديد من الإنجازات وساعدنا آلاف الطلاب
        في الوصول إلى أفضل الجامعات العالمية.
      </p>

    </div>

    <div className="relative">

      {/* الخط */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-[#0b6879]/10 -translate-x-1/2"></div>

      {[
        {
          year: "2009",
          title: "تأسيس الشركة",
          text: "بدأت BCT رحلتها في تقديم الاستشارات التعليمية للطلاب.",
        },
        {
          year: "2014",
          title: "التوسع الدولي",
          text: "عقد شراكات مع جامعات ومؤسسات تعليمية عالمية.",
        },
        {
          year: "2019",
          title: "5000 طالب",
          text: "وصل عدد الطلاب الذين تمت مساعدتهم إلى أكثر من 5000 طالب.",
        },
        {
          year: "اليوم",
          title: "مستقبل أفضل",
          text: "نواصل دعم الطلاب للوصول إلى أفضل الجامعات حول العالم.",
        },
      ].map((item, index) => (

        <div
          key={index}
          className={`relative mb-14 flex items-center ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >

          <div className="md:w-1/2"></div>

          {/* الدائرة */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#f4a423] border-4 border-white shadow-lg"></div>

          {/* البطاقة */}
          <div className="md:w-1/2 bg-white rounded-2xl shadow-lg p-8 border">

            <span className="text-[#f4a423] text-xl font-bold">
              {item.year}
            </span>

            <h3 className="text-2xl font-bold text-[#0b6879] mt-3">
              {item.title}
            </h3>

            <p className="text-gray-600 mt-4 leading-8">
              {item.text}
            </p>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

<section className="py-15 bg-white">

  <div className="max-w-5xl mx-auto px-6">

    <div className="text-center mb-16">

      <span className="inline-block px-5 py-2 rounded-full bg-[#0b6879]/10 text-[#0b6879] font-semibold">
        الأسئلة الشائعة
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-5 text-[#0b6879]">
        لديك
        <span className="text-[#f4a423]"> استفسار؟ </span>
      </h2>

      <p className="text-gray-500 mt-5">
        إليك أكثر الأسئلة التي يطرحها الطلاب قبل بدء رحلتهم الدراسية.
      </p>

    </div>

    <div className="space-y-5">

      {[
        {
          q: "هل تساعدون في استخراج التأشيرة؟",
          a: "نعم، نقدم دعماً كاملاً في تجهيز ملفات التأشيرة ومتابعة الإجراءات حتى صدورها."
        },
        {
          q: "هل يمكنني التقديم بدون شهادة لغة؟",
          a: "يعتمد ذلك على الجامعة والدولة، وبعض الجامعات توفر قبولاً مشروطاً حتى إكمال دراسة اللغة."
        },
        {
          q: "كم تستغرق إجراءات القبول؟",
          a: "غالباً بين أسبوعين إلى ثمانية أسابيع حسب الجامعة والتخصص."
        },
        {
          q: "هل توجد منح دراسية كاملة؟",
          a: "نعم، نوفر منحاً ممولة بالكامل ومنحاً جزئية في عدة دول وفقاً لشروط كل جامعة."
        },
        {
          q: "هل تقدمون استشارة مجانية؟",
          a: "بالتأكيد، يمكنك التواصل مع فريقنا للحصول على استشارة مجانية واختيار أفضل الخيارات المناسبة لك."
        }
      ].map((item, index) => (

        <details
          key={index}
          className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition"
        >

          <summary className="cursor-pointer flex justify-between items-center text-xl font-bold text-[#0b6879] list-none">

            {item.q}

            <span className="text-[#f4a423] text-3xl group-open:rotate-45 transition">
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


      <Footer />
    </>
  )
}
