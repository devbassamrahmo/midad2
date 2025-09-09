import Image from "next/image";
import Link from "next/link";
import React from "react";

const Baner = () => {
  return (
    <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[560px] xl:h-[650px]">
      {/* Background Image */}
      <Image
        src="/register/baner1.svg"
        alt="banner"
        fill
        className="object-cover"
        priority
      />

      {/* Text Content */}
      <div
        className="
          absolute inset-0
          flex flex-col justify-center
          px-4 sm:px-8 lg:px-24 xl:px-32
        "
      >
        <div className="w-full max-w-full sm:max-w-[480px] lg:max-w-[550px]">
          <h1 className="text-white font-editors text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] xl:text-[44px] leading-snug sm:leading-snug lg:leading-snug">
            A Work of Art on <br />
            <span className="italic">the Red Sea</span>
          </h1>

          <h3 className="font-editors italic text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] mt-2">
            Where Stories Unfold
          </h3>

          <p className="text-white font-helvetica text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] mt-3 max-w-full sm:max-w-[400px] lg:max-w-[450px]">
            With striking architecture, terraced gardens, and breathtaking Red Sea views, Four Seasons Jeddah blends timeless design with modern sophistication.
          </p>

          <Link
            href="#"
            className="
              mt-5 inline-flex items-center justify-center
              rounded-full font-helvetica
              h-10 sm:h-11 lg:h-[42px] px-4 sm:px-6 lg:px-8
              text-sm sm:text-[14px] lg:text-[15px] xl:text-[16px]
              bg-gray-400/50 backdrop-blur-md
              hover:bg-gray-400/70 transition-colors
            "
            style={{ boxShadow: "inset 0 0 4px rgba(255,255,255,0.2)" }}
          >
            Register Your Interest
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Baner;
