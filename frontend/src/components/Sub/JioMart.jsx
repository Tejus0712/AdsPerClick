import React from "react";
import jioMart from "../../assets/sub/jioMart.png";

const JioMart = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={jioMart}
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
              <span className="text-primary">Jio Mart</span>
            </h1>
            <b className="mt-2 block" data-aos="fade-up" data-aos-delay="300">
              Jio Mart Account Management & Assistance
            </b>
            <p data-aos="fade-up" data-aos-delay="300">
              As Jiomart is one of the greatest eCommerce platforms, complying
              with the strict guidelines and standards of the platform, and
              standing out from competitors is indeed a challenging task. In
              this scenario, account management becomes crucial to achieving the
              objective. Our Account Management team manages your Jiomart
              account to help you hit your sales targets. We assist you in
              maintaining a healthy seller account on Jio Mart to scale your
              business. We don't want you to waste time on issues that will
              disrupt the flow of your operations, resulting in lost potential
              and revenue; hence, we ease out the processes and workflows for
              you. Our team helps you with everyday operations, account health
              management, deals, promotions, and pricing strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JioMart;
