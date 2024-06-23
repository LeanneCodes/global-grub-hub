'use client';

import { useState, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import CuisineGrid from './CuisineGrid';
import Navbar from './Navbar';
import Footer from './Footer';
import SearchBar from './SearchBar';  // Import the SearchBar component

export default function Layout({ children, homepage = false, title, description }) {
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
        {homepage ? (
          <section>
            <div className="flex flex-col items-center justify-center h-[70vh]">
              <h1 className="text-7xl md:text-9xl font-bold text-center">Make it Delicious</h1>
              <p className="mt-4 text-gray-700 px-10 text-center">
                Global Grub Hub is your top destination for exploring popular cuisines from
                around the world in one spot. Discover diverse international dishes, from
                Italian to Mexican, Indian to Chinese, and more. Find new recipes, culinary
                inspiration, and experience global flavors all in one place at Global Grub Hub.
              </p>
              <SearchBar onSearch={handleSearch} />
              <div
                className="mt-20 text-gray-700 animate-bounce cursor-pointer"
                onClick={handleArrowClick}
              >
                <FaChevronDown size={32} />
              </div>
            </div>
            <div ref={gridRef}>
              <CuisineGrid />
            </div>
          </section>
        ) : (
          <section className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-lg text-gray-700">{description}</p>
            <div id="recipe-list" className="space-y-4">
              {/* Placeholder for recipes */}
              <p className="text-lg text-gray-700">Recipes will be displayed here.</p>
            </div>
          </section>
        )}
        {children}
      </main>
      <Footer />
    </div>
  );
}
