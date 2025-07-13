import EquipmentCardAdmin from "./EquipmentCardAdmin"

function EquipmentsList() {
  return (
 <div>
      <ul className="list bg-blue-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-xl opacity-60 tracking-wide">
          Manage Equipments
        </li>
      <EquipmentCardAdmin />
      </ul>
    </div>
  
)
}

export default EquipmentsList