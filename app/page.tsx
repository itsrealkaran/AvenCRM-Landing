import { Hero } from "@/components/landing/hero"
import { VideoSection } from "@/components/landing/video-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { InsightsSection } from "@/components/landing/insights-section"
import { BrandsSection } from "@/components/landing/brands-section"
import { FaqSection } from "@/components/landing/faq-section"
import { Footer } from "@/components/landing/footer"
import { SectionNavigator } from "@/components/landing/section-navigator"
import { FeaturesSection } from "@/components/landing/features-section"

export default function Home() {
  return (
    <main className="bg-white selection:bg-violet-200">
      <section id="hero" className="bg-gradient-to-br from-[#9BF3F0] via-[#DAFFED] to-[#FFC2B4]">
        <Hero />
      </section>
      <section id="video-section" className="bg-gradient-to-b from-blue-50 via-white to-blue-50">
        <VideoSection />
      </section>
      <section id="pricing">
        <PricingSection />
      </section>
      <section id="features">
        <FeaturesSection />
      </section>
      {/* <section id="brands">
        <BrandsSection />
      </section> */}
      <section id="insights">
        <InsightsSection />
      </section>
      <section id="faq">
        <FaqSection />
      </section>
      <Footer />
      <SectionNavigator />
    </main>
  )
}

