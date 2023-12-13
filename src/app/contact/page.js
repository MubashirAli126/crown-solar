"use client"

import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
import Notiflix from 'notiflix';
import SocialLink from '@/components/SocialLink'
import { faLinkedin, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import ContactBanner from '@/components/shared/ContactBanner'
import ContactSection from '@/components/ContactSection'
import DistributorSection from '@/components/DistributorSection'

function Page() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState([])

    const clearErrors = () => {
        setErrors([])
    }

    const clearInput = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setMessage('')
    }

    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     document.getElementById('submitBtn').disabled = true;
    //     document.getElementById('submitBtn').innerHTML = 'Loading...';
    //     let fData = new FormData();
    //     fData.append('first_name', firstName)
    //     fData.append('last_name', lastName)
    //     fData.append('email', email)
    //     fData.append('phone_number', phone)
    //     fData.append('message', message)

    //     axios({
    //         method: "post",
    //         url: process.env.REACT_APP_CONTACT_API,
    //         data: fData,
    //         headers: {
    //             'Content-Type': 'multipart/form-data'
    //         }
    //     })
    //         .then(function (response) {
    //             document.getElementById('submitBtn').disabled = false;
    //             document.getElementById('submitBtn').innerHTML = 'send message';
    //             clearInput()
    //             //handle success
    //             Notiflix.Report.success(
    //                 'Success',
    //                 response.data.message,
    //                 'Okay',
    //             );
    //         })
    //         .catch(function (error) {
    //             document.getElementById('submitBtn').disabled = false;
    //             document.getElementById('submitBtn').innerHTML = 'send message';
    //             //handle error
    //             const { response } = error;
    //             if (response.status === 500) {
    //                 Notiflix.Report.failure(
    //                     'An error occurred',
    //                     response.data.message,
    //                     'Okay',
    //                 );
    //             }
    //             if (response.data.errors !== null) {
    //                 setErrors(response.data.errors)
    //             }

    //         });
    // }
    return (
        <>
            <ContactBanner />
            <ContactSection />
            <DistributorSection />
            <div className="m-auto max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl flex justify-center items-center w-full bg-white py-4">
                <div className="w-full px-4" data-aos="zoom-in">

                    <form>
                        <div className=" bg-white p-8 my-4 md:px-12 rounded-2xl shadow-2xl">
                            <div className="flex">
                                <h2 className="font-bold text-center lg:text-left text-green-700 uppercase text-2xl">Get in touch</h2>
                            </div>
                            <div className='flex'>
                                <p className='font-medium text-left text-black text-base'>If you have any questions, please feel free to leave us a message</p>
                            </div>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <div>
                                    <input
                                        name="first_name"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="First Name*"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                </div>

                                <div>
                                    <input
                                        name="last_name"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Last Name*"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                </div>

                                <div>
                                    <input
                                        name="email"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="email"
                                        placeholder="Email*"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                </div>

                                <div>
                                    <input
                                        name="phone_number"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="number"
                                        placeholder="Phone*"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                </div>
                            </div>
                            <div className="my-4">
                                <textarea
                                    name="message"
                                    placeholder="Message*"
                                    className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyUp={clearErrors}
                                ></textarea>
                            </div>
                            <div className="my-2 w-1/2 lg:w-2/4">
                                <button type="submit" id="submitBtn" className="text-sm font-bold tracking-wide bg-gray-500 hover:bg-green-700 text-gray-100 p-3 rounded-lg w-full 
                                    focus:outline-none focus:shadow-outline">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Page