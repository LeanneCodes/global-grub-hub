'use client';

import { useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import CuisineGrid from './CuisineGrid';
import Navbar from './Navbar';
import Footer from './Footer';
import SearchBar from './SearchBar';  // Import the SearchBar component

export default function HomeLayout({ children }) {
  const gridRef = useRef(null);  // Create a ref for the cuisine grid

  const handleSearch = (query) => {
    // Handle search logic here
    console.log('Searching for:', query);
  };

  const handleArrowClick = () => {
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4">
        <section>
          <div className="flex flex-col items-center justify-center min-h-[90vh]">
            <h1 className="text-7xl md:text-9xl font-bold text-center text-white">Make it Delicious</h1>
            <p className="my-12 text-xl md:text-2xl text-gray-200 sm:px-12 md:px-40 text-center">
              Global Grub Hub is your top destination for exploring popular cuisines from
              around the world in one spot. Discover diverse international dishes, from
              Italian to Mexican, Indian to Chinese, and more. Find new recipes, culinary
              inspiration, and experience global flavors all in one place at Global Grub Hub.
            </p>
            <SearchBar onSearch={handleSearch} />
            <div
              className="mt-20 text-gray-200 animate-bounce cursor-pointer"
              onClick={handleArrowClick}
            >
              <FaChevronDown size={32} />
            </div>
          </div>
          <div ref={gridRef}>
            <CuisineGrid />
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </div>
  );
}
