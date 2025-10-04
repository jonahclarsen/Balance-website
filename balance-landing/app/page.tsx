import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { PurposesSection } from "@/components/purposes-section"
import { MenuBarSection } from "@/components/menu-bar-section"
import { CTASection } from "@/components/cta-section"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <PurposesSection />
      <MenuBarSection />
      <CTASection />
    </main>
  )
}
