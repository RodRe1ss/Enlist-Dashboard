import { User } from "@/types";
import { create } from "zustand";

type UserStore = {
  user: User | null;
  setUser: (user: User) => void;
  resetUser: () => void;
};

export const useUserStore = create<UserStore>()((set) => ({
  user: null,
  setUser: (user: User) =>
    set({
      user,
    }),
  resetUser: () => set({ user: null }),
}));
