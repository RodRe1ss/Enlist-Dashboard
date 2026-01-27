import { User } from "@/types";
import { create } from "zustand";
import { getUser } from "./actions";

type UserStore = {
  user: User | null;
  loading: boolean;
  loadUser: () => void;
};

export const useUserStore = create<UserStore>()((set) => ({
  user: null,
  loading: true,
  loadUser: async () => {
    const user = await getUser();
    set({
      user,
      loading: false,
    });
  },
}));
