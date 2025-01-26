import React from "react";
import yellowCar from "../../assets/website/team.png";
import "./hero.css"
const Hero = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white duration-300">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={yellowCar}
              alt=""
              className="w-full sm:max-w-[280px] md:max-w-[430px]"
            />
            <div
              data-aos="slide-right"
              className="absolute -bottom-5 -right-8 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 dark:text-white shadow-md"
            >
              <p className="text-gray-500 text-sm">⭐Projects</p>
              <h1 className="font-bold">
                10+ <span className="font-normal">Done</span>
              </h1>
            </div>
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              Why <br /> <span className="text-primary">AdsPerClick</span>
            </h1>
            <b className="mt-2 block" data-aos="fade-up" data-aos-delay="300">
              CREATE, INNOVATE, AND OPTIMIZE YOUR BUSINESS
            </b>
            <p data-aos="fade-up" data-aos-delay="300">
              We offer e-commerce, digital marketing, and website design and
              development services. We are the one-stop solution for all your
              business needs. We help your business flourish and tackle the
              fierce market competition with our years of expertise and a team
              of highly qualified professionals. We specialize in Amazon and
              Flipkart account management (All services), Digital Marketing
              (Social Media Marketing, PPC, SEO, Content Marketing, Video
              Marketing, Display ads), and website development (Shopify, UX/UI,
              WordPress).
            </p>
            <b className="mt-2 block" data-aos="fade-up" data-aos-delay="300">
              "We have solutions for all your online business requirements"
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
