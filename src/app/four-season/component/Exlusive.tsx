import Image from 'next/image'
import React from 'react'

interface DataProps {
  desc: string
  image?: string
}

const Exlusive = () => {
  // Dummy data
  const data: DataProps[] = [
    {
      desc: 'Men’s and Women’s Gym, Washrooms, and Changing Areas',
      image: '/register/exclusive/Rectangle1.svg',
    },
    {
      desc: 'Private Residence Club Lounge with Entertaining Kitchen, Meeting Rooms, and Terrace',
      image: '/register/exclusive/Rectangle2.svg',
    },
    {
      desc: 'Elegant Residence Lobbies at Each Tower',
      image: '/register/exclusive/Rectangle3.svg',
    },
    {
      desc: 'Dedicated Parking Area for Residents',
      image: '/register/exclusive/Rectangle4.svg',
    },
  ]

  return (
    <div className="py-[50px] px-6 sm:px-12 lg:px-[270px] flex flex-col items-center justify-center gap-[40px]">
      <h1 className="text-[28px] sm:text-[32px] lg:text-[37px] font-editors text-center">
        Exclusive Residence Amenities
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[50px] w-full">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-6 max-w-[425px] "
          >
            {item.image && (
              <Image
                src={item.image}
                alt={item.desc}
                width={425}       
                height={275}       
                className="object-cover"
              />
            )}
            <p className="text-[18px] font-helvetica max-w-[415px] text-[#A19F96]">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Exlusive
