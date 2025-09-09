import Image from 'next/image'
import React from 'react'

const DesignFeatures = () => {
  return (
    <div>
      {/* Hero Image */}
      <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[530px] relative">
        <Image
          src={'/projects/starsAvenue.svg'}
          alt="media"
          fill
          className="object-cover"
          priority={true}
        />
      </div>

      {/* Content Section */}
      <section
        className="
          py-12 sm:py-16 lg:py-20 xl:py-24
          flex flex-col items-center justify-center gap-12 sm:gap-16
          bg-white
          xl:flex-row
        "
      >
        {/* Left Block */}
        <div className="flex flex-col items-center gap-6 xl:max-w-[500px] text-center px-5 sm:px-8">
          <h1 className="text-[#4C231A] font-editors text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[37px]">
            Design &amp; Features
          </h1>
          <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] text-[#937835] font-editors italic">
            Innovation meets lifestyle
          </h2>
          <p className="text-[#4C231A] text-[16px] sm:text-[18px] font-helvetica leading-relaxed">
            The mall features the largest curved LED screen in the region,
            creating a vibrant atmosphere that blends technology with modern
            design. Its spacious interiors, curated brand mix, and contemporary
            architecture make it a destination that reflects Jeddah’s evolving
            urban identity.
          </p>
        </div>

        {/* Right Block */}
        <div className="flex flex-col items-center gap-6 xl:max-w-[500px] text-center px-5 sm:px-8">
          <h1 className="text-[#4C231A] font-editors text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[37px]">
            Lifestyle Experience
          </h1>
          <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] text-[#937835] font-editors italic">
            Where shopping meets inspiration
          </h2>
          <p className="text-[#4C231A] text-[16px] sm:text-[18px] font-helvetica leading-relaxed">
            Stars Avenue Mall is more than a retail hub — it is a social and
            cultural destination. From luxury fashion houses to fine dining
            restaurants and family entertainment, the mall continues to attract
            visitors from across the Kingdom, setting the standard for premium
            lifestyle destinations.
          </p>
        </div>
      </section>
    </div>
  )
}

export default DesignFeatures
