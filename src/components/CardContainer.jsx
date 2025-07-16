import { useEffect, useState } from "react";
import useRecipiesStore from "../stores/recipeStore";
import RecipeCard from "./RecipeCard";
import { toast } from "react-toastify";

function CardContainer() {
  const recipies = useRecipiesStore((state) => state.recipies);
  const getAllRecipies = useRecipiesStore((state) => state.getAllRecipies);
  const searchRecipe = useRecipiesStore((state) => state.searchRecipe);
  useEffect(() => {
    getAllRecipies();
  }, []);
  const [filterOption, setFilterOption] = useState("");

  const radioButtons = document.getElementsByName("filter_category");
  const getFilterOption = () => {
    for (let i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
        setFilterOption(radioButtons[i].value);
        break;
      }
    }
  };

  const resetFilter = () => {
    setFilterOption("");
    getAllRecipies()
  };

  const handleFilter = async (filterOption) => {
    try {
      await searchRecipe(filterOption);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  useEffect(() => {
    if (filterOption){
      handleFilter(filterOption);
    }
  }, [filterOption]);

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-2xl"> Select your favorite category</h3>
        <form className="filter my-2 py-2">
          <input
            onClick={resetFilter}
            className="btn btn-square"
            name="reset"
            type="reset"
            value="x"
          />
          <input
            onClick={getFilterOption}
            className="btn btn-neutral"
            type="radio"
            name="filter_category"
            aria-label="Main dish"
            value="MAIN_DISH"
          />
          <input
            onClick={getFilterOption}
            className="btn btn-warning"
            type="radio"
            name="filter_category"
            aria-label="Side dish"
            value="SIDE_DISH"
          />
          <input
            onClick={getFilterOption}
            className="btn btn-error"
            type="radio"
            name="filter_category"
            aria-label="Desert"
            value="DESERT"
          />
          <input
            onClick={getFilterOption}
            className="btn btn-info"
            type="radio"
            name="filter_category"
            aria-label="Drink"
            value="DRINK"
          />
          <input
            onClick={getFilterOption}
            className="btn btn-accent"
            type="radio"
            name="filter_category"
            aria-label="Snack"
            value="SNACK"
          />
          <input
            onClick={getFilterOption}
            className="btn btn-secondary"
            type="radio"
            name="filter_category"
            aria-label="other"
            value="OTHER"
          />
        </form>
      </div>

      <div className="flex flex-wrap justify-around gap-12 p-4 m-4 py-6 my-6">
        <div className="flex flex-wrap justify-around ">
          {recipies.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              name={recipe.name}
              instruction={recipe.instruction}
              image={recipe.image}
              category={recipe.category}
              serving={recipe.serving}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardContainer;
