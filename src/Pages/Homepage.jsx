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
import Follow from "../components/Follow";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="overflow-x-clip">
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
      <Follow />
      <Footer />
    </div>
  );
};

export default Homepage;
