import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Man from "../assets/images/man.png";

const Subscribe = () => {
  return (
    <section className="">
      <div className=" mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex ">
        <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:px-12 lg:ml-12 py-12">
          <h2 className="lg:text-6xl text-4xl text-gray-800 font-extrabold">
            <span className="italic font-normal">Subscribe</span>{" "}
            <span className="font-serif font-bold">to my newsletter </span>
          </h2>
          <div className="h-14 border flex flex-row items-center px-4 justify-between">
            <input
              placeholder="Your email"
              className="border-none outline-none"
            />
            <BsArrowRight className="text-black" />
          </div>
          <p className="text-black text-xs font-bold">
            By Signing Up You Agree With Our{" "}
            <span className="underline">Terms & Conditions</span> And{" "}
            <span className="underline">Privacy Policy. </span> To Opt Out,
            Click Unsubscribe in My Emails.
          </p>
        </div>
        <div className="flex-none mt-14 md:mt-0 lg:w-[47%] w-full">
          <img src={Man} alt="" className="" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
