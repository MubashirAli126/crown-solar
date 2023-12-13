import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import Navbar from '@/components/Navbar/NavBar'
import Footer from '@/components/Footer'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AOSInit } from './aos'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import FacebookPixel from '../components/FacebookPixel'
import FACEBOOK_PIXEL from '../components/Pixel/facebook'
config.autoAddCss = false

const inter = Inter({
  weight: '500',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Solar Panel Company in Pakistan - Solar Solutions - Crown Solar',
  description: 'As a Solar Panel Company, we pride a truly advanced solar energy solution in Pakistan. Embrace solar power with Crown latest P-Type and N-Type solar panels.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AOSInit />
      <head>
        <link rel="icon" href="/img/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Solar Panel Company in Pakistan - Solar Solutions - Crown Solar" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Crown Solar" />
        <meta property="og:url" content="https://www.crownsolar.co/" />
        <meta property="og:description" content="As a Solar Panel Company, we pride a truly advanced solar energy solution in Pakistan. Embrace solar power with Crown latest P-Type and N-Type solar panels." />
        <meta property="og:type" content="" />
        <meta property="og:image" content="" />
        {<FACEBOOK_PIXEL />}
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <FacebookPixel />
        <Footer />
      </body>
    </html>
  )
}
