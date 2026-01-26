"use client";

import { getProjects } from "@/features/projects/actions";
import { useProjectStore } from "@/features/projects/store";
import { getUser } from "@/features/user/actions";
import { useUserStore } from "@/features/user/store";
import { getWorkspaces } from "@/features/workspaces/actions";
import { useWorkspaceStore } from "@/features/workspaces/store";
import { useEffect, useState } from "react";
import { useShallow } from "zustand/shallow";

const useDataLoader = () => {
  const [loading, setLoading] = useState(true);
  const currentWorkspace = useWorkspaceStore(
    useShallow((state) => state.currentWorkspace),
  );

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const user = await getUser();
        useUserStore.getState().setUser(user);

        if (!user) {
          useWorkspaceStore.getState().setWorkspaces([]);
          useProjectStore.getState().setProjects([]);

          return;
        }

        const workspaceId = currentWorkspace ?? `wrk_gen_${user.id}`;

        if (!currentWorkspace) {
          useWorkspaceStore.getState().setCurrentWorkspace(workspaceId);
          return;
        }

        const workspaces = await getWorkspaces(user.id);
        useWorkspaceStore.getState().setWorkspaces(workspaces);

        if (!workspaces.length) {
          useProjectStore.getState().setProjects([]);

          return;
        }

        const projects = await getProjects(workspaceId);
        useProjectStore.getState().setProjects(projects);
      } catch (error) {
        console.log(error);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();

    return () => {
      cancelled = true;
    };
  }, [currentWorkspace]);

  return { loading };
};

export default useDataLoader;
