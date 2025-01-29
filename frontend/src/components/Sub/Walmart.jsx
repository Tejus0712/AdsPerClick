import React from "react";
import walmart from "../../assets/sub/Walmart.png";

const Walmart = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={walmart}
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
              <span className="text-primary">WALMART</span>
            </h1>
            <b className="mt-2 block" data-aos="fade-up" data-aos-delay="300">
              Strategized Walmart Account Management Services
            </b>
            <p data-aos="fade-up" data-aos-delay="300">
              Our Walmart account management services help you scale your
              Walmart business. It can be confusing to manage your seller
              account while simultaneously taking care of all the other
              important tasks, which could delay the results. To resolve this
              chaotic situation, our experts plan, strategize, and handle your
              seller account so that your business is on track and profitable.
              Evitamin allows you to delegate account maintenance and Walmart
              account management to them, allowing you to look at the strategic
              aspects of your entire business rather than worrying about the
              eCommerce part. The best part of this service is that we not only
              guide you with pricing and offers but also scan the scope of
              expansion for you to list different lines and products. Our goal
              is to help you rank first on Walmart for all of your products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Walmart;
