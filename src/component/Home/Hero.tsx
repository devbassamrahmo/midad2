import Image from "next/image";
import Link from "next/link";
import "animate.css";

const Hero = () => {
  return (
    <div className="relative w-full  sm:text-left text-center text-white min-h-[600px] lg:min-h-[1000px] xl:min-h-[1500px]">
      {/* Background image */}
      <Image
        src="/hero.svg"
        alt="hero"
        fill
        className="w-full h-full object-cover"
        priority
      />

      {/* Content */}
      <div
        className="
          absolute inset-0
          px-6 sm:px-24 md:px-44 xl:px-[266px]
          mt-24 md:mt-52 lg:mt-[272.6px]
        "
      >
        <div
          className="relative flex flex-col gap-2  lg:gap-10 max-w-[600px] animate__animated animate__fadeInLeft animate__slow animation-duration: 5s;
         "
        >
          {/* Title */}
          <h1 className="font-citadel text-[28px]  sm:text-[34px] md:text-[52px] lg:text-[58px] leading-[0.5] sm:leading-[1.5] md:absolute md:-top-[50px] lg:-top-[70px] md:-left-[100px] animate__animated animate__fadeInLeft animate__slow animation-duration: 2s;">
            We Build
          </h1>

          <h2 className="font-editors italic text-[20px] sm:text-[22px] md:text-[30px] lg:text-[34px] mb-2 leading-snug animate__animated animate__fadeInLeft animate__slow animation-duration: 3s;">
            Value and Spaces
          </h2>

          <p className="font-helvetica max-w-[450px] !font-[300] text-[14px] sm:text-[16px] lg:text-[22px] leading-normal animate__animated animate__fadeInLeft animate__slow animation-duration: 3s;">
            For more than two decades, <span>Midad Real Estate</span> has been
            redefining urban living in <span>Saudi Arabia</span>, creating
            premium destinations that enrich communities and inspire pride.
          </p>

          <Link
            href="/aboutUS"
            className="
              inline-flex items-center justify-center
              rounded-full font-helvetica
              w-[120px] h-[32px] sm:w-[100px] sm:h-[36px] lg:w-[120px] lg:h-[37px]
              text-xs sm:text-sm lg:text-[14px]
              bg-white/20 backdrop-blur-md 
              mx-auto
              sm:mx-0
              mt-2
              sm:mt-0
            "
            style={{ boxShadow: "inset 0 0 4px rgba(255,255,255,0.2)" }}
          >
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// asd
