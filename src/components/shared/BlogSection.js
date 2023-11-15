import Image from 'next/image';
import Link from 'next/link';

function BlogSection(props) {
    return (
        <>
            <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
                <div className="grid lg:grid-cols-2 gap-5">
                    <div className=" justify-center self-center">
                        <Image class="" src={props.imgSrc} alt="Jese Leos avatar" />
                    </div>
                    <div className=" justify-center">
                        <h2 class="mb-2 font-semibold text-lg tracking-tight text-green-700">{props.heading}</h2>
                        <p class="mb-2 text-sm font-medium ">{props.paragraph}</p>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-4">
                                <Link href="/blog" class="inline-flex items-center font-medium text-green-700 hover:underline">
                                    Read more
                                    <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </Link>
                                {/* <Image class="w-7 h-7 rounded-full" src={props.imgSrc} alt="Jese Leos avatar" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default BlogSection