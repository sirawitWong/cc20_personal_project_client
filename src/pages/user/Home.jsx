import { Link } from "react-router";
import CardContainer from "../../components/CardContainer";
import FeatureContainer from "../../components/FeatureContainer";
import Landing from "../../components/Landing";
import { DownArrow, UpArrow } from "../../icons";

function Home() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div>
          <Landing />
        </div>
        <div className="divider">Feature Recipies</div>
        <div className="py-4 my-2">
          <FeatureContainer />
        </div>
        <div id="browse"className="divider">Browse Recipies</div>

        <div className="flex flex-col justify-center items-center">
          <CardContainer />
    <Link to="/recipies" className="btn btn-outline btn-primary py-4 mb-4">SEE MORE RECIPE</Link>
        </div>
      </div>
      <div className="flex flex-col fixed bottom-0 right-0">
        <a href="#top" className="btn btn-circle btn-ghost">
          <UpArrow />
        </a>
          <a href="#browse" className="btn btn-circle btn-ghost">
          <DownArrow />
        </a>
      </div>
    </>
  );
}

export default Home;
