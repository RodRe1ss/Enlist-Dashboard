"use client";

import { useUserStore } from "@/features/user/store";
import { useWorkspaceStore } from "@/features/workspaces/store";
import { useEffect, useState } from "react";

const useDataLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);

    const load = async () => {
      try {
        await useUserStore.getState().loadUser();
        const userId = useUserStore.getState().user?.id;

        await useWorkspaceStore.getState().loadWorkspaces(userId as string);
      } catch (error) {
        console.log(error);
      } finally {
        if (active) setLoading(false);
      }
    };

    load();

    return () => {
      active = false;
    };
  }, []);

  return { loading };
};

export default useDataLoader;
