import { useState, useCallback } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import WhyChoose from './components/WhyChoose'
import AnimatedCounter from './components/AnimatedCounter'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import ServiceArea from './components/ServiceArea'
import Pricing from './components/Pricing'
import AboutUs from './components/AboutUs'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import EndOfLifeCare from './components/EndOfLifeCare'
import FAQ from './components/FAQ'
import Guides from './components/Guides'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import IntroAnimation from './components/IntroAnimation'
import SmoothScroll from './components/SmoothScroll'
import FloatingRegisterButton from './components/FloatingRegisterButton'

function App() {
  const [introComplete, setIntroComplete] = useState(false)

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true)
  }, [])

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background">
        {/* Intro Animation */}
        {!introComplete && <IntroAnimation onComplete={handleIntroComplete} />}
        
        <ScrollProgress />
        <Header />
        <FloatingRegisterButton />
        <main>
          <Hero />
          <Introduction />
          <WhyChoose />
          <AnimatedCounter />
          <Services />
          <HowItWorks />
          <ServiceArea />
          <Pricing />
          <AboutUs />
          <Testimonials />
          <Team />
          <EndOfLifeCare />
          <FAQ />
          <Guides />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default App
