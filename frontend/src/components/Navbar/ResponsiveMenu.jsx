import React, { useState, useRef, useEffect } from "react";

const ResponsiveMenu = ({ showMenu, menuLinks, handleGetClick, closeMenu }) => {
  const [showSubmenu, setShowSubmenu] = useState(null);
  const menuRef = useRef(null); 
  const handleSubmenuToggle = (id) => {
    setShowSubmenu((prev) => (prev === id ? null : id));
  };
 
  const handleSubmenuItemClick = () => {
    closeMenu();
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu(); 
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeMenu,showSubmenu]);

  return (
    <div
      ref={menuRef} 
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md w-[75%] max-h-screen overflow-y-auto`}
      style={{ height: "calc(100vh - 100px)" }}
    >
      <nav className="mt-12">
        <ul className="space-y-4 text-xl">
          {menuLinks.map(({ id, name, link, submenu }) => (
            <li key={id} className="relative">
              <a
                href={submenu ? "#" : link}
                className="mb-5 inline-block w-full"
                onClick={(e) => {
                  e.stopPropagation(); 
                  if (submenu) {
                    e.preventDefault();
                    handleSubmenuToggle(id);
                  } else {
                    closeMenu();
                  }
                }}
              >
                {name}
              </a>

              {/* Submenu Section */}
              {submenu && showSubmenu === id && (
                <ul className="ml-4 mt-2 space-y-2 text-lg bg-gray-100 p-2 rounded-md">
                  {submenu.map(({ name, path }) => (
                    <li key={name}>
                      <a
                        href={path}
                        className="block px-4 py-2 hover:bg-gray-200 rounded-md"
                        onClick={handleSubmenuItemClick}
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      {/* Add Get in Touch button for mobile view */}
      <button
        className="primary-btn get-in-touch-btn mt-8 w-full py-2 bg-primary text-white rounded-md"
        onClick={handleGetClick}
      >
        Get in Touch
      </button>
    </div>
  );
};

export default ResponsiveMenu;
