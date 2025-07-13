import axios from "axios";

export const getAllRecipies = async () => {
    return await axios.get("http://localhost:3033/api/recipies")
}

export const getRecipeById = async (id) => {
    return await axios.get(`http://localhost:3033/api/recipe/${id}`)
}