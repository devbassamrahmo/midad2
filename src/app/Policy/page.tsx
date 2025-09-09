// app/legal/page.tsx
"use client";

import React from "react";

export default function PolicyPage() {
  return (
    <main className="min-h-screen w-full bg-black text-white">
      {/* Page shell (left aligned, not centered) */}
      <section className="w-full px-6 sm:px-10 lg:px-[95px] py-12 sm:py-16 lg:py-20">
        {/* Small breadcrumb-like title */}
        <p className="text-[12px] sm:text-[20px] text-white/70 font-helvetica mb-6 mt-[80px]">
          Legal
        </p>

        {/* ===== Privacy Policy ===== */}
        <h1 className="font-editors italic text-[22px] sm:text-[28px] leading-tight mb-4 mt-[60px]">
          Privacy Policy
        </h1>
        <div className="space-y-4 text-[12px] sm:text-[18px] leading-relaxed font-helvetica text-[#A19F96] max-w-[700px]">
          <p>
            <span className="font-medium text-white">
              Midad Real Estate Investment &amp; Development Co. Ltd Real Estate Development Company
            </span>{" "}
            (hereinafter referred to as “Midad Real Estate Investment &amp; Development Co. Ltd” “us” “we” or “our”)
            is committed to respecting your privacy and complying with applicable data protection and privacy laws.
          </p>
          <p>
            You can visit <span className="underline text-white">https://www.midad.com.sa</span> without disclosing
            your identity information.
          </p>
          <p>
            This Privacy Policy Statement will help you understand how we collect, use, and protect your information
            when you visit our site. We would also like to help you make informed decisions based on accurate and
            clear information, so please read the following to learn how we may use your personal information.
          </p>
          <p>
            This policy should be read in conjunction with the Terms and Conditions section of this site.
          </p>
        </div>

        {/* ===== Acceptance ===== */}
        <h2 className="font-editors italic text-[22px] sm:text-[28px] leading-tight mb-4 mt-[80px]">
          Acceptance
        </h2>
        <div className="space-y-4 text-[12px] sm:text-[18px] leading-relaxed font-helvetica text-[#A19F96] max-w-[700px]">
          <p>
            By using this site, you agree with the{" "}
            <span className="font-medium text-white">
              Midad Real Estate Investment &amp; Development Co. Ltd Privacy Policy
            </span>.
            If you do not agree with this policy, please do not use this site, and your continued use of the{" "}
            <span className="font-medium text-white">
              Midad Real Estate Investment &amp; Development Co. Ltd
            </span>{" "}
            website will mean you accept this Privacy Policy.
          </p>
        </div>

        {/* ===== Information ===== */}
        <h2 className="font-editors italic text-[22px] sm:text-[28px] leading-tight mb-4 mt-[80px]">
          Information
        </h2>
        <div className="space-y-4 text-[12px] sm:text-[18px] leading-relaxed font-helvetica text-[#A19F96] max-w-[700px]">
          <p>
            The following forms available on the site (
            <span className="underline text-white">www.midad.com.sa</span>) collect your personal data:
          </p>
          <ul className="list-inside space-y-2">
            <li>
              <span className="font-medium ">- Registering emails:</span> Information about Midad Real Estate
              Investment &amp; Development Co. Ltd, new projects, products, and services will be sent periodically
              through newsletters, updating customers about the latest developments.
            </li>
            <li>
              <span className="font-medium "> - Contact Us:</span> The information provided by the customer
              through the contact tab will not be stored by midad.com.sa and will be used solely to respond to customer
              inquiries or service requests.
            </li>
            <li>
              <span className="font-medium ">- Residential Unit Reservation Form:</span> The information
              provided in this form will be used only to reserve the concerned apartment upon customer request.
            </li>
            <li>
              <span className="font-medium ">- Credit information:</span> Information about the credit policy of
              Midad Real Estate Investment &amp; Development Co. Ltd will be provided to the customer upon request,
              and your credit information will be kept confidential.
            </li>
          </ul>
        </div>

        {/* ===== How safe will my information be? ===== */}
        <h2 className="font-editors italic text-[22px] sm:text-[28px] leading-tight mb-4 mt-[80px]">
          How safe will my information be?
        </h2>
        <div className="space-y-4 text-[12px] sm:text-[18px] leading-relaxed font-helvetica text-[#A19F96] max-w-[700px]">
          <p>
            The security of all information associated with our customers is an important concern to us.
          </p>
          <p>
            Therefore, at <span className="underline text-white">www.midad.com.sa</span>, we exercise the utmost care
            in providing secure transmission of your information from your own device to our servers. As known, no data
            transmission over the Internet can be guaranteed to be 100% secure.
          </p>
          <p>
            As a result, while we strive to protect your information,{" "}
            <span className="font-medium text-white">
              Midad Real Estate Investment &amp; Development Co. Ltd
            </span>{" "}
            cannot ensure or warrant the security of any information you transmit to us or from our online products or
            services, and you do so at your own risk.
          </p>
          <p>
            Once we receive your transmission,{" "}
            <span className="font-medium text-white">
              Midad Real Estate Investment &amp; Development Co. Ltd
            </span>{" "}
            uses industry-standard efforts to safeguard the confidentiality of your information. However, “perfect
            security” does not exist on the Internet as known.
          </p>
        </div>

        {/* ===== Who will use my information? ===== */}
        <h2 className="font-editors italic text-[22px] sm:text-[28px] leading-tight mb-4 mt-[80px]">
          Who will use my <p>information?</p>
        </h2>
        <div className="space-y-4 text-[12px] sm:text-[18px] leading-relaxed font-helvetica text-[#A19F96] max-w-[700px]">
          <p>
            The general rule is that{" "}
            <span className="font-medium text-white">
              Midad Real Estate Investment &amp; Development Co. Ltd
            </span>{" "}
            will not disclose any information that you submit to us (especially your personal information) in a manner
            that it would link to your identity, except when we have your explicit permission to disclose it, or under
            special circumstances, such as when we believe in good faith that the law requires it.
          </p>
        </div>
      </section>
    </main>
  );
}
