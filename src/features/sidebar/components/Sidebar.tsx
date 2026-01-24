"use client";

import { getProjects } from "@/features/projects/actions";
import { getUser } from "@/features/user/actions";
import { getWorkspaces } from "@/features/workspaces/actions";
import SidebarClient from "./SidebarClient";
import { useEffect, useState } from "react";
import { Project, User, Workspace } from "@/types";
import SidebarSkeleton from "./SidebarSkeleton";

type Data = {
  user: User;
  workspaces: Workspace[];
  projects: Project[];
};

const Sidebar = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const user = await getUser();
        const workspaces = user ? await getWorkspaces(user?.id) : [];
        const projects = workspaces ? await getProjects(workspaces[0].id) : [];

        setTimeout(
          () =>
            setData({
              user,
              workspaces,
              projects,
            }),
          2000,
        );
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  if (!data) return <SidebarSkeleton />;

  return <SidebarClient data={data} />;
};

export default Sidebar;
