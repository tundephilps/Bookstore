import React from "react";
import Book9 from "../assets/images/book9.jpg";
import Book2 from "../assets/images/book2.webp";
import Book8 from "../assets/images/book8.jpeg";

const Comfort = () => {
  return (
    <div className="bg-[#f9f3ed] w-full h-full py-12 lg:pb-44 pb-12">
      <div className="text-center pb-12 lg:pt-36 pt-2">
        <p className="font-semibold font-inter">NUMBER ONE BESTSELLER</p>
        <p className="lg:text-6xl text-4xl ">
          <span className="italic "> The</span>{" "}
          <span className="font-serif font-semibold">
            {" "}
            comfort book is
            <br /> out now
          </span>
        </p>
      </div>
      <div className="w-full px-24 flex lg:flex-row flex-col  gap-12 items-center justify-between">
        <div className="bg-transparent pt-20">
          <p className="font-bold pb-4">01</p>
          <div className="bg-white h-[330px] w-[250px] p-8">
            <img src={Book9} className="shadow-2xl shadow-black" />
          </div>
          <p className="font-bold pt-4 text-[25px] font-ibarra">UK edition</p>
        </div>
        <div className="">
          <p className="font-bold pb-4">02</p>
          <div className="bg-white h-[500px] lg:w-[400px] w-[350px] p-12">
            <img
              src={Book2}
              className="shadow-2xl h-full w-full shadow-black"
            />
          </div>

          <p className="font-bold pt-4 text-[25px] font-ibarra">
            American edition
          </p>
        </div>{" "}
        <div className="pb-8">
          <p className="font-bold pb-4">03</p>
          <div className="bg-white h-[330px] w-[250px] p-8">
            <img src={Book8} className="shadow-2xl shadow-black" />
          </div>

          <p className="font-bold pt-4 text-[25px] font-ibarra">
            Canadian edition
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comfort;
