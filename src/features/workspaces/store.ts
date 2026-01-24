import { Workspace } from "@/types";
import { create } from "zustand";

type WorkspaceStore = {
  workspaces: Workspace[] | [];
  currentWorkspace: string | null;
  setCurrentWorkspace: (id: string | null) => void;
  setWorkspaces: (workspaces: Workspace[] | []) => void;
};

export const useWorkspaceStore = create<WorkspaceStore>()((set) => ({
  workspaces: [],
  currentWorkspace: null,
  setCurrentWorkspace: (id: string | null) =>
    set({
      currentWorkspace: id,
    }),
  setWorkspaces: (workspaces: Workspace[] | []) =>
    set({
      workspaces,
    }),
}));
