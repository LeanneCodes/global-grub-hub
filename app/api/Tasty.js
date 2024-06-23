export const fetchRecipes = async (cuisine) => {
  const apiKey = process.env.NEXT_PUBLIC_TASTY_API_KEY;
  const url = `https://tasty.p.rapidapi.com/recipes/list?tags=${cuisine.toLowerCase()}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'tasty.p.rapidapi.com',
      'x-rapidapi-key': apiKey,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch recipes');
  }

  const data = await response.json();
  return data.results;
};
