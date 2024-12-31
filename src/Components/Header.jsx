import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import logo from "../Asstes/favicon-32x32.png";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="flex justify-between items-center p-5 bg-[#a0aecd]">
      {/* Logo */}
      <a href="#" className="font-bold">
        <img src={logo} alt="Logo" className="w-8 h-8" />
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex space-x-6 text-white">
          <li>
            <a href="*/" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#project" className="hover:text-gray-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#resume" className="hover:text-gray-300">
              Resume
            </a>
          </li>
          <li>
            <a href="#con" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="block md:hidden text-white"
        aria-label="Toggle navigation menu"
        aria-expanded={toggleMenu}
      >
        <IoMenuSharp size={24} />
      </button>

      {/* Mobile Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full h-full bg-[#1a1a2e] bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-white text-lg transition-transform duration-300 ${
          toggleMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul onClick={() => setToggleMenu(false)} className="text-center">
          <li>
            <a href="#" className="block py-2 hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="block py-2 hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#project" className="block py-2 hover:text-gray-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#resume" className="block py-2 hover:text-gray-400">
              Resume
            </a>
          </li>
          <li>
            <a href="#con" className="block py-2 hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
