import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";

import "swiper/css/scrollbar";

// Import your book cover images

import Book1 from "../assets/images/book1.jpg";

import Book2 from "../assets/images/book2.webp";
import Book3 from "../assets/images/book3.jpg";

import Book4 from "../assets/images/book4.jpg";

const BookCoverSwiper = () => {
  return (
    <div className="lg:hidden block">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="py-12">
            <div className="bg-white p-2 h-[450px]">
              <img src={Book1} className="h-full shadow-2xl w-full" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-12">
            <div className="bg-white p-2 h-[450px]">
              <img src={Book2} className="h-full shadow-2xl w-full" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-12">
            <div className="bg-white p-2 h-[450px]">
              <img src={Book3} className="h-full shadow-2xl w-full" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-12">
            <div className="bg-white p-2 h-[450px]">
              <img src={Book4} className="h-full  shadow-2xl w-full" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BookCoverSwiper;
