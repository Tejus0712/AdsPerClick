import React from "react";

const AboutUs = () => {
  return (
    <>
    <span id="about"></span>
    <div className="dark:bg-gray-950 dark:text-white duration-300">
      <div className="container min-h-[450px] flex mt-10 sm:mt-0">
      <div className="text-center space-y-4 mx-auto mt-8">
          <h1
            data-aos="fade-up"
            className="text-4xl sm:text-5xl font-semibold"
            style={{ lineHeight: 1.2 }}
            
          >
            About <span className="text-primary">AdsPerClick</span>
          </h1>

          <p data-aos="fade-up" data-aos-delay="300">
            AdsPerClick, an E-commerce, digital marketing, and website design
            and development service provider based in Indore. We have set a
            benchmark and mastered our skills. We are diligently assisting
            with website design and development, e-commerce marketing, social
            media marketing, SEO, PPC, SEM, content marketing, video
            advertising, branding solutions, and more.
          </p>
          <p data-aos="fade-up" data-aos-delay="300">
            Since 2015, we’ve built trusted partnerships with an extraordinary
            roster of startups, SMEs, and large enterprises and helped them
            tell business stories, move hearts, get recognized, and drive
            results. We devour time in intensely comprehending the business,
            recognizing key speaking points and ultimately creating emphatic
            business plans and strategies.
          </p>
          <p data-aos="fade-up" data-aos-delay="300">
            In brief, we have solutions for all your online business
            requirements. We believe in delivering what we promise, and we
            never compromise on quality. We strategically formulated digital
            marketing solutions that will help businesses stay ahead of the
            competition. Our focus is on deploying our creative excellence in
            creating powerful core visualization. We expend time to intensely
            understand the business, identify key speaking points, and
            finally create powerful business ideation and strategies. We
            formulate strategies to make digital marketing the best route to
            drive business for our clients.
          </p>
          <b
            className="mt-2 block"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            "We have solutions for all your online business requirements"
          </b>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
