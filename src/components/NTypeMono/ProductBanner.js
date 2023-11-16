import Image from 'next/image';
import image1 from '../../../public/images/solar/ProductNTypeMono.png';

function ProductBanner() {
    return (
        <>
            <div
                className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-[600px]">
                <Image className='nTypeBanner w-full' alt="card img" src={image1} />

            </div>
            <div className="w-100 mx-auto px-6 sm:max-w-2xl md:max-w-3xl md:px-8 lg:max-w-5xl xl:max-w-7xl xl:px-32">
                <div className="text-center">
                    <div
                        className="block rounded-lg px-6 py-12 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-8 md:px-8 mt-[-60px] backdrop-blur-[30px]">
                        <div class="space-y-8 md:grid md:grid-cols-3 lg:grid-cols-3 md:gap-12 md:space-y-0">
                            <div>
                                <h3 class="mb-2 text-xl font-bold">580W</h3>
                                <p class="text-gray-800">Module Power</p>
                            </div>
                            <div>
                                <h3 class="mb-2 text-xl font-bold">22.44%</h3>
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