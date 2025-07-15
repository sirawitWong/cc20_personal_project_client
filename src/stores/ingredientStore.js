import { create } from "zustand";
import { getAllIngredients, getIngredientById } from "../api/ingredient";
import { deleteIngredient } from "../api/admin";

const useIngredientStore = create((set, get) => ({
    Ingredients: [],
    current_ingredient: null,
    getAllIngredients: async () => {
        const response = await getAllIngredients()
        set({ingredients: response.data.result})
        return response
    },
    getIngredientById: async (id) => {
        const response = await getIngredientById(id)
        set({current_recipe: response.data.result})
        return response
    },
    deleteIngredient: async (token, id) => {
        const response = await deleteIngredient(token, id)
        get().getAllIngredients()
        return response
    }

}))

export default useIngredientStore