import { useForm } from "react-hook-form";
import useUserStore from "../../stores/authStore";
import { recipeSchema } from "../../utils/validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { createRecipe } from "../../api/recipe";
import { toast } from "react-toastify";

function CreateRecipe() {
  const token = useUserStore((state) => state.token);
  const user = useUserStore((state) => state.user);
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(recipeSchema),
  });
  const { isSubmitting, errors } = formState;
  const handleCreate = async (data) => {
    try {
      data.userId = user.id;
      await createRecipe(token, data);
      toast.success("Created");
      reset()
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-2 gap-2">
        <fieldset
          disabled={isSubmitting}
          className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
        >
          <form onSubmit={handleSubmit(handleCreate)}>
            <legend className="fieldset-legend">Create Recipe</legend>

            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="recipe name"
              {...register("name")}
            />
            <p className="text-sm text-error">{errors.name?.message}</p>

            <label className="label">Description</label>
            <textarea
              type="text"
              name="description"
              className="input textarea"
              placeholder="recipe description"
              {...register("description")}
            />
            <p className="text-sm text-error">{errors.description?.message}</p>

            <label className="label">Category</label>
            <select
              name="category"
              id="category"
              className="input"
              {...register("category")}
            >
              <option value="MAIN_DISH">Main dish</option>
              <option value="SIDE_DISH">Side dish</option>
              <option value="DESERT">Desert</option>
              <option value="DRINK">Drink</option>
              <option value="SNACK">Snack</option>
              <option value="OTHER">other</option>
            </select>
            <p className="text-sm text-error">{errors.category?.message}</p>
            <label className="label">Instruction</label>
            <textarea
              type="text"
              name="instruction"
              className="input textarea"
              placeholder="instruction"
              {...register("instruction")}
            />
            <p className="text-sm text-error">{errors.instruction?.message}</p>
            <label className="label">Image</label>
            <input
              type="text"
              name="image"
              className="input"
              placeholder="image url"
              {...register("image")}
            />
            <p className="text-sm text-error">{errors.image?.message}</p>
            <label className="label">Serving</label>
            <input
              type="number"
              name="serving"
              className="input"
              placeholder="for how many person"
              {...register("serving")}
            />
            <p className="text-sm text-error">{errors.serving?.message}</p>

            <button type="submit" className="btn btn-primary mt-2">
              Create Recipe
            </button>
          </form>
        </fieldset>
      </div>
    </>
  );
}

export default CreateRecipe;
