import axios from "axios";

export const getAllEquipments = async ()=> {
    return await axios.get("http://localhost:3033/api/equipments")
}

export const getEquipmentById = async (id)=> {
    return await axios.get(`http://localhost:3033/api/equipment/${id}`)
}

export const searchEquipment = async (name)=> {
    return await axios.get(`http://localhost:3033/api/equipment/name=${name}`)
}