import React from 'react'

function AboutSection() {
    return (
        <div className="w-fullflex m-auto max-w-screen-xl max-w-screen-lg max-w-screen-sm py-8 items-center justify-center text-black">
            <h2 className="my-2 text-center text-2xl text-green-700 uppercase font-bold">Producing Solar Panels for Tier 1 Grade Material</h2>
            <div className='flex justify-center'>
                <div className='w-24 border-b-4 border-green-700 mb-4 md:mb-8 lg:mb-8'></div>
            </div>
            <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-5 px-4">

                <div className="rounded-2xl border-green-700 border-2 p-3 group">
                    <div className="m-2 text-justify text-sm">
                        <h2 className="font-semibold my-4 text-2xl text-center text-green-700">12 Years</h2>
                        <p className="text-md font-medium text-center">
                            Product Warranty
                        </p>
                    </div>
                </div>

                <div className="rounded-2xl p-3 border-green-700 border-2 group">
                    <div className="m-2 text-justify text-sm">
                        <h2 className="font-semibold my-4 text-2xl text-center text-green-700">25 Years</h2>
                        <p className="text-md font-medium text-center">
                            Life Guarantee
                        </p>
                    </div>
                </div>

                <div className="rounded-2xl p-3 border-green-700 border-2 group">
                    <div className="m-2 text-justify text-sm">
                        <h2 className="font-semibold my-4 text-2xl text-center text-green-700">22.5%</h2>
                        <p className="text-md font-medium text-center">
                            Efficiency Quotient
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection