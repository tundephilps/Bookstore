import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Avaliable from "../components/Avaliable";
import NavbarMobile from "../components/NavbarMobile";
import BookCoverSwiper from "../components/Slides";
import Discover from "../components/Discover";
import Midnight from "../components/Midnight";
import Testimonials from "../components/Testimonials";
import Comfort from "../components/Comfort";
import Subscribe from "../components/Subscribe";

const Homepage = () => {
  return (
    <div>
      <NavbarMobile />
      <Navbar />
      <Hero />

      <BookCoverSwiper />
      <Avaliable />
      <Discover />
      <Midnight />
      <Testimonials />
      <Comfort />
      <Subscribe />
    </div>
  );
};

export default Homepage;
