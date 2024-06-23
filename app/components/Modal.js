import { FaTimes, FaHeart, FaRegHeart } from 'react-icons/fa';

const Modal = ({ recipe, onClose, isFavorite, handleFavorite }) => {
  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  const nutritionEntries = recipe.nutrition
    ? Object.entries(recipe.nutrition).filter(([key]) => key !== 'updated_at')
    : [];

  const formatNutritionValue = (key, value) => {
    if (key.toLowerCase() === 'calories') {
      return value;
    }
    return `${value}g`;
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50" onClick={handleOverlayClick}>
      <div className="bg-white rounded-lg w-4/5 max-w-6xl relative overflow-y-auto max-h-[90%] p-10">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={onClose}>
          <FaTimes size={24} />
        </button>
        <div className="text-black">
          <h2 className="text-3xl font-bold mb-4">{recipe.name}</h2>
          {recipe.thumbnail_url && <img src={recipe.thumbnail_url} alt={recipe.name} className="w-full h-48 object-cover rounded mb-4" />}
          <p className="mb-4">{recipe.description}</p>
          <p className="mb-4"><span className='text-xl font-bold mt-4'>Time to cook: </span>{recipe.total_time_tier?.display_tier || 'N/A'}</p>
          <div className="grid grid-cols-12 gap-4 mb-4">
            <div className="col-span-12 md:col-span-4">
              <h3 className="text-xl font-bold mb-2">Ingredients:</h3>
              <ul className="list-disc list-inside">
                {recipe.sections?.[0]?.components?.map((ingredient, index) => (
                  <li key={index}>{ingredient.raw_text}</li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 md:col-span-8">
              <h3 className="text-xl font-bold mb-2">Instructions:</h3>
              <ol className="list-decimal list-inside">
                {recipe.instructions?.map((instruction, index) => (
                  <li key={index}>{instruction.display_text}</li>
                ))}
              </ol>
              <h3 className="text-xl font-bold mt-4 mb-2">Nutrition:</h3>
              {nutritionEntries.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {nutritionEntries.map(([key, value]) => (
                    <span key={key} className="bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold">
                      {`${key.charAt(0).toUpperCase() + key.slice(1)}: ${formatNutritionValue(key, value)}`}
                    </span>
                  ))}
                </div>
              ) : (
                <p>No nutrition data available.</p>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <a href={recipe.original_video_url || '#'} className="text-orange-500 font-bold hover:text-blue-500" target="_blank" rel="noopener noreferrer">
              View Recipe Externally
            </a>
            <button 
              className={`focus:outline-none ${isFavorite(recipe.id) ? 'text-red-500' : 'text-gray-400'}`}
              onClick={() => handleFavorite(recipe)}
            >
              {isFavorite(recipe.id) ? <FaHeart size={24} /> : <FaRegHeart size={24} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
