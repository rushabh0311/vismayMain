import Link from "next/link";
import {
  TwitterLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon from react-icons

const SocialMediaIcon = ({ Icon, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Icon className="w-7 h-7 text-white transition ease-in-out delay-150 hover:scale-125 duration-300" />
  </a>
);

const Footer = () => {
<<<<<<< HEAD
  return (
    <div className="bg-black flex flex-col px-4 md:px-10 xl:px-28 py-6">
      <div className="flex justify-center gap-6">
        <SocialMediaIcon
          href="https://www.instagram.com/vismay_gmcmiraj/"
          Icon={InstagramLogoIcon}
        />
        <SocialMediaIcon
          href="https://wa.me/7744924437" // Replace with actual WhatsApp number link
          Icon={FaWhatsapp} // Use WhatsApp icon from react-icons
        />
      </div>

      {/* Optionally, you can add a copyright text */}
      <p className="text-stone-400 text-lg font-normal leading-normal tracking-tight pt-12 text-center">
=======
  
  return (
    <div className="bg-black flex flex-col px-4 md:px-10 xl:px-28">
      <hr className="border-[#808080] mb-12" />
      <div className="flex flex-col lg:flex-row gap-12 justify-between items-start">
        <div className="flex gap-6 lg:ml-auto"> {/* Added lg:ml-auto */}
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
      <p
        className="text-stone-400 text-lg font-normal leading-normal 
          tracking-tight pt-12 mb-8"
      >
>>>>>>> 56940ce3ce424147e2e18468ecadcd00d150155e
        © 2025 Vismay, All rights reserved
      </p>
    </div>
  );
};

export default Footer;
