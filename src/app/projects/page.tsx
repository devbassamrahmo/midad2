import Image from "next/image";
import Link from "next/link";
import React from "react";

interface DataProps {
  title: string;
  location: string;
  image: string;
  link: string;
}

const Page = () => {
  const data: DataProps[] = [
    {
      location: "Jeddah Saudi Arabia ",
      title: "Crystal Gallery ",
      image: "/projects/Rectangle1.svg",
      link: "/projects/crystal-gallery",
    },
    {
      title: "Stars Avenue Mall",
      location: "Jeddah Saudi Arabia",
      image: "/projects/Rectangle2.svg",
      link: "/projects/stars-avenue-mall",
    },
    {
      title: "Zohur Beach Residential Compound",
      location: "Jeddah Saudi Arabia",
      image: "/projects/Rectangle3.svg",
      link: "/projects/zohur-beach",
    },
    {
      title: "Coral Mall",
      location: "Jeddah Saudi Arabia",
      image: "/projects/Rectangle4.svg",
      link: "/projects/coral-mall",
    },
  ];

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-[118px]">
      {/* Header / Intro */}
      <div className="mt-28 sm:mt-48  flex flex-col items-center gap-6 sm:gap-8 md:gap-[50px] text-center">
        <h1 className="text-[#000000] font-editors font-semibold text-[28px] sm:text-[32px] md:text-[34px] lg:text-[37px]">
          <span className="italic">Our Projects</span>
        </h1>
        <p className="text-[#A19F96] font-helvetica text-[15px] sm:text-[16px] md:text-[18px] max-w-[660px]">
          Discover our signature developments that redefine luxury living on the
          Jeddah Corniche. Each project is thoughtfully designed to combine
          timeless elegance, modern innovation, and world-class services —
          creating spaces that inspire, connect, and elevate everyday life.
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-[240px] sm:h-[360px] md:h-[560px] lg:h-[800px] my-8 sm:my-10 overflow-hidden">
        <Image
          src="/hero.svg"
          alt="media"
          fill
          priority
          sizes="(max-width: 640px) 100vw,
                 (max-width: 1024px) 100vw,
                 100vw"
          className="object-cover w-full object-bottom"
        />
      </div>

      {/* First project info */}
      <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5">
        <h3 className="text-[#A19F96] font-helvetica text-[14px] sm:text-[16px] md:text-[18px]">
          {data[0].location}
        </h3>
        <h2 className="text-[#000000] font-editors text-center font-semibold text-[18px] sm:text-[20px] md:text-[22px]">
          Four Seasons Hotel & Private Residences
        </h2>
        <Link
          href="/four-season"
          className="mt-4 sm:mt-6 w-fit px-6 py-3 rounded-full text-black "
          style={{ boxShadow: "inset 7px 5px 10px rgba(0,0,0,0.1)" }}
        >
          Discover more
        </Link>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 py-12 sm:py-16 md:py-20">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-3 sm:gap-4">
            <div className="relative w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[400px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1024px) 50vw,
                       50vw"
                priority={i < 2}
              />
            </div>
            <h3 className="text-[#A19F96] font-helvetica text-[13px] sm:text-[14px] md:text-[16px] text-center">
              {item.location}
            </h3>
            <h3 className="text-[#000000] font-editors font-semibold text-[18px] sm:text-[20px] md:text-[22px] text-center">
              {item.title}
            </h3>
            <Link
              href={item.link}
              className="mt-3 sm:mt-4 w-fit px-6 py-3 rounded-full text-black transition-colors"
              style={{ boxShadow: "inset 7px 5px 10px rgba(0,0,0,0.1)" }}
            >
              Discover more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
