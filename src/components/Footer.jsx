import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="pt-10 bg-[rgb(31,30,44)]">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 ">
          <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-12 lg:items-center items-start  justify-between py-12">
            <div>
              <p className="text-gray-100 font-inter">SAY HELLO</p>
              <h1 className="lg:text-7xl text-3xl text-gray-100 font-serif font-medium">
                Hello@matthaig.com
              </h1>
            </div>

            <div className="flex  lg:flex-row flex-col gap-28 text-gray-100 ">
              <div>
                <p className="mb-6 font-inter">SAMARITANS</p>
                <p className="pb-2">jo@smamritans.org</p>
                <p className="font-mono">0300 123 3393</p>
              </div>
              <div>
                <p className="mb-6 font-inter">MIND INFOLINE</p>
                <p className="pb-2">info@mind.org.uk</p>
                <p className="font-mono">0808 802 5544</p>
              </div>
            </div>
          </div>

          <div className="mt-10 py-7 border-t border-gray-700 items-center justify-between sm:flex">
            <p className="text-gray-300 text-sm">
              Copyright © 2023 - Matt Haig. All rights reserved.
            </p>
            <div className="flex items-center gap-x-6 text-gray-400 mt-6">
              <a href="javascript:void()">
                <FaFacebookF className="text-white" />
              </a>
              <a href="javascript:void()">
                <FaTwitter className="text-white" />
              </a>
              <a href="javascript:void()">
                <FaInstagram className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
