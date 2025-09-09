// app/news/page.tsx
"use client";

import Image from "next/image";
import React from "react";

type NewsItem = {
  id: string;
  date: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  excerpt2?: string;
  image: string;
  href?: string;
};

const NEWS: NewsItem[] = [
  {
    id: "1",
    date: "Sep 05, 2025",
    title: "Four Seasons Announces",
    subtitle: "New Hotel and Residences in Jeddah",
    excerpt:
      "Four Seasons Hotels and Resorts, the world's leading luxury hospitality company, announces plans to expand its presence in the Middle East alongside Saudi-based investment firm Midad Real Estate.",
    excerpt2:
      "Together, they will introduce Four Seasons Hotel and Private Residences Jeddah at the Corniche, a new-build coastal retreat scheduled to open in 2024.",
    image: "/news/Rectangle.svg",
    href: "#",
  },
  {
    id: "2",
    date: "Apr 18, 2025",
    title: "Four Seasons, Midad Real Estate",
    subtitle: "Announce new Jeddah project",
    excerpt:
      "Luxury hospitality company Four Seasons Hotels and Resorts announced plans to expand its presence in the Middle East alongside Saudi-based investment firm Midad Real Estate. Together, they will introduce Four Seasons Hotel and Private Residences Jeddah at the Corniche, a new-build coastal retreat scheduled to open in 2024.",
    image: "/news/Rectangle1.svg",
    href: "#",
  },
  {
    id: "3",
    date: "Mar 12, 2025",
    title:
      "Four Seasons and Midad Real Estate Announce Plans for Hotel and Private Residences ",
    subtitle: "in Jeddah Corniche District",
    excerpt:
      "Four Seasons Hotels and Resorts, the world’s leading luxury hospitality company, announces plans to expand its presence in the Middle East alongside Saudi-based investment firm Midad Real Estate.",
    excerpt2:
      "Together, they will introduce Four Seasons Hotel and Private Residences Jeddah at the Corniche, a new-build coastal retreat scheduled to open in 2024.",
    image: "/news/Rectangle2.svg",
    href: "#",
  },
];

export default function NewsPage() {
  return (
    <main className="w-full bg-white text-[#1e1e1e]">
      {/* Page container: responsive padding; keeps your 70/173 on desktop */}
      <section className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-[70px] py-32 md:py-32 lg:py-[173px] ">
        {/* Heading */}
        <header className="mb-8 sm:mb-10 lg:mb-12 pb-3">
          <h1 className="font-editors  font-meduim text-[22px] sm:text-[26px] lg:text-[34px] leading-tight">
            Discover all the <span className="italic">latest news</span>
          </h1>
        </header>

        {/* News List */}
        <div className="space-y-12 lg:space-y-14">
          {NEWS.map((n) => (
            <article
              key={n.id}
              className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8"
            >
              {/* Left: text */}
              <div className="lg:col-span-5 w-full lg:w-[380px] lg:min-h-[390px]">
                <div className="text-[12px] text-black/60 mb-3">{n.date}</div>

                <h2 className="font-editors lg:w-[130%] text-[20px] sm:text-[22px] leading-snug">
                  {n.title}
                </h2>

                {n.subtitle && (
                  <h3 className="font-editors italic text-[18px] sm:text-[22px] leading-snug">
                    {n.subtitle}
                  </h3>
                )}

                {/* divider */}
                <div className=" lg:my-[52px] my-[20px] md:my-[30px] h-px w-16 bg-black/40" />

                <p className="font-helvetica text-[14px] lg:w-[140%] leading-relaxed text-black/80">
                  {n.excerpt}
                </p>

                {n.excerpt2 && (
                  <p className="mt-6 font-helvetica text-[14px] leading-relaxed text-black/80">
                    {n.excerpt2}
                  </p>
                )}
              </div>

              {/* Right: image (no cropping; responsive; 760x390 target on desktop) */}
              <div className="xl:col-span-7 flex justify-center">
                <div
                  className="
      relative w-full 
      h-auto 
      lg:h-[390px] 
      max-w-full lg:max-w-[760px]
    "
                >
                  <Image
                    src={n.image}
                    alt={n.title}
                    width={760}
                    height={390}
                    className="
        w-full h-auto 
        object-cover lg:object-contain
      "
                    priority
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
