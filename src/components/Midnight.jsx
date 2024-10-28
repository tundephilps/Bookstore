import React from "react";
import hand from "../assets/images/hand.png";

const Midnight = () => {
  return (
    <div>
      <div className="w-full lg:full grid lg:grid-cols-2 grid-cols-1 bg-[#ffffff] text-gray-800">
        <div className="h-full">
          <img src={hand} className="w-full h-full object-cover" />
        </div>
        <div className="py-16 lg:px-24 px-6">
          <p className="lg:text-7xl text-5xl font-serif font-bold">
            The midnight library{" "}
            <span className="italic font-thin">the no.1 sunday times </span>{" "}
            bestseller
          </p>
          <p className="w-[65%] font-bold pt-4 ">
            Nore's Life Has Been Going From Bad To Worse. Then At The Stroke Of
            Midnight On Her Last Day On Earth She Finds Herself Transported To A
            Library.
          </p>
          <p className="underline font-bold pt-24">VIEW MORE</p>
        </div>
      </div>
    </div>
  );
};

export default Midnight;
