"use client"

import React, { useEffect, useState } from 'react';
// import emailjs from 'emailjs-com';
import Notiflix from 'notiflix';
import SocialLink from '@/components/SocialLink'
import { faLinkedin, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import ContactBanner from '@/components/shared/ContactBanner'
import ContactSection from '@/components/ContactSection'
import DistributorSection from '@/components/DistributorSection'

function Page() {
    const [customerName, setCustomerName] = useState('');
    const [phoneNumberCN, setPhoneNumberCN] = useState('')
    const [addressCN, setAddressCN] = useState('')
    const [buyingSource, setBuyingSource] = useState('')
    const [phoneNumberBS, setPhoneNumberBS] = useState('')
    const [addressBS, setAddressBS] = useState('')
    const [technicianName, setTechnicianName] = useState('')
    const [phoneNumberTN, setPhoneNumberTN] = useState('')
    const [addressTN, setAddressTN] = useState('')
    const [panelSerialNumber, setpanelSerialNumber] = useState('')
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false); 

    const validateForm = () => { 
        let errors = {}; 
  
        if (!customerName) { 
            errors.customerName = 'Customer name is required.'; 
        } 
  
        if (!phoneNumberCN) { 
            errors.phoneNumberCN = 'Phone number is required.'; 
        }

        if (!addressCN) { 
            errors.addressCN = 'Address is required.'; 
        }

        if (!panelSerialNumber) { 
            errors.panelSerialNumber = 'Panel serial number is required.'; 
        }

        if (!buyingSource) { 
            errors.buyingSource = 'Buying source is required.'; 
        }

        if (!phoneNumberBS) { 
            errors.phoneNumberBS = 'Phone number is required.'; 
        }

        if (!addressBS) { 
            errors.addressBS = 'Address is required.'; 
        }
        
        if (!technicianName) { 
            errors.technicianName = 'Technician name is required.'; 
        }

        if (!phoneNumberTN) { 
            errors.phoneNumberTN = 'Phone number is required.'; 
        }

        if (!addressTN) { 
            errors.addressTN = 'Address is required.'; 
        }
  
        setErrors(errors); 
        setIsFormValid(Object.keys(errors).length === 0); 
    }; 

    const clearErrors = () => {
        setErrors([])
    }

    const clearInput = () => {
        setCustomerName('')
        setPhoneNumberCN('')
        setAddressCN('')
        setBuyingSource('')
        setPhoneNumberBS('')
        setAddressBS('')
        setTechnicianName('')
        setPhoneNumberTN('')
        setAddressTN('')
        setpanelSerialNumber('')
    }

    const handleSubmit = async (e) => {
        validateForm();
        e.preventDefault();
        if (isFormValid) { 
            document.getElementById('submitBtn').disabled = true;
            document.getElementById('submitBtn').innerHTML = 'Loading...';
    
            fetch("https://formsubmit.co/ajax/aisha.saqib@crowngroup.com.pk", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    Customer_Name: customerName,
                    Customer_Phone_Number: phoneNumberCN,
                    Customer_Address: addressCN,
                    Panel_Serial_Number: panelSerialNumber,
                    Buying_Source: buyingSource,
                    Purchase_Phone_Number: phoneNumberBS,
                    Purchase_Address: addressBS,
                    Technician_Name: technicianName,
                    Technician_Phone_Number: phoneNumberTN,
                    Technician_Address: addressTN,
                })
            })
            .then(function (response) {
                            document.getElementById('submitBtn').disabled = false;
                            document.getElementById('submitBtn').innerHTML = 'send message';
                            clearInput()
                            Notiflix.Report.success(
                                'Success',
                                response.json(),
                                'Okay',
                            );
                        })
                // .then(response => response.json())
                // .then(data => console.log(data))
                .catch(function (error) {
                    document.getElementById('submitBtn').disabled = false;
                    document.getElementById('submitBtn').innerHTML = 'send message';
                    //handle error
                    const { response } = error;
                    if (response.status === 500) {
                        Notiflix.Report.failure(
                            'An error occurred',
                            response.data.message,
                            'Okay',
                        );
                    }
                });
        } 
        // else { 
        //     alert('Form has errors. Please correct them.'); 
        // } 
      };


    return (
        <>
          <ContactBanner />

            <div className="m-auto max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl flex justify-center items-center w-full bg-white py-4">
                <div className="w-full px-4" data-aos="zoom-in">

                 <form onSubmit={handleSubmit}>
                        <div className=" bg-white p-8 my-4 md:px-12 rounded-2xl shadow-2xl">
                            <div className="flex">
                                <h2 className="font-bold text-center lg:text-left text-green-700 uppercase text-2xl">Warranty Claim Form</h2>
                            </div>
                            <div className='flex'>
                                <p className='font-medium text-left text-black text-base'>Please enter the following details correctly in order to file for your product warranty. Note that after prudent scrutiny, the company will take full responsibility for your claim and facilitate your query.</p>
                            </div>

                            <h3 className='mt-5 font-semibold text-left text-black text-base'>Your Details</h3>

                            <div className="grid grid-cols-1 xs:gap-2 sm:gap-5 md:grid-cols-2 md:gap-5 lg:gap-5 xl:gap-5 ">
                                <div>
                                    <input
                                        name="customer_name"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Customer Name*"
                                        value={customerName}
                                        onChange={(e) => setCustomerName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors &&
                                        <p className="text-red-500 text-sm">{errors.customerName}</p>
                                    }
                                </div>

                                <div>
                                    <input
                                        name="phone_number"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="tel"
                                        placeholder="Phone Number*"
                                        value={phoneNumberCN}
                                        onChange={(e) => setPhoneNumberCN(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                      {/* {errors.phoneNumberCN && <p className="text-red-500 text-sm">{errors.phoneNumberCN}</p>}  */}
                                    {errors &&
                                        <p className="text-red-500 text-sm">{errors.phoneNumberCN}</p>
                                    }
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-2 md:grid-cols-1">
                                <input
                                    name="address"
                                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Address*"
                                    value={addressCN}
                                    onChange={(e) => setAddressCN(e.target.value)}
                                    onKeyUp={clearErrors}
                                />
                                    {errors &&
                                        <p className="text-red-500 text-sm">{errors.addressCN}</p>
                                    }
                            </div>

                            <div className="grid grid-cols-1 gap-2 md:grid-cols-1">
                                <input
                                    name="panelSerialNumber"
                                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Panel Serial Number*"
                                    value={panelSerialNumber}
                                    onChange={(e) => setpanelSerialNumber(e.target.value)}
                                    onKeyUp={clearErrors}
                                />
                                    {errors &&
                                        <p className="text-red-500 text-sm">{errors.panelSerialNumber}</p>
                                    }
                            </div>

                            <h3 className='mt-5 font-semibold text-left text-black text-base'>Purchase From Details</h3>

                            <div className="grid grid-cols-1 xs:gap-2 sm:gap-5 md:grid-cols-2 md:gap-5 lg:gap-5 xl:gap-5 ">
                            <div>
                                    <input
                                        name="buying_source"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Buying Source*"
                                        value={buyingSource}
                                        onChange={(e) => setBuyingSource(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors &&
                                        <p className="text-red-500 text-sm">{errors.buyingSource}</p>
                                    }
                                </div>

                                <div>
                                    <input
                                        name="phone_number"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Phone Number*"
                                        value={phoneNumberBS}
                                        onChange={(e) => setPhoneNumberBS(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors &&
                                        <p className="text-red-500 text-sm">{errors.phoneNumberBS}</p>
                                    }
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-2 md:grid-cols-1">
                                <input
                                    name="address"
                                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Address*"
                                    value={addressBS}
                                    onChange={(e) => setAddressBS(e.target.value)}
                                    onKeyUp={clearErrors}
                                />
                                {errors &&
                                    <p className="text-red-500 text-sm">{errors.addressBS}</p>
                                }
                            </div>

                            <h3 className='mt-5 font-semibold text-left text-black text-base'>Technician Details</h3>

                            <div className="grid grid-cols-1 xs:gap-2 sm:gap-5 md:grid-cols-2 md:gap-5 lg:gap-5 xl:gap-5 ">
                            <div>
                                    <input
                                        name="technician_name"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Technician Name*"
                                        value={technicianName}
                                        onChange={(e) => setTechnicianName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors &&
                                        <p className="text-red-500 text-sm">{errors.technicianName}</p>
                                    }
                                </div>

                                <div>
                                    <input
                                        name="phone_number"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Phone Number*"
                                        value={phoneNumberTN}
                                        onChange={(e) => setPhoneNumberTN(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors &&
                                        <p className="text-red-500 text-sm">{errors.phoneNumberTN}</p>
                                    }
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-2 md:grid-cols-1">
                                <input
                                    name="address"
                                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Address*"
                                    value={addressTN}
                                    onChange={(e) => setAddressTN(e.target.value)}
                                    onKeyUp={clearErrors}
                                />
                                {errors &&
                                    <p className="text-red-500 text-sm">{errors.addressTN}</p>
                                }
                            </div>
                  
                            <div className="my-2 w-1/2 lg:w-2/4">
                                 <button type="submit" id="submitBtn" className="text-sm font-bold tracking-wide bg-green-500 hover:bg-green-700 text-gray-100 p-3 rounded-lg w-full 
                                    focus:outline-none focus:shadow-outline">
                                    Submit
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