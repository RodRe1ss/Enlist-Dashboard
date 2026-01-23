"use client";

import { Button } from "@/components/ui/button";
import { PanelRight } from "lucide-react";
import { useSidebarStore } from "../sidebar/store/useSidebarStore";
import { useShallow } from "zustand/shallow";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { smoothTransition } from "@/lib/animations/transitions";

const Header = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebarStore(
    useShallow((state) => ({
      isSidebarOpen: state.isSidebarOpen,
      toggleSidebar: state.toggleSidebar,
    })),
  );

  return (
    <header className="bg-white h-10 border-b border-gray-200 w-full flex items-center justify-between">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isSidebarOpen ? -40 : 0 }}
        exit={{ x: 0 }}
        transition={smoothTransition}
        className="flex items-center gap-2 "
      >
        <Button
          onClick={toggleSidebar}
          variant={"ghost"}
          size={"icon-sm"}
          className={cn(
            isSidebarOpen ? "opacity-0 pointer-events-none" : "opacity-100",
            "transition-all duration-300",
          )}
        >
          <PanelRight className="text-gray-600!" />
        </Button>

        <span>header</span>
      </motion.div>
    </header>
  );
};

export default Header;
