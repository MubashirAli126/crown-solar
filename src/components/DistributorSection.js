import React from 'react'
import DistributorDetail from '@/components/shared/DistributorDetail'

function DistributorSection() {
    return (
        <div className='m-auto  max-w-xl px-4 sm:max-w-2xl md:max-w-4xl md:px-8 lg:max-w-5xl xl:max-w-7xl'>
            <div className="py-8" id='portfolio'>
                <h2 className="my-2 text-center text-2xl text-green-700 uppercase font-bold">Find our Distributors</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-green-700 mb-4 md:mb-8 lg:mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div class="flow-root">
                        <div class="-my-4 divide-y divide-gray-200 dark:divide-gray-500">
                            <div class="h-5 border-b-4 border-green-700 text-xl text-center">
                                <span class="bg-white px-5 text-base font-semibold text-black">Karchi</span>
                            </div>
                            <DistributorDetail address="Arsalan Electric, New Bus Stope, KLP Road, Maqbool City, Sadiqabad " phone1="0300-6982688 " phone2="0345-8041300" />
                            <DistributorDetail address="Anas Solar & Co. Shop# 44 Block- 1, Bismillah Market, New Sabzi Mandi Super Highway Karachi" phone1="0303-9602409" />
                            <DistributorDetail address="Ayan Solar Energy, Gate no 2, Shop# 63, Near Master Biryani, Bismillah Market, New Sabzi Mandi, Super Highway Karachi." phone1=" 0302-3849205" phone2="0310-8641885" />
                            <DistributorDetail address="Umer Solar, Shop# 60 Block- 8, Gate-3 Bismillah Market, New Sabzi Mandi Super Highway " phone1="0311-8098921" phone2="0318-0267756" />
                        </div>
                        <div class="-my-4 divide-y divide-gray-200 dark:divide-gray-500">
                            <div class="h-5 border-b-4 border-green-700 text-lg text-center">
                                <span class="bg-white px-5 text-base font-semibold text-black">Bhawalpur</span>
                            </div>
                            <DistributorDetail address="Saif Sons Solar System, Giri Ganj Bazar, Bhawalpur " phone1="0307-2300085" phone2="0300-9683313" />
                            <DistributorDetail address="Pakistan Solar Energy, Giri Ganj Bazar, Bhawalpur " phone1="0300-4544083" />
                            <DistributorDetail address="Muhammadi Solar Energy, Giri Ganj Bazar, Bhawalpur " phone1="0301-7700677" phone2="0304-2521117" />
                            <DistributorDetail address="Saif Sons Solar System, Giri Ganj Bazar, Bhawalpur " phone1="0302-7713184" phone2="0346-2138517" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DistributorSection