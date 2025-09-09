import Image from 'next/image'
import React from 'react'

const LifeStyle = () => {
    return (
        <div className="relative w-full h-[600px] sm:h-[750px] md:h-[850px] lg:h-[965px]">
            {/* Background Image */}
            <Image
                src="/register/Rectangle2.svg"
                alt="lifestyle"
                fill
                className="object-cover w-full h-full"
                priority
            />

            {/* Text overlay (bottom) */}
            <div className="absolute bottom-0 left-0 w-full px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-12 bg-gradient-to-t from-black/70 to-transparent">
                <h1 className="text-white text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-editors text-center">
                    An Unrivaled <span className="italic">Lifestyle</span>
                </h1>

                <h2 className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-editors italic text-center my-6 sm:my-8 md:my-10">
                    Everyday Life, Elevated
                </h2>

                <div className="mx-auto max-w-[90%] sm:max-w-[600px] md:max-w-[700px]">
                    <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] font-helvetica text-center mt-3">
                        From world-class spa and pools to fine dining, cigar lounges, and exclusive resident spaces — every detail redefines luxury living.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LifeStyle
