import { Task } from "@/types";
import { create } from "zustand";
import { getTasks } from "./actions";

type TaskStore = {
  tasks: Task[] | [];
  loading: boolean;
  loadTasks: (projectId: string) => void;
};

export const useTaskStore = create<TaskStore>()((set) => ({
  tasks: [],
  loading: true,
  loadTasks: async (projectId: string) => {
    const tasks = await getTasks(projectId);

    set({
      tasks,
      loading: false,
    });
  },
}));
