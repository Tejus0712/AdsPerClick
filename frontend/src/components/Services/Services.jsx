import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "Innovative",
    icon: <FaCameraRetro className="text-4xl text-primary" />,
    link: "#",
    description:
      "Our dynamic professionals always stay motivated to help clients with the best strategies and innovative and unique ideas to ace business growth.",
    aosDelay: "0",
  },
  {
    name: "Creative",
    icon: <GiNotebook className="text-4xl text-primary" />,
    link: "#",
    description:
      "We work on the policy to INNOVATE. Our team is constantly working on creating new strategies to help clients' businesses grow and stand out.",
    aosDelay: "300",
  },
  {
    name: "Productive",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "We have a big team of qualified and skilled professionals whose expertise and knowledge will bring prominent and positive results to your business.",
    aosDelay: "500",
  },
  {
    name: "Responsive",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "Our team is dedicatedly working to resolving issues and queries. We work on the policy to get a solution to our client's problems within 2 working days.",
    aosDelay: "700",
  },
];
const Services = () => {
  return (
    <>
      <span id="inno"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
        

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* button */}
          {/* <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button className="primary-btn">Contact Us</button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Services;
