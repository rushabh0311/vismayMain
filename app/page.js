"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion"; // 🎯 for animations
import FooterAnimation from "@/components/FooterAnimation";

// Countdown Component
const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2025-06-06T00:00:00");

    const interval = setInterval(() => {
      const currentTime = new Date();
      const timeDifference = targetDate.getTime() - currentTime.getTime();

      if (timeDifference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-center text-[#FAF8ED]"
    >
      <p className="text-lg font-medium">Event starts in:</p>
      <div className="flex justify-center gap-4 mt-4">
        {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-[#FAF8ED] text-black px-6 py-2 rounded-lg"
          >
            {Object.values(timeLeft)[index]} <span className="block text-sm">{label}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Countdown Component

<div className="sketchfab-embed-wrapper">
  <iframe
    title="The Mysterious Box"
    frameBorder="0"
    allowFullScreen
    mozallowfullscreen="true"
    webkitallowfullscreen="true"
    allow="autoplay; fullscreen; xr-spatial-tracking"
    src="https://sketchfab.com/models/3f46791619d340caa04b1ab6838e8db2/embed"
  >
  </iframe>
  <p style={{ fontSize: "13px", fontWeight: "normal", margin: "5px", color: "#4A4A4A" }}>
    <a
      href="https://sketchfab.com/3d-models/the-mysterious-box-3f46791619d340caa04b1ab6838e8db2?utm_medium=embed&utm_campaign=share-popup&utm_content=3f46791619d340caa04b1ab6838e8db2"
      target="_blank"
      rel="nofollow"
      style={{ fontWeight: "bold", color: "#1CAAD9" }}
    >
      The Mysterious Box
    </a>{" "}
    by{" "}
    <a
      href="https://sketchfab.com/EA1993?utm_medium=embed&utm_campaign=share-popup&utm_content=3f46791619d340caa04b1ab6838e8db2"
      target="_blank"
      rel="nofollow"
      style={{ fontWeight: "bold", color: "#1CAAD9" }}
    >
      Enrico Ameglio
    </a>{" "}
    on{" "}
    <a
      href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=3f46791619d340caa04b1ab6838e8db2"
      target="_blank"
      rel="nofollow"
      style={{ fontWeight: "bold", color: "#1CAAD9" }}
    >
      Sketchfab
    </a>
  </p>
</div>

export default function Home() {
  const aboutData = [
    {
      imgSrc: "/aboutPage/Screenshot_20250409_235837_ibisPaint X_1.png",
      title: "About Vismay 2025",
      description: `Vismay, the annual cultural event of GMC Miraj College, is a highly anticipated celebration that showcases the talents of our students, faculty, and staff. This iconic event has been a legacy of our college, bringing together the entire GMC Miraj College community in a spectacular display of creativity, passion, and entertainment.

The event is a star-studded affair, with renowned celebrities joining us to witness the talents of our students. It's a night to remember, with mesmerizing performances, thrilling competitions, and electrifying energy. From dance and drama to fashion shows and band battles, there's something for everyone to enjoy.

What makes Vismay truly special is the fact that it's not just limited to our students. Our professors, UG, and PG students all come together to make this event a grand success. It's a celebration that brings together people from all walks of life, united by their love for art, music, and culture.

The event is a platform for our students to showcase their skills in various fields. We've seen some incredibly talented students over the years, and Vismay provides them with the perfect opportunity to shine. Whether it's dance, drama, music, or fashion, our students have always impressed us with their creativity and passion.

Vismay is more than just an event - it's a legacy that has been passed down through generations of GMC Miraj College students. It's a tradition that we cherish and look forward to every year. The event has become an integral part of our college culture, and we take great pride in hosting it.

If you're looking for an event that's full of energy, excitement, and entertainment, then Vismay is the place to be. We invite you to join us for this incredible celebration and be a part of our college's rich cultural heritage. So mark your calendars and get ready for an unforgettable experience!`,
    },
    {
      imgSrc: "/aboutPage/dean.png",
      title: "Dean's Message",
      description: `At our college, we believe that growth comes not just from academics, but also from shared experiences...`,
    },
    {
      imgSrc: "/aboutPage/MS's.png",
      title: "MS's Message",
      description: `College life is more than just lectures and textbooks — it's about finding balance, building connections...`,
    },
  ];

  return (
    <div 
      className="overflow-x-hidden relative"
      style={{
        backgroundImage: "url('/aboutPage/background.png')", // Correct path to image in the public folder
        backgroundSize: "cover",  // Ensures the image covers the entire area
        backgroundPosition: "center",  // Centers the image in the background
        backgroundRepeat: "no-repeat",  // Prevents the image from repeating
        height: "100vh",  // Ensures the height is 100% of the viewport height
        width: "100%",  // Ensures it spans the full width
        position: "relative",  // Ensures positioning of any child content
      }}
           
    >
      {/* Optional dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Actual content */}
      <div className="relative z-10">
        <Navbar />

        <a
          href="https://linktr.ee/VISMAY25"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 
            bg-[#1F1F1F] border border-[#FAF8ED] 
            text-[#FAF8ED] font-semibold py-3 px-8 rounded-full 
            shadow-lg shadow-[#FAF8ED]/20 
            hover:bg-[#FAF8ED] hover:text-[#1F1F1F]
            hover:shadow-[#FAF8ED]/40
            transition-all duration-500 ease-in-out 
            backdrop-blur-md"
        >
          🚀 Register Now
        </a>

        {/* HERO Section */}
        <div className="relative flex flex-col min-h-fit p-4 pt-20 md:pt-32 md:px-12 xl:px-20 md:py-4">
          <div className="flex justify-center items-center w-full py-16 md:py-32">
            <Countdown />
          </div>
        </div>

        {/* ABOUT Section */}
        <div className="w-full flex flex-col bg-[#101010]/90">
          <div className="flex flex-col items-center justify-center p-8 md:px-16 xl:px-32 py-20 md:py-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center justify-center text-center gap-10 border-2 rounded-2xl p-10 md:p-16"
              style={{
                background: "radial-gradient(116.96% 115.94% at 9.81% 9.24%, #363636 0%, rgba(26, 26, 26, 0.27) 100%)",
                borderColor: "rgba(255, 255, 255, 0.6)",
              }}
            >
              {aboutData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="flex flex-col items-center justify-center gap-8 w-full"
                >
                  <motion.img
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="w-72 h-72 object-contain mx-auto"
                    src={item.imgSrc}
                    alt={`Image ${index + 1}`}
                  />
                  <h2 className="text-[#D1CAC7] font-bold text-3xl lg:text-4xl">
                    {item.title}
                  </h2>
                  <p className="text-[#D1CAC7] text-base md:text-lg leading-relaxed text-justify">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

<<<<<<< HEAD
        {/* EMPOWER Section */}
        <div className="relative bg-black w-full h-screen flex flex-col justify-end pt-48 md:pt-52 lg:pt-72">
        <div className="flex flex-col md:flex-row justify-between items-center gap-16 md:gap-20 px-6 md:px-12 xl:px-24 py-20">
=======
      <div className="relative bg-black w-full h-screen flex flex-col justify-end pt-48 md:pt-52 lg:pt-72">
  <div className="flex flex-col md:flex-row justify-between items-center gap-16 md:gap-20 px-6 md:px-12 xl:px-24 py-20">
>>>>>>> 56940ce3ce424147e2e18468ecadcd00d150155e
    
    <p className="max-w-4xl text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-extrabold leading-tight text-center md:text-left tracking-tight">
      <span 
        className="block bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]"
        style={{
<<<<<<< HEAD
          backgroundImage: "url('/mmm background.jpg')", // parchment image
=======
          backgroundImage: "url('/mmm background.png')", // parchment image
>>>>>>> 56940ce3ce424147e2e18468ecadcd00d150155e
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(1.4)", // Make parchment brighter
          WebkitTextStroke: "1px #f5deb3", // Light wheat-colored stroke
        }}
      >
        Myth
      </span>
      <span 
        className="block bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]"
        style={{
<<<<<<< HEAD
          backgroundImage: "url('/mmm background.jpg')",
=======
          backgroundImage: "url('/mmm background.png')",
>>>>>>> 56940ce3ce424147e2e18468ecadcd00d150155e
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(1.4)",
          WebkitTextStroke: "1px #f5deb3",
        }}
      >
        Maya
      </span>
      <span 
        className="block bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]"
        style={{
<<<<<<< HEAD
          backgroundImage: "url('/mmm background.jpg')",
=======
          backgroundImage: "url('/mmm background.png')",
>>>>>>> 56940ce3ce424147e2e18468ecadcd00d150155e
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(1.4)",
          WebkitTextStroke: "1px #f5deb3",
        }}
      >
        Mystery!
      </span>
    </p>
<<<<<<< HEAD

    <FooterAnimation />

  </div>
        </div>

        <Footer />
      </div>
=======

    <FooterAnimation />

  </div>
</div>


      <Footer />
>>>>>>> 56940ce3ce424147e2e18468ecadcd00d150155e
    </div>
  );
}
