import { Project } from "@/types";
import { create } from "zustand";
import { getProjects } from "./actions";

type ProjectStore = {
  projects: Project[] | [];
  loading: boolean;
  loadProjects: (workspaceId: string) => void;
};

export const useProjectStore = create<ProjectStore>()((set) => ({
  projects: [],
  loading: true,
  loadProjects: async (workspaceId: string) => {
    const projects = await getProjects(workspaceId as string);

    if (!workspaceId) return console.error("Workspace ID not found");

    set({
      projects,
      loading: false,
    });
    return;
  },
}));
