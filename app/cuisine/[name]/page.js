'use client';

import { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import cuisines from '@/app/data/cuisines';
import CuisineLayout from '@/app/components/CuisineLayout';
import { fetchRecipes } from '@/app/api/Tasty';
import Modal from '@/app/components/Modal';

const CuisinePage = ({ params }) => {
  const { name } = params;
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalRecipe, setModalRecipe] = useState(null);

  const recipesPerPage = 12;

  const cuisine = cuisines.find(cuisine => cuisine.name.toLowerCase() === name.toLowerCase());

  useEffect(() => {
    if (cuisine) {
      fetchRecipes(name).then(setRecipes);
    }
  }, [name, cuisine]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleFavorite = (recipe) => {
    let updatedFavorites;
    if (favorites.some(fav => fav.id === recipe.id)) {
      updatedFavorites = favorites.filter(fav => fav.id !== recipe.id);
    } else {
      updatedFavorites = [...favorites, recipe];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const isFavorite = (id) => favorites.some(fav => fav.id === id);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * recipesPerPage;
  const selectedRecipes = recipes.slice(startIndex, startIndex + recipesPerPage);
  const totalPages = Math.ceil(recipes.length / recipesPerPage);

  const handleModalOpen = (recipe) => {
    setModalRecipe(recipe);
  };

  const handleModalClose = () => {
    setModalRecipe(null);
  };

  if (!cuisine) {
    return (
      <CuisineLayout title="Cuisine not found" description="">
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-bold mb-4 text-white">Cuisine not found</h1>
        </div>
      </CuisineLayout>
    );
  }

  return (
    <CuisineLayout 
      title={`${cuisine.name} Cuisine`} 
      description={cuisine.description} 
      image={`/${cuisine.name.toLowerCase()}.jpg`}
    >
      <div id="recipe-list" className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {selectedRecipes.length === 0 ? (
          <p className="text-lg text-gray-200">No recipes found.</p>
        ) : (
          selectedRecipes.map(recipe => (
            <div key={recipe.id} className="bg-white p-4 rounded shadow relative flex flex-col justify-between h-full">
              {recipe.thumbnail_url && <img src={recipe.thumbnail_url} alt={recipe.name} className="w-full h-48 object-cover rounded mb-4" />}
              <h2 className="text-2xl font-bold mb-2 text-center text-black">{recipe.name}</h2>
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <p className="text-gray-700 mb-4 line-clamp-4">{recipe.description}</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-700">Servings: {recipe.num_servings}</span>
                  {recipe.user_ratings && (
                    <span className="text-gray-700">Rating: {recipe.user_ratings.count_positive}</span>
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <button 
                    onClick={() => handleModalOpen(recipe)}
                    className="text-blue-500 hover:underline"
                  >
                    See More
                  </button>
                  <button 
                    className={`focus:outline-none ${isFavorite(recipe.id) ? 'text-red-500' : 'text-gray-400'}`}
                    onClick={() => handleFavorite(recipe)}
                  >
                    {isFavorite(recipe.id) ? <FaHeart size={24} /> : <FaRegHeart size={24} />}
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-2 mx-2 ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
      {modalRecipe && (
        <Modal 
          recipe={modalRecipe} 
          onClose={handleModalClose} 
          isFavorite={isFavorite}
          handleFavorite={handleFavorite} 
        />
      )}
    </CuisineLayout>
  );
};

export default CuisinePage;
