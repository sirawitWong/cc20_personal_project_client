import { create } from "zustand";
import { getAllRecipies, getRecipeById, getRecipeReview, searchRecipe } from "../api/recipe";

const useRecipiesStore = create((set, get) => ({
    recipies: [],
    current_recipe: [],
    reviews:[],
    getAllRecipies: async () => {
        const response = await getAllRecipies()
        set({recipies: response.data.result})
        return response
    },
    getRecipeById: async (id) => {
        const response = await getRecipeById(id)
        set({current_recipe: response.data.result})
        get().getRecipeReview(id)
        return response
    },
    deleteRecipe: async (id, token) => {
        const response = await deleteRecipe(id, token)
        return response
    },
    editRecipe: async (id, token, data) => {
        const response = await deleteRecipe(id, token)
        return response
    },
    getRecipeReview: async (id) => {
        const response = await getRecipeReview(id)
        set({reviews: response.data.result})
        return response
    },
    searchRecipe: async (category) => {
        const response = await searchRecipe(category)
        set({recipies: response.data.result})
        return response
    }

}))

export default useRecipiesStore