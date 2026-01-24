"use client";

import { useSidebarStore } from "@/features/sidebar/store/useSidebarStore";
import { smoothTransition } from "@/lib/animations/transitions";

// Motion
import { motion } from "motion/react";
import { useEffect, useState } from "react";

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

  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.main
      initial={{ marginLeft: 0 }}
      animate={{
        marginLeft: (screenWidth as number) < 640 || isSidebarOpen ? 0 : -224,
      }}
      exit={{ marginLeft: 0 }}
      transition={smoothTransition}
      className="flex h-screen relative overflow-hidden flex-1 bg-gray-100"
    >
      {children}
    </motion.main>
  );
};

export default Main;
