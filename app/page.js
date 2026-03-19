import ScrollProgressBar from '@/components/layout/ScrollProgressBar'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import TickerTape from '@/components/sections/TickerTape'
import NarrativeSection from '@/components/sections/NarrativeSection'
import VideoSection from '@/components/sections/VideoSection'
import GallerySection from '@/components/sections/GallerySection'
import InteractiveRenderSection from '@/components/sections/InteractiveRenderSection'
import FloorplanSection from '@/components/sections/FloorplanSection'
import ConstructionProgressSection from '@/components/sections/ConstructionProgressSection'
import MapSection from '@/components/sections/MapSection'
import BookingSection from '@/components/sections/BookingSection'
import ContactSection from '@/components/sections/ContactSection'
import TeamSection from '@/components/sections/TeamSection'
import WhatsAppFAB from '@/components/ui/WhatsAppFAB'
import ChatbotFAB from '@/components/ui/ChatbotFAB'

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <NavBar />

      <main>
        <HeroSection />
        <TickerTape />
        <NarrativeSection />
        <VideoSection />
        <GallerySection />
        <InteractiveRenderSection />
        <FloorplanSection />
        <ConstructionProgressSection />
        <MapSection />
        <BookingSection />
        <ContactSection />
        <TeamSection />
      </main>

      <Footer />

      {/* Fixed FABs */}
      <WhatsAppFAB />
      <ChatbotFAB />
    </>
  )
}
