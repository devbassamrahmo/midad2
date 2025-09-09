import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <div>
            {/* Title + Text */}
        <div className="pt-12 sm:pt-16 lg:pt-20 flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-8 lg:px-24">
        <h1 className="text-[#4C231A] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-editors text-center">
          Palatial Living
        </h1>
        <h2 className="text-[#4C231A] text-[18px] sm:text-[20px] md:text-[22px] font-editors italic text-center">
          Peace of Mind, Always
        </h2>
        <p className="text-[#A19F96] text-[14px] sm:text-[16px] md:text-[18px] font-helvetica max-w-full sm:max-w-[500px] md:max-w-[600px] text-center">
          Seamless property management and 24/7 personalized service ensure that every home is cared for and every resident feels truly valued.
        </p>
      </div>


            {/* Images */}
            <div className="p-[50px]">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-[50px] justify-items-center">
                    {/* Image 1 */}
                    <div className="relative w-full h-[370px]">
                        <Image
                            src="/register/services/Rectangle1.svg"
                            alt="media 1"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Image 2 */}
                    <div className="relative w-full h-[370px]">
                        <Image
                            src="/register/services/Rectangle2.svg"
                            alt="media 2"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Image 3 */}
                    <div className="relative w-full h-[370px]">
                        <Image
                            src="/register/services/Rectangle3.svg"
                            alt="media 3"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services
