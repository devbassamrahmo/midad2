import Image from "next/image";
import Link from "next/link";
import React from "react";

interface DataProps {
  title: string;
  desc: string;
  image: string;
}

const Projects = () => {
  const data: DataProps[] = [
    {
      title: "Jeddah",
      desc: "Four Seasons Hotel & Private Residences",
      image: "/featured/Rectangle1.svg",
    },
    {
      title: "Jeddah",
      desc: "Crystal Gallery",
      image: "/featured/Rectangle2.svg",
    },
    {
      title: "Jeddah",
      desc: "Stars Avenue Mall",
      image: "/featured/Rectangle3.svg",
    },
    {
      title: "Jeddah",
      desc: "Zohur Beach Residential Compound",
      image: "/featured/Rectangle4.svg",
    },
    { title: "Jeddah", desc: "Coral Mall", image: "/featured/Rectangle5.svg" },
  ];

  return (
    <div className="w-full  bg-[#FEFAF1] bg- flex flex-col gap-[42px] py-16 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-[28px] sm:text-[32px] lg:text-[34px] font-editors text-[#4C231A]">
          <span className="italic">F</span>eatured Projects
        </h1>
        <h3 className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#AE9E75] font-helvetica">
          Our Developments
        </h3>
      </div>

      {/* Horizontal scroll on mobile, normal grid on lg+ */}
      <div className="flex lg:grid lg:grid-cols-5 gap-6 xl:gap-[30px] overflow-x-auto py-4 scrollbar-hide">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 lg:flex-shrink lg:flex-col lg:items-center  lg:text-center gap-4 lg:gap-5 w-[240px] lg:w-full"
          >
            {/* Image wrapper with fixed ratio */}
            <div className="relative w-full aspect-[5/6]">
              <Image
                src={item.image}
                alt={item.desc}
                fill
                className="object-cover "
              />
            </div>

            <p className="text-[#4C231A] font-editors text-[15px] sm:text-[16px] xl:py-[30px] xl:w-[80%] lg:mx-auto lg:text-center ">
              {item.desc}
            </p>
            <h2 className="text-[#AE9E75] font-helvetica text-[14px] sm:text-[15px] lg:text-center">
              {item.title}
            </h2>
          </div>
        ))}
      </div>

      {/* Button */}
      <Link href="/projects" className="mx-auto">
        <div className="flex justify-center">
          <button className="h-[37px] bg-[#e4dedd] text-[#4C231A] w-[145px] backdrop-blur-md flex items-center justify-center rounded-full font-helvetica text-[14px]">
            View All Projects
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Projects;
