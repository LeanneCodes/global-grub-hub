'use client';

import { useEffect, useState } from 'react';
import cuisines from '@/app/data/cuisines';
import CuisineLayout from '@/app/components/CuisineLayout';
import { fetchRecipes } from '@/app/api/Tasty';
import Modal from '@/app/components/Modal';
import RecipeCard from '@/app/components/RecipeCard';
import Pagination from '@/app/components/Pagination';

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
      <Pagination 
        totalPages={totalPages} 
        currentPage={currentPage} 
        onPageChange={handlePageChange} 
      />
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
