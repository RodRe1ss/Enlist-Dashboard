"use client";
import SidebarClient from "./SidebarClient";
import { Project, User } from "@/types";
import SidebarSkeleton from "./SidebarSkeleton";
import { useUserStore } from "@/features/user/store";
import { useProjectStore } from "@/features/projects/store";
import { useShallow } from "zustand/shallow";

const Sidebar = () => {
  const { user } = useUserStore(
    useShallow((state) => ({
      user: state.user,
    })),
  );
  const { projects } = useProjectStore(
    useShallow((state) => ({
      projects: state.projects,
    })),
  );

  if (!user) return <SidebarSkeleton />;

  return <SidebarClient user={user as User} projects={projects as Project[]} />;
};

export default Sidebar;
