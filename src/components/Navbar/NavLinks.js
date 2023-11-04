import Link from 'next/link';

const NavLinks = () => {
    return (
        <>
            <Link className="px-4 font-extrabold text-gray-900 hover:text-green-600" href="/">
                Home
            </Link>
            <Link className="px-4 font-extrabold text-gray-900 hover:text-green-600" smooth href="/about">
                About
            </Link>
            <Link className="px-4 font-extrabold text-gray-900 hover:text-green-600" smooth href="/blog">
                Blog
            </Link>
            <Link className="px-4 font-extrabold text-gray-900 hover:text-green-600" href="/contact">
                Contact Us
            </Link>
            <Link className="text-white bg-gradient-to-r from-green-500 to-green-700 hover:bg-green-200 hover:text-gray-600 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth href="/energy-calculator">
                Energy Consumption Calculator
            </Link>
        </>
    )
}

export default NavLinks;