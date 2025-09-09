'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

interface ExperianceProps {
  title: string
  subtitle: string
  description: string
  image: string
  plus?: string
}

const Experiance = () => {
  const data: ExperianceProps[] = [
    {
      title: '20',
      subtitle: 'Years of Experience',
      description:
        'Proven expertise in delivering complex, high-value developments with precision and vision.',
      plus: '+',
      image: '/aboutus/rectangle1.svg',
    },
    {
      title: '5 Million',
      subtitle: 'Sq. Ft. Delivered',
      description:
        'A track record of completed projects that stand as enduring landmarks across Saudi Arabia.',
      plus: '+',
      image: '/aboutus/Rectangle2.svg',
    },
    {
      title: '1.7 Million',
      subtitle: 'Sq. Ft. in Active Development',
      description:
        'A dynamic pipeline of premium destinations under construction, driving growth and innovation.',
      plus: '+',
      image: '/aboutus/Rectangle3.svg',
    },
    {
      title: '3.3 Million',
      subtitle: 'Sq. Ft. Under Construction',
      description:
        'Ambitious new developments that will define the next chapter of Saudi Arabia’s urban evolution.',
      plus: '+',
      image: '/aboutus/Rectangle4.svg',
    },
  ]

  // Refs for section title and each card
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [sectionInView, setSectionInView] = useState(false)
  const [cardsInView, setCardsInView] = useState<boolean[]>(
    Array(data.length).fill(false)
  )

  useEffect(() => {
    // Observe the section header area
    const sec = sectionRef.current
    if (!sec) return

    const secObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setSectionInView(true)
        })
      },
      { threshold: 0.2 }
    )

    secObserver.observe(sec)

    // Observe each card
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          const index = cardRefs.current.findIndex((el) => el === e.target)
          if (index !== -1) {
            setCardsInView((prev) => {
              if (prev[index]) return prev // already animated once
              const next = [...prev]
              next[index] = true
              return next
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    cardRefs.current.forEach((el) => el && cardObserver.observe(el))

    return () => {
      secObserver.disconnect()
      cardObserver.disconnect()
    }
  }, [])

  return (
    <div className="w-full bg-[#f3f0eb] py-16 px-6 sm:px-8 lg:py-20 lg:px-20 xl:px-28">
      {/* Titles (fade in once the section enters viewport) */}
      <div
        ref={sectionRef}
        className={`
          ${sectionInView ? 'animate__animated animate__fadeInDown animate__slow' : 'opacity-0'}
        `}
      >
        <h1 className="text-[#4C231A] font-editors leading-tight text-[28px] sm:text-[34px] lg:text-[40px]">
          <span className="italic">O</span>ur Journey
        </h1>
        <h2 className="text-[#4C231A] font-editors text-[28px] sm:text-[34px] lg:text-[40px]">
          In Numbers
        </h2>
        <h3 className="text-[12px] sm:text-[13px] lg:text-[14px] text-[#AE9E75] mb-8 lg:mb-10">
          Quick Facts / Impacts
        </h3>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-4 xl:gap-8 border-t border-[#4C231A]">
        {data.map((item, i) => (
          <div
            key={i}
            ref={(el) => { cardRefs.current[i] = el; }}
            className={`
              flex flex-col w-full gap-4 sm:gap-5 py-6 px-4
              border-b last:border-b-0
              lg:border-b-0 lg:border-r lg:[&:nth-child(4n)]:border-r-0
              border-[#4C231A]
              lg:items-start
              ${cardsInView[i]
                ? 'animate__animated animate__fadeInUp animate__slow'
                : 'opacity-0 translate-y-3'}
            `}
            style={{ animationDelay: cardsInView[i] ? `${i * 120}ms` : '0ms' }}
          >
            <div className="mb-2 lg:mb-4">
              <h3 className="text-[#4C231A] font-editors italic text-[28px] sm:text-[32px] lg:text-[36px] flex items-baseline">
                <span className="text-[20px] sm:text-[24px] lg:text-[28px]">{item.plus}</span>
                <span className="font-medium ml-1">{item.title}</span>
              </h3>
              <h4 className="text-[#AE9E75] font-helvetica text-[14px] sm:text-[15px] lg:text-[16px]">
                {item.subtitle}
              </h4>
            </div>

            <p className="font-helvetica text-black text-[14px] sm:text-[15px] lg:text-[15px] lg:w-full">
              {item.description}
            </p>

            <div className="mt-auto">
              <Image
                src={item.image}
                alt=""
                width={230}
                height={150}
                className="w-40 sm:w-48 lg:w-full h-auto object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experiance
