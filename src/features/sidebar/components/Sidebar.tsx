"use client";

import { getProjects } from "@/features/projects/actions";
import { getUser } from "@/features/user/actions";
import { getWorkspaces } from "@/features/workspaces/actions";
import SidebarClient from "./SidebarClient";
import { useEffect, useState } from "react";
import { Project, User, Workspace } from "@/types";
import SidebarSkeleton from "./SidebarSkeleton";
import { useUserStore } from "@/features/user/store";
import { useWorkspaceStore } from "@/features/workspaces/store";
import { useProjectStore } from "@/features/projects/store";

type Data = {
  user: User;
  workspaces: Workspace[];
  projects: Project[];
};

const Sidebar = () => {
  const data: Data = {
    user: useUserStore.getState().user as User,
    workspaces: useWorkspaceStore.getState().workspaces as Workspace[],
    projects: useProjectStore.getState().projects as Project[],
  };

  if (!data.user) return <SidebarSkeleton />;

  return <SidebarClient data={data} />;
};

export default Sidebar;
