"use client";

import { NAV_LINKS } from "@/constants";
import { useEffect, useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    const handleScroll = (e: Event) => {
      e.preventDefault();
      const target = (e.target as HTMLAnchorElement).getAttribute("href");
      if (target?.startsWith("#")) {
        const element = document.getElementById(target.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setIsMenuOpen(false);
        }
      }
    };

    document.querySelectorAll("nav a").forEach((link) => {
      link.addEventListener("click", handleScroll);
    });

    return () => {
      document.querySelectorAll("nav a").forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <nav className="lg:sticky lg:top-0 z-30 py-5 flexBetween max-container padding-container lg:bg-white/10 lg:backdrop-blur-lg lg:border lg:border-white/20 lg:shadow-lg lg:rounded-xl">
      <a href="/" className="flex items-center">
      <Image
  src="/rideverse.png"
  alt="RideVerse Logo"
  height={40} // Adjust height to suit your UI
  width={0}   
  className="object-contain max-h-12 w-auto"
/>

      </a>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex h-full gap-12">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <a
              href={link.href}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center focus:outline-none"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <span
          className={`block w-7 h-0.5 bg-black rounded-sm absolute transition-all duration-700 ease-in-out ${
            isMenuOpen ? "rotate-45 translate-y-0" : "translate-y-[-6px]"
          }`}
        />
        <span
          className={`block w-7 h-0.5 bg-black rounded-sm absolute transition-all duration-700 ease-in-out ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block w-7 h-0.5 bg-black rounded-sm absolute transition-all duration-700 ease-in-out ${
            isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-[6px]"
          }`}
        />
      </button>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col transition-transform duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6">
        <a href="/" className="flex items-center">
    <Image
      src="/rideverse.png"
      alt="RideVerse Logo"
      height={40}
      width={0}
      className="object-contain w-auto max-h-10"
    />
  </a>
          <button
            className="w-10 h-10 relative flex flex-col justify-center items-center focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <span className="block w-7 h-0.5 bg-black rounded-sm absolute rotate-45 transition-all duration-700" />
            <span className="block w-7 h-0.5 bg-black rounded-sm absolute opacity-0 transition-all duration-700" />
            <span className="block w-7 h-0.5 bg-black rounded-sm absolute -rotate-45 transition-all duration-700" />
          </button>
        </div>

        <ul className="flex flex-col items-center justify-center gap-8 mt-10">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <a
                href={link.href}
                className="text-xl font-medium text-gray-900 hover:text-gray-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
