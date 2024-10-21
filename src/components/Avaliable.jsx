import React from "react";
import Logo from "../assets/images/logo.png";

import Logo1 from "../assets/images/logo1.png";

import Logo2 from "../assets/images/logo2.png";

import Logo3 from "../assets/images/logo3.png";

import Logo4 from "../assets/images/logo4.png";

const Avaliable = () => {
  return (
    <>
      <div className="lg:h-[80vh] h-12 bg-[#1a1a2e]"></div>
      <div className="h-[50vh] bg-[#1a1a2e] w-full">
        <div className="lg:py-14 py-4 w-full">
          <div className="lg:px-16  px-4 md:px-8">
            <h3 className="font-semibold text-2xl text-gray-100 lg:text-5xl font-mono text-center uppercase">
              Books are avaliable on
            </h3>
            <div className="mt-6">
              <ul
                className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16"
                data-aos="zoom-in"
              >
                {/* LOGO 1 */}
                <li>
                  <img src={Logo} className="w-28" />
                </li>

                {/* LOGO 2 */}
                <li>
                  <img src={Logo2} className="w-28" />
                </li>

                {/* LOGO 3 */}
                <li>
                  <img src={Logo1} className="w-28" />
                </li>

                {/* LOGO 4 */}
                <li>
                  <img src={Logo3} className="w-28" />
                </li>
                <li>
                  <img src={Logo4} className="w-28" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Avaliable;
