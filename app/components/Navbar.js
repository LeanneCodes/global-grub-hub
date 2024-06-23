'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-8" src="/logo.png" alt="Logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <div className="relative">
                  <button 
                    onClick={toggleDropdown} 
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Cuisine
                  </button>
                  {dropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg z-10">
                      <Link href="/cuisine/italian" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Italian</Link>
                      <Link href="/cuisine/mexican" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Mexican</Link>
                      <Link href="/cuisine/indian" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Indian</Link>
                      <Link href="/cuisine/chinese" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Chinese</Link>
                      {/* Add more cuisines as needed */}
                    </div>
                  )}
                </div>
                <Link href="/favourited-recipes" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Favourited Recipes</Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 p-2 rounded-md">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <div className="relative">
              <button 
                onClick={toggleDropdown} 
                className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Cuisine
              </button>
              {dropdownOpen && (
                <div className="mt-1 bg-white shadow-lg z-10">
                  <Link href="/cuisine/italian" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Italian</Link>
                  <Link href="/cuisine/mexican" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Mexican</Link>
                  <Link href="/cuisine/indian" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Indian</Link>
                  <Link href="/cuisine/chinese" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Chinese</Link>
                  {/* Add more cuisines as needed */}
                </div>
              )}
            </div>
            <Link href="/favourited-recipes" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium">Favourited Recipes</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
