"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  HomeIcon,
  PhotoIcon,
  UsersIcon,
  TrophyIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  QuestionMarkCircleIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const navigationItems = [
  { label: "Home", href: "/", icon: HomeIcon },
  { label: "Gallery", href: "/gallery", icon: PhotoIcon },
  { label: "Partners", href: "/partners", icon: UsersIcon },
  { label: "Schedule", href: "/schedule", icon: CalendarDaysIcon },
  { label: "Our Team", href: "/humans", icon: UserGroupIcon },
    { label: "Contact", href: "/contact", icon: EnvelopeIcon },
];

const NavItem = ({ label, href, icon: Icon, isExpanded }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className="w-full">
      <div
        className={`group relative flex items-center gap-4 p-3 rounded-2xl 
          transition-all duration-300 ease-in-out
          ${pathname === href
            ? "bg-gradient-to-r from-[#ffffff1c] to-[#ffffff0a] text-white shadow-md"
            : "hover:bg-gradient-to-r hover:from-[#ffffff14] hover:to-[#ffffff0a] text-[#9A9A9A]"}`}
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <Icon className="w-7 h-7 text-white" />
        {isExpanded && (
          <p className="whitespace-nowrap text-lg font-semibold">{label}</p>
        )}
      </div>
    </Link>
  );
};

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Sidebar (Desktop) */}
      <nav className="fixed top-0 left-0 h-screen z-50 flex flex-col items-center xl:justify-start px-4 pt-8 bg-transparent">
        {/* Desktop Sidebar */}
        <div
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
          className="hidden xl:flex flex-col justify-start 
            px-3 py-6 rounded-[2rem] border-2 border-gray-800 
            bg-opacity-60 backdrop-blur-xl space-y-4 transition-all duration-300 
            bg-[#0e0e0e80]"
          style={{
            width: isExpanded ? "200px" : "70px", // Reduced width
            height: "430px", // Adjust height for padding
            marginTop: "7rem",
          }}
        >
          {navigationItems.map(({ label, href, icon }) => (
            <NavItem
              key={label}
              label={label}
              href={href}
              icon={icon}
              isExpanded={isExpanded}
            />
          ))}
        </div>
      </nav>

      <a
      id="GMC-Miraj"
      className="fixed top-6 right-6 z-50 w-[120px] min-w-[100px]"  // <-- Increased width
      href="https://www.gmcmiraj.edu.in/"
      target="_blank"
     >
      <Image
        src="/gmc miraj logo.png"
        alt="vismay logo"
        width={160} // <-- Optional: also increase this
        height={80}
        className="w-full hover:scale-110 transition-all duration-300 ease-in-out"
      />
     </a>

      {/* Mobile Hamburger */}
      <div className="fixed top-6 right-6 xl:hidden flex items-center justify-end z-50">
        <button
          id="menu-btn"
          aria-label="Toggle Menu"
          type="button"
          className="flex flex-col items-center justify-center space-y-1.5 
            w-10 h-10 border border-gray-700 rounded-full focus:outline-none"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-4 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="menu"
        className={`fixed inset-0 z-40 min-h-screen py-1 pt-16 px-8 backdrop-blur-lg transition-all duration-300 bg-[#090909cc] 
          ${isMenuOpen ? "block" : "hidden"}`}
      >
        <div
          className="flex flex-col self-end space-y-8 text-lg text-[#9d9d9d] 
            font-medium uppercase p-8 border-1 border-[#222] rounded-[2rem] 
            bg-[#090909] bg-opacity-80"
        >
          {navigationItems.map(({ label, href }) => (
            <Link
              href={href}
              key={label}
              className="hover:text-[#F5F5F5]"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
