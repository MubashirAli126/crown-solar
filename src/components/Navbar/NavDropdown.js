"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { MenuItem } from './NavMenu';

export default function NavDropdown(props) {
    const { item } = props;
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = item?.children ? item.children : [];

    const toggle = () => {
        setIsOpen(old => !old);
    }

    const transClass = isOpen
        ?
        "flex"
        :
        "hidden";

    return (
        <>
            <span className="relative">
                <button
                    className="px-4 font-extrabold text-gray-900 hover:text-green-600"
                    onClick={toggle}
                >{item.title} <FontAwesomeIcon icon={faAngleDown} /></button>
                <div className={`absolute w-44 shadow-lg left-px top-8 z-30 flex flex-col py-2 bg-slate-100 rounded-md ${transClass}`}>
                    {
                        menuItems.map(item =>
                            <Link
                                key={item.route}
                                className="hover:bg-green-600 hover:text-white font-bold smooth px-4 py-1"
                                href={item?.route || ''}
                                onClick={toggle}
                            >{item.title}</Link>
                        )
                    }
                </div>
            </span>
            {
                isOpen
                    ?
                    <div
                        className="fixed top-0 right-0 bottom-0 left-0 z-20"
                        onClick={toggle}
                    ></div>
                    :
                    <></>
            }
        </>
    )
}
