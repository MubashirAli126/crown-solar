import Image from 'next/image';
import image1 from '../../../public/images/AboutHero.png';

function AboutBanner() {
    return (
        <div
            className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-[800px]">
            <Image className='aboutBanner w-full' alt="card img" src={image1} />
        </div>
    )
}

export default AboutBanner
