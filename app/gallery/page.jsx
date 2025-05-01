import Navbar from "@/components/Navbar";
import banner from "@/public/galleryPage/banner.jpg";
import { GridImage, BannerImage } from "@/components/ImageGrid";

import FooterAnimation from "@/components/FooterAnimation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Gallery | HackByte",
  description:
    "Discover memorable moments from past HackByte events at IIITDMJ, explore images, and feel the excitement of the coding community.",
  keywords:
    "Hackathon, IIITDMJ, Hackbyte, Coding, Programming, Tech, Gallery, Photos, Videos, Past Events, Previous Events",
  openGraph: {
    title: "Gallery | HackByte",
    description:
      "Discover memorable moments from past HackByte events at IIITDMJ, explore images, and feel the excitement of the coding community.",
    url: "https://hackbyte.in/gallery",
    images:
      "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
    siteName: "HackByte - IIITDMJ Hackathon",
    type: "website",
    locale: "en_US",
  },
};

const Gallery = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#101010] flex flex-col min-h-screen p-4 md:px-8 lg:px-12 py-40">
        <div className="w-full flex flex-col gap-6">
          <div className="flex flex-col items-center gap-4">
            <p className="text-[#F5F0D8] font-normal text-[2.25rem] md:text-[5rem]">
              Gallery
            </p>
            <p
              className="w-full xl:max-w-[75%] text-[#C3C3C3] font-[Inter] 
                text-center font-normal text-[1.25rem] md:text-[1.5rem]"
            >
              Explore our gallery of unforgettable moments from Vismay at Govt Medical College,Miraj. Dive into the world of creativity, experience groundbreaking innovations, and get inspired by the next wave of talent."

Feel free to customize it further!
            </p>
          </div>
        </div>

        <GridImage />

        <div className="flex flex-col justify-center items-center my-4 xl:my-8">
          <div
            className="text-[#FAF8ED] text-center font-medium text-[2.375rem]
              leading-[1.2] lg:leading-[1.1] lg:text-[3rem]"
          >
            COMMITTEE <span>CREW</span>
          </div>
        </div>

        <div className="mt-4 xl:mt-8">
          <div className="flex justify-center items-center">
            <div className="w-full xl:w-[80%] h-full flex justify-center items-center">
              <BannerImage imgsrc={banner} />
            </div>
          </div>
        </div>
      </div>
       <div className="relative bg-black w-full h-screen flex flex-col justify-end pt-48 md:pt-52 lg:pt-72">
              <div className="flex flex-col md:flex-row justify-between items-center gap-16 md:gap-20 px-6 md:px-12 xl:px-24 py-20">
          
          <p className="max-w-4xl text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-extrabold leading-tight text-center md:text-left tracking-tight">
            <span 
              className="block bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]"
              style={{
                backgroundImage: "url('/mmm background.jpg')", // parchment image
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
              className="block bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]"
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
      
          <FooterAnimation />
      
        </div>
              </div>
      <Footer />
    </>
  );
};
export default Gallery;
