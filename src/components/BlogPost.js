import Link from 'next/link';
import img1 from '../../public/images/image1.png';
import img2 from '../../public/images/image2.png';
import img3 from '../../public/images/image3.png';
import mainImg from '../../public/images/slider/slider4.jpg'
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
                                    <h2 class="mb-2 font-semibold text-lg tracking-tight text-black">Solar Solutions</h2>
                                    <p class="mb-2 text-sm font-medium ">Crown Solar is a leading provider of solar panels in Pakistan. The company is backed by Crown Group of Companies, a leading two and three-wheeler automotive spare parts manufacturer in Pakistan since the last 20 years.</p>
                                    <div class="flex justify-between items-center">
                                        <div class="flex items-center space-x-4">
                                            <Link href="/blog" class="bg-gray-100 inline-flex items-center font-medium text-green-700 hover:underline">
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

                            <BlogPostDetail sampleText="Blog" addhref="/post-one" heading="Crown Solar Solutions" imgSrc={img1} paragraph="Crown Solar is a leading provider of solar panels in Pakistan. The company is backed by Crown Group of Companies, a leading two and three-wheeler automotive spare parts manufacturer in Pakistan since the last 20 years." />
                            <BlogPostDetail sampleText="Blog" addhref="/post-three" heading="Crown Solar Solutions: Monocrystalline Solar Panels" imgSrc={img3} paragraph="Crown Solar is a leading provider of solar panels in Pakistan. The company is backed by Crown Group of Companies, a leading two and three-wheeler automotive spare parts manufacturer in Pakistan since the last 20 years." />
                            <BlogPostDetail sampleText="Blog" addhref="/post-two" heading="The Importance of Solar Panels in Pakistan" imgSrc={img2} paragraph="Solar panels are a viable solution to Pakistan energy crisis. Solar panels are a renewable source of energy that can be used to generate electricity. They are also a clean source of energy that does not produce pollution." />
                          
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
