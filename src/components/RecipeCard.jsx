import { Link } from "react-router";

function RecipeCard({id, name, instruction, image, category, serving }) {
  const carte = category?.replace("_", " ")
  return (
    <Link to={`/recipe/${id}`} className="card bg-base-100 w-96 shadow-sm hover:bg-base-200 p-4 m-4">
      <figure>
        { image &&
        <img src={image} alt="food" />
        }
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">{`${serving} serving`}</div>
        </h2>
        <p> {instruction}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{carte}</div>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;
