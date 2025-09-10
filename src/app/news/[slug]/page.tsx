"use client";

import { NEWS } from "@/app/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

function generateSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export default function NewsDetailPage({ params }: Params) {
  const { slug } = React.use(params);

  const newsItem = NEWS.find(
    (n) =>
      n.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "") === slug
  );

  if (!newsItem) {
    return <p>News not found</p>;
  }

  const relatedArticles = NEWS.filter((n) => n.id !== newsItem.id);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!", {
      position: "top-center",
    });
  };

  return (
    <main className="w-full bg-white text-[#1e1e1e]">
      <Toaster />
      <section className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-[95px] py-24">
        <div className="w-full mb-8">
          <Image
            src={newsItem.image}
            alt={newsItem.title}
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        <div className="font-editors text-[#000000] font-medium">
          <div className="text-[12px]">{newsItem.date}</div>
          <h1 className="font-editors text-[22px] sm:text-[26px] lg:text-[34px] leading-tight ">
            {newsItem.title}
          </h1>
          {newsItem.subtitle && (
            <h2 className="font-editors text-[22px] sm:text-[26px] lg:text-[34px]  mb-6">
              {newsItem.subtitle}
            </h2>
          )}
        </div>

        <div className=" mx-auto space-y-4 font-helvetica text-[14px] lg:text-[16px] leading-relaxed text-black/80">
          {newsItem.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className=" mx-auto mt-12 pb-1 border-b flex justify-center-center flex-col space-x-4">
          <span className="text-[12px] text-black font-editors italic">
            Share Article
          </span>
          <div className="flex items-center space-x-3">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                window.location.href
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/facebook.svg"
                alt="facebookIcon"
                width={26}
                height={26}
              />
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                window.location.href
              )}&title=${encodeURIComponent(newsItem.title)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin.svg"
                alt="linkedinIcon"
                width={26}
                height={26}
              />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                window.location.href
              )}&text=${encodeURIComponent(newsItem.title)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/X.svg" alt="XICon" width={26} height={26} />
            </a>
            <button onClick={handleCopyLink} aria-label="Copy link">
              <Image src="/copy.svg" alt="copyIcon" width={36} height={36} />
            </button>
          </div>
        </div>

        <section className="mt-20">
          <header className="mb-8 flex items-center justify-between">
            <h2 className="font-editors text-2xl sm:text-3xl lg:text-4xl">
              Related Articles
            </h2>
            <Link
              href="/news"
              className="h-[37px] bg-[#e4dedd] text-[#4C231A] w-[145px] backdrop-blur-md flex items-center justify-center rounded-full font-helvetica text-[14px] hover:bg-[#d9cfcf] transition-colors"
            >
              View All
            </Link>
          </header>

          <div className="space-y-12 lg:space-y-14">
            {relatedArticles.slice(0, 2).map((n) => (
              <article
                key={n.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center"
              >
                <div className="w-full order-2 sm:order-1">
                  <div className="mb-3 text-[12px] text-black/60 sm:block hidden">
                    {n.date}
                  </div>
                  <h3 className="font-editors font-medium text-[20px] sm:text-[22px] leading-snug sm:block hidden">
                    {n.title}
                  </h3>
                  {n.subtitle && (
                    <h4 className="font-editors  pb-3 font-medium text-[20px] sm:text-[22px] leading-snug sm:block hidden">
                      {n.subtitle}
                    </h4>
                  )}

                  <p className="font-helvetica text-[14px] leading-relaxed text-black/80 mt-2 sm:mt-0">
                    {n.excerpt}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={`/news/${generateSlug(n.title)}`}
                      className="h-[37px]  bg-[#e4dedd] text-black w-[145px] backdrop-blur-md flex items-center justify-center rounded-full font-helvetica text-[14px] hover:bg-[#d9cfcf] transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>

                <div className="w-full h-auto order-1 sm:order-2">
                  <div className="mb-3 text-[12px] text-black/60 sm:hidden ">
                    {n.date}
                  </div>
                  <h3 className="font-editors font-medium text-[20px] sm:text-[22px] leading-snug sm:hidden">
                    {n.title}
                  </h3>
                  {n.subtitle && (
                    <h4 className="font-editors  pb-3 font-medium text-[20px] sm:text-[22px] leading-snug sm:hidden">
                      {n.subtitle}
                    </h4>
                  )}
                  <Image
                    src={n.image}
                    alt={n.title}
                    width={500}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
