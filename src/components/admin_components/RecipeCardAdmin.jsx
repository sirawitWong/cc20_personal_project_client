
import { DeleteIcon, EditIcon } from "../../icons";

function RecipeCardAdmin({id, name, category, content, image}) {
  return (
    <div>
      <li className="list-row">
        <div>
          <img
            className="size-10 rounded-box"
            src={image}
          />
        </div>
        <div>
          <div>{name}</div>
          <div className="text-xs uppercase font-semibold opacity-60">
            {category}
          </div>
        </div>
        <p className="list-col-wrap text-xs">
        {content}
        </p>
        <button className="btn btn-square btn-ghost tooltip" data-tip="edit">
          <EditIcon />
        </button>
        <button className="btn btn-square btn-ghost tooltip" data-tip="delete">
          <DeleteIcon />{" "}
        </button>
      </li>
    </div>
  );
}

export default RecipeCardAdmin;
