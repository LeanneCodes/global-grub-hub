'use client';

import Link from 'next/link';

const cuisines = [
  { name: 'Italian', image: '/italian.jpg' },
  { name: 'Mexican', image: '/mexican.jpg' },
  { name: 'Indian', image: '/indian.jpg' },
  { name: 'Chinese', image: '/chinese.jpg' },
  { name: 'Japanese', image: '/japanese.jpg' },
  { name: 'French', image: '/french.jpg' },
  { name: 'Thai', image: '/thai.jpg' },
  { name: 'Spanish', image: '/spanish.jpg' },
];

const CuisineGrid = () => {
  return (
    <div className="p-4 w-4/5 mx-auto">
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
