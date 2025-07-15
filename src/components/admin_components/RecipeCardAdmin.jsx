import { DeleteIcon } from "../../icons";

function RecipeCardAdmin({ id, name, category, content, image="#" }) {
  const handleDeleteModal = () => {
    document.getElementById(`delete_modal_${id}`).showModal();
  };
  const handleCloseModal = () => {
    document.getElementById(`delete_modal_${id}`).close();
  };
  const handleDelete = () => {
    console.log(id);
    document.getElementById(`delete_modal_${id}`).close();
  };
  return (
    <>
      <div>
        <li className="list-row">
          <div>
            <img className="size-10 rounded-box" src={image} />
          </div>
          <div>
            <div>{name}</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              {category}
            </div>
          </div>
          <p className="list-col-wrap text-xs">{content}</p>
          <button
            onClick={handleDeleteModal}
            className="btn btn-square btn-ghost tooltip"
            data-tip="delete"
          >
            <DeleteIcon />
          </button>
        </li>
      </div>

      <dialog id={`delete_modal_${id}`} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <h3 className="font-bold text-lg">Delete</h3>
            <p className="py-4">{`Are you sure you want to delete ${name}`}</p>
          </form>
          <div className="flex justify-center gap-2">
            <button className="btn btn-error" onClick={handleDelete}>
              OK
            </button>
            <button className="btn btn-accent" onClick={handleCloseModal}>
              Cancel
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default RecipeCardAdmin;
