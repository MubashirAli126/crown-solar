import Link from 'next/link';
import React from 'react';

const Cta = () => {
    return (
        <section class="w-full flex items-center justify-center text-white bannerAdd">
            <div class="py-8 px-4 mx-auto lg:py-16 lg:px-2">
                <div class="mx-auto max-w-screen-sm text-center">
                    <h1 class="mb-4 text-xl tracking-tight font-bold lg:text-2xl ">Contact Us</h1>
                    <p class="mb-4 text-base tracking-tight font-medium md:text-lg text-white">Crown Solar offers Tier 1 Japanese Technology Solar Panels along with professional knowledge of P-Type and N-Type Solar Panel installation along with 25 Years of Warranty.</p>
                    <Link href="/contact" className="bg-transparent border hover:bg-green-700 hover:border-green-800 text-white justify-center text-center rounded-lg px-10 py-3 flex items-center group">Become a Distributor
                        <svg className="w-5 h-5 ml-1 group-hover:translate-x-2 duration-500 ease-in" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Cta;