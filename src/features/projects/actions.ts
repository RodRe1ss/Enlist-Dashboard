import { PROJECTS_SEED } from "@/db/mock";
import { delay } from "@/lib/utils";

let projects = [...PROJECTS_SEED];

// Projects
export const getProjects = async (workspaceId: string) => {
  const results = projects.filter(
    (project) => project.workspaceId === workspaceId,
  );

  await delay(500);
  return results;
};

// export const getProjectById = async (id: string) => {
//   const result = projects.find((project) => project.id === id);

//   if (!result) throw new Error("Project not found");

//   return result;
// };

export const resetProjects = async () => (projects = [...PROJECTS_SEED]);
