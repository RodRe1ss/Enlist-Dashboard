import { TASKS_SEED } from "@/db/mock";
import { delay } from "@/lib/utils";

let tasks = [...TASKS_SEED];

// crypto.randomUUID e.g example "usr_${crypto.randomUUID().split("-").slice(0, 3).join("")}"

export const getTasks = async () => {
  await delay(500);
  return tasks;
};

// export const getTaskById = async (id: string) => {
//   const result = tasks.find((task) => task.id === id);

//   if (!result) throw new Error("Task not found");

//   return result;
// };

export const resetTasks = async () => (tasks = [...TASKS_SEED]);
