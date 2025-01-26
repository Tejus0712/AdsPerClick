import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/website/logo.png";
import DarkMode from "./DarkMode";
import { useNavigate } from 'react-router-dom';
import "./Navbar.css"

export const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    // link: "/#services",
    submenu: [
      { name: "Web Development", path: "/services/web-development" },
      { name: "Digital Marketing", path: "/services/digital-marketing" },
      { name: "Video and Product", path: "/services/video-and-product" },
      { name: "Nykaa", path: "/services/nykaa" },
      { name: "Jio Mart", path: "/services/jio-mart" },
      { name: "Etsy", path: "/services/etsy" },
      { name: "Wallmart", path: "/services/wallmart" },
    ],
  },
  {
    id: 3,
    name: "Partners",
    link: "/partners",
  },
  {
    id: 4,
    name: "About",
    link: "/#about",
  },
  {
    id: 5,
    name: "Policies",
    link: "/Policies",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const navigate = useNavigate();

  

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleGetClick = () =>{
    navigate("/contact-us")
  }

  const handleSubmenuToggle = () => {
    setShowSubmenu(!showSubmenu);
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest(".submenu") && !e.target.closest(".services")) {
      setShowSubmenu(false);
    }
  };

  React.useEffect(() => {
    // Attach event listener to detect clicks outside
    document.addEventListener("click", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-10 w-full dark:bg-black dark:text-white duration-300">
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <a target="_blank" href="" className="flex items-center gap-3">
            <img src={Logo} alt="" className="w-49 h-20" />
          </a>
          {/* Desktop view Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {MenuLinks.map(({ id, name, link, submenu }) => (
                <li
                  key={id}
                  className="relative py-4 services"
                  onClick={submenu ? handleSubmenuToggle : null} // Toggle submenu on click for "Services"
                >
                  <a
                    href={link}
                    className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                    {name}
                  </a>
                  {submenu && showSubmenu && (
                    <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded-md w-48 mt-2 submenu">
                      <ul>
                        {submenu.map(({ name, path }) => (
                          <li key={name}>
                            <a
                              href={path}
                              className="block px-4 py-2 hover:bg-gray-200"
                            >
                              {name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
              <button className="primary-btn get-in-touch-btn" onClick={handleGetClick}>
                Get in Touch
              </button>
              <DarkMode />
            </ul>
          </nav>
          {/* Mobile view Drawer */}
          <div className="flex items-center gap-4 md:hidden">
            <DarkMode />
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
