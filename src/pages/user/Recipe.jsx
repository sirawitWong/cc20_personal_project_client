import { useEffect } from "react";
import { useParams } from "react-router";
import useRecipiesStore from "../../stores/recipeStore";
import { useForm } from "react-hook-form";
import useUserStore from "../../stores/authStore";
import { reviewSchema } from "../../utils/validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { createReview } from "../../api/review";
import { toast } from "react-toastify";

function Recipe() {
  const token = useUserStore((state) => state.token);
  const user = useUserStore((state) => state.user);
  const reviews = useRecipiesStore((state) => state.reviews);
  const { id } = useParams();
  const current_recipe = useRecipiesStore((state) => state.current_recipe);
  const getRecipeById = useRecipiesStore((state) => state.getRecipeById);
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(reviewSchema),
  });
  const { isSubmitting, errors } = formState;
  const handleCreateReview = async (data) => {
    try {
      data.userId = user.id;
      data.recipeId = Number(id);
      await createReview(token, data);
      toast.success("created");
      reset()
      getRecipeById(Number(id));
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  useEffect(() => {
    getRecipeById(Number(id));
  }, []);
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={current_recipe.image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{current_recipe.name}</h1>
            <p className="py-6">{current_recipe.description}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-around gap-2 my-4">
      {reviews.map((review) => (
        <div className="card bg-base-100 w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">{review?.title}</h2>
            <p>{review?.body}</p>
          </div>
          <figure>
            <img src={review.image} />
          </figure>
        </div>
      ))}
      </div>

      <div className="flex flex-col justify-center items-center gap-4 m-2">
        <fieldset
          disabled={isSubmitting}
          className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
        >
          <form onSubmit={handleSubmit(handleCreateReview)}>
            <legend className="fieldset-legend">Review</legend>
            <input
              type="text"
              name="title"
              className="input mt-2"
              placeholder="review title"
              {...register("title")}
            />
            <p className="text-sm text-error">{errors.title?.message}</p>
            <textarea
              type="text"
              name="body"
              className="input textarea mt-2"
              placeholder="review body"
              {...register("body")}
            />
            <p className="text-sm text-error">{errors.body?.message}</p>
            <input
              type="text"
              body="image"
              className="input mt-2"
              placeholder="review image"
              {...register("image")}
            />
            <p className="text-sm text-error">{errors.image?.message}</p>
            <p className="label">You can review this recipe here</p>
            <button
              type="submit"
              className="btn btn-primary mt-2 flex flex-col items-center justify-center"
            >
              Create
            </button>
          </form>
        </fieldset>
      </div>
    </>
  );
}

export default Recipe;
