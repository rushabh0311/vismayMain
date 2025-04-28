import Navbar from "@/components/Navbar";
import ThemeTitle from "@/components/ThemeTitle";
import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { HackbyteLogo } from "@/components/HackbyteLogo";
import {
  TwitterLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  DiscordLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import StatisticCard from "@/components/StatisticCard";

import FooterAnimation from "@/components/FooterAnimation";
import Footer from "@/components/Footer";

const SocialMediaIcon = ({ Icon, href }) => (
  <a href={href} target="_blank">
    <Icon className="w-7 h-7 text-white transition ease-in-out delay-150 hover:scale-125 duration-300" />
  </a>
);

export default function Home() {
  const statisticsData = [
    {
      number: 2400,
      label: "Registrations",
      description: "2400+ registrations from across the country.",
    },
    {
      number: 400,
      label: "Offline Participants",
      description: "400+ participants joined the offline hackathon!",
    },
    {
      number: 100,
      label: "Volunteers",
      description: "To help you, get the best out of HackByte.",
    },
    {
      number: 100,
      label: "Projects",
      description: "Innovative submissions from various domains.",
    },
  ];

  const aboutData = [
    {
      imgSrc: "/aboutPage/img1.svg",
      title: "Collaborate and skill up",
      description:
        "Connect with people, form a team, learn new skills and develop amazing projects!",
    },
    {
      imgSrc: "/aboutPage/img2.svg",
      title: "Exciting Prizes",
      description:
        "Top 3 teams plus best projects of each domain will win prizes which will be disclosed soon!",
    },
    {
      imgSrc: "/aboutPage/img3.svg",
      title: "Engaging Workshops",
      description:
        "Technical workshops and events like no-light event will keep the participants engaged throughout.",
    },
    {
      imgSrc: "/aboutPage/img4.svg",
      title: "Mentorship sessions",
      description:
        "Get mentorship and guidance from prominent technocrats of the industry.",
    },
    {
      imgSrc: "/aboutPage/img5.svg",
      title: "Recruitment offers",
      description:
        "Best performers will get recruitment offers from prestigious companies.",
    },
    {
      imgSrc: "/aboutPage/img6.svg",
      title: "Expand network",
      description:
        "Connect with industry professionals and recruiters and other teams to learn and grow more.",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div
        className="relative flex flex-col min-h-fit
          p-4 pt-20 md:pt-32 md:px-12 xl:px-20 md:py-4"
      >
        <div
          className="flex flex-wrap justify-between items-center 
            pt-16 gap-4 xl:pt-12 lg:gap-0"
        >
          <div className="flex flex-col items-start w-full lg:w-1/2">
            <ThemeTitle />
          </div>
          <div className="flex flex-col items-start gap-3 w-full lg:items-end lg:w-1/2">
            <p
              className="text-[#FAF8ED] text-[1.25rem] font-medium text-left 
              lg:text-right lg:text-[1.5rem] translate-x-2"
            >
              Join us on 4th-6th April 2025, <br/>
               at IIIT Jabalpur for the hackathon.{" "}
            </p>

          </div>
        </div>

        <HackbyteLogo />

        <div className="flex items-center justify-between gap-4 my-12">
          <div className="flex items-stretch">
            <div
              className="flex justify-center items-center py-2 md:py-2.5 px-4 md:px-6"
              style={{ border: "1.275px solid #FAF8ED" }}
            >
              <div className="flex justify-center items-center gap-4">
                <img
                  src="/tpcLogo.svg"
                  alt="TPC Logo"
                  className="w-[4rem] h-[2.125rem]"
                />
                <p className="text-[#FAF8ED] text-[0.75rem] font-[600]">
                  Organised by
                  <br className="hidden md:block" /> The Programming Club of
                  IIITDMJ
                </p>
              </div>
            </div>
            <div
              className="flex justify-center items-center py-2 md:py-2.5 px-4 md:px-6"
              style={{ border: "1.275px solid #FAF8ED" }}
            >
              <div className="flex justify-center items-center">
                <img
                  src="/iiitdmjLogo.png"
                  alt="IIITDMJ Logo"
                  className="object-contain h-[2.5rem]"
                />
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col items-end gap-4">
            <p
              className="text-[#FAF8ED] text-[1rem] xl:text-[1.25rem] 
                font-semibold text-right"
            >
              We Think to Innovate
            </p>
            <div className="flex gap-6">
              <SocialMediaIcon
                href="https://www.instagram.com/hackbyte.tpc/"
                Icon={InstagramLogoIcon}
              />
              <SocialMediaIcon
                href="https://twitter.com/HackbyteTPC"
                Icon={TwitterLogoIcon}
              />
              <SocialMediaIcon
                href="https://www.linkedin.com/company/bitbyte-tpc/"
                Icon={LinkedInLogoIcon}
              />
              <SocialMediaIcon
                href="https://discord.gg/NTueHjdPn8"
                Icon={DiscordLogoIcon}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col bg-[#101010]">
        <div className="flex flex-col p-4 md:px-12 xl:px-20 py-16 md:py-24">
          <div
            className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 
            lg:grid-cols-3 xl:grid-cols-4 pt-8 md:pt-16"
          >
            {statisticsData.map((statistic, index) => (
              <StatisticCard key={index} {...statistic} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center p-4 md:px-12 xl:px-20 py-16 md:py-24">
          <div className="flex flex-col items-start gap-16">
            <div className="w-full flex flex-col items-center gap-5">
              <div className="flex flex-col items-start gap-3">
                <p
                  className="self-stretch text-center text-[#7A7A7A] text-sm md:text-sm 
                    lg:text-base font-semibold leading-normal"
                >
                  Opportunities for Participants
                </p>
                <p
                  className="text-center text-[#F5F0D8] text-3xl lg:text-4xl 
                    font-medium leading-[44px]"
                >
                  Why participate in Hackbyte 3.0?
                </p>
              </div>
              <p
                className="text-center text-[#D1CAC7] text-lg lg:text-xl 
                  font-normal font-['Inter'] leading-[30px]"
              >
                HackByte 3.0 promises a wonderful experience to the
                participants.
              </p>
            </div>

            <div
              className="inline-flex flex-col py-[3rem] px-[2.275rem] rounded-[8px] border-2 border-[rgba(255,255,255,0.6)]"
              style={{
                background:
                  "radial-gradient(116.96% 115.94% at 9.81% 9.24%, #363636 0%, rgba(26, 26, 26, 0.27) 100%)",
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-8">
                {aboutData.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center gap-5 ${
                      index >= 3 ? "xl:mt-9" : ""
                    }`}
                  >
                    <img
                      className="w-10 h-10 lg:w-12 lg:h-12"
                      src={item.imgSrc}
                      alt={`Image ${index + 1}`}
                    />
                    <div className="flex flex-col items-center gap-1">
                      <p className="text-center text-[#D1CAC7] font-medium text-lg lg:text-xl">
                        {item.title}
                      </p>
                      <p className="text-center text-[#D1CAC7] font-medium leading-normal text-base md:text-sm lg:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-black w-full h-screen flex flex-col justify-end pt-48 md:pt-52 lg:pt-72">
  <div className="flex flex-col md:flex-row justify-between items-center gap-16 md:gap-20 px-6 md:px-12 xl:px-24 py-20">
    
    <p className="max-w-4xl text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-extrabold leading-tight text-center md:text-left tracking-tight">
      <span 
        className="block bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]"
        style={{
          backgroundImage: "url('/mmm background.png')", // parchment image
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
          backgroundImage: "url('/mmm background.png')",
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
          backgroundImage: "url('/mmm background.png')",
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
    </div>
  );
}
