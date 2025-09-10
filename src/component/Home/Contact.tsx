"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "react-phone-input-2/lib/style.css";
import { ContactFormData, contactSchema } from "@/Model/Contact";

// منع SSR لمكتبة phone input
const PhoneInput = dynamic(() => import("react-phone-input-2"), { ssr: false });

const Contact = () => {
  const [phone, setPhone] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const handlePhoneChange = (value: string) => {
    setPhone(value);
    setValue("phone", value);
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("https://formspree.io/f/xldwayzv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitStatus("Message sent successfully!");
        reset();
        setPhone("");
      } else {
        setSubmitStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("An error occurred. Please try again.");
      console.log(error);
    }
  };

  return (
    <div className="h-auto w-full px-4 sm:px-8 md:px-[85px] py-10 md:py-[85px] sm:bg-[#fffdf5]">
      <h1 className="text-[26px] md:text-[32px] font-editors italic mb-10 text-[#4C231A]">
        Contact Us
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 md:gap-12 max-w-[800px]"
      >
        {/* Name */}
        <div className="flex flex-row items-center gap-2 md:gap-20">
          <label className="text-[18px] font-semibold font-helvetica text-[#4C231A] w-[120px]">
            Name
          </label>
          <div className="flex flex-col w-full md:w-[350px]">
            <input
              type="text"
              {...register("name")}
              className="bg-transparent border-b border-[#A19F96] text-[16px] w-full focus:outline-none p-2"
              placeholder="Type Your Name Here"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>
        </div>

        {/* Number */}
        <div className="flex flex-row items-center gap-2 md:gap-20 z-[10000]">
          <label className="text-[18px] font-semibold font-helvetica text-[#4C231A] w-[120px]">
            Number
          </label>
          <div className="flex flex-col w-full md:w-[350px]">
            <PhoneInput
              country={"sa"}
              value={phone}
              onChange={handlePhoneChange}
              inputStyle={{
                width: "100%",
                height: "40px",
                border: 0,
                backgroundColor: "transparent",
                borderBottom: "1px solid #A19F96",
                fontSize: "16px",
                color: "#4C231A",
                paddingLeft: "48px",
                borderRadius: "0",
              }}
              buttonStyle={{ backgroundColor: "transparent", border: "none" }}
              containerStyle={{ width: "100%" }}
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-row items-center gap-2 md:gap-20">
          <label className="text-[18px] font-semibold font-helvetica text-[#4C231A] w-[120px]">
            Email
          </label>
          <div className="flex flex-col w-full md:w-[350px]">
            <input
              type="email"
              {...register("email")}
              className="bg-transparent border-b border-[#A19F96] text-[16px] w-full focus:outline-none p-2"
              placeholder="example@gmail.com"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>
        </div>

        {/* Message */}
        {/* <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-20 relative">
          <label className="text-[18px] font-helvetica text-[#4C231A] w-[120px] mt-2 md:mt-0 z-10">
            Message
          </label>
          <div className="relative w-full md:w-[450px] flex flex-col">
            <textarea
              rows={4}
              {...register("message")}
              className="bg-transparent text-[16px] w-full focus:outline-none p-2 resize-y relative z-10"
              placeholder="Type Your Message Here"
            />
            <div className="absolute left-0 right-0 top-8 border-b border-[#A19F96]"></div>
            <div className="absolute left-0 right-0 top-14 border-b border-[#A19F96]"></div>
            <div className="absolute left-0 right-0 top-20 border-b border-[#A19F96]"></div>
            <div className="absolute left-0 right-0 top-[103px] border-b border-[#A19F96]"></div>
          </div>
        </div> */}
        <div className="flex flex-row items-start gap-4 md:gap-20 relative">
          <label className=" font-semibold text-[18px] font-helvetica text-[#4C231A] w-[120px]">
            Message
          </label>
          <div className="relative w-full md:w-[350px] flex flex-col">
            <textarea
              rows={4}
              {...register("message")}
              className="bg-transparent text-[16px] w-full focus:outline-none p-3 resize-y border border-[#A19F96] rounded-sm"
              placeholder="Type Your Message Here"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-20">
          <div className="text-[18px] font-helvetica text-[#4C231A] w-[120px]  mt-2 md:mt-0 z-10"></div>
          <button
            type="submit"
            className="mt-6 w-[120px] px-6 py-3 rounded-full mx-auto sm:mx-0 text-black  transition-colors"
            style={{ boxShadow: "inset 7px 5px 10px rgba(0,0,0,0.1)" }}
          >
            Send
          </button>
        </div>

        {/* Status Message */}
        {submitStatus && <p className="mt-4 ">{submitStatus}</p>}
      </form>
    </div>
  );
};

export default Contact;
