import Link from "next/link";
import { LuInstagram, LuFacebook, LuLinkedin } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";

export default function ContactInfo() {
  return (
    <section className="bg-white w-full px-8 md:px-[130px] py-10 md:pt-0 md:pb-24">
      {/* Contact Us */}
      <div>
        <h3 className="font-editors text-[20px] md:text-[22px] italic text-[#1b1b1b] mb-4">
          Contact Us
        </h3>

        <Link
          href="mailto:info@midad.com.sa"
          className="block text-[14px] md:text-[15px] text-[#1b1b1b] mb-5"
        >
          info@midad.com.sa
        </Link>

        <div className="flex items-center gap-5 text-[#1b1b1b]">
          <Link href="#" aria-label="Instagram"><LuInstagram className="w-5 h-5" /></Link>
          <Link href="#" aria-label="Facebook"><LuFacebook className="w-5 h-5" /></Link>
          <Link href="#" aria-label="LinkedIn"><LuLinkedin className="w-5 h-5" /></Link>
          <Link href="#" aria-label="X"><RiTwitterXLine className="w-5 h-5" /></Link>
        </div>
      </div>

      {/* Headquarters */}
      <div className="mt-12">
        <h3 className="font-editors text-[20px] md:text-[22px] italic text-[#1b1b1b] mb-4">
          Headquarters
        </h3>
        <address className="not-italic text-[14px] md:text-[15px] leading-relaxed text-[#1b1b1b]">
          Midad Real Estate Investment &amp; Development Co. Ltd<br />
          Bahrain Tower, King Fahd Rd, Al Olaya<br />
          Riyadh 12214, Saudi Arabia
        </address>
      </div>
    </section>
  );
}
