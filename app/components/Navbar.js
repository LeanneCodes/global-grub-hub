import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <nav className="bg-orange-500 md:rounded-b-lg shadow-lg h-[100px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" passHref>
                <img className="h-auto w-60 cursor-pointer mt-1" src="/logo.png" alt="Global Grub Hub Logo" />
              </Link>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/" className="text-white hover:scale-105 hover:animate-shake px-3 py-2 rounded-md font-medium text-xl">Home</Link>
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={toggleDropdown} 
                className="text-white hover:scale-105 hover:animate-shake px-3 py-2 rounded-md font-medium text-xl"
              >
                Cuisine
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-orange-500 rounded z-50">
                  <Link href="/cuisine/italian" className="block px-4 py-2 text-white hover:text-gray-800 text-lg">Italian</Link>
                  <Link href="/cuisine/mexican" className="block px-4 py-2 text-white hover:text-gray-800 text-lg">Mexican</Link>
                  <Link href="/cuisine/indian" className="block px-4 py-2 text-white hover:text-gray-800 text-lg">Indian</Link>
                  <Link href="/cuisine/chinese" className="block px-4 py-2 text-white hover:text-gray-800 text-lg">Chinese</Link>
                  <Link href="/cuisine/japanese" className="block px-4 py-2 text-white hover:text-gray-800 text-lg">Japanese</Link>
                  <Link href="/cuisine/spanish" className="block px-4 py-2 text-white hover:text-gray-800 text-lg">Spanish</Link>
                  <Link href="/cuisine/thai" className="block px-4 py-2 text-white hover:text-gray-800 text-lg">Thai</Link>
                  <Link href="/cuisine/french" className="block px-4 py-2 text-white hover:text-gray-800 text-lg">French</Link>
                </div>
              )}
            </div>
            <Link href="/favourited-recipes" className="text-white hover:scale-105 hover:animate-shake px-3 py-2 rounded-md font-medium text-xl">Favourited Recipes</Link>
          </div>
          <div className="flex md:hidden z-50">
            <button onClick={toggleMenu} className="bg-orange-500 text-white p-2 rounded-md">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-orange-500 z-50 relative">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-white hover:text-gray-800 px-3 py-2 rounded-md font-medium text-xl">Home</Link>
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={toggleDropdown} 
                className="block text-white hover:text-gray-800 px-3 py-2 rounded-md font-medium w-full text-left text-xl"
              >
                Cuisine
              </button>
              {dropdownOpen && (
                <div className="mt-1 bg-orange-500 z-50 relative">
                  <Link href="/cuisine/italian" className="block px-4 py-2 text-white hover:text-gray-800 text-lg">Italian</Link>
                  <Link href="/cuisine/mexican" className="block px-4 py-2 text-white hover:text-gray-800 text-lg">Mexican</Link>
                  <Link href="/cuisine/indian" className="block px-4 py-2 text-white hover:text-gray-800 text-lg">Indian</Link>
                  <Link href="/cuisine/chinese" className="block px-4 py-2 text-white hover:text-gray-800 text-lg">Chinese</Link>
                  <Link href="/cuisine/japanese" className="block px-4 py-2 text-white hover:text-gray-800 text-lg">Japanese</Link>
                  <Link href="/cuisine/spanish" className="block px-4 py-2 text-white hover:text-gray-800 text-lg">Spanish</Link>
                  <Link href="/cuisine/thai" className="block px-4 py-2 text-white hover:text-gray-800 text-lg">Thai</Link>
                  <Link href="/cuisine/french" className="block px-4 py-2 text-white hover:text-gray-800 text-lg">French</Link>
                </div>
              )}
            </div>
            <Link href="/favourited-recipes" className="block text-white hover:text-gray-800 px-3 py-2 rounded-md font-medium text-xl">Favourited Recipes</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
