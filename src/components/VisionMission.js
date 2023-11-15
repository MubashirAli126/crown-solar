import Image from 'next/image';
import image1 from '../../public/images/VisionMission.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faBolt, faSolarPanel } from '@fortawesome/free-solid-svg-icons'

function VisionMission() {
    return (
        <div className="m-auto max-w-screen-xl max-w-screen-lg max-w-screen-sm p-4 md:px-4 h-5/6">
            <div className="mt-4 grid lg:grid-cols-2 gap-3">
                <div className=" mx-auto justify-center self-center">
                    <Image alt="card img" src={image1} />
                </div>
                <div className="justify-center">
                    <h3 className="lg:text-xl text-lg mt-4 text-black font-medium"> <br />
                        <span className='lg:text-2xl text-xl font-semibold text-green-700'>Vision & Mission</span></h3>
                    <p className='my-3 text-base text-black font-medium'>
                        Our mission is to help homeowners, businesses, and organizations make the transition to solar energy as seamless and cost-effective as possible. We take pride in our ability to tailor solar solutions to meet individual needs, whether its for residential, commercial, or industrial purposes.
                        Crown Solar is dedicated to providing custom-designed solar systems that are efficient, reliable, and environmentally friendly.
                    </p>
                    <div className="mt-8 grid lg:grid-cols-3 gap-3">
                        <div className="text-center">
                            <FontAwesomeIcon icon={faBullseye} size='2x' style={{ color: "#00b344" }} />
                            <p className='py-2 text-base text-black font-medium'>Flexible & Proactive Approch</p>
                        </div>
                        <div className="text-center">
                            <FontAwesomeIcon icon={faBolt} size='2x' style={{ color: "#00b344" }} />
                            <p className='py-2 text-base text-black font-medium'>A Promising Electrifying Quality</p>
                        </div>
                        <div className="text-center">
                            <FontAwesomeIcon icon={faSolarPanel} size='2x' style={{ color: "#00b344" }} />
                            <p className='py-2 text-base text-black font-medium'>Sustainable Intiative for a Greener Future</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisionMission