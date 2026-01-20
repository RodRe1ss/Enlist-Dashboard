export type User = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string | null;
};

export type Workspace = {
  id: string;
  name: string;
  ownerId: string;
};

export type Project = {
  id: string;
  workspaceId: string;
  name: string;
  status: "active" | "inactive";
};

export type Task = {
  id: string;
  projectId: string;
  assignedToId: string;
  title: string;
  priority: "low" | "medium" | "high";
  status: "not-started" | "in-progress" | "in-review" | "completed" | "overdue";
  dueDate: string;
  createdAt: string;
  updatedAt: string;
};
