import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-b py-6 md:flex-row">
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6 cursor-pointer">
            <div className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">
              About
            </div>
            <div className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">
              Careers
            </div>
            <div className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">
              Prices
            </div>
            <div className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">
              Blog
            </div>
          </nav>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <div className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
              <FaFacebook size={24} aria-label="Facebook" />
            </div>
            <div className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
              <FaTwitter size={24} aria-label="Twitter" />
            </div>
            <div className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
              <FaInstagram size={24} aria-label="Instagram" />
            </div>
            <div className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
              <FaLinkedin size={24} aria-label="LinkedIn" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-8 text-center text-sm text-gray-400">
          © 1800 - Present. XTRA All rights reserved. Cheers to great brews!
        </div>
      </footer>
    </div>
  );
};

export default Footer;
