import { Workspace } from "@/types";
import { create } from "zustand";
import { getWorkspaces } from "./actions";

type WorkspaceStore = {
  workspaces: Workspace[] | [];
  currentWorkspace: string | null;
  loading: boolean;
  setCurrentWorkspace: (workspaceId: string) => void;
  loadWorkspaces: (userId: string) => void;
};

export const useWorkspaceStore = create<WorkspaceStore>()((set) => ({
  workspaces: [],
  currentWorkspace: null,
  loading: true,
  setCurrentWorkspace: (workspaceId: string) =>
    set({
      currentWorkspace: workspaceId,
    }),
  loadWorkspaces: async (userId: string) => {
    const workspaces = await getWorkspaces(userId as string);

    if (!userId) return console.error("User ID not found");

    set({
      workspaces,
      currentWorkspace: `wrk_gen_${userId}`,
      loading: false,
    });
    return;
  },
}));
