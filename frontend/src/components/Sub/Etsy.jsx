import React from "react";
import etsy from "../../assets/sub/Etsy.png";

const Etsy = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={etsy}
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
              <span className="text-primary">ETSY</span>
            </h1>
            <b className="mt-2 block" data-aos="fade-up" data-aos-delay="300">
              E-Commerce Assistance For Etsy, The Global Marketplace
            </b>
            <p data-aos="fade-up" data-aos-delay="300">
              Selling a great product and making one are two very different
              things. We wish to provide account management services so that we
              can help you sell your products while you create them. Etsy has
              over 5 million active buyers and 8 lakh sellers; to stand out in
              such a crowded marketplace, one must actively manage multiple
              things to keep the account intact and manage higher sales. At
              Evitamin, we not only take care of your account’s health but also
              look after clear communication, engagement, optimization,
              info-graphics, and all the details that contribute towards
              achieving your sales target. Our experts guide you with pricing,
              offers, new listings, order confirmation, and all the operations.
              We make strategies as per your buyer personas and accordingly
              craft clear messaging that depicts your brand voice because, to
              stand out in such a crowded marketplace, we need to be rooted in
              our brand’s identity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Etsy;
