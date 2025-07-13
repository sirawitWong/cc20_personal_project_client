
import { create } from "zustand";

const useIngredientStore = create((set, get) => ({
    Ingredients: [],
    current_ingredient: null,
    getAllIngredients: async () => {
        const response = await getAllRecipies()
        set({recipies: response.data.result})
        return response
    },
    getIngredientById: async (id) => {
        const response = await getRecipeById(id)
        set({current_recipe: response.data.result})
        return response
    }

}))

export default useRecipiesStore