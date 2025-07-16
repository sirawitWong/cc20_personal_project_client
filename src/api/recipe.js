import axios from "axios";

export const getAllRecipies = async () => {
  return await axios.get("http://localhost:3033/api/recipies");
};

export const getRecipeById = async (id) => {
  return await axios.get(`http://localhost:3033/api/recipe/${id}`);
};

export const searchRecipe = async (category) => {
  return await axios.get(`http://localhost:3033/api/search/recipe/?category=${category}`);
};

export const getRecipeReview = async (id) => {
  return await axios.get(`http://localhost:3033/api/reviews/recipe/${id}`);
};

export const createRecipe = async (token, data) => {
  return await axios.post(`http://localhost:3033/api/auth/recipe`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const editRecipe = async (id, token, data) => {
  return await axios.patch(
    `http://localhost:3033/api/auth/recipe/${id}`,
    data,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const deleteRecipe = async (id, token) => {
  return await axios.delete(`http://localhost:3033/api/auth/recipe/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
