import { create } from "zustand";

type SidebarStore = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  resetSidebar: () => void;
};

export const useSidebarStore = create<SidebarStore>()((set) => ({
  isSidebarOpen: true,
  toggleSidebar: () =>
    set((state) => ({
      isSidebarOpen: !state.isSidebarOpen,
    })),
  resetSidebar: () =>
    set({
      isSidebarOpen: true,
    }),
}));
