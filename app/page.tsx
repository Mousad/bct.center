import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { HeroSection } from '@/components/sections/hero'
import { WhyChooseUsSection } from '@/components/sections/why-choose-us'
import { ServicesSection } from '@/components/sections/services'
import { ApplicationProcessSection } from '@/components/sections/application-process'
import { StatisticsSection } from '@/components/sections/statistics'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { FAQSection } from '@/components/sections/faq'
import { ContactSection } from '@/components/sections/contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />

        <ApplicationProcessSection />
        {/* <StatisticsSection /> */}
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
