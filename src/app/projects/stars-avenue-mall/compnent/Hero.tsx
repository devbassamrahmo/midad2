import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full">
      {/* Hero Image */}
      <div className="relative w-full h-[80vw] sm:h-[75vh] lg:h-[80vh]">
        <Image
          src="/projects/mall.svg"
          alt="hero"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content below the image */}
      <section className="bg-white py-10 sm:py-12">
        <div className="mx-auto w-full px-5 sm:px-8 lg:px-10 flex flex-col items-center gap-6 sm:gap-7">
          <h1 className="text-[#4C231A] font-editors text-[22px] sm:text-[28px] lg:text-[34px] text-center">
            Project Overview
          </h1>

          <h2 className="text-[#937835] font-editors italic text-[18px] sm:text-[20px] lg:text-[22px] text-center">
            A pioneer of luxury retail in Jeddah
          </h2>

          {/* Keep layout single column at all sizes, just limit line-length nicely */}
          <p className="text-[#4C231A] font-helvetica text-[16px] sm:text-[18px] leading-relaxed text-center max-w-[620px]">
            Since its opening in 2007, Stars Avenue Mall has stood as an
            established icon of shopping and entertainment in Jeddah.
          </p>

          <p className="text-[#4C231A] font-helvetica text-[16px] sm:text-[18px] leading-relaxed text-center max-w-[620px]">
            Spanning 90,000 sqm, it has redefined the city’s retail landscape by
            offering a unique combination of premium brands, upscale dining, and
            immersive leisure experiences.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
