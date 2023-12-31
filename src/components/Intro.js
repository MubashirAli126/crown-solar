import img from '../../public/images/crownGroup.png';
// import image2 from '../../public/images/certificates-logos.png';
import Link from 'next/link';
import Image from 'next/image';

const Intro = () => {
    return (
        <>
            <div className="mx-auto md:my-8 lg:my-8 text-center max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl" >
                <section data-aos="fade-up">
                    <div className="my-4" style={{ textAlign: '-webkit-center' }}>
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <Image alt="card img" className="rounded-t float-right self-center" src={img} width={150} height={200} />
                        </div>
                        <h2 className="mt-3 mx-12 text-center text-xl lg:text-2xl font-semibold text-green-700 uppercase">A Product of Crown Group of Companies</h2>
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-green-700'></div>
                        </div>
                        {/* <h2 className="mt-3 mx-12 text-center text-xl lg:text-2xl font-semibold text-green-700">A Product of Crown Group of Companies</h2> */}
                    </div>

                    <div className="px-3" data-aos="fade-down" data-aos-delay="600">
                        <div>
                            <p className='my-3 text-base text-black font-medium text-left'>
                                Crown Group is a leading supplier of two and three-wheeler automotive spare parts in Pakistan. With the largest dealer network in the country,
                                the company has established a strong reputation for quality and reliability in the automotive industry. Crown Group extensive range of products
                                includes everything from engines, suspension systems, brakes, and other essential parts that keep vehicles running smoothly on the roads. In recent years,
                                Crown Group has diversified its business by expanding into the solar panel industry. The company recognized the growing demand for renewable energy in Pakistan and
                                saw an opportunity to reach the masses by providing affordable and reliable solar solutions. Crown Group solar panels are designed to meet the needs of residential,
                                commercial, and industrial customers, offering high efficiency and durability at a competitive price. By diversifying into the solar panel industry, Crown Group has expanded
                                its product portfolio and has positioned itself as a leading player in the renewable energy sector in Pakistan. The company commitment to quality and innovation has helped
                                it to gain a strong foothold in both the automotive and solar industries, and to establish itself as a trusted partner for customers looking for reliable and affordable
                                solutions.
                            </p>
                        </div>
                        {/* <div>
                            <p className='my-3 text-base text-center text-black font-medium'>We take responsibility for building custom software solutions that caters for automation of your business processes and improve efficiency.</p>
                        </div> */}
                        <div className='text-center'>
                            <Link href="https://www.crowngroup.com.pk/" className="w-auto text-white bg-gradient-to-r from-green-500 to-green-700 hover:bg-green-200 hover:text-gray-600 inline-flex items-center justify-center px-6 py-2 my-4 text-base font-medium shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                                Learn More About Crown Group
                                <svg className="w-4 h-4 ml-1 group-hover: translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>

            {/* <div className="m-auto max-w-full p-2 md:px-24 h-5/6" id='about' >
                <div className="flex flex-col-reverse lg:flex-row pb-8 lg:text-left" data-aos="fade-up">
                    {/* <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                        <Image alt="card img" className="rounded-t float-right w-9/12 self-center" src={img} />
                    </div> */}

            {/* <div className="flex-col my-4 text-center lg:text-left lg:my-0 -end w-full" data-aos="zoom-in" data-aos-delay="500">
                        <Image alt="card img" className="rounded-t float-right self-center" src={img} />
                        <h3 className="text-3xl  text-green-700 font-bold text-center">A Product of Crown Group of Companies</h3>
                        <div>
                            <p className='my-3 text-xl md:text-justify lg:text-justify text-gray-600 font-semibold text-center'>
                                Crown Group is a leading supplier of two and three-wheeler automotive spare parts in Pakistan. With the largest dealer network in the country,
                                the company has established a strong reputation for quality and reliability in the automotive industry. Crown Group’s extensive range of products
                                includes everything from engines, suspension systems, brakes, and other essential parts that keep vehicles running smoothly on the roads. In recent years,
                                Crown Group has diversified its business by expanding into the solar panel industry. The company recognized the growing demand for renewable energy in Pakistan and
                                saw an opportunity to reach the masses by providing affordable and reliable solar solutions. Crown Group’s solar panels are designed to meet the needs of residential,
                                commercial, and industrial customers, offering high efficiency and durability at a competitive price. By diversifying into the solar panel industry, Crown Group has expanded
                                its product portfolio and has positioned itself as a leading player in the renewable energy sector in Pakistan. The company’s commitment to quality and innovation has helped
                                it to gain a strong foothold in both the automotive and solar industries, and to establish itself as a trusted partner for customers looking for reliable and affordable
                                solutions.
                            </p>
                        </div>
                        <div>
                            <p className='my-3 text-xl md:text-justify lg:text-justify text-center text-gray-600 font-semibold'>We take responsibility for building custom software solutions that caters for automation of your business processes and improve efficiency.</p>
                        </div>
                        <div className='text-center'>
                            <Link href="/contact" className="text-white bg-green-700 hover:bg-green-900 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                                Learn More About Crown
                                <svg className="w-4 h-4 ml-1 group-hover: translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </div>

                    </div>
                </div>
                <div className=" flex flex-col lg:mx-4 justify-center items-center">
                    <Image alt="card img" className="lg:w-1/5 justify-center" src={image2} />
                </div>
            </div> */}
        </>
    )
}

export default Intro;