import React from "react";
import nykaa from "../../assets/sub/nykaa.png";

const Nykaa = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={nykaa}
              alt=""
              className="w-full sm:max-w-[280px] md:max-w-[430px]"
            />
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              <span className="text-primary">NYKAA</span>
            </h1>
            <b className="mt-2 block" data-aos="fade-up" data-aos-delay="300">
              Complete Marketing Assistance On India's Biggest Beauty
              Destination
            </b>
            <p data-aos="fade-up" data-aos-delay="300">
              We help you become eCommerce-ready and gear you up for sales by
              creating interesting, educational, and genuine content. Our
              experts at Evitamin assist you in increasing your brand's
              visibility, sales, and awareness on Nykaa. We produce clear
              product descriptions that explain your product, infographics,
              pictures, and videos that are visually appealing and interesting.
              The skilled internal team of content writers, video editors, and
              graphic designers deliberately aligns their efforts to support you
              in achieving your goal. We ensure that your e-commerce platform is
              attractive and keyword-optimized so your target market can find
              your products easily. We strategically highlight features,
              advantages, and comparison tables to make your product stand out
              from the competition. Our objective is to help you achieve your
              goal by working tirelessly on your behalf.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nykaa;
