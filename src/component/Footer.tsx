'use client'

import Image from 'next/image'
import Link from 'next/link'
import { LuFacebook, LuInstagram, LuLinkedin } from 'react-icons/lu'
import { RiTwitterXLine } from 'react-icons/ri'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-[95px] py-12 sm:py-16">
        {/* 6 columns on desktop, stack on mobile/tablet */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-16">
          {/* Logo + Projects */}
          <div className="flex flex-col items-start">
            {/* Logo block with known height on desktop to define the baseline */}
            <div className="mb-6 lg:h-[60px] flex items-end">
              <Link href="/" aria-label="Midad home">
                <Image
                  src="/logo.svg"
                  alt="MIDAD"
                  width={120}
                  height={28}
                  priority
                  className="w-[90px] sm:w-[110px] lg:w-[120px] h-auto object-contain"
                />
              </Link>
            </div>

            <h4 className="font-editors text-[18px] sm:text-[20px] mb-4">Projects</h4>
            <ul className="space-y-2 font-helvetica text-white/80 text-[13px] sm:text-[14px]">
              <li><Link href="#" className="hover:text-white">Four Seasons Private Residences</Link></li>
              <li><Link href="#" className="hover:text-white">Four Seasons Hotel</Link></li>
              <li><Link href="#" className="hover:text-white">Crystal Gallery</Link></li>
              <li><Link href="#" className="hover:text-white">Stars Avenue Mall</Link></li>
              <li><Link href="#" className="hover:text-white">Zohur Beach Residential Compound</Link></li>
              <li><Link href="#" className="hover:text-white">Coral Mall</Link></li>
            </ul>
          </div>

          {/* About us */}
          <div className="flex flex-col items-start">
            {/* Spacer to align heading with Projects heading on desktop */}
            <div className="hidden lg:block h-[60px] mb-6" />
            <h4 className="font-editors text-[18px] sm:text-[20px] mb-4">About us</h4>
            {/* add items if needed */}
          </div>

          {/* News */}
          <div className="flex flex-col items-start">
            <div className="hidden lg:block h-[60px] mb-6" />
            <h4 className="font-editors text-[18px] sm:text-[20px] mb-4">News</h4>
            {/* add items if needed */}
          </div>

          {/* Headquarters */}
          <div className="flex flex-col items-start">
            <div className="hidden lg:block h-[60px] mb-6" />
            <h4 className="font-editors text-[18px] sm:text-[20px] mb-4">Headquarters</h4>
            <address className="not-italic font-helvetica text-white/80 text-[12px] sm:text-[13px] leading-relaxed">
              Midad Real Estate Investment &amp; Development Co. Ltd<br />
              Bahrain Tower, King Fahd Rd, Al Olaya<br />
              Riyadh 12214, Saudi Arabia
            </address>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-start">
            <div className="hidden lg:block h-[60px] mb-6" />
            <h4 className="font-editors text-[18px] sm:text-[20px] mb-4">Legal</h4>
            <ul className="space-y-2 font-helvetica text-white/80 text-[13px] sm:text-[14px]">
              <li><Link href="/TermsOfUse" className="hover:text-white">Terms of use</Link></li>
              <li><Link href="/Policy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-start">
            <div className="hidden lg:block h-[60px] mb-6" />
            <h4 className="font-editors text-[18px] sm:text-[20px] mb-4">Contact Us</h4>
            <div className="font-helvetica text-white/90 text-[13px] sm:text-[14px] mb-4">
              <Link href="mailto:info@midad.com.sa" className="hover:text-white">
                info@midad.com.sa
              </Link>
            </div>
            <div className="flex items-center gap-1">
              <Link href="#" aria-label="Instagram" className="p-2  rounded-md hover:border-white transition">
                <LuInstagram className="w-5 h-5" />
              </Link>
               <Link href="#" aria-label="Facebook" className="p-2 rounded-md hover:border-white transition">
                <LuFacebook className="w-5 h-5" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="p-2  rounded-md hover:border-white transition">
                <LuLinkedin className="w-5 h-5" />
              </Link>
              <Link href="#" aria-label="X" className="p-2 rounded-md hover:border-white transition">
                <RiTwitterXLine className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    <div className="bg-white border-t border-black/10 py-4">
        <div className="text-center text-black text-[12px] sm:text-[13px] font-helvetica leading-relaxed">
          <p>© 2025 Midad Real Estate Investment &amp; </p>
          <p> Development Co. Ltd , all rights reserved</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer
