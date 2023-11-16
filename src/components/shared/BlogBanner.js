import Image from 'next/image';
import image1 from '../../../public/images/blog-page-banner-final.png';

function BlogBanner() {
    return (
        <div
            className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-[600px]">
            <Image className='blogBanner w-full' alt="card img" src={image1} />
        </div>
    )
}

export default BlogBanner