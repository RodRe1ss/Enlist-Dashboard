import { Task } from "@/types";
import { create } from "zustand";
import { getTasks } from "./actions";

type TaskStore = {
  tasks: Task[] | [];
  loading: boolean;
  loadTasks: () => void;
};

export const useTaskStore = create<TaskStore>()((set) => ({
  tasks: [],
  loading: true,
  loadTasks: async () => {
    const tasks = await getTasks();

    set({
      tasks,
      loading: false,
    });
  },
}));
