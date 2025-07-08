import { create } from "zustand";
import { authApi } from "../api/auth";
import { persist, createJSONStorage } from "zustand/middleware";

const useUserStore = create(
  persist((set, get) => ({
    user: [],
    token: null,
    login: async (input) => {
      const res = await authApi.post("/login", input);
      const { result } = res.data;
      set({ token: result.token, user: result.payload });
      return { message: "success", role: result.payload?.role };
    },
    logout: () => set({ token: "", user: null }),
  })),
  {
    name: "userState",
    storage: createJSONStorage(() => localStorage),
  }
);

export default useUserStore;
