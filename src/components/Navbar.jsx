import React from "react";

const Navbar = () => {
  return (
    <div className="px-4 lg:px-24 font-['Helvetica_Neue',_sans-serif] pt-4">
      {/* Top Navigation */}
      <div className="hidden lg:flex justify-between items-center pt-5 ">
        <div className="flex space-x-8">
          <p className="text-xs font-normal hover:text-gray-600 cursor-pointer">
            Home
          </p>
          <p className="text-xs font-normal hover:text-gray-600 cursor-pointer">
            Video
          </p>
          <p className="text-xs font-normal hover:text-gray-600 cursor-pointer">
            About
          </p>
        </div>

        <p className=" text-2xl text-gray-900 font-poppins  font-bold tracking-wide">
          MATT HAIG
        </p>

        <div className="flex space-x-8">
          <p className="text-xs font-normal hover:text-gray-600 cursor-pointer">
            Search
          </p>
          <p className="text-xs font-normal hover:text-gray-600 cursor-pointer">
            Contact
          </p>
          <p className="text-xs font-normal hover:text-gray-600 cursor-pointer">
            Subscribe
          </p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-center lg:pr-16  pr-0  py-4 font-public font-black">
        <div className="flex lg:space-x-8 space-x-2">
          <p className="text-xs font-bold lg:tracking-wider  tracking-tighter hover:text-gray-600 cursor-pointer">
            HOME
          </p>
          <p className="text-xs font-bold lg:tracking-wider tracking-tighter hover:text-gray-600 cursor-pointer">
            BOOKS
          </p>
          <p className="text-xs font-bold lg:tracking-wider tracking-tighter hover:text-gray-600 cursor-pointer">
            KIDS
          </p>
          <p className="text-xs font-bold lg:tracking-wider tracking-tighter hover:text-gray-600 cursor-pointer">
            BUY
          </p>
          <p className="text-xs font-bold lg:tracking-wider tracking-tighter hover:text-gray-600 cursor-pointer">
            NEWS
          </p>
          <p className="text-xs font-bold lg:tracking-wider tracking-tighter hover:text-gray-600 cursor-pointer">
            INTERNATIONAL
          </p>
          <p className="text-xs font-bold lg:tracking-wider tracking-tighter hover:text-gray-600 cursor-pointer">
            EVENTS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
