'use client';

import CuisineGrid from './CuisineGrid';
import Navbar from './Navbar';
import SearchBar from './SearchBar';  // Import the SearchBar component

export default function Layout({ children }) {
  const handleSearch = (query) => {
    // Handle search logic here
    console.log('Searching for:', query);
  };

  return (
    <div>
      <Navbar />
      <main className="p-4">
        <section className="flex flex-col items-center justify-center min-h-[60vh]">
          <h1 className="text-4xl font-bold">Welcome to Our Recipe Collection</h1>
          <p className="mt-4 text-gray-200">Discover a variety of cuisines and find your favorite recipes.</p>
          <SearchBar onSearch={handleSearch} />  {/* Add the SearchBar component */}
        </section>
        <CuisineGrid />
        {children}
      </main>
    </div>
  );
}
