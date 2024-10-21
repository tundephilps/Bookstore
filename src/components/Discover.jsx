import React from "react";
import BookCoverSwiper2 from "./Slides2";

const Discover = () => {
  return (
    <div>
      <div className="w-full lg:h-[120vh] h-full grid lg:grid-cols-2 grid-cols-1 bg-[#f7e6d2]">
        <div className=" mt-36 px-12">
          <p className="text-7xl ">
            {" "}
            <span className="italic">Discover all</span>
            <span className="font-serif font-extrabold">
              {" "}
              my books you were looking for
            </span>
          </p>
          <p className="w-[60%] font-semibold pt-4">
            Its December, A Month Of Love And Lights, But Also A Busy Month Of
            Christmas Shopping. We Made It Easy For You.
          </p>
          <p className="underline font-bold pt-24">VIEW ALL 32</p>
        </div>
        <div className="my-28">
          <BookCoverSwiper2 />
        </div>
      </div>
    </div>
  );
};

export default Discover;
