"use client";

import Loading from "@/components/shared/loading";
import Header from "@/features/header/Header";
import Sidebar from "@/features/sidebar/components/Sidebar";
import SidebarMobile from "@/features/sidebar/components/SidebarMobile";
import { useSidebarStore } from "@/features/sidebar/store/useSidebarStore";
import useDataLoader from "@/hooks/useDataLoader";
import useWindowWidth from "@/hooks/useWindowWidth";
import { smoothTransition } from "@/lib/animations/transitions";

// Motion
import { motion } from "motion/react";
import { useShallow } from "zustand/shallow";

type Props = {
  children: React.ReactNode;
};

const Main = ({ children }: Props) => {
  const { loading } = useDataLoader();

  const { isSidebarOpen } = useSidebarStore(
    useShallow((state) => ({
      isSidebarOpen: state.isSidebarOpen,
    })),
  );
  const screenWidth = useWindowWidth();

  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <>
      {/* Normal Sidebar*/}
      <div className="hidden sm:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <SidebarMobile />

      <motion.main
        initial={{ marginLeft: 0 }}
        animate={{
          marginLeft: (screenWidth as number) < 640 || isSidebarOpen ? 0 : -224,
        }}
        exit={{ marginLeft: 0 }}
        transition={smoothTransition}
        className="flex h-screen relative overflow-hidden flex-1 bg-gray-100"
      >
        <div className=" min-h-0 h-full w-full bg-gray-100 p-2">
          <div className="border border-gray-200 rounded-md overflow-hidden min-h-0 h-full w-full flex flex-col">
            {/* Header */}
            <Header />
            {children}
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default Main;
