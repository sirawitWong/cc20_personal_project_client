import { useEffect } from "react";
import useRecipiesStore from "../../stores/recipeStore";
import RecipeCardAdmin from "./RecipeCardAdmin";

function RecipiesList() {
  const recipies = useRecipiesStore(state => state.recipies)
  const getAllRecipies = useRecipiesStore(state => state.getAllRecipies)
  useEffect(()=> {
   getAllRecipies() 
  },[])
  return (
    <div>
      <ul className="list bg-blue-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-xl opacity-60 tracking-wide">
          Manage Recipies
        </li>
        { recipies.map((recipe) => (
          <RecipeCardAdmin key={recipe.id} id={recipe.id} name={recipe.name} category={recipe.category} content={recipe.instruction} image={recipe.image} />
        ))
        }
              </ul>
    </div>
  );
}

export default RecipiesList;
