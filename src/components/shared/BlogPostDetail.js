import Image from 'next/image';
import Link from 'next/link';

function BlogPostDetail(props) {
    return (
        <>
            <div className=" group">
                <Image alt="card img" className=" transition duration-1000 ease-in-out w-full" src={props.imgSrc} />
                <div className='m-2'>
                    <h2 className="font-semibold my-4 text-xl text-left">{props.heading}</h2>
                    <p className="text-sm font-medium text-gray-800 text-left">
                        {props.paragraph}
                    </p>
                </div>
                <div className="flex my-4 m-2">
                    <Link href={props.addhref} className="bg-gray-100 inline-flex items-center font-medium text-green-700 hover:underline">
                        Read More
                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default BlogPostDetail