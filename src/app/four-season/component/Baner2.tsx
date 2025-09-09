import Image from 'next/image'
import React from 'react'

const Baner2 = () => {
  return (
    <div className="relative h-[930px] w-full">
      <Image
        src="/register/baner2.svg"
        alt="media"
        fill
        className="object-cover"
        priority
      />
    </div>
  )
}

export default Baner2
