import { create } from "zustand";
import { getAllEquipments, getEquipmentById } from "../api/equipment";

const useEquipmentStore = create((set, get) => ({
    Equipments: [],
    current_equipment: null,
    getAllEquipments: async () => {
        const response = await getAllEquipments()
        set({recipies: response.data.result})
        return response
    },
    getEquipmentById: async (id) => {
        const response = await getEquipmentById(id)
        set({current_recipe: response.data.result})
        return response
    }

}))

export default useEquipmentStore