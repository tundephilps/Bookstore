import React from "react";
import Follow1 from "../assets/images/follow1.jpg";

import Follow2 from "../assets/images/man.jpeg";
import Follow3 from "../assets/images/follow3.jpg";
import Follow4 from "../assets/images/follow4.jpg";
import Follow5 from "../assets/images/follow5.jpg";
import Follow6 from "../assets/images/follow6.jpg";
import Follow7 from "../assets/images/follow7.jpg";
import Follow8 from "../assets/images/follow8.jpg";

const Follow = () => {
  return (
    <div className="bg-[#f9f3ed] lg:py-32 py-12 lg:px-32 px-4 ">
      <p className="text-center lg:text-7xl text-4xl pb-20 pt-12">
        <span className="italic font-ibarra font-thin">Follow </span>{" "}
        <span className="font-bold font-serif">
          {" "}
          me on <br /> instagram
        </span>
      </p>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
        <img src={Follow1} className="h-[300px]" />

        <img src={Follow2} className="h-[300px] object-cover" />
        <img src={Follow3} className="h-[300px] object-cover" />
        <img src={Follow4} className="h-[300px] object-cover" />
        <img src={Follow5} className="h-[300px] object-cover" />
        <img src={Follow6} className="h-[300px] object-cover" />
        <img src={Follow7} className="h-[300px] object-cover" />
        <img src={Follow8} className="h-[300px] object-cover" />
      </div>
    </div>
  );
};

export default Follow;
