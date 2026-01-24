"use client";

import { useShallow } from "zustand/shallow";
import { useSidebarStore } from "../store/useSidebarStore";
import Sidebar from "./Sidebar";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { smoothTransition } from "@/lib/animations/transitions";

const SidebarMobile = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebarStore(
    useShallow((state) => ({
      isSidebarOpen: state.isSidebarOpen,
      toggleSidebar: state.toggleSidebar,
    })),
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: isSidebarOpen ? 100 : 0,
      }}
      exit={{ opacity: 0 }}
      transition={smoothTransition}
      className={cn(
        isSidebarOpen ? "" : "pointer-events-none",
        "sm:hidden block absolute top-0 left-0 h-screen w-full bg-gray-900/25 z-20",
      )}
    >
      <Sidebar />
      <button
        title="overlay-button"
        className="absolute top-0 right-0 bg-transparent h-full w-full -z-10"
        onClick={toggleSidebar}
      ></button>
    </motion.div>
  );
};

export default SidebarMobile;
