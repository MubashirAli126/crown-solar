import Image from 'next/image';
import image1 from '../../../public/images/ContactUsBanner.png';

function ContactBanner() {
    return (
        <>
            <div
                className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-[200px] pt-16 sm:h-[330px] sm:pt-20 md:h-[380px] md:pt-16 lg:h-[450px] lg:pt-16 xl:h-[600px] xl:pt-16">
                <Image className='contactBanner w-full' alt="card img" src={image1} />
            </div>
        </>
    )
}

export default ContactBanner