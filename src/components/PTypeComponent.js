import Link from 'next/link'
import Image from 'next/image'
import img1 from '../../public/images/solar/PTypeSection.png'

function PTypeComponent() {
    return (
        <>
            <div className="m-auto max-w-screen-xl max-w-screen-lg max-w-screen-sm p-4 md:px-4 h-5/6" data-aos="zoom-out">
                <div className="grid lg:grid-cols-2 gap-5">
                    <div className=" mx-auto justify-center">
                        <Image alt="card img" src={img1} width={450} height={900}/>
                    </div>
                    <div className="justify-center self-center">
                        <h3 className="lg:text-xl text-lg mt-4 text-black font-medium">P-Type Solar Panels, Empowering Efficiency <br />
                            <span className='lg:text-2xl text-xl font-semibold text-green-700'>Cutting-Edge P-Type Technology</span></h3>
                        <div>
                            <p className='my-3 text-base text-black font-medium'>
                                These P-Type Mono solar panels are engineered to harness sunlight with exceptional efficiency, converting it into clean and sustainable energy. The Japanese technology incorporated into their production ensures a high energy yield, making them a reliable choice for residential, commercial, and industrial projects. The IP68 rating signifies their robust build, granting resistance against dust, water, and other environmental factors, guaranteeing longevity and consistent performance.
                            </p>
                            <Link href="/pType" className="text-white capitalize bg-gradient-to-r from-green-500 to-green-700 hover:bg-green-200 hover:text-gray-600 inline-flex items-center justify-cente px-6 py-3 my-4 text-base font-medium shadow-xl rounded-2xl sm:mb-0">
                                Discover
                                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PTypeComponent