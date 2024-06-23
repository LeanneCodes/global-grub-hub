'use client';

import { useEffect, useState } from 'react';
import FavouriteLayout from '../components/FavouriteLayout';
import RecipeCard from '../components/RecipeCard';
import Modal from '../components/Modal';
import Pagination from '../components/Pagination';

const FavouritedRecipesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [modalRecipe, setModalRecipe] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const recipesPerPage = 12;

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

  const handleModalOpen = (recipe) => {
    setModalRecipe(recipe);
  };

  const handleModalClose = () => {
    setModalRecipe(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * recipesPerPage;
  const selectedRecipes = favorites.slice(startIndex, startIndex + recipesPerPage);
  const totalPages = Math.ceil(favorites.length / recipesPerPage);

  return (
    <FavouriteLayout title="Your Favourited Recipes">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {selectedRecipes.length === 0 ? (
          <p className="text-lg text-gray-200 text-center">No favorited recipes found.</p>
        ) : (
          selectedRecipes.map((recipe) => (
            <RecipeCard 
              key={recipe.id} 
              recipe={recipe} 
              isFavorite={isFavorite}
              handleFavorite={handleFavorite}
              handleModalOpen={handleModalOpen}
            />
          ))
        )}
      </div>
      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
      {modalRecipe && (
        <Modal 
          recipe={modalRecipe} 
          onClose={handleModalClose} 
          isFavorite={isFavorite}
          handleFavorite={handleFavorite} 
        />
      )}
    </FavouriteLayout>
  );
};

export default FavouritedRecipesPage;
