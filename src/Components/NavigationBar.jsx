"use client";
import React, { useState } from "react";
import { NavLink } from "react-router";
import { FaPlay } from "react-icons/fa";


const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-[540px]  lg:max-w-[1160px] mx-auto mt-4 px-4 py-3 
             rounded-full border border-[#161AF2] 
             bg-[rgba(255,255,255,0.2)] 
             backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      {/* Navbar */}
      <nav className="flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/Assets/Logo (2).png"
            alt="krypo"
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-xl font-bold text-black">Krypo</h1>
        </div>

        {/* Center: Menu (hidden on small screens) */}
        <ul className="hidden md:flex gap-8 text-black font-normal">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#161AF2]" : "hover:text-[#161AF2]"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutUs"
              className={({ isActive }) =>
                isActive ? "text-[#161AF2]" : "hover:text-[#161AF2]"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/listings" className="hover:text-[#161AF2]">
              Listings
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="hover:text-[#161AF2]">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-[#161AF2]">
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Right: Language + Button (hidden on mobile) */}
        <div className="hidden md:flex gap-4 items-center">
          
          <div className="flex gap-2 items-center ">
          <p className="text-black">English</p>
            <FaPlay className="rotate-90"></FaPlay>
          </div>

          <button className="py-1 px-4 bg-[#161AF2] text-white rounded-lg hover:bg-[#0d0fa7] transition">
            Get a Quote
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ?  (

            

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-[#161AF2]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>



          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-[#161AF2]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className=" md:hidden mt-4 bg-white border border-gray-200 rounded-2xl shadow-lg p-4 space-y-3 text-center">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-[#161AF2]"
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutUs"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-[#161AF2]"
          >
            About Us
          </NavLink>
          <NavLink
            to="/listings"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-[#161AF2]"
          >
            Listings
          </NavLink>
          <NavLink
            to="/blog"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-[#161AF2]"
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-[#161AF2]"
          >
            Contact Us
          </NavLink>

          <button className="px-4 py-2 bg-[#161AF2] text-white rounded-lg mt-3">
            Get a Quote
          </button>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;
