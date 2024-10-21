import React from "react";

const Navbar = () => {
  return (
    <div className="lg:px-12 py-4 px-4">
      <div className=" lg:flex hidden flex-row items-center justify-between ">
        <div className="flex flex-row gap-4 font-semibold">
          <p>Home</p>
          <p>Video</p>
          <p>About</p>
        </div>
        <p className="text-3xl font-bold">MATT HAIG</p>
        <div className="flex flex-row gap-4 font-semibold">
          <p>Search </p>
          <p>Contact</p>
          <p>Subscribe</p>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center lg:gap-4 gap-1.5 pt-4 lg:text-sm text-xs font-semibold">
        <p>HOME</p>
        <p>BOOKS</p>
        <p>KIDS</p>
        <p>BUY</p>
        <p>NEWS</p>
        <p>INTERNATIONAL</p>
        <p>EVENTS</p>
      </div>
    </div>
  );
};

export default Navbar;
