// import Link from 'next/link';
// import Image from 'next/image';
// import img from '../../public/images/solar-panel-cut.png';

const Services = () => {

    return (
        <div className="w-full flex max-w-screen-xl max-w-screen-lg max-w-screen-smitems-center justify-center text-white">
            <div className="w-full text-center lg:text-left py-12 px-3 flex lg:justify-between items-center">
                <div className="w-full flex flex-col lg:flex-row lg:justify-around">
                    <div data-aos="fade-down" data-aos-delay="600">
                        <h2 className="my-2 text-center text-2xl text-green-700 uppercase font-bold">Tier 1 Manufacturer</h2>
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-green-700 mb-4'></div>
                        </div>
                        <p className="mb-4 text-center text-lg text-black font-medium">Monocrystalline 550W Solar Panel</p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

                            <div className="transition-all ease-in-out duration-400 overflow-hidden text-black rounded-lg shadow-2xl">
                                <h4 className="font-semibold text-black my-4 text-lg md:text-xl text-center mb-4">Parameters</h4>

                                <div class="relative overflow-x-auto shadow-md">
                                    <table class="w-full text-base text-left rtl:text-right text-gray-500 dark:text-gray-700">
                                        <tbody>
                                            <tr class="odd:bg-white odd:dark:bg-gray-50 even:bg-gray-50 even:dark:bg-gray-50 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                                    Wattage
                                                </th>
                                                <td class="px-6 py-4">
                                                    550w
                                                </td>
                                            </tr>
                                            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-200 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                                    Open Circuit Voltage
                                                </th>
                                                <td class="px-6 py-4">
                                                    49.9v
                                                </td>
                                            </tr>
                                            <tr class="odd:bg-white odd:dark:bg-gray-50 even:bg-gray-50 even:dark:bg-gray-50 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                                    Efficiency
                                                </th>
                                                <td class="px-6 py-4">
                                                    22.5%
                                                </td>
                                            </tr>
                                            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-200 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                                    Max Power NOCT
                                                </th>
                                                <td class="px-6 py-4">
                                                    416w
                                                </td>
                                            </tr>
                                            <tr class="odd:bg-white odd:dark:bg-gray-50 even:bg-gray-50 even:dark:bg-gray-50 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                                    Open Circuit Volt NOCT
                                                </th>
                                                <td class="px-6 py-4">
                                                    6.7v
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="transition-all ease-in-out duration-400 overflow-hidden text-black rounded-lg shadow-2xl">
                                <h4 className="font-semibold text-black my-4 text-lg md:text-xl text-center mb-4">Technical Specs</h4>

                                <div class="relative overflow-x-auto shadow-md">
                                    <table class="w-full text-base text-left rtl:text-right text-gray-500 dark:text-gray-700">
                                        <tbody>
                                            <tr class="odd:bg-white odd:dark:bg-gray-50 even:bg-gray-50 even:dark:bg-gray-50 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                                    Weight
                                                </th>
                                                <td class="px-6 py-4">
                                                    28.5 kg
                                                </td>
                                            </tr>
                                            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-200 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                                    Max Voltage
                                                </th>
                                                <td class="px-6 py-4">
                                                    1500v
                                                </td>
                                            </tr>
                                            <tr class="odd:bg-white odd:dark:bg-gray-50 even:bg-gray-50 even:dark:bg-gray-50 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                                    Build
                                                </th>
                                                <td class="px-6 py-4">
                                                    Aluminum Alloy
                                                </td>
                                            </tr>
                                            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-200 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                                    Connector
                                                </th>
                                                <td class="px-6 py-4">
                                                    MC4 Compatible
                                                </td>
                                            </tr>
                                            <tr class="odd:bg-white odd:dark:bg-gray-50 even:bg-gray-50 even:dark:bg-gray-50 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                                    Fuse Current
                                                </th>
                                                <td class="px-6 py-4">
                                                    20A
                                                </td>
                                            </tr>

                                            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-200 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                                    Junction Box
                                                </th>
                                                <td class="px-6 py-4">
                                                    IP68
                                                </td>
                                            </tr>
                                            <tr class="odd:bg-white odd:dark:bg-gray-50 even:bg-gray-50 even:dark:bg-gray-50 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                                    Dimensions
                                                </th>
                                                <td class="px-6 py-4">
                                                    2279mm*1134mm*35mm
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="transition-all ease-in-out duration-400 overflow-hidden text-black rounded-lg shadow-2xl">
                                <h4 className="font-semibold text-black my-4 text-lg md:text-xl text-center mb-4">Warranty</h4>

                                <div class="relative overflow-x-auto shadow-md">
                                    <table class="w-full text-base text-left rtl:text-right text-gray-500 dark:text-gray-700">
                                        <tbody>
                                            <tr class="odd:bg-white odd:dark:bg-gray-50 even:bg-gray-50 even:dark:bg-gray-50 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                                Product
                                                </th>
                                                <td class="px-6 py-4">
                                                12 Years
                                                </td>
                                            </tr>
                                            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-200 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                                Power Output Linear
                                                </th>
                                                <td class="px-6 py-4">
                                                25 Years
                                                </td>
                                            </tr>
                                            {/* <tr class="odd:bg-white odd:dark:bg-gray-50 even:bg-gray-50 even:dark:bg-gray-50 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                                Modules shown may be different than those included in final design"
                                                </th>
                                            </tr> */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Services;