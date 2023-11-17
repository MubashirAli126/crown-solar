import Image from 'next/image';
import Link from 'next/link';

function BlogSection(props) {
    return (
        <>

            {/* <Link href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
                <Image class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={props.imgSrc} alt="avatar" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-green-700">{props.heading}</h5>
                        <p class="mb-3 font-normal text-black">{props.paragraph}</p>
                    </div>
            </Link> */}

            <article class="px-4 py-2 shadow-md">
                <div className="grid lg:grid-cols-2 gap-3">
                    <div className="mx-auto justify-center self-center">
                        <Image class="" src={props.imgSrc} alt="Jese Leos avatar" />
                    </div>
                    <div className=" justify-center self-center">
                        <h2 class="mb-2 font-semibold text-lg tracking-tight text-green-700">{props.heading}</h2>
                        <p class="mb-2 text-sm font-medium ">{props.paragraph}</p>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-4">
                                <Link href="/blog" class="bg-gray-100 inline-flex items-center font-medium text-green-700 hover:underline">
                                    Read more
                                    <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </Link>
                             </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default BlogSection