// app/projects/[id]/page.tsx
"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/app/data/projects";
import ContactShare from "@/component/ContactShare";

interface Props {
  params: { id: string };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p?.id === params?.id);
  if (!project) return notFound();

  return (
    <main className="bg-white text-black min-h-screen">
      {/* Hero */}
      <section className="relative w-full h-[70vh] sm:h-[75vh] lg:h-[80vh]">
        <Image
          src={project.heroImage}
          alt={project.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-end text-white pb-20 sm:pb-24 lg:pb-28">
          <h1 className="font-editors italic text-3xl sm:text-4xl lg:text-5xl text-center mb-3">
            {project.name}
          </h1>
          <p className="font-helvetica text-base sm:text-lg">{project.location}</p>
        </div>
      </section>

      {/* === Row 1 === */}
      <section className="px-6 sm:px-10 lg:px-[95px] py-16">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-14 lg:items-start">
          {/* Left text */}
          <div className="lg:col-span-6 space-y-12 ">
            {/* Project Overview */}
            <div>
              <h2 className="font-editors text-[#4C231A] text-[22px] sm:text-[34px] mb-6">
                Project Overview
              </h2>
              <p className="font-editors italic text-[#937835] text-[18px] sm:text-[22px] mb-8">
                {project.overviewSubtitle}
              </p>
              <p className="font-helvetica text-[#4C231A]  text-[14px] sm:text-[18px] leading-snug">
                {project.overviewDescription}
              </p>

            </div>

            {/* Design & Concept */}
            <div>
              <h2 className="font-editors text-[#4C231A] text-[22px] sm:text-[34px] mb-6">
                Design &amp; Concept
              </h2>
              <p className="font-editors italic text-[#937835] text-[18px] sm:text-[22px] mb-8">
                {project.designSubtitle}
              </p>
              <p className="font-helvetica text-[#4C231A] text-[14px] sm:text-[18px] leading-snug">
                {project.design}
              </p>
            </div>

            {/* Lifestyle Experience */}
            <div>
              <h2 className="font-editors text-[#4C231A] text-[22px] sm:text-[34px] mb-6">
                Lifestyle Experience
              </h2>
              <p className="font-editors italic text-[#937835] text-[18px] sm:text-[22px] mb-8">
                {project.lifeStyleSubtitle}
              </p>
              <p className="font-helvetica text-[#4C231A]   text-[14px] sm:text-[18px] leading-snug mb-4  ">
                {project.lifestyle}
              </p>
            </div>
          </div>

          {/* Right image */}
          <div className="lg:col-span-6 flex justify-center">
            <Image
              src={project.images?.[0] ?? project.heroImage}
              alt={`${project.name} image 1`}
              width={655}
              height={920}
              className="object-cover w-full h-auto max-h-[920px]"
            />
          </div>
        </div>
      </section>

      {/* === Row 2 === */}
      <section className="px-6 sm:px-10 lg:px-[95px] ">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-14 lg:items-start">
          {/* Left image */}
          <div className="lg:col-span-6 flex justify-center">
            <Image
              src={project.images?.[1] ?? project.heroImage}
              alt={`${project.name} image 2`}
              width={655}
              height={920}
              className="object-cover w-full h-auto max-h-[920px]"
            />
          </div>

          {/* Right text */}
          <div className="lg:col-span-6 space-y-12">
            <div>
              <h3 className="font-editors text-[#4C231A] text-[22px] sm:text-[34px] mb-16">
                Key Facts
              </h3>
              <ul className="space-y-5 text-[14px]">
                <li className="flex gap-6">
                  <span className="font-helvetica text-[#937835] w-28  sm:text-[18px]">Location</span>
                  <span className="font-helvetica italic text-[#4C231A] sm:text-[18px]">{project.location}</span>
                </li>
                <li className="flex gap-6">
                  <span className="font-helvetica text-[#937835] w-28 sm:text-[18px]" >Completion</span>
                  <span className="font-helvetica italic text-[#4C231A] sm:text-[18px]">{project.completion}</span>
                </li>
                <li className="flex gap-6">
                  <span className="font-helvetica text-[#937835] w-28 sm:text-[18px]">Size</span>
                  <span className="font-helvetica italic text-[#4C231A] sm:text-[18px]">{project.size}</span>
                </li>
                <li className="flex gap-6">
                  <span className="font-helvetica text-[#937835] w-28 sm:text-[18px]">Type</span>
                  <span className="font-helvetica italic text-[#4C231A] sm:text-[18px]">{project.type}</span>
                </li>
              </ul>
            </div>

            {project.lookingAhead && (
              <div className="xl:pt-[250px]">
                <h4 className="font-editors italic text-[#4C231A] text-[22px] mb-2 sm:text-[34px] sm:mb-6">
                  Looking Ahead
                </h4>
                <p className="font-editors italic text-[#937835] text-[18px] sm:text-[22px] mb-4 sm:mb-8">
                  {project.lookingAheadSubtitle}
                </p>
                <p className="font-helvetica text-[#4C231A] text-[14px]  sm:text-[18px] leading-snug sm:w-[70%]">
                  {project.lookingAhead}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="  lg:px-6">

        <ContactShare />
      </div>
    </main>
  );
}
