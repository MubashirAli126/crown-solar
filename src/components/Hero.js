import Link from 'next/link';
import heroImg from '../../public/images/crown-solar-panels.png';
import Image from 'next/image';

const Hero = () => {
    return (
        <>
            <div className="hero" id='hero'>
                <div className="m-auto overflow-hidden mt-8 lg:mt-4 p-2 md:pl-36 lg:pl-36 pt-6 h-5/6 " data-aos="zoom-in">

                    <div className="flex flex-col lg:flex-row pt-8 justify-between text-center lg:text-left">
                        <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                            <h1 className="mb-5 md:text-4xl text-3xl font-bold text-green-700">
                                {/* We build digital solutions to help businesses scale */}
                                Crown Solar  <span className="md:text-4xl text-3xl font-bold text-black"> Trusted Solar Panel Brand in Pakistan</span>
                            </h1>
                            <div className="text-base font-medium tracking-tight mb-5 text-black">Embrace solar power with Crown latest P-Type Mono and N-Type Mono & Bifacial solar panels in Pakistan. Maximize efficiency and savings with our cutting-edge solar solutions. Go green and harness the sun energy for a sustainable future.</div>
                            <div className=" space-x-0 md:space-x-2 self-center lg:mr-auto md:mr-auto">
                                <Link href="/contact" className="text-white capitalize bg-gradient-to-r from-green-500 to-green-700 hover:bg-green-200 hover:text-gray-600 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-base font-medium shadow-xl rounded-2xl sm:mb-0">
                                Get a free quote now!
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Link>
                            </div>
                        </div>
                        <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                            <Image alt="card img" className="rounded-t float-right duration-1000 w-full" src={heroImg} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;