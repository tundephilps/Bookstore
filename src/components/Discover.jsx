import React from "react";
import BookCoverSwiper2 from "./Slides2";
import Line from "../assets/images/Line 1.png";

const Discover = () => {
  return (
    <div className="relative">
      <div className="w-full lg:h-full pb-64 h-full grid lg:grid-cols-10 gap-24 grid-cols-1 bg-[#f9f3ed]">
        <div className=" lg:mt-56 mt-12 lg:pl-20 pl-4 lg:col-span-4 col-span-1">
          <p className="text-6xl ">
            {" "}
            <span className="italic  tracking-tighter">Discover all</span>
            <span className="font-serif font-extrabold">
              {" "}
              my books you were looking for
            </span>
          </p>
          <p className="w-[65%] font-semibold pt-4">
            Its December, A Month Of Love And Lights, But Also A Busy Month Of
            Christmas Shopping. We Made It Easy For You.
          </p>
          <p className="underline font-bold pt-24">VIEW ALL 32</p>
        </div>
        <div className="lg:pt-56 lg:col-span-6 col-span-1">
          <BookCoverSwiper2 />
        </div>
      </div>
      <div>
        <div className="h-[2px] bg-black w-[300px] absolute bottom-[18%] left-[43%] lg:block hidden" />
        <img
          src={Line}
          className="w-full absolute bottom-[18%] lg:block hidden"
        />
      </div>
    </div>
  );
};

export default Discover;
