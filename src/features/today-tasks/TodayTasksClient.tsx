"use client";

import { useMemo } from "react";
import { useShallow } from "zustand/shallow";
import { useTaskStore } from "../tasks/store";
import { isToday } from "date-fns";
import { useUserStore } from "../user/store";

const TodayTasksClient = () => {
  const user = useUserStore(useShallow((state) => state.user));

  const { tasks } = useTaskStore(
    useShallow((state) => ({
      tasks: state.tasks,
    })),
  );

  const todayTasks = useMemo(() => {
    return tasks.filter(
      (task) => isToday(task.dueDate) && task.assignedToId === user?.id,
    );
  }, [tasks, user]);

  return (
    <div className="flex flex-col gap-2">
      {todayTasks.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  );
};

export default TodayTasksClient;
