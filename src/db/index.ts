import { resetProjects } from "./queries/projects";
import { resetTasks } from "./queries/tasks";
import { resetUser } from "./queries/user";
import { resetWorkspaces } from "./queries/workspaces";

export * from "./queries/user";
export * from "./queries/workspaces";
export * from "./queries/projects";
export * from "./queries/tasks";

// Database reset
export const resetDb = async () =>
  await Promise.all([
    resetUser(),
    resetWorkspaces(),
    resetProjects(),
    resetTasks(),
  ]);
