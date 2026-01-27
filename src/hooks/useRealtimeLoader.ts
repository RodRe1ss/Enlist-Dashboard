import { useProjectStore } from "@/features/projects/store";
import { useTaskStore } from "@/features/tasks/store";
import { useWorkspaceStore } from "@/features/workspaces/store";
import { useEffect, useState } from "react";
import { useShallow } from "zustand/shallow";

const useRealtimeLoader = () => {
  const [loading, setLoading] = useState(true);
  const { currentWorkspace } = useWorkspaceStore(
    useShallow((state) => ({
      currentWorkspace: state.currentWorkspace,
    })),
  );

  useEffect(() => {
    let active = true;
    const load = async () => {
      setLoading(true);
      try {
        if (currentWorkspace) {
          await useProjectStore.getState().loadProjects(currentWorkspace);
          await useTaskStore.getState().loadTasks();
        }

        // will add tasks soon maybe
      } catch (error) {
        console.error(error);
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    load();

    return () => {
      active = false;
    };
  }, [currentWorkspace]);

  return { loading };
};

export default useRealtimeLoader;
