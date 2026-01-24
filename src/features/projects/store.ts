import { Project } from "@/types";
import { create } from "zustand";

type ProjectStore = {
  projects: Project[] | null;
  setProjects: (projects: Project[]) => void;
  resetProjects: () => void;
};

export const useProjectStore = create<ProjectStore>()((set) => ({
  projects: [],
  setProjects: (projects: Project[]) => set({ projects }),
  resetProjects: () => set({ projects: [] }),
}));
