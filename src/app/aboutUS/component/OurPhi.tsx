import Image from 'next/image'
import React from 'react'

const OurPhi = () => {
  return (
    <div className="bg-white">
      {/* Title */}
      <div className="py-16 sm:py-20 lg:py-24 flex items-center justify-center">
        <h1 className="text-[#4C231A] font-editors font-bold text-[26px] sm:text-[32px] lg:text-[37px]">
          Our Philosophy
        </h1>
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:relative lg:flex lg:h-[591px] lg:w-full lg:items-center lg:justify-between lg:overflow-hidden">
        {/* Images Wrapper */}
        <div className="absolute inset-0 flex justify-between">
          <div className="relative h-full w-[30%]">
            <Image
              src="/aboutUs2/ourPhi/Rectangle1.svg"
              alt="media left"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative h-full w-[30%]">
            <Image
              src="/aboutUs2/ourPhi/Rectangle2.svg"
              alt="media right"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center ml-[45%] mr-[25%]">
          <div className="text-[36px] text-center font-editors text-[#AE9E75] italic leading-tight">
            <h1>Every project</h1>
            <h1>is a legacy</h1>
            <h1>in motion,</h1>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet layout */}
      <div className="flex flex-col items-center gap-8 px-4 lg:hidden">
        {/* Top Image */}
        <div className="relative w-full aspect-square">
          <Image
            src="/aboutUs2/ourPhi/Rectangle1.svg"
            alt="media left"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Content */}
        <div className="text-center font-editors italic text-[#AE9E75] leading-tight">
          <h1 className="text-[22px] sm:text-[28px]">Every project</h1>
          <h1 className="text-[22px] sm:text-[28px]">is a legacy</h1>
          <h1 className="text-[22px] sm:text-[28px]">in motion,</h1>
        </div>

        {/* Bottom Image */}
        <div className="relative w-full aspect-square">
          <Image
            src="/aboutUs2/ourPhi/Rectangle2.svg"
            alt="media right"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Paragraph */}
      <div className="py-12 sm:py-16 lg:py-24 flex items-center justify-center">
        <p className="text-[#4C231A] font-editors font-bold text-center text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] w-11/12 sm:w-4/5 lg:w-3/5">
          We believe real estate is about impact — cultural, social, and economic.
          By blending innovation with authenticity, we create destinations that
          inspire pride, strengthen community bonds, and embody the Kingdom’s bold
          vision for the future.
        </p>
      </div>
    </div>
  )
}

export default OurPhi
