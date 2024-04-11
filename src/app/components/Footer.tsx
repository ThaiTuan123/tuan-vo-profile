import React from "react";
import logoImage from "../../../public/images/tuanvo-favicon-white.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Image src={logoImage} alt="Logo" width={40} height={50} />
        <p className="text-white">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
