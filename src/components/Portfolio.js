import Link from "next/link";
import Image from 'next/image';
import img1 from '../../public/images/image1.png';
import img2 from '../../public/images/image2.png';
import img3 from '../../public/images/image3.png';

import BlogSection from "@/components/shared/BlogSection"

const Portfolio = () => {
    return (
        <>
            {/* <div className="my-4" id='portfolio'>
                <h2 className="my-2 text-center text-2xl text-green-700 uppercase font-bold">News, Events and Blogs</h2>
                {/* <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-green-700 mb-8'></div>
                </div> */}

            {/* <div className="px-4 lg:px-40 md:px-40" data-aos="fade-down" data-aos-delay="600">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10 md:px-15 lg:px-32'>
                        <div className="flex flex-col justify-start">
                            <div className="flex flex-col object-cover justify-items-start">
                                <Image className=" object-cover" src={img1} alt='nike shoes' />
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <div class="flex flex-col gap-3">
                                <h1 class="capitalize font-semibold text-green-700 text-lg md:text-xl">Crown Solar Solutions</h1>
                                <p class="text-base font-medium text-black">Crown Solar is a leading provider of solar panels in Pakistan.
                                    The company is backed by Crown Group of Companies, a leading two and three-wheeler automotive spare parts manufacturer
                                    in Pakistan since the last 20 years.</p>
                                <div class="flex items-center gap-4 cursor-pointer ">
                                    <Link href="/post-one" className="text-green-700 hover:text-gray-600 inline-flex items-center justify-center w-50 py-3 my-1 text-base">
                                        Read More
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden black hover:scale-105 rounded-lg shadow-2xl p-1">
                            <div className="m-2">
                                <Image alt="card img" className="rounded-t group-hover:scale-[1.12] transition duration-1000 ease-in-out w-full" src={img3} />
                                <h4 className="font-semibold text-green-700 my-4 text-lg md:text-xl">Monocrystalline Solar Panels</h4>
                                <p className="text-base font-medium leading-5 h-auto">
                                    Third world countries are often faced with a number of challenges, including a lack of access to reliable and affordable energy. This can have a significant impact on the quality of life for people in these countries, as well as their ability to develop economically.
                                </p>
                                <div className="flex my-4">
                                    <Link href="/post-three" className="text-green-700 hover:text-gray-600 inline-flex items-center justify-center w-50 py-3 my-1 text-base">
                                        Read More
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div> */}
            {/* </div>
            </div> */}
            <div class="py-4 px-4 mx-auto max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl">
                <div class="mx-auto max-w-screen-sm text-center lg:mb-8 mb-8">
                    <h2 className="mt-3 mx-12 text-center text-xl lg:text-2xl font-semibold text-green-700 uppercase">News, Events and Blogs</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-green-700'></div>
                    </div>
                    {/* <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p> */}
                </div>
                <div class="grid gap-8 lg:grid-cols-1">
                    <BlogSection sampleText="Blog" heading="Crown Solar Solutions" imgSrc={img1} paragraph="Crown Solar is a leading provider of solar panels in Pakistan. The company is backed by Crown Group of Companies, a leading two and three-wheeler automotive spare parts manufacturer in Pakistan since the last 20 years." />
                    <BlogSection sampleText="Blog" heading="The Importance of Solar Panels in Pakistan" imgSrc={img2} paragraph="Third world countries are often faced with a number of challenges, including a lack of access to reliable and affordable energy. This can have a significant impact on the quality of life for people in these countries, as well as their ability to develop economically." />
                </div>
            </div>
        </>
    )
}

export default Portfolio;