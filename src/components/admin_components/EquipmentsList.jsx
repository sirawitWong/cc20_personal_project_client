import { useEffect } from "react";
import useEquipmentStore from "../../stores/equipmentStore";
import EquipmentCardAdmin from "./EquipmentCardAdmin";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { equipmentSchema } from "../../utils/validator";
import useUserStore from "../../stores/authStore";
import { addEquipment } from "../../api/admin";

function EquipmentsList() {
  const token = useUserStore((state) => state.token)
  const equipments = useEquipmentStore((state) => state.equipments);
  const getAllEquipments = useEquipmentStore((state) => state.getAllEquipments);
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(equipmentSchema),
  });
  const { isSubmitting, errors } = formState;
  useEffect(() => {
    getAllEquipments();
  }, []);
  const handleAddEquipment = async (data) => {
    try{
      await addEquipment(token, data)
      getAllEquipments()
    }catch(err){
      toast.error(err.message)
    }
    console.log(data);
    document.getElementById("addEquipmentModal").close();
    reset()
  };
  const openModal = () => {
    document.getElementById("addEquipmentModal").showModal();
  };
  const closeModal = () => {
    document.getElementById("addEquipmentModal").close();
    reset();
  };
  return (
    <>
      <div>
        <ul className="list bg-blue-100 rounded-box shadow-md">
          <li className="p-4 pb-2 text-xl opacity-60 tracking-wide">
            Manage Equipments
            <button
              onClick={openModal}
              className="btn btn-circle relative m-2 p-2 tooltip"
              data-tip="Add new Equipment"
            >
              {" "}
              ADD
            </button>
          </li>
          {equipments?.map((eq) => (
            <EquipmentCardAdmin
              key={eq.id}
              id={eq.id}
              name={eq.name}
              image={eq.image || "#"}
            />
          ))}
        </ul>
      </div>

      <dialog id={`addEquipmentModal`} className="modal">
        <div className="modal-box">
          <fieldset disabled={isSubmitting}>
            <form
              onSubmit={handleSubmit(handleAddEquipment)}
              method="dialog"
              className="flex flex-col justify-center items-center gap-4"
            >
              <button onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <h3 className="font-bold text-lg">Add Equipment</h3>
              <label className="input">
                Name
                <input
                  type="text"
                  className="grow"
                  {...register("name")}
                />
                <p className="text-sm text-error">{errors.name?.message}</p>
                <span className="badge badge-neutral badge-xs">Required</span>
              </label>
              <label className="input">
                Image
                <input
                  type="text"
                  className="grow"
                  placeholder="image url"
                  {...register("image")}
                />
                <p className="text-sm text-error">{errors.image?.message}</p>
                <span className="badge badge-neutral badge-xs">Optional</span>
              </label>
              <div className="flex justify-center gap-2">
                <button className="btn btn-info">OK</button>
                <button className="btn btn-accent" onClick={closeModal}>
                  Cancel
                </button>
              </div>
            </form>
          </fieldset>
        </div>
      </dialog>
    </>
  );
}

export default EquipmentsList;
