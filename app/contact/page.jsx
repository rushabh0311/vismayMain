"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import TextAnimation from "@/components/TextAnimation";
import FooterAnimation from "@/components/FooterAnimation";
import Footer from "@/components/Footer";
import "./page.css";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="bg-[#101010] flex flex-col min-h-screen p-4 md:pb-64 lg:px-0 md:pt-24 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full h-full flex flex-col gap-24 px-4 pt-20 md:px-8 lg:px-16 xl:px-20 2xl:px-40"
        >
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between items-start sm:items-center gap-12 md:gap-0 md:flex-row md:items-start"
          >
            <div className="flex flex-col items-start gap-8">
              <TextAnimation text="How can we help you? " />
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="w-full text-[#C3C3C3] font-['Inter'] font-normal text-[1.25rem] sm:max-w-[32rem] lg:max-w-[40rem] xl:max-w-[50rem] 2xl:max-w-[55rem] md:text-[1rem] xl:text-[1.5rem]"
              >
                Hacker Experience is what we prioritize! Have questions, need
                assistance, or just want to connect? Feel free to reach out!
              </motion.p>
            </div>

            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-44 h-44 md:hidden lg:block xl:h-60 xl:w-60 rotatingContainer"
              src="/getInTouchImage.svg"
              alt="Get in touch"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-start gap-8 md:gap-12"
          >
            <p className="text-[#F5F0D8] font-normal font-['Inter'] text-[1.5rem] md:text-[1.875rem]">
              Reaching Government Medical College And Hospital Miraj
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15305.024736478693!2d74.6812306!3d16.8149635!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1767ef1522165%3A0x92fc7e0d9e1c8322!2sMaji%20Sainik%20Vasahat%2C%20Miraj%2C%20Maharashtra%20416410!5e0!3m2!1sen!2sin!4v1714307174156!5m2!1sen!2sin"
              className="w-full h-full md:h-[25rem] border-0 rounded-[1rem]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Transportation Cards */}
          <div className="flex justify-center grid grid-cols-1 gap-6 md:grid-cols-2">
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 * i }}
                viewport={{ once: true }}
                className="flex flex-col items-start p-6 gap-8 rounded-[1rem] border border-[rgba(255,255,255,0.5)]"
                style={{
                  background:
                    "radial-gradient(371.89% 134.33% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0.00) 100%)",
                }}
              >
                <motion.img
                  src={i === 0 ? "/contactPage/trainIcon.svg" : "/contactPage/busIcon.svg"}
                  alt={i === 0 ? "By Train" : "By Bus"}
                  className="hover:scale-110 hover:rotate-[360deg] transition-all duration-1000 ease-in-out"
                />
                <div className="flex flex-col items-start gap-3">
                  <p className="text-white text-[1.125rem] font-[600] md:text-[1.25rem]">
                    {i === 0 ? "By Train" : "By Bus"}
                  </p>
                  <p className="text-[#D1CAC7] font-['Inter'] text-[1rem] font-normal md:text-[1.125rem]">
                    {i === 0
                      ? `Book tickets from IRCTC : The campus is 2.7 kms from the Railway Terminal and auto fare is usually around ₹60-₹70.`
                      : `Only suggested if you live around 10–15 min from Miraj. (Londhe Colony, Pandharpur Wal, Miraj) is around 2.5km from the venue, auto fare is usually around ₹50–₹60.`}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-start gap-12 md:gap-20 md:flex-row"
          >
            <div className="flex flex-col items-start gap-4 md:gap-8">
              <p className="text-[#F5F0D8] font-[500] text-[1.5rem] md:text-[1.875rem]">
                Call Us
              </p>
              <div className="flex flex-col gap-12 text-white font-normal text-[1rem] md:flex-row lg:text-[1.5rem]">
                <div className="flex flex-col items-start gap-2">
                  <p>+91 80104 59236</p>
                  <p>Yash Vinkare</p>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <p>+91 73879 33972</p>
                  <p>Kshitij Dhandare</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 md:gap-8">
              <p className="text-[#F5F0D8] font-[500] text-[1.5rem] md:text-[1.875rem]">
                Address
              </p>
              <p className="max-w-full md:max-w-[18rem] lg:max-w-[25rem] text-white font-normal text-[1rem] lg:text-[1.5rem]">
                Government Medical College And Hospital Miraj - Sangola - Pandharpur Rd, Maji Sainik Vasahat, Miraj, Maharashtra 416410
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Slogan Section */}
       <div className="relative bg-black w-full h-screen flex flex-col justify-end pt-48 md:pt-52 lg:pt-72">
  <div className="flex flex-col md:flex-row justify-between items-center gap-16 md:gap-20 px-6 md:px-12 xl:px-24 py-20">
  
    <p className="max-w-4xl text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-extrabold leading-tight text-center md:text-left tracking-tight animate-fadeIn">
      <span
        className="block bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,215,0,0.6)] animate-slideIn"
        style={{
          backgroundImage: "url('/mmm background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(1.4)",
          WebkitTextStroke: "1px #f5deb3",
        }}
      >
        Myth
      </span>
      <span
        className="block bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,215,0,0.6)] animate-slideIn"
        style={{
          backgroundImage: "url('/mmm background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(1.4)",
          WebkitTextStroke: "1px #f5deb3",
        }}
      >
        Maya
      </span>
      <span
        className="block bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,215,0,0.6)] animate-slideIn"
        style={{
          backgroundImage: "url('/mmm background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(1.4)",
          WebkitTextStroke: "1px #f5deb3",
        }}
      >
        Mystery!
      </span>
    </p>

    <div className="animate-slideUp">
      <FooterAnimation />
    </div>

  </div>
</div>


      <Footer />
    </>
  );
}