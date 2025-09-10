import Image from "next/image";
import React from "react";

const KeyFacts = () => {
  return (
    <section
      className="
        bg-white 
        grid grid-cols-1 
        gap-10
        px- sm:px-8 lg:px-10 
        py-10 sm:py-12
        xl:grid-cols-3   /* only at ≥1280px switch to 3-column */
      "
    >
      {/* Left: Key facts + Looking ahead */}
      <div
        className="
          flex flex-col 
          items-center text-center
          xl:items-start xl:text-left
          xl:justify-between 
          xl:pl-[70px] xl:pr-[30px]
        "
      >
        {/* Key Facts */}
        <div className="flex flex-col gap-8 sm:gap-10 xl:max-w-2xl w-[90%]">
          <h1 className="text-[#4C231A] font-editors text-[26px] sm:text-[30px] xl:text-[34px]">
            Key Facts
          </h1>

          <div className="flex flex-col gap-5">
            <div className="flex flex-row justify-between sm:justify-center xl:justify-start gap-2 sm:gap-6">
              <h2 className="text-[#937835] font-editors text-[16px] sm:text-[18px]">
                Location
              </h2>
              <p className="text-[#4C231A] font-helvetica text-[16px] sm:text-[18px] italic">
                Jeddah, KSA
              </p>
            </div>

            <div className="flex flex-row  sm:justify-center xl:justify-start gap-2 sm:gap-6 justify-between">
              <h2 className="text-[#937835] font-editors text-[16px] sm:text-[18px]">
                Completion
              </h2>
              <p className="text-[#4C231A] font-helvetica  text-[16px] sm:text-[18px] italic">
                2007
              </p>
            </div>

            <div className="flex flex-row sm:justify-center xl:justify-start gap-2 sm:gap-6 justify-between">
              <h2 className="text-[#937835] font-editors text-[16px] sm:text-[18px]">
                Size
              </h2>
              <p className="text-[#4C231A] font-helvetica text-[16px] sm:text-[18px] italic">
                90,000 sqm
              </p>
            </div>

            <div className="flex justify-between flex-row sm:justify-center xl:justify-start gap-2 sm:gap-6">
              <h2 className="text-[#937835] font-editors text-[16px] sm:text-[18px]">
                Type
              </h2>
              <p className="text-[#4C231A] font-helvetica text-[16px] sm:text-[18px] italic">
                Retail &amp; Entertainment Destination
              </p>
            </div>
          </div>
        </div>

        {/* Looking Ahead */}
        <div className="flex flex-col gap-4 sm:gap-5 mt-10 w-[90%] xl:max-w-2xl">
          <h1 className="text-[#4C231A] font-editors text-[26px] sm:text-[30px] xl:text-[34px]">
            Looking Ahead
          </h1>
          <h3 className="text-[#937835] font-editors text-[18px] sm:text-[20px] xl:text-[22px]">
            A destination that evolves with its city
          </h3>
          <p className="text-[#4C231A] font-helvetica text-[16px] sm:text-[18px] leading-relaxed">
            With continuous upgrades and new experiences, Stars Avenue Mall
            remains a living symbol of Midad’s vision — a space that grows with
            its community while inspiring pride and setting new benchmarks for
            Saudi Arabia’s retail scene.
          </p>
        </div>
      </div>

      {/* Right: Image */}
      <div className="relative w-full min-h-[320px] sm:min-h-[420px] lg:min-h-[520px] xl:min-h-[600px] xl:col-span-2">
        <Image
          src="/projects/realMadrid.svg"
          alt="Stars Avenue Mall"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default KeyFacts;
