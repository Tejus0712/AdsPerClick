import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/About/About.jsx";
import Home from "./components/Home/Home.jsx";
import Nykaa from "./components/Sub/Nykaa.jsx";
import Etsy from "./components/Sub/Etsy.jsx";
import JioMart from "./components/Sub/JioMart.jsx";
import Walmart from "./components/Sub/Walmart.jsx";
import Policies from "./components/Policies/Policies.jsx";
import Partners from "./components/Partners/Partners.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";


const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
        {/* Navbar and other global components */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />  {/* Define a Home component if not already done */}
          <Route path="/services/web-development" element={<Home />} />
          <Route path="/services/digital-marketing" element={<Home />} />
          <Route path="/services/video-and-product" element={<Home />} />
          <Route path="/services/nykaa" element={<Nykaa />} />
          <Route path="/services/jio-mart" element={<JioMart />} />
          <Route path="/services/etsy" element={<Etsy />} />
          <Route path="/services/wallmart" element={<Walmart />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer  />  
      </div>
    </Router>
  );
};

export default App;
