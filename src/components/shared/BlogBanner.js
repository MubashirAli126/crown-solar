import Image from 'next/image';
import image1 from '../../../public/images/blog-page-banner-final.png';

function BlogBanner() {
    return (
        <div
            className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-[250px] pt-16 sm:h-[350px] sm:pt-16 md:h-[380px] md:pt-2 lg:h-[500px] lg:pt-8 xl:h-[600px]">
            <Image className='blogBanner w-full' alt="card img" src={image1} />
        </div>
    )
}

export default BlogBanner