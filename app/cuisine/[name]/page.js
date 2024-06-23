import cuisines from '@/app/data/cuisines';
import CuisineLayout from '@/app/components/CuisineLayout';

const CuisinePage = ({ params }) => {
  const { name } = params;

  const cuisine = cuisines.find(cuisine => cuisine.name.toLowerCase() === name.toLowerCase());

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
      {/* Add more specific content here if needed */}
    </CuisineLayout>
  );
};

export default CuisinePage;
