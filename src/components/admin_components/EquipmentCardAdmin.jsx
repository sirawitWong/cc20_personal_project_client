import { DeleteIcon, EditIcon } from "../../icons";
import useUserStore from "../../stores/authStore";
import useEquipmentStore from "../../stores/equipmentStore";

function EquipmentCardAdmin({ id, name, image="#" }) {
  const token = useUserStore((state) => state.token);
  const deleteEquipment = useEquipmentStore((state) => state.deleteEquipment);
  const handleEditModal = () => {
    document.getElementById(`edit_modal_${id}`).showModal();
  };
  const handleEdit = () => {
    console.log("ok");
    document.getElementById(`edit_modal_${id}`).close();
  };
  const handleDeleteModal = () => {
    document.getElementById(`delete_modal_${id}`).showModal();
  };
  const handleCloseModal = () => {
    document.getElementById(`delete_modal_${id}`).close();
  };
  const handleDelete = async () => {
    try {
      await deleteEquipment(token, id);
      document.getElementById(`delete_modal_${id}`).close();
    } catch (err) {
      console.log(err.message);
    }
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
          </div>
          <button
            onClick={handleEditModal}
            className="btn btn-square btn-ghost tooltip"
            data-tip="edit"
          >
            <EditIcon />
          </button>
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

      <dialog id={`edit_modal_${id}`} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <h3 className="font-bold text-lg">Edit</h3>
            <p className="py-4">{name}</p>
            	<div className="flex justify-center items-center gap-4 m-4 p-4">
					<img src={image} className="h-[100px] object-contain" />
				</div>
          </form>
          <div className="flex justify-center gap-2">
            <button className="btn btn-info" onClick={handleEdit}>
              OK
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default EquipmentCardAdmin;
