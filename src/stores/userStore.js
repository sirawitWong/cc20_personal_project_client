
import { create } from "zustand";
import { deleteUser, getAllUser } from "../api/admin";

const useUsersStore = create((set, get) => ({
    users: [],
    current_user: null,
    getAllUsers: async (token) => {
        const response = await getAllUser(token)
        set({users: response.data.result})
        return response
    },
    deleteUser: async (token, id) => {
        const response = await deleteUser(token, id)
        get().getAllUsers(token)
        return response
    }
}))

export default useUsersStore