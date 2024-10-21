import React from "react";

import Book1 from "../assets/images/book1.jpg";

import Book2 from "../assets/images/book2.webp";
import Book3 from "../assets/images/book3.jpg";

import Book4 from "../assets/images/book4.jpg";

const Hero = () => {
  return (
    <div className=" lg:h-[100vh] h-[60vh] w-full bg-[#f7e6d2] relative">
      <div className="flex flex-col gap-4 items-center justify-center text-center h-full text-[#232323] pb-16">
        <p
          className="lg:text-7xl text-7xl font-serif italic"
          data-aos="zoom-in-up"
        >
          The Sunday Times
        </p>
        <p
          className="lg:text-7xl font-serif font-extrabold"
          data-aos="fade-down"
        >
          Number One Bestseller
        </p>
      </div>

      <div className="lg:absolute  top-[65%] w-full z-10 space-y-4">
        <div className=" lg:grid hidden lg:grid-cols-4 grid-cols-1 gap-8 ">
          <div className="mt-12 " data-aos="flip-left">
            <p className="pb-4 font-bold">NEWS</p>
            <div className="bg-white p-12  h-[450px]">
              <img src={Book1} className="h-full shadow-2xl" />
            </div>
            <p className="text-white font-medium pt-3">How to Stop time</p>
            <p className="text-white pt-4 text-xs">3 min read</p>
            <p className="text-white italic">April 2020</p>
          </div>

          <div className=" " data-aos="flip-right">
            <p className="pb-4 font-bold">NEWS</p>
            <div className="bg-white p-12 h-[450px]">
              <img src={Book2} className="h-full shadow-2xl" />
            </div>

            <p className="text-white font-medium pt-3">The comfort book</p>
            <p className="text-white pt-4 text-xs">3 min read</p>
            <p className="text-white italic">April 2020</p>
          </div>

          <div className="mt-12 " data-aos="flip-left">
            <p className="pb-4 font-bold">NEWS</p>
            <div className="bg-white p-12 h-[450px]">
              <img src={Book3} className="h-full shadow-2xl" />
            </div>

            <p className="text-white font-medium pt-3">The humans</p>
            <p className="text-white pt-4 text-xs">3 min read</p>
            <p className="text-white italic">April 2020</p>
          </div>

          <div className="" data-aos="flip-right">
            <p className="pb-4 font-bold">NEWS</p>
            <div className="bg-white p-12 h-[450px]">
              <img src={Book4} className="h-full w-full shadow-2xl" />
            </div>

            <p className="text-white font-medium pt-3">Reason to stay alive</p>
            <p className="text-white pt-4 text-xs">3 min read</p>
            <p className="text-white italic">April 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
