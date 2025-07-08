import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = ((get,set) => ({
user: null,
token: "",
login: async(input) => {
    return input
} ,
logout: () => set({user:null, token: ""})
}))

export default useUserStore