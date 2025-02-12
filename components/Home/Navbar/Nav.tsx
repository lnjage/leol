"use client"
import React, { useState, useEffect } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { navLinks } from '@/constant/Constant';
import Link from 'next/link';


type Props = {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {

  const [navBg, setNavBg] = useState(false);
  const [isClient, setIsClient] = useState(false); // Track if the component is mounted on the client

  useEffect(() => {
    setIsClient(true); // Set to true after the component mounts on the client

    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  // Only render the Nav component once it's mounted on the client (avoid SSR issues with window)
  if (!isClient) {
    return null; // Optionally, you can return a loading state here
  }

  return (
    <div className={`fixed ${navBg ? "bg-blue-50 shadow-md" : "fixed"} w-full transition-all duration-200 h-[12vh] z-[1000]`}>
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <h1 className="text-xl md:text-2xl font-bold">
          <span className="text-3xl md:text-4xl text-pink-700">L</span>eol
        </h1>

        {/* NavLinks */}
        <div className="hidden lg:flex items-center space-x-10">
           {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p className="nav__link">{link.label}</p> {/* Apply nav__link directly on the <a> */}
              </Link>
            );
  })}
</div>

        {/* Burger Menu */}
        <div className="flex items-center space-x-4">
          <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-black lg:hidden" />

        </div>
        </div>
      </div>
    
  );
};

export default Nav;
