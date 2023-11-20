import Link from 'next/link';
import img1 from '../../public/images/image1.png';
import img2 from '../../public/images/image2.png';
import img3 from '../../public/images/image2.png';
import mainImg from '../../public/images/slider/slider9.jpg'
import Image from 'next/image';
import BlogPostDetail from '@/components/shared/BlogPostDetail'
import BlogSection from '@/components/shared/BlogSection'
function BlogPost() {
    return (
        <div className="m-auto max-w-xl sm:max-w-2xl md:max-w-4xl md:px-4 lg:max-w-5xl xl:max-w-7xl xl:px-2  w-full flex items-center justify-center text-black">
            <div className="w-full text-center lg:text-left py-8 px-4 flex lg:justify-between items-center">
                <div className="w-full flex flex-col lg:flex-row lg:justify-around">

                    <div className=" text-center">

                        <article class="p-4">
                            <div className="grid lg:grid-cols-2 gap-5">
                                <div className=" justify-center self-center">
                                    <Image class="" src={mainImg} alt="avatar" />
                                </div>
                                <div className="text-left self-center">
                                    <h2 class="mb-2 font-semibold text-lg tracking-tight text-black">Advanced N-Type Technology Solar Panels in Pakistan</h2>
                                    <p class="mb-2 text-sm font-medium ">N-type solar panels are assembling waves since they swear to be more reliable, long-lasting, and efficient than their conventional counterparts. This article examines Pakistan cutting-edge N-type technology market, underscoring CrownSolar.co unique ambitions.</p>
                                    <div class="flex justify-between items-center">
                                        <div class="flex items-center space-x-4">
                                            <Link href="/n-type-blog" class="bg-gray-100 inline-flex items-center font-medium text-green-700 hover:underline">
                                                Read more
                                                <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </Link>
                                            {/* <Image class="w-7 h-7 rounded-full" src={props.imgSrc} alt="Jese Leos avatar" /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <div className="md:pt-10 lg:pt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                            <BlogPostDetail sampleText="Blog" addhref="/solar-in-pakistan" heading="Importance of Solar Panels in Pakistan" imgSrc={img1} paragraph="Solar energy is the cleanest, most abundant source of energy on Earth. It is free, it is reliable, and it is good for the environment. Solar energy can help us reduce our dependence on fossil fuels, improve our air quality, and create jobs." />
                            <BlogPostDetail sampleText="Blog" addhref="/monocrystalline-panels" heading="Monocrystalline Panels - A Game Changer in Pakistan" imgSrc={img3} paragraph="Monocrystalline solar panels are a type of solar panel that is made from a single crystal of silicon. This makes them more efficient than other types of solar panels, and they can also withstand harsher conditions." />

                            {/* <div className="rounded-2xl border-white-800 border-2 group">
                                <Image alt="card img" className=" transition duration-1000 ease-in-out w-full" src={img3} />
                                <div className="m-2">
                                    <h2 className="font-semibold my-4 text-xl text-left">Crown Solar Solutions: Monocrystalline Solar Panels</h2>
                                    <p className="text-base font-medium text-left">
                                        Third world countries are often faced with a number of challenges, including a lack of access to reliable and affordable energy. This can have a significant impact on the quality of life for people in these countries, as well as their ability to develop economically.
                                    </p>
                                </div>
                                <div className="flex justify-center mt-4">
                                    <Link href="/post-three" className="text-white bg-gradient-to-r from-green-500 to-green-700 hover:bg-green-200 hover:text-gray-600 inline-flex items-center justify-center w-50 px-6 py-3 my-4 text-base shadow-xl rounded-xl">
                                        Read More
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPost
