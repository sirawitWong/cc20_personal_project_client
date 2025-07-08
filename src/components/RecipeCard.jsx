function RecipeCard() {
  return (
<div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      POTATO
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p> Recipe description</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">category</div>
    </div>
  </div>
</div>
  )
}

export default RecipeCard