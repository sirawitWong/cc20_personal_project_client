import { DeleteIcon, EditIcon } from "../../icons";

function EquipmentCardAdmin(id, name, image) {
 const handleEdit = () => {
        console.log(id)
    }
    const handleDelete = () => {
        console.log(id)
    }
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
        </div>
        <button onClick={handleEdit} className="btn btn-square btn-ghost tooltip" data-tip="edit">
          <EditIcon />
        </button>
        <button onClick={handleDelete} className="btn btn-square btn-ghost tooltip" data-tip="delete">
          <DeleteIcon />
        </button>
      </li>
    </div>
  );

}

export default EquipmentCardAdmin