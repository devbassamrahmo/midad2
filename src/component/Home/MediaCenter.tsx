"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const MediaCenter = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full bg-[#e9e3d7] overflow-hidden h-auto lg:h-[591px] flex items-center justify-center lg:justify-between sm:py-16 lg:py-0"
    >
      {/* LARGE SCREEN */}
      <div className=" absolute inset-0 justify-between sm:flex hidden">
        <div className="relative h-full sm:w-[25%] w-1/2">
          <Image
            src="/mediaCenter/woman.png"
            alt="media"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative h-full w-[25%] ">
          <Image
            src="/mediaCenter/Frame.svg"
            alt="media"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div
        className={`
          relative z-10  flex-col 
          gap-8 sm:gap-10 xl:gap-[60px]
          w-full max-w-[500px] lg:max-w-none
          px-6 sm:px-10
          text-center lg:text-left
          lg:ml-[30%] xl:ml-[35%] lg:mr-[35%]
          mt-8 lg:mt-0
          sm:flex hidden

          ${
            inView
              ? "animate__animated animate__fadeInDown animate__slow"
              : "opacity-0 translate-y-4"
          }
        `}
      >
        <div className="font-editors font-medium text-[#4C231A] text-[28px] sm:text-[32px] lg:text-[36px] leading-[1]">
          <h1>
            Beyond
            <br /> Structures,
          </h1>
          <h1>
            <span className="text-[#D1591F] italic font-medium">
              We Create Legacies
            </span>
          </h1>
        </div>

        <div className="font-helvetica font-medium text-[14px] sm:text-[15px] lg:text-[16px] flex flex-col gap-4 sm:gap-6 w-full max-w-[360px] mx-auto lg:mx-0">
          <p className="text-[#D1591F] italic font-bold tracking-wide">
            Midad is more than a real estate developer
          </p>
          <p className="text-[#4C231A]">
            We are visionaries shaping Saudi Arabia’s <br /> future.
          </p>
          <p className="text-[#D1591F] !font-extralight">
            Each project is crafted with integrity,
            <br /> innovation, and a deep respect for
            <br /> culture and community.
          </p>
        </div>
      </div>
      {/* LARGE SCREEN */}

      {/* SMALL SCREEN */}
      <div className=" flex-col flex sm:hidden items-center sm:justify-center w-full">
        <div className="flex items-center w-full">
          {/* Image section */}
          <div className="w-1/2 relative min-h-[400px]">
            <Image
              src="/woman.svg"
              alt="Midad Real Estate Development"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Text section */}
          <div
            className={`
            w-1/2 relative py-6 z-10 flex flex-col
            justify-center items-start
            gap-6
            px-4
            text-left
            transition-all duration-700 ease-out
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
          >
            <div className="font-serif font-medium text-[#4C231A] text-lg leading-tight">
              <h1 className="mb-1">
                Beyond
                <br /> Structures,
              </h1>
              <h1>
                <span className="text-[#D1591F] italic">
                  We Create Legacies
                </span>
              </h1>
            </div>

            <div className="font-sans text-xs flex flex-col gap-3 w-full">
              <p className="text-[#D1591F] italic font-semibold tracking-wide">
                Midad is more than a real estate developer
              </p>
              <p className="text-[#4C231A] leading-relaxed">
                We are visionaries shaping Saudi Arabia&apos;s future.
              </p>
              <p className="text-[#D1591F] font-light leading-relaxed">
                Each project is crafted with integrity, innovation, and a deep
                respect for culture and community.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[300px] ">
          <Image
            src="/IMAGE2.png"
            alt="Midad Projects Overview"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default MediaCenter;
