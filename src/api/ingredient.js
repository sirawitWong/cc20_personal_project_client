import axios from "axios";

export const getAllIngredients = async ()=> {
    return await axios.get("http://localhost:3033/api/ingredients")
}

export const getIngredientById = async (id)=> {
    return await axios.get(`http://localhost:3033/api/ingredient/${id}`)
}

export const searchIngredient = async (name)=> {
    return await axios.get(`http://localhost:3033/api/ingredient/name=${name}`)
}