import { useEffect } from "react";
import useIngredientStore from "../../stores/ingredientStore";
import IngredientCardAdmin from "./IngredientCardAdmin";

function IngredientsList() {
  const ingredients = useIngredientStore((state) => state.ingredients);
  const getAllIngredients = useIngredientStore(
    (state) => state.getAllIngredients
  );
  useEffect(() => {
    getAllIngredients();
  }, []);
  console.log(ingredients);
  return (
    <div>
      <ul className="list bg-blue-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-xl opacity-60 tracking-wide">
          Manage Ingredients
        </li>
        {ingredients?.map((item) => (
          <IngredientCardAdmin
            key={item.id}
            id={item.id}
            name={item.name}
            nutrition={`protein:${item.protein} carbohydrate:${item.carbohydrate} fat:${item.fat}`}
            image={item.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default IngredientsList;
