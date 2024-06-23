import axios from 'axios';

const API_HOST = 'tasty.p.rapidapi.com';
const API_KEY = '42025b3a89msh8b63ea4c6bc8c91p192ed4jsnf26890e5742f';  // Replace with your RapidAPI key

export const fetchRecipes = async (cuisine) => {
  const options = {
    method: 'GET',
    url: `https://${API_HOST}/recipes/list`,
    params: { tags: cuisine.toLowerCase(), from: '0', size: '20' },
    headers: {
      'X-RapidAPI-Host': API_HOST,
      'X-RapidAPI-Key': API_KEY
    }
  };

  try {
    const response = await axios.request(options);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};
