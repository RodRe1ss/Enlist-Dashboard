import { create } from "zustand";

type SidebarStore = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  resetSidebar: () => void;
};

export const useSidebarStore = create<SidebarStore>()((set) => ({
  isSidebarOpen: false,
  toggleSidebar: () =>
    set((state) => ({
      isSidebarOpen: !state.isSidebarOpen,
    })),
  resetSidebar: () =>
    set({
      isSidebarOpen: false,
    }),
}));
