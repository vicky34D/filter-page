import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeClassName = "bg-white bg-opacity-20 text-white rounded-md";
  const inactiveClassName = "text-gray-200 hover:bg-white hover:bg-opacity-10 hover:text-white";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-20 backdrop-blur-lg shadow-md border-b border-white border-opacity-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="text-2xl font-bold text-white">
            Filter<span className="text-cyan-400">Shop</span>
          </NavLink>

          <div className="hidden md:flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) => `${isActive ? activeClassName : inactiveClassName} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) => `${isActive ? activeClassName : inactiveClassName} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `${isActive ? activeClassName : inactiveClassName} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `${isActive ? activeClassName : inactiveClassName} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
            >
              Contact
            </NavLink>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink to="/" className={({ isActive }) => `${isActive ? activeClassName : inactiveClassName} block px-3 py-2 rounded-md text-base font-medium transition-colors`} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/shop" className={({ isActive }) => `${isActive ? activeClassName : inactiveClassName} block px-3 py-2 rounded-md text-base font-medium transition-colors`} onClick={() => setIsOpen(false)}>Shop</NavLink>
          <NavLink to="/about" className={({ isActive }) => `${isActive ? activeClassName : inactiveClassName} block px-3 py-2 rounded-md text-base font-medium transition-colors`} onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${isActive ? activeClassName : inactiveClassName} block px-3 py-2 rounded-md text-base font-medium transition-colors`} onClick={() => setIsOpen(false)}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
