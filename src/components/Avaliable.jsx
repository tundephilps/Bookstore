import React from "react";
import Company1 from "../assets/images/company1.png";

import Company2 from "../assets/images/company2.png";

import Company3 from "../assets/images/company3.png";
import Company33 from "../assets/images/company33.png";

import Company4 from "../assets/images/company4.png";
import Company5 from "../assets/images/company5.png";

const Avaliable = () => {
  return (
    <>
      <div className="lg:h-[80vh] h-12 bg-[rgb(31,30,44)] "></div>
      <div className="h-[50vh]  bg-[rgb(31,30,44)] w-full ">
        <div className="lg:py-12 py-4 w-full">
          <div className="lg:px-16  px-4 md:px-8">
            <h3 className="font-semibold text-2xl text-gray-100 lg:text-5xl  text-center ">
              <span className="italic font-thin">Books </span>
              <span className="font-serif">are avaliable on </span>
            </h3>
            <div className="mt-16">
              <ul
                className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center lg:space-x-8"
                data-aos="zoom-in"
              >
                {/* LOGO 1 */}
                <li>
                  <img src={Company1} className="lg:w-44 w-24 lg:pt-3 pt-0" />
                </li>

                {/* LOGO 2 */}
                <li>
                  <img src={Company2} className="lg:w-44 w-24 object-contain" />
                </li>

                {/* LOGO 3 */}
                <li>
                  <img src={Company3} className="lg:w-40 w-24" />
                </li>

                {/* LOGO 4 */}
                <li>
                  <img src={Company4} className="lg:w-44 w-24" />
                </li>

                <li>
                  <img src={Company5} className="lg:w-44 w-24" />
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
