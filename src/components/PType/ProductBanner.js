import Image from 'next/image';
import image1 from '../../../public/images/solar/ProductPagePType.png';
import imageMob from '../../../public/images/solar/MobileProductPType.png'

function ProductBanner() {
    return (
        <>
            <div
                className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-[350px] sm:h-[350px] sm:pt-16 lg:h-[500px] lg:pt-14 xl:h-[600px] xl:pt-2 md:h-[400px]">
                <Image className='nTypeBanner hidden sm:block xl:block md:block lg:block w-full' alt="card img" src={image1} />
                <Image className='nTypeBanner block sm:hidden xl:hidden md:hidden lg:hidden  w-full' alt="card img" src={imageMob} />
            </div>
            <div className="w-100 mx-auto px-6 sm:max-w-xl md:max-w-4xl md:px-8 lg:max-w-5xl xl:max-w-7xl xl:px-32">
                <div className="text-center">
                    <div
                        className="block rounded-lg px-6 py-6 lg:py-12 xl:py-12 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mt-0 sm:mt-[-50px] md:py-8 md:px-8 lg:mt-[-50px] xl:mt-[-60px] backdrop-blur-[6px]">
                        <div class="space-y-8 md:grid md:grid-cols-3 lg:grid-cols-3 md:gap-12 md:space-y-0">
                            <div>
                                <h3 class="mb-2 text-xl font-bold">560W</h3>
                                <p class="text-gray-800">Module Power</p>
                            </div>
                            <div>
                                <h3 class="mb-2 text-xl font-bold">21.67%</h3>
                                <p class="text-gray-800">Module Efficiency</p>
                            </div>
                            <div>
                                <h3 class="mb-2 text-xl font-bold ">25 Year</h3>
                                <p class="text-gray-800 ">Product Warranty</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductBanner