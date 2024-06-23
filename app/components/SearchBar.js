'use client';

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <form className="mt-4 w-4/5 mx-auto" onSubmit={handleSearchSubmit}>
      <div className="flex items-center bg-white rounded-full py-2 px-4 shadow-lg">
        <input
          type="text"
          className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
          placeholder="Search for recipes..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button
          type="submit"
          className="flex-shrink-0 text-gray-700 hover:text-teal-500 focus:outline-none"
        >
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
