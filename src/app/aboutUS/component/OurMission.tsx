import Image from 'next/image'
import React from 'react'

const OurMission = () => {
    return (
        <div className='bg-white flex justify-center py-12'>
            <div className='w-[660px] min-h-[1277px] flex flex-col items-center  gap-10 '>
                <div className='flex flex-col gap-[60px]'>
                    <h1 className='text-[#4C231A] text-[37px] font-editors font-bold text-center '>Our Mission</h1>
                    <h3 className='text-[#AE9E75] text-[18px] font-helvetica text-center italic'>Creating destinations with purpos</h3>
                    <p className='text-[#4C231A] text-[18px] font-helvetica text-center'>Our mission is to design and deliver world-class developments that enrich lives, attract global attention, and support Saudi Arabia’s transformation into a hub for business, tourism, and lifestyle.</p>
                </div>
                <div className='flex flex-col items-center gap-[40px]'>
                    <Image src={'/aboutUs2/ourMission/icon.svg'} alt='media' width={170} height={100} />
                    <Image src={'/aboutUs2/ourMission/Rectangle.svg'} alt='media' width={660} height={460} />
                    <Image className='rotate-180' src={'/aboutUs2/ourMission/icon.svg'} alt='media' width={170} height={100} />
                </div>
                <div className='flex flex-col gap-[60px]'>
                    <p className='text-[#4C231A] text-[18px] font-helvetica text-center'>We envision a Saudi Arabia where every city features destinations that are globally competitive yet distinctly local — places that are sustainable, innovative, and celebrated around the world.</p>
                    <h3 className='text-[#AE9E75] text-[18px] font-helvetica text-center italic'>Building the future, rooted in heritage</h3>
                    <h1 className='text-[#4C231A] text-[37px] font-editors font-bold text-center '>Our Vision</h1>

                </div>

            </div>

        </div>
    )
}

export default OurMission