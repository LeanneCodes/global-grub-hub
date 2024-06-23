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
        <section className="flex flex-col items-center justify-center min-h-[80vh]">
          <h1 className="text-7xl md:text-9xl font-bold text-center">Make it Delicious</h1>
          <p className="mt-4 text-gray-200 px-10 text-center">
          Global Grub Hub is your top destination for exploring popular cuisines from
          around the world in one spot. Discover diverse international dishes, from
          Italian to Mexican, Indian to Chinese, and more. Find new recipes, culinary
          inspiration, and experience global flavors all in one place at Global Grub Hub.
          </p>
          <SearchBar onSearch={handleSearch} />  {/* Add the SearchBar component */}
        </section>
        <CuisineGrid />
        {children}
      </main>
    </div>
  );
}
