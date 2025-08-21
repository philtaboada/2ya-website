import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ValueProposition from '@/components/ValueProposition'
import Features from '@/components/Features'
import Plans from '@/components/Plans'
import Memberships from '@/components/Memberships'
import Testimonials from '@/components/Testimonials'
import HowItWorks from '@/components/HowItWorks'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ValueProposition />
      <Features />
      <Plans />
      <Memberships />
      <Testimonials />
      <HowItWorks />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
