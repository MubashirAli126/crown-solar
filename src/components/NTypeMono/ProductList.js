import img1 from '../../../public/images/solar/NTypeMono.png';
import image1 from '../../../public/images/solarIcon/NType.png'
import image2 from '../../../public/images/solarIcon/HigherOutput.png'
import image3 from '../../../public/images/solarIcon/LowLightFeature.png'
import image4 from '../../../public/images/solarIcon/LoadCapacity.png'

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPlugCircleBolt, faExplosion, faMinimize } from '@fortawesome/free-solid-svg-icons'

function ProductList() {
    return (
        <section class="">
            <div class="py-8 mx-auto max-w-screen-xl max-w-screen-lg">
                <div class="grid gap-6 mb-6 lg:mb-16 md:grid-cols-3">
                    <div class="items-center">
                        <div class="grid gap-1 mb-6 lg:mb-16 md:grid-cols-1 text-center">
                            <div class="p-0.5">
                            <Image className='mx-auto' src={image1} alt="client" width={70} height={70} />
                                <p class="mt-3 text-lg font-semibold">N-Type MBB Cell</p>
                                <p class="my-3 text-sm font-medium">New circuit design N-type cells, can increase N the output power of 10W~20W</p>
                            </div>
                            <div class="p-0.5">
                            <Image className='mx-auto' src={image2} alt="client" width={70} height={70} />
                                <p class="mt-3 text-lg font-semibold">Higher Output Power</p>
                                <p class="my-3 text-sm font-medium">Module adopts 144 pcs of 182*182mm half cells, the maximum power can reach 585W.</p>
                            </div>
                        </div>
                    </div>

                    <div class="items-center">
                        <Image alt="card img" src={img1} className='h-[450px]' />
                    </div>

                    <div class="items-center">
                        <div class="grid gap-1 mb-6 lg:mb-16 md:grid-cols-1 text-center">
                            <div class="p-0.5">
                            <Image className='mx-auto' src={image3} alt="client" width={70} height={70} />
                                <p class="mt-3 text-lg font-semibold">Low Light Features</p>
                                <p class="my-3 text-sm font-medium">Higher performance under low light environment.</p>
                            </div>
                            <div class="p-0.5">
                            <Image className='mx-auto' src={image4} alt="client" width={70} height={70} />
                                <p class="mt-3 text-lg font-semibold">Load Capacity</p>
                                <p class="my-3 text-sm font-medium">Mechanical load tests including wind load 2400 Pa and snow load 5400 Pa done by TUV Nord.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductList