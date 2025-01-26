import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterLinks = [
  {
    title: "E-commerce Marketing",
    link: "/#EcommerceMarketing",
  },
  {
    title: "Web Development",
    link: "/#WebDevelopment",
  },
  {
    title: "Digital Marketing",
    link: "/#DigitalMarketing",
  },
  {
    title: "Graphic Designing & Videos",
    link: "/#GraphicDesigningVideos",
  },
  {
    title: "Product Photography",
    link: "/#ProductPhotography",
  },
  {
    title: "Nykaa",
    link: "/#Nykaa",
  },
  {
    title: "Jio Mart",
    link: "/#JioMart",
  },
  {
    title: "Etsy",
    link: "/#Etsy",
  },
  {
    title: "Walmart",
    link: "/#Walmart",
  },
];
const HelpLinks = [
  {
    title: "56-57, Sheshadri Colony, Kila Maidan Road, Behind Police Petrol Pump, Indore, Madhya Pradesh 452006",
    link: "/#add",
  },
  {
    title: "📞 07969087700",
    link: "/#phone",
  },
  {
    title: "📧 care@evitamin.in (For seller enquiry)",
    link: "/#mail",
  }
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
  }
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
            e-commerce marketing, digital marketing, and website design and development services that create a measurable impact and endless opportunities.{" "}
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
                      <span>{link.title}</span>
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
                  {HelpLinks.map((link) => (
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
