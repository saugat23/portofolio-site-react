import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: 1, text: "About", href: "#about" },
    { id: 2, text: "Experience", href: "#experience" },
    { id: 3, text: "Projects", href: "#projects" },
    { id: 4, text: "Contact", href: "#contact" },
  ];

  return (
    <div className="flex flex-row items-center justify-between py-3 px-2 text-stone-300 font-mono shadow-lg">
      <div className="cursor-pointer ml-2 md:ml-4 lg:ml-8">
        <img src="./logo.png" alt="logo" className="w-14" loading="lazy" />
      </div>

      {/* Hamburger Icon for Small Screens */}
      <div className="block md:hidden lg:hidden xl:hidden 2xl:hidden">
        <button onClick={handleToggleMenu}>
          <svg
            className="w-6 h-6 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links for Medium and Large Screens */}
      <div className="hidden md:flex">
        <ul className="md:flex">
          {navLinks.map((link) => (
            <li key={link.id} className="md:inline pt-2 md:px-2 lg:px-4 lg:mr-8 md:mr-2">
              <a
                href={link.href}
                onClick={() => {
                  setMenuOpen(false);
                }}
                className="hover:text-emerald-400 text-sm lg:text-lg"
              >
                <span className="text-emerald-400 font-sans">{`0${link.id}. `}</span>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Full-Screen Side Panel */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 md:hidden z-10">
          <div className="flex flex-col items-center h-full w-1/2 ml-auto">
            {/* Close Button */}
            <button
              onClick={handleToggleMenu}
              className="text-white p-4 ml-auto cursor-pointer"
            >
              <svg
                className="w-6 h-6 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation Links */}
            <ul className="text-white mt-8">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="mb-8"
                >
                  <a
                    href={link.href}
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    className="hover:text-emerald-400"
                  >
                    <span className="text-emerald-400 font-sans">{`0${link.id}. `}</span>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
