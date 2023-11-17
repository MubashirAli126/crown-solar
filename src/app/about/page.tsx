import AboutBanner from '@/components/shared/AboutBanner'
import TechnicalDetail from '@/components/TechnicalDetail'
import SliderCrown from '@/components/SliderCrown'
import Cta from '@/components/Cta'
import Intro from '@/components/Intro'
import Clients from '@/components/Clients'
import VisionMission from '@/components/VisionMission'
import WhyChoose from '@/components/WhyChoose'
import SocialResponsibility from '@/components/SocialResponsibility'

function page() {
    return (
        <>
            <AboutBanner />
           <Intro />
             <Clients />
            <VisionMission />
           <WhyChoose />
            <SocialResponsibility />
             <TechnicalDetail />
            <SliderCrown />
            <Cta /> 
        </>
    )
}

export default page