import React from 'react';
import asset0 from '../../public/images/clients/asset0.png';
import asset1 from '../../public/images/clients/asset1.png';
import asset2 from '../../public/images/clients/asset2.png';
import asset3 from '../../public/images/clients/asset3.png';
import asset4 from '../../public/images/clients/asset4.png';
import asset5 from '../../public/images/clients/asset5.png';
import asset6 from '../../public/images/clients/asset6.png';
import asset7 from '../../public/images/clients/asset7.png';
import asset8 from '../../public/images/clients/asset8.png';
import asset9 from '../../public/images/clients/asset9.png';
import asset10 from '../../public/images/clients/asset10.png';
import asset11 from '../../public/images/solarIcon/NewBrandYear.png';
import Image from 'next/image';

const clientImage = {
    height: '3rem',
    width: 'auto',
    mixBlendMode: 'colorBurn'
}

const Clients = () => {
    return (
        <div className="mt-4 bg-gray-100">
            <section>
                <div className="p-4">
                    <div className="grid grid-cols-4 lg:grid-cols-12">
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={clientImage} src={asset0} alt="client" />
                        </div>

                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={clientImage} src={asset1} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={clientImage} src={asset2} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={clientImage} src={asset3} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={clientImage} s src={asset4} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={clientImage} src={asset5} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={clientImage} src={asset6} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={clientImage} src={asset7} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={clientImage} src={asset8} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={clientImage} src={asset9} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={clientImage} src={asset11} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={clientImage} src={asset10} alt="client" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Clients;