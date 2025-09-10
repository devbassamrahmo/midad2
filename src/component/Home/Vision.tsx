import Image from "next/image";
import React from "react";

const Vision = () => {
  return (
    <div className="w-full shadow-xl">
      {/* Text Content */}
      <div
        className="
=          text-black
          flex flex-col justify-center items-center
          px-6 sm:px-8 lg:px-[150px]
          py-12 sm:py-16 lg:py-[150px]
          gap-8 sm:gap-10 lg:gap-14
          text-center lg:text-left
           sm:inset-0 sm:items-start
          z-10
          sm:hidden
        "
      >
        <div>
          <h1 className="font-citadel text-[40px] leading-[0.8] sm:text-[52px] lg:text-[68px]">
            Vision
          </h1>
          <h3 className="font-editors text-[18px] sm:text-[22px] lg:text-[25px]">
            &amp; Sustainability
          </h3>
        </div>

        <p className="font-helvetica text-[14px] sm:text-[16px] lg:text-[18px] max-w-full lg:max-w-[600px]">
          By blending smart design, sustainability, and cultural authenticity,
          Midad ensures every development leaves a lasting impact while
          preparing for the future.
        </p>

        <div>
          <h1 className="font-editors italic text-[16px] sm:text-[18px] lg:text-[18px]">
            Future-Ready,
          </h1>
          <h1 className="font-editors text-[16px] sm:text-[18px] lg:text-[18px]">
            Culturally Authentic.
          </h1>
        </div>
      </div>

      {/* Background Image */}
      <div className="relative w-full min-h-[300px] sm:min-h-[560px] lg:h-[700px]">
        <Image
          src="/vision/vision.svg"
          alt="vision"
          fill
          className="object-cover"
          priority
        />

        <div
          className="
          absolute hidden inset-0 text-white
          sm:flex flex-col justify-center   sm:items-start
          px-6 sm:px-8 lg:px-[150px]
          py-12 sm:py-16 lg:py-[150px]
          gap-8 sm:gap-10 lg:gap-14
          text-center
    lg:text-left
    items-center
        "
        >
          <div>
            <h1 className="font-citadel  text-[40px] leading-[0.8] sm:text-[52px] lg:text-[68px]">
              Vision
            </h1>
            <h3 className="font-editors text-[18px] sm:text-[22px] lg:text-[25px]">
              &amp; Sustainability
            </h3>
          </div>

          <p className="font-helvetica text-[14px] sm:text-[16px] lg:text-[18px] max-w-full lg:max-w-[600px]">
            By blending smart design, sustainability, and cultural authenticity,
            Midad ensures every development leaves a lasting impact while
            preparing for the future.
          </p>

          <div>
            <h1 className="font-editors italic text-[16px] sm:text-[18px] lg:text-[18px]">
              Future-Ready,
            </h1>
            <h1 className="font-editors text-[16px] sm:text-[18px] lg:text-[18px]">
              Culturally Authentic.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
