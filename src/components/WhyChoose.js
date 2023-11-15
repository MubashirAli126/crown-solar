import Image from 'next/image';
import image1 from '../../public/images/WhyCrownSolar.png';

function WhyChoose() {
    return (
        <div className="m-auto max-w-screen-xl max-w-screen-lg max-w-screen-sm p-4 md:px-4 h-5/6">
            <div className="mt-4 grid lg:grid-cols-2 gap-3">
                <div className="justify-center">
                    <h3 className="lg:text-xl text-lg mt-4 text-black font-medium"> <br />
                        <span className='lg:text-2xl text-xl font-semibold text-green-700'>Why Choose Crown Solar</span></h3>
                    <div>
                        <p className='my-3 text-base text-black font-medium'>
                            Crown Solar is a company that came into existence in 2022. Despite our relatively short journey, we are driven by a passionate commitment to harness the power of the sun for a sustainable and clean energy future. Crown Solar produce high quality solar modules with 25 years warranty. Crown can provide the most suitable modules for each solar system. Crown Solar takes pride in offering nationwide coverage, ensuring that our high-quality solar solutions are accessible to customers across the entire country.
                            At Crown Solar, we believe that renewable energy is not just a choice; its a responsibility. We are committed to providing top-tier solar solutions that empower our customers to reduce their carbon footprint and take control of their energy costs. Our team of experts brings a wealth of knowledge and experience in the solar industry, ensuring that we deliver the highest quality products and services.
                        </p>
                    </div>
                </div>
                <div className=" mx-auto justify-center self-center">
                    <Image alt="card img" src={image1} />
                </div>
            </div>
        </div>
    )
}

export default WhyChoose