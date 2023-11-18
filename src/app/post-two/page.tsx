import Image from 'next/image';
import image2 from '../../../public/images/image3.png';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function page() {
    return (
        <div className="w-full flex items-center justify-center text-white bg-gray-200">
            <div className="w-full text-center lg:text-left pt-36 pb-24 px-4 md:px-8 lg:px-8 flex lg:justify-between items-center">
                <div className="w-full flex items-center justify-center text-white bg-white rounded-lg shadow-2xl">
                    <div className="m-auto p-2 md:p-12 h-5/6" id='about' >
                        <div className='text-right'><Link href="/blog" className="text-white bg-gradient-to-r from-green-500 to-green-700 hover:bg-green-200 hover:text-gray-600 inline-flex items-center justify-center w-50 px-6 py-3 text-base font-medium shadow-xl rounded-xl">
                        <FontAwesomeIcon icon={faArrowLeft} /> Back
                        </Link>
                        </div>

                        <div className="flex flex-col-reverse lg:flex-row py-4 justify-between lg:text-left" data-aos="fade-up">
                            {/* <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                <img alt="card img" className="rounded-t float-right" src={img} />
            </div> */}
                            <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full px-8" data-aos="zoom-in" data-aos-delay="500">
                                <h3 className="text-2xl text-green-700 font-semibold text-center">Monocrystalline Panels - A Game Changer in Pakistan</h3>
                                <div>
                                    <p className='my-3 text-base text-gray-600 font-medium text-left'>
                                        Third world countries are often faced with a number of challenges, including a lack of access to reliable and affordable energy. This can have a significant impact on the quality of life for people in these countries, as well as their ability to develop economically. Pakistan is a third world country that is facing a number of energy challenges. The country has a growing population, but its energy infrastructure is not keeping pace. This has led to frequent blackouts and brownouts, which have a negative impact on the economy and the quality of life.
                                    </p>
                                    <div className=" flex flex-col lg:mx-4 justify-center items-center">
                                        <Image alt="card img" className="justify-center" src={image2} />
                                    </div>
                                    <div className="mt-8 bg-gray-100">
                                        <section data-aos="fade-up">
                                            <div className="p-4" data-aos="fade-in" data-aos-delay="600">
                                                <p className='text-base text-black font-medium text-left'>&apos;A 2023 survey by Gallup Pakistan found that 88% of solar panel users in the country are satisfied with the overall performance of their solar panels. The survey also found that 93% of solar panel users installed their panels to reduce their electricity bills.&apos;</p>
                                            </div>
                                        </section>
                                    </div>
                                    <p className='mt-3 pb-2 text-base text-gray-600 font-medium text-left'>Monocrystalline solar panels are a type of solar panel that is made from a single crystal of silicon. This makes them more efficient than other types of solar panels, and they can also withstand harsher conditions. As a result, monocrystalline solar panels are a promising solution for providing reliable and affordable energy to third world countries.</p>
                                    <p className='pb-2 text-base text-gray-600 font-medium text-left'>There are a number of ways in which monocrystalline solar panels can benefit third world countries. First, they can help to improve access to electricity. In many third world countries, people have to rely on unreliable and expensive sources of energy, such as generators or kerosene lamps. Monocrystalline solar panels can provide a more reliable and affordable source of electricity, which can improve the quality of life for people in these countries.</p>
                                    <p className='pb-2 text-base text-gray-600 font-medium text-left'>Second, monocrystalline solar panels can help to reduce pollution. In many third world countries, people rely on burning wood or other biomass for cooking and heating. This can lead to air pollution, which can have a negative impact on health. Monocrystalline solar panels can help to reduce pollution by providing a clean and renewable source of energy.</p>
                                    <p className='pb-2 text-base text-gray-600 font-medium text-left'>Third, monocrystalline solar panels can help to boost economic development. In many third world countries, businesses and industries are often unable to operate due to a lack of reliable and affordable energy. Monocrystalline solar panels can help to address this problem, which can lead to increased economic activity and job creation.</p>
                                    <p className='pb-2 text-base text-gray-600 font-medium text-left'>Monocrystalline solar panels have the potential to be a game changer for third world countries like Pakistan. By providing reliable, affordable, and clean energy, monocrystalline solar panels can improve the quality of life for people in these countries, as well as their ability to develop economically.</p>
                                    <p className='pb-2 text-base text-gray-600 font-medium text-left'>Here are some additional benefits of monocrystalline solar panels for Pakistan:</p>
                                    <ol>
                                        <li className='pb-2 text-base text-gray-800 font-medium text-left'><strong>*</strong> They can help to reduce dependence on imported oil.</li>
                                        <li className='pb-2 text-base text-gray-800 font-medium text-left'><strong>*</strong> They can help to create jobs in the solar industry.</li>
                                        <li className='pb-2 text-base text-gray-800 font-medium text-left'><strong>*</strong> They can help to improve education and healthcare.</li>
                                        <li className='pb-2 text-base text-gray-800 font-medium text-left'><strong>*</strong> They can help to protect the environment.</li>
                                    </ol>
                                    <p className='pb-2 text-base text-gray-600 font-medium text-left'>Monocrystalline solar panels are a promising technology that has the potential to make a significant difference in the lives of people in Pakistan. As the cost of solar panels continues to decline, it is likely that monocrystalline solar panels will become even more affordable and accessible to people in the country.</p>
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