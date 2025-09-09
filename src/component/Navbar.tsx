'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import "animate.css"; // 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const isHome = pathname === '/' || pathname === '/TermsOfUse' || pathname === '/Policy' || pathname === '/projects/crystal-gallery' ||  pathname === '/projects/coral-mall'  ||  pathname === '/projects/zohur-beach' 
  || pathname === '/four-season' || pathname === '/projects/stars-avenue-mall' ||  pathname === '/aboutUS'
  const closeMenu = () => setIsOpen(false)

  // link color: white on home, black elsewhere
  const linkColor = isHome ? 'text-white' : 'text-black'

  // header background behavior
  // - Home: transparent at top; on scroll -> subtle glass (blur + very light bg)
  // - Others: white always; on scroll -> add blur (keeps white)
 const headerBgClasses = isHome
  ? (isScrolled || isOpen
      ? 'bg-black/30 backdrop-blur-md'
      : 'bg-transparent')
  : (isScrolled || isOpen
      ? 'bg-white/30 backdrop-blur-md'
      : 'bg-transparent')

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`
        fixed top-0 z-50 w-full text-[15px] transition-colors
        ${headerBgClasses}
      `}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between py-5 lg:py-7 px-4 sm:px-6 lg:px-10 xl:px-[95px]">
        {/* Left links (desktop) */}
        <nav className={`hidden lg:flex items-center gap-10  animate__animated animate__fadeInDown animate__slow ${linkColor}`}>
          <Link href="/" className="transition-colors font-helvetica">
            Home
          </Link>
          <Link href="/aboutUS" className="transition-colors font-helvetica">
            About Us
          </Link>
          <Link href="/projects" className=" transition-colors font-helvetica">
            Projects
          </Link>
        </nav>

        {/* Logo (swap if you have a dark/light version) */}
        <Link href="/">
          <Image
            src={isHome ? '/logo.svg' : '/logoBlack.png'}
            alt="logo"
            width={180}
            height={33}
            priority
            className="object-contain w-[120px] sm:w-[150px] lg:w-[180px] h-auto animate__animated animate__fadeInDown animate__slow"
          />
        </Link>

        {/* Right links (desktop) */}
        <nav className={`hidden lg:flex items-center gap-10 animate__animated animate__fadeInDown animate__slow ${linkColor}`}>
          <Link href="/news" className="hover:text-blue-400 transition-colors font-helvetica">
            News
          </Link>
          <Link href="/contactUS" className="hover:text-blue-400 transition-colors font-helvetica">
            Contact Us
          </Link>
        </nav>

        {/* Hamburger (mobile) */}
        <button
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className={`lg:hidden ${linkColor} focus:outline-none focus:ring-2 focus:ring-black/20 rounded-lg p-2`}
        >
          <div className="h-5 w-6 relative">
            <span
              className={`absolute left-0 top-0 h-[2px] w-6 bg-current transition-transform ${
                isOpen ? 'translate-y-[9px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[9px] h-[2px] w-6 bg-current transition-opacity ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-[2px] w-6 bg-current transition-transform ${
                isOpen ? '-translate-y-[9px] -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className={`${linkColor} px-4 sm:px-6 lg:px-10 xl:px-[95px] pb-4 pt-0`}>
          <div className="grid grid-cols-1 gap-3">
            <Link href="/" onClick={closeMenu} className="hover:text-blue-400 transition-colors font-helvetica py-2">
              Home
            </Link>
            <Link href="/aboutUS" onClick={closeMenu} className="hover:text-blue-400 transition-colors font-helvetica py-2">
              About Us
            </Link>
            <Link href="/projects" onClick={closeMenu} className="hover:text-blue-400 transition-colors font-helvetica py-2">
              Projects
            </Link>
            <hr className={`${isHome ? 'border-white/10' : ''} my-2`} />
            <Link href="/news" onClick={closeMenu} className="hover:text-blue-400 transition-colors font-helvetica py-2">
              News
            </Link>
            <Link href="/contactUS" onClick={closeMenu} className="hover:text-blue-400 transition-colors font-helvetica py-2">
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
