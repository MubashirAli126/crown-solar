import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhoneFlip, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function ContactSection() {
    const redirectToOutlookMail = () => {
        // Replace 'mailto:' with the email address you want to open in Outlook
        const outlookMailtoLink = 'mailto:info@crownsolar.co';

        // Use the router to navigate to the Outlook mail link
        window.location.href = outlookMailtoLink;
    };
    return (
        <div className='m-auto max-w-screen-xl max-w-screen-lg max-w-screen-sm '>
            <div className="w-fullflex py-4 items-center justify-center text-black">
                <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-5 p-4">
                    <div className="rounded-2xl border-green-700 border p-3 group">
                        <div className="m-2 text-center text-sm">
                            <FontAwesomeIcon className='text-green-700' icon={faLocationDot} size='2x' />
                            <h2 className="font-semibold my-2 text-xl text-center text-green-700">Address</h2>
                            <p className="text-base font-medium text-center">
                                Plot # 672-673, Building 4, Deh Joreji Taluka, District Malir, Bin Qasim, Karachi
                            </p>
                        </div>
                    </div>

                    <div className="rounded-2xl p-3 border-green-700 border group">
                        <div className="m-2 text-center text-sm mb-2">
                            <FontAwesomeIcon className='text-green-700' icon={faEnvelope} size='2x' />
                            <h2 className="font-semibold my-2 text-xl text-center text-green-700">Email</h2>
                            <p className="text-base font-medium text-center text-gray-700 mb-2">
                                We will reply to emails within 24 hours of receipt.
                            </p>
                            <button className='border-b border-green-700 text-base font-medium' onClick={redirectToOutlookMail}>info@crownsolar.co</button>
                        </div>
                    </div>

                    <div className="rounded-2xl p-3 border-green-700 border group">
                        <div className="m-2 text-center text-sm">
                            <FontAwesomeIcon className='text-green-700' icon={faPhoneFlip} size='2x' />
                            <h2 className="font-semibold my-2 text-xl text-center text-green-700">Hotline</h2>
                            <p className="text-base font-medium text-center text-gray-700 mb-4">
                                Pakistan Time 9:00-17:00
                            </p>
                            <p className="text-base font-medium text-center">
                                021 111 000 348
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection