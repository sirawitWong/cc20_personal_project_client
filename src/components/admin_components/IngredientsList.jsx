import { useEffect } from "react";
import useIngredientStore from "../../stores/ingredientStore";
import IngredientCardAdmin from "./IngredientCardAdmin";
import { ingredientSchema } from "../../utils/validator";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useUserStore from "../../stores/authStore";
import { addIngredient } from "../../api/admin";
import { toast } from "react-toastify";

function IngredientsList() {
  const token = useUserStore((state) => state.token);
  const ingredients = useIngredientStore((state) => state.ingredients);
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(ingredientSchema),
  });
  const { isSubmitting, errors } = formState;
  const getAllIngredients = useIngredientStore(
    (state) => state.getAllIngredients
  );
  useEffect(() => {
    getAllIngredients();
  }, []);
  const handleAddIngredient = async (data) => {
    try {
      await addIngredient(token, data);
      getAllIngredients()
    } catch (err) {
      toast.error(err.message);
    }
    document.getElementById("addIngredientModal").close();
    reset();
  };
  const openModal = () => {
    document.getElementById("addIngredientModal").showModal();
  };
  const closeModal = () => {
    document.getElementById("addIngredientModal").close();
    reset();
  };
  return (
    <>
      <div>
        <ul className="list bg-blue-100 rounded-box shadow-md">
          <li className="p-4 pb-2 mx-2 text-xl opacity-60 tracking-wide">
            Manage Ingredients
            <button
              onClick={openModal}
              className="btn btn-circle relative m-2 p-2 tooltip"
              data-tip="Add new Ingredient"
            >
              {" "}
              ADD
            </button>
          </li>
          {ingredients?.map((item) => (
            <IngredientCardAdmin
              key={item.id}
              id={item.id}
              name={item.name}
              nutrition={`protein:${item.protein} carbohydrate:${item.carbohydrate} fat:${item.fat}`}
              image={item.image || "#"}
            />
          ))}
        </ul>
      </div>

      <dialog id={`addIngredientModal`} className="modal">
        <div className="modal-box">
          <fieldset disabled={isSubmitting}>
            <form
              onSubmit={handleSubmit(handleAddIngredient)}
              method="dialog"
              className="flex flex-col justify-center items-center gap-4"
            >
              <button
                onClick={closeModal}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
              <h3 className="font-bold text-lg">Add Ingredient</h3>
              <label className="input">
                Name
                <input type="text" className="grow" {...register("name")} />
                <p className="text-sm text-error">{errors.name?.message}</p>
                <span className="badge badge-neutral badge-xs">Required</span>
              </label>
              <label className="input">
                Image
                <input
                  type="text"
                  className="grow"
                  placeholder="image url"
                  {...register("image")}
                />
                <p className="text-sm text-error">{errors.image?.message}</p>
                <span className="badge badge-neutral badge-xs">Optional</span>
              </label>
              <label className="input">
                Protein
                <input
                  type="number"
                  className="grow"
                  {...register("protein")}
                />
                <p className="text-sm text-error">{errors.protein?.message}</p>
                <span className="badge badge-neutral badge-xs">Optional</span>
              </label>
              <label className="input">
                Carbohydrate
                <input
                  type="number"
                  className="grow"
                  {...register("carbohydrate")}
                />
                <p className="text-sm text-error">
                  {errors.carbohydrate?.message}
                </p>
                <span className="badge badge-neutral badge-xs">Optional</span>
              </label>
              <label className="input">
                Fat
                <input type="number" className="grow" {...register("fat")} />
                <p className="text-sm text-error">{errors.fat?.message}</p>
                <span className="badge badge-neutral badge-xs">Optional</span>
              </label>
              <div className="flex justify-center gap-2">
                <button className="btn btn-info">OK</button>
                <button className="btn btn-accent" onClick={closeModal}>
                  Cancel
                </button>
              </div>
            </form>
          </fieldset>
        </div>
      </dialog>
    </>
  );
}

export default IngredientsList;
