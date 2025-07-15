import { create } from "zustand";
import { getAllEquipments, getEquipmentById } from "../api/equipment";
import { deleteEquipment } from "../api/admin";

const useEquipmentStore = create((set, get) => ({
    Equipments: [],
    current_equipment: null,
    getAllEquipments: async () => {
        const response = await getAllEquipments()
        set({equipments: response.data.result})
        return response
    },
    getEquipmentById: async (id) => {
        const response = await getEquipmentById(id)
        set({current_equipment: response.data.result})
        return response
    },
    deleteEquipment: async (token, id) => {
        const response = await deleteEquipment(token, id)
        get().getAllEquipments()
        return response
    }

}))

export default useEquipmentStore