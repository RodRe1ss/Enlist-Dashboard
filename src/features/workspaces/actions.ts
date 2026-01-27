import { WORKSPACES_SEED } from "@/db/mock";
import { delay } from "@/lib/utils";

let workspaces = [...WORKSPACES_SEED];

// Workspaces
export const getWorkspaces = async (userId: string) => {
  const results = workspaces.filter(
    (workspace) => workspace.ownerId === userId,
  );

  await delay(500);
  return results;
};

// export const getWorkspaceById = async (id: string) => {
//   const result = workspaces.find((workspace) => workspace.id === id);

//   if (!result) throw new Error("Workspace not found");

//   return result;
// };

export const resetWorkspaces = async () => (workspaces = [...WORKSPACES_SEED]);
