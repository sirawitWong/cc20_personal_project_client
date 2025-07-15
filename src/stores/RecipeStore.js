import { create } from "zustand";
import { getAllRecipies, getRecipeById } from "../api/recipe";

const useRecipiesStore = create((set, get) => ({
    recipies: [],
    current_recipe: null,
    getAllRecipies: async () => {
        const response = await getAllRecipies()
        set({recipies: response.data.result})
        return response
    },
    getRecipeById: async (id) => {
        const response = await getRecipeById(id)
        set({current_recipe: response.data.result})
        return response
    },
    deleteRecipe: async (id) => {
        
    }

}))

export default useRecipiesStore