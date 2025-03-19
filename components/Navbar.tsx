"use client";  
import { NAV_LINKS } from "@/constants";  
import { useEffect, useState } from "react";  

const Navbar = () => {  
  const [isMenuOpen, setIsMenuOpen] = useState(false);  

  const toggleMenu = () => {  
    setIsMenuOpen(!isMenuOpen);  
  };  

  useEffect(() => {  
    if (isMenuOpen) {  
      document.body.style.overflow = "hidden";  
    } else {  
      document.body.style.overflow = "auto";  
    }  

    const handleScroll = (e: Event) => {  
      e.preventDefault();  
      const target = (e.target as HTMLAnchorElement).getAttribute("href");  
      if (target && target.startsWith("#")) {  
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
    <nav className="lg:sticky lg:top-0 flexBetween max-container padding-container z-30 py-5  
      lg:bg-white/10 lg:backdrop-blur-lg lg:border lg:border-white/20 lg:shadow-lg lg:rounded-xl">  
      
      <a href="/" className="text-xl text-gray-950">RideVerse</a>  

      {/* Desktop Navigation with Glass Effect */}
      <ul className="hidden h-full gap-12 lg:flex">  
        {NAV_LINKS.map((link) => (  
          <a  
            key={link.key}  
            href={link.href}  
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"  
          >  
            {link.label}  
          </a>  
        ))}  
      </ul>  

      {/* Mobile Navigation */}
      <button  
        className="flex flex-col justify-center items-center w-10 h-10 cursor-pointer lg:hidden focus:outline-none relative"  
        onClick={toggleMenu}  
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}  
      >  
        <span  
          className={`block w-7 h-0.5 bg-black rounded-sm absolute transition-all duration-700 ease-in-out ${
            isMenuOpen ? "transform rotate-45 translate-y-0" : "transform translate-y-[-6px]"
          }`}  
        ></span>  
        <span  
          className={`block w-7 h-0.5 bg-black rounded-sm absolute transition-all duration-700 ease-in-out ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}  
        ></span>  
        <span  
          className={`block w-7 h-0.5 bg-black rounded-sm absolute transition-all duration-700 ease-in-out ${
            isMenuOpen ? "transform -rotate-45 translate-y-0" : "transform translate-y-[6px]"
          }`}  
        ></span>  
      </button>  

      {/* Mobile Navigation Overlay */}  
      <div  
        className={`fixed inset-0 bg-white z-40 flex flex-col transition-transform duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}  
      >  
        <div className="flex justify-between items-center p-6">  
          <a href="/" className="text-xl text-gray-950">RideVerse</a>  
          <button  
            className="flex flex-col justify-center items-center w-10 h-10 cursor-pointer focus:outline-none relative"  
            onClick={toggleMenu}  
            aria-label="Close menu"  
          >  
            <span className="block w-7 h-0.5 bg-black rounded-sm absolute transform rotate-45 transition-all duration-700"></span>  
            <span className="block w-7 h-0.5 bg-black rounded-sm absolute opacity-0 transition-all duration-700"></span>  
            <span className="block w-7 h-0.5 bg-black rounded-sm absolute transform -rotate-45 transition-all duration-700"></span>  
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
