"use client";

// Zustand
import { useSidebarStore } from "../store/useSidebarStore";
import { useShallow } from "zustand/shallow";

// Types
import { Project, User, Workspace } from "@/types";

// Icons
import { HelpCircle, PanelLeft } from "lucide-react";

// Components
import SidebarProjects from "./SidebarProjects";
import SidebarActions from "./SidebarActions";
import { Button } from "@/components/ui/button";
import ProfileButton from "./ProfileButton";

// Motion
import { motion } from "motion/react";
import { smoothTransition } from "@/lib/animations/transitions";

type Props = {
  data: {
    user: User;
    workspaces: Workspace[];
    projects: Project[];
  };
};

const SidebarClient = ({ data }: Props) => {
  const { isSidebarOpen, toggleSidebar } = useSidebarStore(
    useShallow((state) => ({
      isSidebarOpen: state.isSidebarOpen,
      toggleSidebar: state.toggleSidebar,
    })),
  );

  return (
    <motion.aside
      initial={{ x: 0, opacity: 0 }}
      animate={{
        x: isSidebarOpen ? 0 : -224,
        opacity: isSidebarOpen ? 100 : 0,
      }}
      exit={{ x: 0, opacity: 0 }}
      transition={smoothTransition}
      className="bg-gray-100 w-56 h-full flex flex-col py-2 pl-2 pr-2 sm:pr-0 shadow-lg sm:shadow-none z-20 sm:z-0"
    >
      {/* Sidebar top */}
      <div className="flex items-center justify-between h-12 ">
        {/* Profile Button */}
        <ProfileButton user={data?.user} />

        {/* Sidebar layout button */}
        <Button
          variant={"ghost"}
          size={"icon-sm"}
          className="hover:bg-gray-200"
          onClick={toggleSidebar}
        >
          <PanelLeft />
        </Button>
      </div>

      {/* Sidebar Actions */}
      <SidebarActions />

      {/* Sidebar Projects */}
      <SidebarProjects projects={data?.projects} />

      {/* Sidebar Bottom link */}
      <div className="mt-auto flex items-center gap-2 hover:bg-gray-200 p-1.5 rounded-sm transition-all cursor-pointer ">
        <HelpCircle className="text-gray-600! size-5.5" />
        <span className="text-gray-600! text-sm! font-semibold!">
          Help & Resources
        </span>
      </div>
    </motion.aside>
  );
};

export default SidebarClient;
