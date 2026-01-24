import { getProjects } from "@/features/projects/actions";
import { useProjectStore } from "@/features/projects/store";
import { getUser } from "@/features/user/actions";
import { useUserStore } from "@/features/user/store";
import { getWorkspaces } from "@/features/workspaces/actions";
import { useWorkspaceStore } from "@/features/workspaces/store";
import { useEffect, useState } from "react";

const useDataLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleData = async () => {
      try {
        const user = await getUser();

        useUserStore.getState().setUser(user);

        if (!user) {
          useWorkspaceStore.getState().setWorkspaces([]);
          useProjectStore.getState().setProjects([]);

          return;
        }

        const workspaces = await getWorkspaces(user.id);

        useWorkspaceStore.getState().setWorkspaces(workspaces);

        if (!workspaces.length) {
          useProjectStore.getState().setProjects([]);

          return;
        }

        const projects = await getProjects(workspaces[0].id);

        useProjectStore.getState().setProjects(projects);

        await new Promise((r) => setTimeout(r, 2000));
      } catch (error) {
        console.log(error);

        // optional: reset everything on hard failure
        useUserStore.getState().resetUser();
        useWorkspaceStore.getState().setWorkspaces([]);
        useProjectStore.getState().setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    handleData();
  }, []);

  return { loading };
};

export default useDataLoader;
