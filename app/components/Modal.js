import { FaTimes, FaHeart, FaRegHeart } from 'react-icons/fa';

const Modal = ({ recipe, onClose, isFavorite, handleFavorite }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 w-4/5 max-w-2xl relative overflow-y-auto max-h-full">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={onClose}>
          <FaTimes size={24} />
        </button>
        <div className="text-black">
          <h2 className="text-3xl font-bold mb-4">{recipe.name}</h2>
          {recipe.thumbnail_url && <img src={recipe.thumbnail_url} alt={recipe.name} className="w-full h-48 object-cover rounded mb-4" />}
          <p className="mb-4">{recipe.description}</p>
          <h3 className="text-xl font-bold mb-2">Ingredients:</h3>
          <ul className="list-disc list-inside mb-4">
            {recipe.sections?.[0]?.components?.map((ingredient, index) => (
              <li key={index}>{ingredient.raw_text}</li>
            ))}
          </ul>
          <h3 className="text-xl font-bold mb-2">Instructions:</h3>
          <ol className="list-decimal list-inside mb-4">
            {recipe.instructions?.map((instruction, index) => (
              <li key={index}>{instruction.display_text}</li>
            ))}
          </ol>
          <p className="mb-4"><strong>Time to cook:</strong> {recipe.total_time_tier?.display_tier || 'N/A'}</p>
          <a href={recipe.original_video_url || '#'} className="text-blue-500 hover:underline mb-4" target="_blank" rel="noopener noreferrer">View Recipe Externally</a>
          <div className="flex justify-between items-center">
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
