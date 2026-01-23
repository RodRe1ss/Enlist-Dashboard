"use client";

import { useSidebarStore } from "@/features/sidebar/store/useSidebarStore";
import { smoothTransition } from "@/lib/animations/transitions";
// Motion
import { motion } from "motion/react";
import { useShallow } from "zustand/shallow";

type Props = {
  children: React.ReactNode;
};

const Main = ({ children }: Props) => {
  const { isSidebarOpen } = useSidebarStore(
    useShallow((state) => ({
      isSidebarOpen: state.isSidebarOpen,
    })),
  );

  return (
    <motion.main
      initial={{ marginLeft: 0 }}
      animate={{ marginLeft: isSidebarOpen ? 0 : -288 }}
      exit={{ marginLeft: 0 }}
      transition={smoothTransition}
      className="flex h-screen relative overflow-hidden flex-1 bg-gray-100"
    >
      {children}
    </motion.main>
  );
};

export default Main;
