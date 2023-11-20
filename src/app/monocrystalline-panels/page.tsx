'use client'

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import image2 from '../../../public/images/image2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'next-share'

function page() {
    return (
        <div className="w-full flex mx-auto max-w-xl sm:max-w-2xl md:max-w-4xl md:px-4 lg:max-w-5xl xl:max-w-7xl xl:px-2">
            <div className="w-full text-center lg:text-left pt-36 pb-24 px-4 md:px-8 lg:px-8 flex lg:justify-between items-center">
                <div className="w-full flex items-center justify-center ">
                    {/* <div className='text-right'><Link href="/blog" className="text-white bg-gradient-to-r from-green-500 to-green-700 hover:bg-green-200 hover:text-gray-600 inline-flex items-center justify-center w-50 px-6 py-3 text-base font-medium shadow-xl rounded-xl">
                        Back
                    </Link>
                    </div> */}

                    <div className="flex flex-col-reverse lg:flex-row py-4 justify-between lg:text-left" data-aos="fade-up">
                        {/* <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                <img alt="card img" className="rounded-t float-right" src={img} />
            </div> */}
                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full px-8" data-aos="zoom-in" data-aos-delay="500">
                            <h3 className="text-2xl lg:text-3xl xl:text-3xl text-black font-semibold text-center">Monocrystalline Panels - A Game Changer in Pakistan</h3>
                            <div className='mt-8 text-sm font-medium text-center'>
                                <span className='bg-gray-200 text-green-800 p-1 mr-3'>Monocrystalline Solar</span>
                                <span className=''>2023.20.10</span>
                            </div>

                            <div className="h-5 my-14 border-b border-grey-400 text-xl text-center">
                                <span className="bg-white px-5 text-base font-semibold text-black">
                                    <FacebookShareButton
                                        url={'https://www.crownsolar.co/monocrystalline-panels'}
                                        hashtag={'#n-type'}
                                    >
                                        <FontAwesomeIcon icon={faFacebook} size='2x' />
                                    </FacebookShareButton>
                                    <Link href="#" className='px-2'> </Link>
                                    <TwitterShareButton
                                        url={'https://www.crownsolar.co/monocrystalline-panels'}
                                    >
                                        <FontAwesomeIcon icon={faXTwitter} size='2x' />
                                    </TwitterShareButton>
                                    <Link href="#" className='px-2'></Link>
                                    <LinkedinShareButton url={'https://www.crownsolar.co/monocrystalline-panels'}>
                                        <FontAwesomeIcon icon={faLinkedin} size='2x' />
                                    </LinkedinShareButton>
                                </span>
                            </div>

                            <p className='my-3 text-base font-medium text-left'>
                                A 2023 survey by Gallup Pakistan found that 88% of solar panel users in the country are satisfied with the overall performance of their solar panels. The survey also found that 93% of solar panel users installed their panels to reduce their electricity bills.
                            </p>

                            <div className=" flex flex-col lg:mx-4 justify-center items-center">
                                <Image alt="card img" className="justify-center" src={image2} />
                            </div>

                            <p className='pb-2 mt-3 text-base font-medium text-left'>Third world countries are often faced with a number of challenges, including a lack of access to reliable and affordable energy. This can have a significant impact on the quality of life for people in these countries, as well as their ability to develop economically. Pakistan is a third world country that is facing a number of energy challenges. The country has a growing population, but its energy infrastructure is not keeping pace. This has led to frequent blackouts and brownouts, which have a negative impact on the economy and the quality of life.</p>
                            <p className='pb-2 text-base font-medium text-left'>Monocrystalline solar panels are a type of solar panel that is made from a single crystal of silicon. This makes them more efficient than other types of solar panels, and they can also withstand harsher conditions. As a result, monocrystalline solar panels are a promising solution for providing reliable and affordable energy to third world countries.</p>
                            <p className='pb-2 text-base font-medium text-left'>There are a number of ways in which monocrystalline solar panels can benefit third world countries. First, they can help to improve access to electricity. In many third world countries, people have to rely on unreliable and expensive sources of energy, such as generators or kerosene lamps. Monocrystalline solar panels can provide a more reliable and affordable source of electricity, which can improve the quality of life for people in these countries.</p>

                            <p className='pb-2 text-base font-medium text-left'>Second, monocrystalline solar panels can help to reduce pollution. In many third world countries, people rely on burning wood or other biomass for cooking and heating. This can lead to air pollution, which can have a negative impact on health. Monocrystalline solar panels can help to reduce pollution by providing a clean and renewable source of energy.</p>
                            <p className='pb-2 text-base font-medium text-left'>Third, monocrystalline solar panels can help to boost economic development. In many third world countries, businesses and industries are often unable to operate due to a lack of reliable and affordable energy. Monocrystalline solar panels can help to address this problem, which can lead to increased economic activity and job creation.</p>
                            <p className='pb-2 text-base font-medium text-left'>Monocrystalline solar panels have the potential to be a game changer for third world countries like Pakistan. By providing reliable, affordable, and clean energy, monocrystalline solar panels can improve the quality of life for people in these countries, as well as their ability to develop economically.</p>
                            <p className='pb-2 text-base font-medium text-left'>Here are some additional benefits of monocrystalline solar panels for Pakistan:</p>
                            <p className='pb-2 text-base font-medium text-left'></p>


                            <ol>
                                <li className='pb-2 text-base font-medium text-left'><strong>1. </strong> They can help to reduce dependence on imported oil.</li>
                                <li className='pb-2 text-base font-medium text-left'><strong>2. </strong> They can help to create jobs in the solar industry.</li>
                                <li className='pb-2 text-base font-medium text-left'><strong>3. </strong> They can help to improve education and healthcare.</li>
                                <li className='pb-2 text-base font-medium text-left'><strong>4. </strong> They can help to protect the environment.</li>
                            </ol>

                            <p className='pb-2 text-base font-medium text-left'>Monocrystalline solar panels are a promising technology that has the potential to make a significant difference in the lives of people in Pakistan. As the cost of solar panels continues to decline, it is likely that monocrystalline solar panels will become even more affordable and accessible to people in the country.</p>


                            <div className="h-5 mb-3 border-b-2 border-gray-300 text-xl text-center"></div>
                            <span className='text-right'><Link href="/blog" className="text-gray-700 hover:bg-gray-200 hover:text-gray-600 inline-flex items-center justify-center w-50 px-6 py-3 text-base rounded-xl">
                                <FontAwesomeIcon icon={faArrowLeft} className='mr-2' /> Back </Link>
                            </span>
                            <span className='text-right'><Link href="/n-type-blog" className="text-gray-700 hover:bg-gray-200 hover:text-gray-600 inline-flex items-center justify-center w-50 px-6 py-3 text-base rounded-xl">
                                Next <FontAwesomeIcon icon={faArrowRight} className='ml-2' /></Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page