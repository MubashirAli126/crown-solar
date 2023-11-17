import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import InstallmentComponent from '@/components/InstallmentComponent'
import TrustBanner from '@/components/TrustBanner'
import Cta from '@/components/Cta'
// import Clients from '@/components/Clients'
import CertificateBanner from '@/components/CertificateBanner'
import PerformanceCertified from '@/components/PerformanceCertified'
import NTypeComponent from '@/components/NTypeComponent'
import PTypeComponent from '@/components/PTypeComponent'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <CertificateBanner />
      <PerformanceCertified />
      {/* <Intro /> */}
      <PTypeComponent /> 
      <NTypeComponent />
      {/* <Clients /> */}
      {/* <Services /> */}
       <InstallmentComponent />
      <Portfolio />
      <TrustBanner />
      <Cta /> 
    </main>
  )
}
