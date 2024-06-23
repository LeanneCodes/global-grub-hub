import cuisines from "@/app/data/cuisines";
import Layout from "@/app/components/Layout";

const CuisinePage = ({ params }) => {
  const { name } = params;

  const cuisine = cuisines.find(cuisine => cuisine.name.toLowerCase() === name.toLowerCase());

  if (!cuisine) {
    return (
      <Layout>
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-bold mb-4">Cuisine not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={`${cuisine.name} Cuisine`} description={cuisine.description}>
      {/* You can add more specific content here if needed */}
    </Layout>
  );
};

export default CuisinePage;
