'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

const MediaCenter = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={sectionRef}
      className="relative w-full bg-[#e9e3d7] overflow-hidden h-auto lg:h-[591px] flex items-center justify-center lg:justify-between py-12 sm:py-16 lg:py-0"
    >
      {/* Mobile/Tablet images (stacked, full-width) */}
      <div className="lg:hidden w-full">
        <div className="relative w-full h-56 sm:h-64">
          <Image
            src="/mediaCenter/woman.png"
            alt="media"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative w-full h-56 sm:h-64 mt-4">
          <Image
            src="/mediaCenter/Frame.svg"
            alt="media"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Desktop images (exact original UI) */}
      <div className="hidden lg:flex absolute inset-0 justify-between">
        <div className="relative h-full w-[25%]">
          <Image
            src="/mediaCenter/woman.png"
            alt="media"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative h-full w-[25%]">
          <Image
            src="/mediaCenter/Frame.svg"
            alt="media"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div
        className={`
          relative z-10 flex flex-col 
          gap-8 sm:gap-10 xl:gap-[60px]
          w-full max-w-[500px] lg:max-w-none
          px-6 sm:px-10
          text-center lg:text-left
          lg:ml-[30%] xl:ml-[35%] lg:mr-[35%]
          mt-8 lg:mt-0
          ${inView
            ? 'animate__animated animate__fadeInDown animate__slow'
            : 'opacity-0 translate-y-4'}
        `}
      >
        <div className="font-editors text-[#4C231A] leading-snug text-[28px] sm:text-[32px] lg:text-[36px]">
          <h1>Beyond Structures,</h1>
          <h1>
            We Cre<span className="text-[#D1591F]">ate Legacies</span>
          </h1>
        </div>

        <div className="font-helvetica font-medium text-[14px] sm:text-[15px] lg:text-[16px] flex flex-col gap-4 sm:gap-6 w-full max-w-[360px] mx-auto lg:mx-0">
          <p>Midad is more than a real estate developer</p>
          <p>We are visionaries shaping Saudi Arabia’s future.</p>
          <p>
            Each project is crafted with integrity, innovation, and a deep
            respect for culture and community.
          </p>
        </div>

        <div className="mx-auto lg:mx-0">
          <Link
            href="/"
            className="
              h-[37px] w-[137px]
              bg-[#d1c7bc] backdrop-blur-md text-black
              flex items-center justify-center
              rounded-full font-helvetica text-[14px]
            "
            style={{ boxShadow: 'inset 0 0 4px rgba(0,0,0,0.1)' }}
          >
            Media Center
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MediaCenter
