import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { HeroSection } from '@/components/sections/HeroSection'
import { LocationsSection } from '@/components/sections/LocationsSection'
import { MenuSection } from '@/components/sections/MenuSection'
import { StorySection } from '@/components/sections/StorySection'

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900">
      <Header />
      <main id="top">
        <HeroSection />
        <MenuSection />
        <StorySection />
        <LocationsSection />
      </main>
      <Footer />
    </div>
  )
}
