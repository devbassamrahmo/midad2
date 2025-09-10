"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-phone-input-2/lib/style.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormData, contactSchema } from "@/Model/Contact";

const PhoneInput = dynamic(() => import("react-phone-input-2"), { ssr: false });

const ContactForm = () => {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  // تحديث رقم الهاتف داخل react-hook-form
  const handlePhoneChange = (value: string) => {
    setPhone(value);
    setValue("phone", value, { shouldValidate: true });
  };

  const onSubmit = async (data: ContactFormData) => {
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xldwayzv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="w-full py-24 md:pt-[211px] md:px-[70px]">
      <div className="w-full bg-[#000000] px-2 md:px-[60px] py-10 shadow-lg">
        <h1 className="text-[26px] md:text-[32px] font-editors italic mb-10 text-[#FFFFFF]">
          Get in Touch
        </h1>

        <form
          className="flex flex-col gap-8 md:gap-12 max-w-[800px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Name */}
          <div className="flex items-center gap-2 md:gap-20">
            <label className="text-[18px] font-helvetica text-[#FFFFFF] w-[120px]">
              Name
            </label>
            <div className="flex flex-col w-full md:w-[350px]">
              <input
                {...register("name")}
                type="text"
                className="bg-transparent border-b text-white border-[#A19F96] text-[16px] w-full focus:outline-none p-2"
                placeholder="Type Your Name Here"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>
          </div>

          {/* Number */}
          <div className="flex items-center gap-2 md:gap-20  z-[500]">
            <label className="text-[18px] font-helvetica text-[#FFFFFF] w-[120px]">
              Number
            </label>
            <div className="w-full md:w-[350px]">
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
                  color: "#FFFFFF",
                  paddingLeft: "48px",
                  borderRadius: "0",
                }}
                buttonStyle={{ backgroundColor: "transparent", border: "none" }}
                containerStyle={{ width: "100%" }}
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">
                  {errors.phone.message}
                </span>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 md:gap-20">
            <label className="text-[18px] font-helvetica text-[#FFFFFF] w-[120px]">
              Email
            </label>
            <div className="flex flex-col w-full md:w-[350px]">
              <input
                {...register("email")}
                type="email"
                className="bg-transparent border-b text-white border-[#A19F96] text-[16px] w-full focus:outline-none p-2"
                placeholder="example@gmail.com"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>

          {/* Message */}
          {/* <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-20 relative">
            <label className="text-[18px] font-helvetica text-[#FFFFFF] w-[120px] mt-2 md:mt-0 z-10">
              Message
            </label>
            <div className="relative w-full md:w-[450px] flex flex-col">
              <textarea
                {...register("message")}
                rows={4}
                className="bg-transparent text-[16px] text-white w-full focus:outline-none p-2 resize-y relative z-10"
                placeholder="Type Your Message Here"
              />
              <div className="absolute left-0 right-0 top-8 border-b border-[#A19F96]" />
              <div className="absolute left-0 right-0 top-14 border-b border-[#A19F96]" />
              <div className="absolute left-0 right-0 top-20 border-b border-[#A19F96]" />
              <div className="absolute left-0 right-0 top-[103px] border-b border-[#A19F96]" />
            </div>
          </div> */}
          <div className="flex flex-row items-start gap-4 md:gap-20 relative">
            <label className="text-[18px] font-helvetica text-[#FFFFFF] w-[120px]  z-10">
              Message
            </label>
            <div className="relative w-full md:w-[350px]">
              <textarea
                {...register("message")}
                rows={4}
                className="bg-transparent text-[16px] text-white w-full focus:outline-none p-2 border border-[#A19F96] rounded-md resize-y"
                placeholder="Type Your Message Here"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-20">
            <div className="w-[120px]" />
            <button
              type="submit"
              className="w-[160px] md:w-[140px] px-6 py-3 mx-auto sm:mx-0 rounded-full text-white font-helvetica bg-black transition-colors hover:bg-[#111111]"
              style={{
                boxShadow:
                  "0px 0px 15px rgba(255,255,255,0.2) inset, 0px 0px 15px rgba(255,255,255,0.1)",
              }}
            >
              {status === "sending" ? "Sending..." : "Send"}
            </button>
          </div>

          {status === "success" && (
            <p className="text-green-500 mt-4">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-500 mt-4">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
