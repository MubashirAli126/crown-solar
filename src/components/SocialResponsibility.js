import Image from 'next/image';
import image1 from '../../public/images/SocialResponsibilty.png';

function SocialResponsibility() {
    return (
        <div className="m-auto max-w-screen-xl max-w-screen-lg max-w-screen-sm p-4 md:px-4 h-5/6">
            <div className="mt-4 grid lg:grid-cols-2 gap-3">
                <div className=" mx-auto justify-center self-center">
                    <Image alt="card img" src={image1} />
                </div>
                <div className="justify-center">
                    <h3 className="lg:text-xl text-lg mt-4 text-black font-medium"> <br />
                        <span className='lg:text-2xl text-xl font-semibold text-green-700'>Social Responsibility</span></h3>
                    <div>
                        <p className='my-3 text-base text-black font-medium'>
                            At Crown Solar, we firmly believe in our social responsibility towards the environment and our communities. Solar energy is not just a business for us; its a mission. Our vision is to reduce the carbon footprint and environmental impact of our nation by harnessing the power of the sun. By providing clean and sustainable energy solutions, we aim to contribute to a greener and healthier planet for future generations.
                            Our mission is simple yet profound: to drive the adoption of solar energy as a means to mitigate environmental pollution and reduce our reliance on conventional, polluting energy sources. Solar energy, with its inherent environmental benefits, is a significant step towards a cleaner and more sustainable future. At Crown Solar, we are resolute in our commitment to achieving this mission and paving the way for a brighter and greener tomorrow.
                            By choosing Crown Solar, you not only invest in a sustainable future for yourself but also contribute to a healthier environment and a more prosperous nation. Join us in our journey to create a cleaner, more sustainable world through solar energy. Together, we can make a positive impact and lead the way towards a brighter and cleaner future.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialResponsibility