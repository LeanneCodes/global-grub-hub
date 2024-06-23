// components/CuisineGrid.js
'use client';

import Link from 'next/link';

const cuisines = [
  { name: 'Italian', image: '/images/italian.jpg' },
  { name: 'Mexican', image: '/images/mexican.jpg' },
  { name: 'Indian', image: '/images/indian.jpg' },
  { name: 'Chinese', image: '/images/chinese.jpg' },
  { name: 'Japanese', image: '/images/japanese.jpg' },
  { name: 'French', image: '/images/french.jpg' },
  { name: 'Thai', image: '/images/thai.jpg' },
  { name: 'Spanish', image: '/images/spanish.jpg' },
];

const CuisineGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {cuisines.map((cuisine) => (
        <Link key={cuisine.name} href={`/cuisine/${cuisine.name.toLowerCase()}`} passHref>
          <div className="card cursor-pointer">
            <img src={cuisine.image} alt={cuisine.name} className="w-full h-32 sm:h-48 object-cover rounded" />
            <h3 className="mt-2 text-center text-lg font-medium">{cuisine.name}</h3>
          </div>
        </Link>
      ))}

      <style jsx>{`
        .card {
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          text-align: center;
          transition: transform 0.2s;
        }
        .card:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default CuisineGrid;
