import Image from 'next/image';
import image2 from '../../../public/images/image1.png';
import Link from 'next/link';

function page() {
    return (
        <div className="w-full flex items-center justify-center text-white bg-gray-200">

            <div className="w-full text-center lg:text-left pt-36 pb-24 px-6 md:px-10 lg:px-16 flex lg:justify-between items-center">
                <div className="w-full flex items-center justify-center text-white bg-white rounded-lg shadow-2xl">
                    <div className="m-auto p-2 md:p-12 h-5/6" id='about' >
                        <div className='text-right'><Link href="/blog" className="text-white bg-gradient-to-r from-green-500 to-green-700 hover:bg-green-200 hover:text-gray-600 inline-flex items-center justify-center w-50 px-6 py-3 text-base shadow-xl rounded-xl">
                            Back </Link>
                        </div>
                        <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                            <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full px-12">
                                <h3 className="text-2xl text-green-700 font-semibold text-center">The Importance of Solar Panels in Pakistan</h3>
                                <div>
                                    <p className='mt-3 pb-2 text-base text-gray-600 font-medium text-left'>
                                        Pakistan is facing an energy crisis. The country's electricity demand is growing at a rate of 7% per year, but the supply is only growing at a rate of 3% per year.
                                        This has led to widespread blackouts and brownouts.  </p>
                                    <p className='pb-2 text-base text-gray-600 font-medium text-left'>
                                        Solar panels can help to solve Pakistan's energy crisis. Solar panels are a renewable source of energy that can be used to generate electricity. They are also a clean source of energy that does not produce pollution. </p> 
                                    <p className='pb-2 text-base text-gray-600 font-medium text-left'>
                                        Crown Solar Panels are a leading brand of solar panels in Pakistan. Crown Solar Panels are made with high-quality materials and Mono Crystalline Technology and are designed to last for many years. Crown Solar Panels are also backed by a warranty backed by Crown Group of Companies, a leading two and three-wheeler automotive spare parts manufacturer in Pakistan.
                                    </p>

                                    <div className=" flex flex-col mt-4 lg:mx-4 justify-center items-center">
                                        <Image alt="card img" className="justify-center" src={image2} />
                                    </div>
                                    <div className="mt-8 bg-gray-100 rounded-lg">
                                        <section data-aos="fade-up">
                                            <div className="p-4" >
                                                <p className='text-base text-gray-800 font-medium text-left'>&apos;&apos;Solar energy is the cleanest, most abundant source of energy on Earth. It is free, it is reliable, and it is good for the environment. Solar energy can help us reduce our dependence on fossil fuels, improve our air quality, and create jobs.
                                                    It is time to embrace solar energy and make it the foundation of our clean energy future. &apos;&apos;</p>
                                            </div>
                                        </section>
                                    </div>
                                    <h4 className='my-3 text-lg text-black font-semibold text-left'>The Current Distribution of Solar Panels in Pakistan</h4>
                                    <p className='pb-2 text-base text-gray-600 font-medium text-left'>
                                        The current distribution of solar panels in Pakistan is fairly low. Only around 1-2% of total power generation in Pakistan comes from solar panels. However, the demand for solar panels in Pakistan is growing rapidly.</p>
                                    <p className='pb-2 text-base text-gray-600 font-medium text-left'>
                                        The government of Pakistan is encouraging the use of solar panels. The government has offered tax breaks and other incentives to businesses and individuals who install solar panels. The government is also working to develop a solar energy policy.
                                    </p>
                                    <h4 className='my-3 text-lg text-black font-semibold text-left'>The Future of Solar Panels in Pakistan</h4>
                                    <p className='pb-2 text-base text-gray-600 font-medium text-left'>The future of solar panels in Pakistan is bright. The demand for solar panels is growing rapidly, and the government is encouraging the use of solar panels. As the demand for solar panels grows, the cost of solar panels is expected to come down. This will make solar panels even more affordable for businesses and individuals in Pakistan.</p>
                                    <p className='pb-2 text-base text-gray-600 font-medium text-left'>Solar panels can help to solve Pakistan's energy crisis. Solar panels are a renewable source of energy that can be used to generate electricity. They are also a clean source of energy that does not produce pollution.</p>
                                    <p className='pb-2 text-base text-gray-600 font-medium text-left'>If you are interested in installing solar panels in Pakistan, you should contact a qualified solar installer. A qualified solar installer can help you choose the right solar panels for your needs and install them properly. This is where Crown Solar steps in with not just B2B product distribution, but also services pertaining to installation and technical solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page