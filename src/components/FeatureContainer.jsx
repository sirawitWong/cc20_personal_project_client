import RecipeCard from "./RecipeCard";

function FeatureContainer() {
  return (
    <div className="carousel carousel-center rounded-box w-full">
      <div className="carousel-item">
        <RecipeCard />
      </div>
      <div className="carousel-item">
        <RecipeCard />
      </div>
      <div className="carousel-item">
        <RecipeCard />
      </div>
      <div className="carousel-item">
        <RecipeCard />
      </div>
      <div className="carousel-item">
        <RecipeCard />
      </div>
    </div>
  );
}

export default FeatureContainer;
