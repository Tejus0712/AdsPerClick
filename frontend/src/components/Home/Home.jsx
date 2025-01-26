import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import AboutUs from "../About/About";
import BlogsComp from "../Blogs/BlogsComp";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
        <Hero />
        {/* <BrandsLogo /> */}
        <Services />
        <AboutUs />
        <BlogsComp />
        {/* <Testimonial /> */}
    </div>
  );
};

export default Home;