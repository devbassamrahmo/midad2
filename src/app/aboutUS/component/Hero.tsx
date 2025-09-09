import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="relative min-h-[600px] sm:min-h-[800px] md:min-h-[1000px] lg:min-h-[1200px] w-full text-white">
      {/* Background Image */}
      <Image
        src="/aboutUs2/hero/Rectangle.svg"
        alt="hero"
        fill
        className="w-full h-full object-cover"
        priority
      />

      {/* Content */}
      <div className="absolute inset-0 flex justify-center">
        <div
          className="
            mt-[120px] sm:mt-[180px] md:mt-[220px] lg:mt-[272.6px] 
            px-4 sm:px-8 md:px-12 lg:px-0 
            w-full lg:mx-[266px] 
            flex flex-col items-center gap-6 sm:gap-8 md:gap-10
          "
        >
          <h1 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-editors font-semibold text-center">
            Shaping experiences,<span className="italic"> not just spaces</span>
          </h1>

          <p className="w-full max-w-[600px] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-helvetica text-center">
            Midad Real Estate is more than a developer — we are storytellers of
            place. For over two decades, we have been redefining how communities
            live, connect, and grow across Saudi Arabia. Each project is crafted
            to go beyond structures, delivering value that resonates for
            generations.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
