import HeroSection from "@/components/ui/hero-section"
import TestimonialsSection from "@/components/ui/testimonial-section"
import ResultsSection from "@/components/ui/result-section"
import ImpactSection from "@/components/stats"
import ProcessSection from "@/components/ui/process-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProcessSection/>
      <ResultsSection/>
      <TestimonialsSection/>
      <ImpactSection/>

    </main>
  )
}

