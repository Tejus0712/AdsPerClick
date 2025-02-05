import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import {Link} from "react-router-dom"

const FooterLinks = [
  {
    title: "Web Development",
    link: "/services/web-development",
  },
  {
    title: "Digital Marketing",
    link: "/services/digital-marketing",
  },
  {
    title: "Graphic Designing & Videos",
    link: "/services/video-and-product",
  },
  {
    title: "Product Photography",
    link: "/services/video-and-product",
  },
  {
    title: "Nykaa",
    link: "/services/nykaa",
  },
  {
    title: "Jio Mart",
    link: "/services/jio-mart",
  },
  {
    title: "Etsy",
    link: "/services/etsy",
  },
  {
    title: "Walmart",
    link: "/services/wallmart",
  },
];
const HelpLinks = [
  {
    title:
      "56-57, Sheshadri Colony, Kila Maidan Road, Behind Police Petrol Pump, Indore, Madhya Pradesh 452006",
    link: null,
  },
  {
    title: "📞 07969087700",
    link: "/#phone",
  },
  {
    title: "📧 care@evitamin.in (For seller enquiry)",
    link: "/#mail",
  },
];
const ResourcesLinks = [
  {
    title: "Portfolio",
    link: "/#Portfolio",
  },
  {
    title: "Careers",
    link: "/#Careers",
  },
  {
    title: "Clients",
    link: "/#Clients",
  },
];
const Footer = () => {
  return (
    <div className="bg-dark text-white">
      <section className="container py-10">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              AdsPerClick
            </h1>
            <p className="text-sm">
              Helping Businesses Grow In The Digital Space! Serving top-notch
              e-commerce marketing, digital marketing, and website design and
              development services that create a measurable impact and endless
              opportunities.{" "}
            </p>
            <br />
            {/* Social Handle */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#">
                <FaInstagram className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="text-2xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Our Services
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                    >
                      {link.link ? (
                        <Link to={link.link}>{link.title}</Link>
                      ) : (
                        <span>{link.title}</span> 
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Contact Us
                </h1>
                <ul className="flex flex-col gap-3">
                  {HelpLinks.map((link) =>
                    link.link ? (
                      <li
                        key={link.title}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400"
                      >
                        <span>{link.title}</span>
                      </li>
                    ) : (
                      <li key={link.title} className="text-gray-400">
                        {link.title} {/* No hover effect */}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  INFORMATION
                </h1>
                <ul className="flex flex-col gap-3">
                  {ResourcesLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
