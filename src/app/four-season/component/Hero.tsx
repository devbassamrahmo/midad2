import Image from 'next/image'
import React from 'react'

const Hero = () => {
  const scrollToRegister = () => {
    const element = document.getElementById('register-form')
    element?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className="relative w-full text-white min-h-[600px] sm:min-h-[800px] lg:min-h-[1000px] xl:min-h-[1500px]">
      {/* Background image */}
      <Image
        src="/register/Rectangle.svg"
        alt="hero"
        fill
        className="w-full h-full object-cover"
        priority
      />

      {/* Soft dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div
        className="
          absolute inset-0
          px-4 sm:px-6 lg:px-24 xl:px-[266px]
          flex flex-col items-center
          justify-end pb-12 sm:pb-16
          lg:block lg:pb-0 lg:mt-[192px]
        "
      >
        <div className="relative flex flex-col items-center gap-5 sm:gap-7 lg:gap-10 text-center">
          {/* Logo */}
          <Image
            src="/register/Logo.svg"
            alt="Midad"
            width={250}
            height={180}
            className="w-[160px] sm:w-[200px] lg:w-[250px] h-auto"
            priority
          />

          {/* Title */}
          <h2 className="font-editors text-[22px] sm:text-[30px] lg:text-[60px] mt-6 lg:mt-20">
            Four Seasons Private Residences
          </h2>

          {/* CTA */}
          <button
          onClick={scrollToRegister}
            className="
              inline-flex items-center justify-center
              rounded-full font-helvetica
              w-fit sm:w-auto
              h-11 sm:h-11 lg:h-[37px]
              text-sm sm:text-base lg:text-[14px]
              px-5 sm:px-6
              bg-gray-400/50 backdrop-blur-md
            "
            style={{ boxShadow: 'inset 0 0 4px rgba(255,255,255,0.2)' }}
          >
            Register Your Interest
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
