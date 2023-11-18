import Link from 'next/link'
import Image from 'next/image'
import img1 from '../../public/images/solar/NTypeSection.png'

function NTypeComponent() {
    return (
        <>
            <div className="m-auto p-4 max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl xl:p-8 lg:p-8 h-5/6" data-aos="fade-down">
                <div className="grid lg:grid-cols-2 gap-5">

                    <div className="justify-center self-center">
                        <h3 className="lg:text-xl text-lg mt-4 text-black font-medium">N-Type Solar Panels: Elevating Performance <br />
                            <span className='lg:text-2xl text-xl font-semibold text-green-700'>N-Type Precision Unleashed</span></h3>
                        <div>
                            <p className='my-3 text-base text-black font-medium'>
                                The N-Type Mono & Bifacial solar panels, a testament to Japanese technological prowess, offer unmatched performance in solar energy conversion. These panels are crafted with a focus on precision and durability, making them suitable for a wide range of applications. The IP68 rating guarantees protection against external elements, ensuring the longevity of these panels and maintaining their high efficiency over time. Whether for residential rooftops or large-scale solar farms, N-Type panels stand as a testament to innovation and performance.
                            </p>
                            <Link href="/nTypeMono" className="text-white ml-2 capitalize bg-gradient-to-r from-green-500 to-green-700 hover:bg-green-200 hover:text-gray-600 inline-flex items-center justify-center px-6 py-3 my-4 text-base font-medium shadow-xl rounded-2xl sm:mb-0">
                                Discover Mono Panels
                                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                            <Link href="/nTypeBifacial" className="lg:ml-4 md:ml-4 ml-2 text-white capitalize bg-gradient-to-r from-green-500 to-green-700 hover:bg-green-200 hover:text-gray-600 inline-flex items-center justify-center px-6 py-3 my-4 text-base font-medium shadow-xl rounded-2xl sm:mb-0">
                                Discover Bifacial Panels
                                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </div>
                    <div className="mx-auto justify-center">
                        <Image alt="card img" src={img1} width={450} height={900} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NTypeComponent