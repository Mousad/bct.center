import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaWhatsapp 
} from 'react-icons/fa'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer 
      dir="rtl"
      className="bg-[#0b6879] text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              

              <div>
                <h2 className="font-bold text-lg">
                  BCT Consulting
                </h2>
               
              </div>
            </div>

            <p className="text-white/80 text-sm leading-7 mb-5">
              نقدم خدمات الاستشارات التعليمية والتدريب،
              ونساعد الطلاب في الوصول إلى أفضل الفرص الأكاديمية.
            </p>


            {/* Social */}
            <div className="flex gap-3">

              <a 
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition"
              >
                <FaFacebookF />
              </a>

              <a 
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition"
              >
                <FaInstagram />
              </a>

              <a 
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition"
              >
                <FaLinkedinIn />
              </a>

              <a 
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

{/* Links & Services */}
<div className="grid grid-cols-2 gap-8">

  {/* Links */}
  <div>
    <h3 className="font-bold text-lg mb-4">
      روابط مهمة
    </h3>

    <ul className="space-y-3 text-sm text-white/80">

      <li>
        <Link href="/">
          الرئيسية
        </Link>
      </li>

      <li>
        <Link href="/about">
          من نحن
        </Link>
      </li>

      <li>
        <Link href="/services">
          خدماتنا
        </Link>
      </li>

      <li>
        <Link href="/contact">
          تواصل معنا
        </Link>
      </li>

    </ul>
  </div>


  {/* Services */}
  <div>
    <h3 className="font-bold text-lg mb-4">
      خدماتنا
    </h3>

    <ul className="space-y-3 text-sm text-white/80">

      <li>الاستشارات التعليمية</li>
      <li>المنح الدراسية</li>
      <li>التقديم للجامعات</li>
      <li>التدريب والتطوير</li>

    </ul>
  </div>

</div>



      

        </div>



        <div className="border-t border-white/20 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/60">

            <p>
              © {currentYear} BCT Consulting . جميع الحقوق محفوظة.
            </p>


            <div className="flex gap-6">

              <Link href="/privacy">
                سياسة الخصوصية
              </Link>


              <Link href="/terms">
                الشروط والأحكام
              </Link>

            </div>

          </div>

        </div>


      </div>
    </footer>
  )
}