'use client';

import Link from 'next/link';

const cuisines = [
  { name: 'Italian', image: 'https://via.placeholder.com/300?text=Italian' },
  { name: 'Mexican', image: 'https://via.placeholder.com/300?text=Mexican' },
  { name: 'Indian', image: 'https://via.placeholder.com/300?text=Indian' },
  { name: 'Chinese', image: 'https://via.placeholder.com/300?text=Chinese' },
  { name: 'Japanese', image: 'https://via.placeholder.com/300?text=Japanese' },
  { name: 'French', image: 'https://via.placeholder.com/300?text=French' },
  { name: 'Thai', image: 'https://via.placeholder.com/300?text=Thai' },
  { name: 'Spanish', image: 'https://via.placeholder.com/300?text=Spanish' },
];

const CuisineGrid = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cuisines.map((cuisine) => (
          <Link key={cuisine.name} href={`/cuisine/${cuisine.name.toLowerCase()}`} passHref>
            <div className="card cursor-pointer relative">
              <img src={cuisine.image} alt={cuisine.name} className="w-full h-32 sm:h-48 object-cover rounded" />
              <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <h3 className="text-white text-lg font-medium">{cuisine.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .card {
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          text-align: center;
          position: relative;
          transition: transform 0.2s;
        }
        .card:hover {
          transform: scale(1.05);
        }
        .overlay {
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default CuisineGrid;
