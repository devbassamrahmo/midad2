// app/legal/page.tsx
"use client";

import React from "react";

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen w-full  bg-black text-white">
      {/* Page shell (left aligned, not centered) */}
      <section className="w-full px-6 sm:px-10 lg:px-[95px] py-12 sm:py-16 lg:py-20">
        {/* Small breadcrumb-like title */}
        <p className="text-[12px] sm:text-[28px] text-white/70 font-helvetica mb-6 mt-[80px]">
          Legal
        </p>

        {/* ===== Terms of use ===== */}
        <h1 className="font-editors italic text-[22px] sm:text-[28px] leading-tight mb-4 mt-[60px]">
          Terms of use
        </h1>
        <div className="space-y-4 text-[12px] sm:text-[18px] leading-relaxed font-helvetica text-[#A19F96] max-w-[700px]">
          <p>Please read these Terms and Conditions carefully.</p>
          <p>
            These are the general Terms and Conditions governing your access and
            use of this website, <span className="underline text-[#FFFFFF]">www.midad.com.sa</span>.
            If you disagree with these Terms and Conditions, please do not use
            this site or any pages thereof.
          </p>
          <p>
            By continuing to use this website, and/or any of the services shown
            on this website, you agree to be bound by these Terms and
            Conditions.
          </p>
        </div>

        {/* ===== Use of information and materials ===== */}
        <h2 className="font-editors italic text-[22px] sm:text-[28px] leading-tight  mb-4 mt-[80px]">
          Use of information and materials
        </h2>
        <div className="space-y-4 text-[12px] sm:text-[18px] leading-relaxed font-helvetica text-[#A19F96]  max-w-[700px]">
          <p>
            The information and materials contained in these pages – and the
            terms, conditions, and descriptions that appear – are subject to
            change.
          </p>
          <p>
            There are some products and services which are not available in all
            geographic areas.
          </p>
          <p>
            Your eligibility for particular products and services is subject to{" "}
            <span className="font-medium text-[#FFFFFF]">
              Midad Real Estate Investment &amp; Development Co. Ltd
            </span>
            ’s decision and approval.
          </p>
        </div>

        {/* ===== No warranty ===== */}
        <h2 className="font-editors italic text-[22px] sm:text-[28px] leading-tight mt-[80px] mb-4">
          No warranty
        </h2>
        <div className="space-y-4 text-[12px] sm:text-[18px] leading-relaxed font-helvetica text-[#A19F96]  max-w-[700px]">
          <p>
            The information and materials contained in this site – including
            texts, images, links or any other items – may not be accurate.
          </p>
          <p>
            <span className="font-medium text-[#FFFFFF]">
              Midad Real Estate Investment &amp; Development Co. Ltd
            </span>{" "}
            does not warrant the accuracy, adequacy or completeness of the
            information and materials, and expressly disclaims liability for
            errors or omissions therein.
          </p>
          <p>
            No warranties of any kind, implied, expressed or statutory,
            including but not limited to the warranties of non-infringement of
            third party rights, title, merchantability, fitness for a particular
            purpose and freedom from computer virus, are given in conjunction
            with the information and materials.
          </p>
        </div>

        {/* ===== Submission ===== */}
        <h2 className="font-editors italic text-[22px] sm:text-[28px] leading-tight mt-[80px] mb-4">
          Submission
        </h2>
        <div className="space-y-4 text-[12px] sm:text-[18px] leading-relaxed font-helvetica text-[#A19F96]  max-w-[700px]">
          <p>
            All information submitted to{" "}
            <span className="font-medium text-[#FFFFFF]">
              Midad Real Estate Investment &amp; Development Co. Ltd
            </span>{" "}
            on this site shall be owned and maintained by{" "}
            <span className="font-medium text-[#FFFFFF]">
              Midad Real Estate Investment &amp; Development Co. Ltd
            </span>
            , which shall be free to use, for any purpose, any ideas, concepts,
            know-how or techniques contained in such information.{" "}
            <span className="font-medium text-[#FFFFFF]">
              Midad Real Estate Investment &amp; Development Co. Ltd
            </span>{" "}
            shall not be subject to any obligations of confidentiality or
            privacy regarding submitted information, except as agreed by{" "}
            <span className="font-medium text-[#FFFFFF]">
              Midad Real Estate Investment &amp; Development Co. Ltd
            </span>{" "}
            or as otherwise specifically agreed or required by law.
          </p>
        </div>

        {/* ===== Governing Law ===== */}
        <h2 className="font-editors italic text-[22px] sm:text-[28px] leading-tight mt-[80px] mb-4">
          Governing law
        </h2>
        <p className="text-[12px] sm:text-[18px] leading-relaxed font-helvetica text-[#A19F96]  max-w-[700px]">
          These Terms of Use will be governed under the{" "}
          <span className="font-medium text-[#FFFFFF]">Kingdom of Saudi Law</span>.
        </p>
      </section>
    </main>
  );
}
