import { Link } from "react-router";
import useUserStore from "../stores/authStore";

function Landing() {
  const user = useUserStore(state => state.user)
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dc7x57rni/image/upload/v1751273398/samples/food/pot-mussels.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Share your Favorite recipe</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            {user ?
            <Link to="" className="btn btn-primary">Share your Recipe</Link> :
              <Link to="/login" className="btn btn-primary">Login to Share your Recipe</Link> }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
