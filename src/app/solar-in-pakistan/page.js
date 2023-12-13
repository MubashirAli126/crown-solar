'use client'

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import image2 from '../../../public/images/image1.png';
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
                            <h3 className="text-2xl lg:text-3xl xl:text-3xl text-black font-semibold text-center">The Importance of Solar Panels in Pakistan</h3>
                            <div className='mt-8 text-sm font-medium text-center'>
                                <span className='bg-gray-200 text-green-800 p-1 mr-3'>Solar in Pakiatan</span>
                                <span className=''>2023.10.04</span>
                            </div>

                            <div className="h-5 my-14 border-b border-grey-400 text-xl text-center">
                                <span className="bg-white px-5 text-base font-semibold text-black">
                                    <FacebookShareButton
                                        url={'https://www.crownsolar.co/solar-in-pakistan'}
                                        hashtag={'#n-type'}
                                    >
                                        <FontAwesomeIcon icon={faFacebook} size='2x' />
                                    </FacebookShareButton>
                                    <Link href="#" className='px-2'> </Link>
                                    <TwitterShareButton
                                        url={'https://www.crownsolar.co/solar-in-pakistan'}
                                    >
                                        <FontAwesomeIcon icon={faXTwitter} size='2x' />
                                    </TwitterShareButton>
                                    <Link href="#" className='px-2'></Link>
                                    <LinkedinShareButton url={'https://www.crownsolar.co/solar-in-pakistan'}>
                                        <FontAwesomeIcon icon={faLinkedin} size='2x' />
                                    </LinkedinShareButton>
                                </span>
                            </div>
                            <p className='mys-3 text-base font-medium text-left'>Solar energy is the cleanest, most abundant source of energy on Earth. It is free, it is reliable, and it is good for the environment. Solar energy can help us reduce our dependence on fossil fuels, improve our air quality, and create jobs. It is time to embrace solar energy and make it the foundation of our clean energy future.</p>
                      

                            <div className=" flex flex-col lg:mx-4 justify-center items-center">
                                <Image alt="card img" className="justify-center" src={image2} />
                            </div>

                            <p className='mt-3 pb-2 text-base font-medium text-left'>
                                Pakistan is facing an energy crisis. The country&apos;s electricity demand is growing at a rate of 7% per year, but the supply is only growing at a rate of 3% per year.
                                This has led to widespread blackouts and brownouts.
                            </p>
                            <p className='pb-2 text-base font-medium text-left'>
                                Solar panels can help to solve Pakistan&apos;s energy crisis. Solar panels are a renewable source of energy that can be used to generate electricity. They are also a clean source of energy that does not produce pollution. </p>
                            <p className='pb-2 text-base font-medium text-left'>
                                Crown Solar Panels are a leading brand of solar panels in Pakistan. Crown Solar Panels are made with high-quality materials and Mono Crystalline Technology and are designed to last for many years. Crown Solar Panels are also backed by a warranty backed by Crown Group of Companies, a leading two and three-wheeler automotive spare parts manufacturer in Pakistan.
                            </p>
                            <p className='my-3 text-base font-semibold text-left'>The Current Distribution of Solar Panels in Pakistan</p>
                            <p className='pb-2 text-base font-medium text-left'>
                                The current distribution of solar panels in Pakistan is fairly low. Only around 1-2% of total power generation in Pakistan comes from solar panels. However, the demand for solar panels in Pakistan is growing rapidly.</p>
                            <p className='pb-2 text-base font-medium text-left'>
                                The government of Pakistan is encouraging the use of solar panels. The government has offered tax breaks and other incentives to businesses and individuals who install solar panels. The government is also working to develop a solar energy policy.
                            </p>
                            <p className='my-3 text-base font-semibold text-left'>The Future of Solar Panels in Pakistan</p>
                            <p className='pb-2 text-base font-medium text-left'>The future of solar panels in Pakistan is bright. The demand for solar panels is growing rapidly, and the government is encouraging the use of solar panels. As the demand for solar panels grows, the cost of solar panels is expected to come down. This will make solar panels even more affordable for businesses and individuals in Pakistan.</p>
                            <p className='pb-2 text-base font-medium text-left'>Solar panels can help to solve Pakistan&apos;s energy crisis. Solar panels are a renewable source of energy that can be used to generate electricity. They are also a clean source of energy that does not produce pollution.</p>
                            <p className='pb-2 text-base font-medium text-left'>If you are interested in installing solar panels in Pakistan, you should contact a qualified solar installer. A qualified solar installer can help you choose the right solar panels for your needs and install them properly. This is where Crown Solar steps in with not just B2B product distribution, but also services pertaining to installation and technical solutions.</p>

                            <p className='my-3 text-base font-semibold text-left'>Facts and Reports</p>
                            <ol>
                                <li className='pb-2 text-base font-medium text-left'><strong>* </strong> According to the World Bank, Pakistan&apos;s electricity demand is expected to reach 300 gigawatts by 2030.</li>
                                <li className='pb-2 text-base font-medium text-left'><strong>* </strong> The government of Pakistan has set a target of generating 10% of its electricity from renewable sources by 2030.</li>
                                <li className='pb-2 text-base font-medium text-left'><strong>* </strong> Solar energy is the most abundant renewable energy source in Pakistan.</li>
                                <li className='pb-2 text-base font-medium text-left'><strong>* </strong> The cost of solar panels has come down significantly in recent years.</li>
                                <li className='pb-2 text-bas font-medium text-left'><strong>* </strong> Solar panels can be used to generate electricity for homes, businesses, and schools.</li>
                                <li className='pb-2 text-base font-medium text-left'><strong>* </strong> Solar panels can also be used to pump water, provide lighting, and power telecommunications networks.</li>
                                </ol>

                                <p className='pb-2 text-base font-medium text-left'>Solar panels are a viable solution to Pakistan&apos;s energy crisis. Solar panels are a renewable source of energy that can be used to generate electricity. They are also a clean source of energy that does not produce pollution. The government of Pakistan is encouraging the use of solar panels, and the demand for solar panels is growing rapidly. As the demand for solar panels grows, the cost of solar panels is expected to come down. This will make solar panels even more affordable for businesses and individuals in Pakistan.</p>

                            <div className="h-5 mb-3 border-b-2 border-gray-300 text-xl text-center"></div>
                            <span className='text-right'><Link href="/blog" className="text-gray-700 hover:bg-gray-200 hover:text-gray-600 inline-flex items-center justify-center w-50 px-6 py-3 text-base rounded-xl">
                                <FontAwesomeIcon icon={faArrowLeft} className='mr-2' /> Back </Link>
                            </span>
                            <span className='text-right'><Link href="/monocrystalline-panels" className="text-gray-700 hover:bg-gray-200 hover:text-gray-600 inline-flex items-center justify-center w-50 px-6 py-3 text-base rounded-xl">
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