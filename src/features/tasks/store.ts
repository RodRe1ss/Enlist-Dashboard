import { Task } from "@/types";
import { create } from "zustand";

type TaskStore = {
  tasks: Task[] | null;
  setTasks: (tasks: Task[]) => void;
  resetTasks: () => void;
};

export const useTaskStore = create<TaskStore>()((set) => ({
  tasks: null,
  setTasks: (tasks) => set({ tasks }),
  resetTasks: () => set({ tasks: null }),
}));
