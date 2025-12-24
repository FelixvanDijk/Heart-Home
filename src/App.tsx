import Header from './components/Header'
import Hero from './components/Hero'
import AnimatedCounter from './components/AnimatedCounter'
import Services from './components/Services'
import ServiceArea from './components/ServiceArea'
import RegisterForm from './components/RegisterForm'
import Team from './components/Team'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <AnimatedCounter />
        <Services />
        <ServiceArea />
        <RegisterForm />
        <Team />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
