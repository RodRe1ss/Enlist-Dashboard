import { getProjects } from "@/features/projects/actions";
import { getUser } from "@/features/user/actions";
import { getWorkspaces } from "@/features/workspaces/actions";
import SidebarClient from "./SidebarClient";

import { unstable_noStore as noStore } from "next/cache";

const Sidebar = async () => {
  noStore();

  const user = await getUser();
  const workspaces = user ? await getWorkspaces(user?.id) : [];
  const projects = workspaces ? await getProjects(workspaces[0].id) : [];

  const data = {
    user,
    workspaces,
    projects,
  };

  await new Promise((r) => setTimeout(r, 2000));

  return <SidebarClient data={data} />;
};

export default Sidebar;
