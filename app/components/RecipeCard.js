'use client';

import { FaHeart, FaRegHeart } from 'react-icons/fa';

const RecipeCard = ({ recipe, isFavorite, handleFavorite, handleModalOpen }) => {
  return (
    <div className="bg-white p-4 rounded shadow relative flex flex-col justify-between h-full">
      {recipe.thumbnail_url && <img src={recipe.thumbnail_url} alt={recipe.name} className="w-full h-48 object-cover rounded mb-4" />}
      <h2 className="text-2xl font-bold mb-2 text-center text-black">{recipe.name}</h2>
      <div className="flex flex-col justify-between flex-grow">
        <div>
          <p className="text-gray-700 mb-4 line-clamp-4">{recipe.description}</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-700"><span className='font-bold'>Servings:</span> {recipe.num_servings}</span>
          {recipe.user_ratings && (
            <span className="text-gray-700"><span className='font-bold'>Rating:</span> {recipe.user_ratings.count_positive}</span>
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
  );
};

export default RecipeCard;
