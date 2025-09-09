'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Crafting = () => {
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
      className="relative w-full bg-[#fffdf5] overflow-hidden flex flex-col lg:flex-row h-auto lg:h-[900px]"
    >
      {/* Mobile/Tablet image */}
      <div className="relative w-full h-64 sm:h-80 lg:hidden">
        <Image
          src="/crafting/Rectangle.svg"
          alt="media"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div
        className={`
          px-6 sm:px-8 lg:pl-[50px] xl:px-[70px]
          py-10 sm:py-14 lg:py-[95px]
          flex flex-col justify-center
          w-full lg:w-[40%] lg:h-full
          text-center lg:text-left
          mx-auto lg:mx-0
          gap-8 lg:gap-24
          transition-all duration-700
          ${inView ? 'animate__animated animate__fadeInLeft animate__slow' : 'opacity-0 translate-x-10'}
        `}
      >
        {/* Title */}
        <div className="w-full mb-6 lg:mb-10">
          <h1 className="text-[40px] sm:text-[52px] lg:text-[68px] font-citadel leading-tight">
            Crafting
          </h1>
          <h3 className="text-[#AE9E75] text-[18px] sm:text-[22px] lg:text-[26px] mt-2">
            Places of <span className="italic font-semibold">Meaning</span>
          </h3>
        </div>

        {/* Lines */}
        <div className="w-full space-y-4 text-[14px] sm:text-[16px] text-[#4C231A]">
          {[
            ['Designing spaces that', 'connect people'],
            ['enrich', 'lifestyles,'],
            ['and stand the test', 'of time.'],
          ].map((line, i) => (
            <div key={i} className="flex w-full items-center gap-4">
              <div className="whitespace-nowrap">{line[0]}</div>
              <div className="relative flex items-center flex-1">
                <div className="w-2 h-2 bg-[#4C231A] rounded-full"></div>
                <div className="flex-1 h-[1px] bg-[#4C231A]"></div>
                <div className="w-2 h-2 bg-[#4C231A] rounded-full"></div>
              </div>
              <div className="whitespace-nowrap">{line[1]}</div>
            </div>
          ))}
        </div>

        {/* Paragraph */}
        <div className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#4C231A] font-helvetica mt-4 lg:mt-6">
          Midad’s approach blends uncompromising quality, innovative thinking, and a deep respect
          for the cultural and environmental context of its projects.
        </div>
      </div>

      {/* Desktop image */}
      <div className="hidden lg:flex relative h-full w-[60%]">
        <Image
          src="/crafting/Rectangle.svg"
          alt="media"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}

export default Crafting
