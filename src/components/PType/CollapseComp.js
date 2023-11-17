"use client"

import React, { useEffect, useState } from "react";
import { TECollapse, TERipple } from "tw-elements-react";
import ProductList from '@/components/PType/ProductList'
import ProductDetail from '@/components/PType/ProductDetail'

export default function CollapseComp() {
    const [showFirstElement, setShowFirstElement] = useState();
    const [showSecondElement, setShowSecondElement] = useState();

    useEffect(() => {
        setShowFirstElement(true)
        setShowSecondElement(false)
    }, [])

    const toggleFirstElement = () => {
        setShowFirstElement(!showFirstElement)
        setShowSecondElement(false)
    }
    const toggleSecondElement = () => {
        setShowSecondElement(!showSecondElement);
        setShowFirstElement(false)
    }

    return (
        <>
            <div className="mt-10 mx-auto max-w-screen-xl max-w-screen-lg text-center">
                <TERipple rippleColor="light">
                    <button
                        type="button"
                        className="py-2.5 px-5 me-2 mb-2 text-base font-medium text-black focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
                        onClick={toggleFirstElement}>
                        Overview
                    </button>
                </TERipple>
                <TERipple rippleColor="light">
                    <button
                        type="button"
                        className="py-2.5 px-5 me-2 mb-2 text-base font-medium text-black focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
                        onClick={toggleSecondElement}>
                        Technical Specifications
                    </button>
                </TERipple>

                <div className="my-4">
                    <div>
                        <TECollapse show={showFirstElement}>
                            <div className="block rounded-lg bg-white shadow-lg">
                                <ProductList />
                            </div>
                        </TECollapse>
                    </div>
                    <div>
                        <TECollapse show={showSecondElement}>
                            <div className="block rounded-lg bg-white shadow-lg">
                                <ProductDetail />
                            </div>
                        </TECollapse>
                    </div>
                </div>
            </div>
        </>
    );
}