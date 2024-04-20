"use client";
import React from "react";
import logoImage from "../../../public/images/tuanvo-favicon-white.png";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";
import iconTop from "../../../public/gifs/system-regular-arrow-up.gif";

const Footer = () => {
  // const router = useRouter();

  const scrollToTop = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer bg-black border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white p-12">
      <div className="container mx-auto flex justify-between items-center">
        <Image src={logoImage} alt="Logo" width={40} height={50} />
        <div className="flex items-center">
          <p className="text-white">All rights reserved.</p>
        </div>
        <Link
          className="ml-4 text-white focus:outline-none relative rounded-full"
          href="#"
          passHref
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <div className="absolute -top-4 -right-2 w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <Image src={iconTop} alt="Scroll to top" />
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
