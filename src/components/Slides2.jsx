import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";

// Import your book cover images

import Book5 from "../assets/images/book5.jpg";
import Book6 from "../assets/images/book6.jpg";

import Book7 from "../assets/images/book7.jpg";

const BookCoverSwiper2 = () => {
  return (
    <div className="lg:block">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Scrollbar]}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="">
            <p className="pb-4 font-bold">01</p>
            <div className="bg-white lg:p-12 p-2 h-[450px]">
              <img src={Book5} className="h-full w-full shadow-2xl" />
            </div>

            <p className="text-black font-extrabold pt-3">The humans</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <p className="pb-4 font-bold">02</p>
            <div className="bg-white lg:p-12 p-2 h-[450px]">
              <img src={Book6} className="h-full w-full shadow-2xl" />
            </div>

            <p className="text-black font-extrabold pt-3">The radleys</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" ">
            <p className="pb-4 font-bold">03</p>
            <div className="bg-white lg:p-12 p-2 h-[450px]">
              <img src={Book7} className="h-full w-full shadow-2xl" />
            </div>

            <p className="text-black font-extrabold pt-3">The possesed</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BookCoverSwiper2;
