import React from 'react'

const Story = () => {
  const scrollToRegister = () => {
    const element = document.getElementById('register-form')
    element?.scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <div className="py-[50px] flex flex-col items-center justify-center gap-[30px] px-4 sm:px-6">
      {/* Title */}
      <h1 className="text-[#4C231A] text-[28px] sm:text-[32px] lg:text-[37px] font-editors text-center">
        A Landmark Story
      </h1>

      {/* Subtitle */}
      <h2 className="text-[#4C231A] text-[18px] sm:text-[20px] lg:text-[22px] font-editors italic text-center">
        A Gateway to the New Jeddah
      </h2>

      {/* Description */}
      <p className="text-[#A19F96] text-[16px] sm:text-[17px] lg:text-[18px] font-helvetica max-w-[500px] text-center leading-snug">
        Jeddah Corniche welcomes a new landmark with Four Seasons Private Residences —
        a prestigious new local destination and the city’s most coveted address. It will
        stand as a focal point for Jeddah and a portal to a vibrant urban hub: A Gateway
        to the New Jeddah.
      </p>

      {/* Button */}
      <button
        onClick={scrollToRegister}
        className="
          mt-4 sm:mt-6
          w-fit
          px-6 py-3
          rounded-full
          text-black text-center
          font-helvetica text-[16px]
          transition-colors
        "

        style={{ boxShadow: 'inset 7px 5px 10px rgba(0,0,0,0.1)' }}
      >
        Register Your Interest
      </button>
    </div>
  )
}
export default Story