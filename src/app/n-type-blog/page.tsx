import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import image2 from '../../../public/images/image3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';

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
                            <h3 className="text-2xl lg:text-3xl xl:text-3xl text-black font-semibold text-center">Advanced N-Type Technology Solar Panels in Pakistan</h3>
                            <div className='mt-8 text-sm font-medium text-center'>
                                <span className='bg-gray-200 text-green-800 p-1 mr-3'>N-Type Modules</span>
                                <span className=''>2023.10.04</span>
                            </div>

                            <div className="h-5 my-14 border-b border-grey-400 text-xl text-center">
                                <span className="bg-white px-5 text-base font-semibold text-black">
                                    <Link href="#" className='px-2'> <FontAwesomeIcon icon={faFacebook} size='2x' /> </Link>
                                    <Link href="#" className='px-2'><FontAwesomeIcon icon={faXTwitter} size='2x' /></Link>
                                    <Link href="#" className='px-2'><FontAwesomeIcon icon={faLinkedin} size='2x' /></Link>
                                </span>
                            </div>

                            <p className='my-3 text-base font-medium text-left'>
                                Within the passionate domain of sustainable energy, the swift evolution of solar power generation is forced by technological creations. In this regard, N-type
                                solar panels are assembling waves since they swear to be more reliable, long-lasting, and efficient than their conventional counterparts.
                                This article examines Pakistan cutting-edge N-type technology market, underscoring CrownSolar.co's unique ambitions.
                            </p>

                            <div className=" flex flex-col lg:mx-4 justify-center items-center">
                                <Image alt="card img" className="justify-center" src={image2} />
                            </div>

                            <p className='my-3 text-base font-semibold text-left'>Pakistan's Rising Solar Energy Landscape</p>

                            <p className='mt-3 pb-2 text-bas font-medium text-left'>Like numerous other nations, Pakistan is devoted to declining its carbon footprint and making certain that energy is produced sustainably in the future. Solar energy has shown to be an advantageous answer in this endeavor. Due to the nation's plentiful daylight aids and rising demands for power, solar power is evolving into a more pretty choice for both industrial and family uses.</p>
                            <p className='pb-2 text-base font-medium text-left'>But it's crucial to use solar energy effectively. Traditional solar panels have been the norm for centuries, frequently penned of P-type silicon. The arrival of N-type tech has the potential to entirely alter the solar energy environment, even though these panels have surely helped Pakistan's solar energy enterprise flourish.</p>
                            <p className='mt-3 pb-2 text-base font-semibold text-left'>What exactly are N-type solar panels?</p>
                            <p className='pb-2 text-base font-medium text-left'>N-type solar panels are a new species of photovoltaic cells planned to improve energy conversion. Rather than the P-type silicon used in conventional solar panels, they comprise N-type silicon, another type of silicon material.</p>
                            <p className='pb-2 text-base font-medium text-left'>The absence of boron, normally found in P-type silicon, is the primary distinction between N-type and P-type technology. The ensuing benefits of this distinction make N-type solar panels a desirable choice for the solar power epoch:</p>
                            <p className='pb-2 text-base font-medium text-left'></p>

                             <ol>
                                <li className='pb-2 text-base font-medium text-left'><strong>1. More wonderful Efficiency: </strong>  Because N-type solar panels are more responsive to longer light wavelengths and have less receptivity to contaminants, they have a higher photoelectric modification efficiency. Extra power can be produced from the same surface area as a result of this.</li>
                                <li className='pb-2 text-base font-medium text-left'><strong>2. Expanded Durability: </strong> N-type panels last a lot longer than P-type panels do. This signifies that they are less predisposed to need to be replaced over the years, earning them an affordable option.</li>
                                <li className='pb-2 text-base font-medium text-left'><strong>3. Enhanced Performance at High Temperatures: </strong>  N-type panels serve well under the country's harsh summer heat. Transistors ensure a steady energy output since they are less powerless to high-temperature efficiency reductions.</li>
                                <li className='pb-2 text-base font-medium text-left'><strong>4. Relieved Degradation Rate: </strong>  N-type solar panels supplied a more steady and dependable energy seed over decades due to their slower degradation rates.</li>
                                <li className='pb-2 text-bas font-medium text-left'><strong>5. Tiniest Light-Induced Degradation: </strong> One of the most common problems with solar panels is Light-Induced Degradation (LID). Since N-type panels are less likely to have LID, their performance will remain steady.</li>
                            </ol>
                            <p className='mt-3 pb-2 text-base font-semibold text-left'>Pakistan's First N-Type Solar Panels: CrownSolar.co</p>
                            <p className='pb-2 text-base font-medium text-left'>CrownSolar.co is an influential factor in assuming N-type technology as Pakistan moves nearer to a more environmentally friendly and endurable future. This business is a trailblazer in bringing N-type solar panel technology to the Pakistani market, having discovered the enormous possibility of these panels.</p>
                            <p className='pb-2 text-base font-medium text-left'>Pakistan's energy goals ideally align with CrownSolar.co's adherence to sustainability and technical advancement. They give patrons, companies, and industries a trusted and efficient punch solution by including N-type solar panels in their developments.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page