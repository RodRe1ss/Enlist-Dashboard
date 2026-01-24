import { Workspace } from "@/types";
import { create } from "zustand";

type WorkspaceStore = {
  workspaces: Workspace[] | null;
  currentWorkspace: Workspace | null;
  setCurrentWorkspace: (id: string) => void;
};

export const useWorkspaceStore = create<WorkspaceStore>()((set, get) => ({
  workspaces: null,
  currentWorkspace: null,
  setCurrentWorkspace: (id: string) =>
    set((state) => ({
      currentWorkspace: (state.workspaces as Workspace[]).filter(
        (item) => item.id === id,
      )[0],
    })),
  setWorkspaces: (workspaces: Workspace[]) =>
    set({
      workspaces,
    }),
}));
