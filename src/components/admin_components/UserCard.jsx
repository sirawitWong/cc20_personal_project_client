import { DeleteIcon } from "../../icons";
import useUserStore from "../../stores/authStore";
import useUsersStore from "../../stores/userStore";

function UserCard({ id, name, username, image="#", role, status }) {
  const token = useUserStore((state) => state.token);
  const deleteUser = useUsersStore((state) => state.deleteUser);
  const handleBan = () => {
    console.log(id);
    document.getElementById(`ban_modal_${id}`).close();
  };
  const handleBanModal = () => {
    document.getElementById(`ban_modal_${id}`).showModal();
  };
  const handleDeleteModal = () => {
    document.getElementById(`delete_modal_${id}`).showModal();
  };
  const handleCloseModal = () => {
    document.getElementById(`delete_modal_${id}`).close();
    document.getElementById(`ban_modal_${id}`).close();
  };
  const handleDelete = async () => {
    try {
      await deleteUser(token, id);
      document.getElementById(`delete_modal_${id}`).close();
    } catch (err) {
      toast.error(err.message);
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
            <div className="text-xs uppercase font-semibold opacity-60">
              <span>{`${username}  ROLE: ${role}`}</span>
            </div>
          </div>
          <p>Status:{status}</p>
          {role !== "SUPER" && <button
            onClick={handleBanModal}
            className="btn btn-circle btn-ghost tooltip"
            data-tip="ban user"
          >
            BAN
          </button>}
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

      <dialog id={`ban_modal_${id}`} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <h3 className="font-bold text-lg">Ban</h3>
            <p className="py-4">{`Are you sure you want to Ban ${name}`}</p>
          </form>
          <div className="flex justify-center gap-2">
            <button className="btn btn-error" onClick={handleBan}>
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

export default UserCard;
