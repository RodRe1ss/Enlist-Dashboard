"use client";

import { Button } from "@/components/ui/button";
import {
  NativeSelect as Select,
  NativeSelectOption as SelectOption,
} from "@/components/ui/native-select";
import { smoothTransition } from "@/lib/animations/transitions";
import { cn } from "@/lib/utils";
import { Columns3Cog, SquareKanban, SquareMenu } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useWorkspaceStore } from "../../workspaces/store";
import { useShallow } from "zustand/shallow";

const LayoutModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const workspaceOptions = useWorkspaceStore(
    useShallow((state) => state.workspaces),
  );

  return (
    <div className="relative">
      <Button
        variant={"ghost"}
        className="text-gray-700! gap-3"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Columns3Cog className="size-4" />
        <span>Layout</span>
      </Button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{
              y: 5,
              opacity: 100,
            }}
            exit={{ y: -10, opacity: 0 }}
            transition={smoothTransition}
            className=" w-70  absolute top-full right-0 rounded-md bg-white border border-gray-200 shadow-xs  p-2 z-20 flex flex-col gap-2"
          >
            <h3 className="text-gray-700 text-sm font-semibold">Layout</h3>
            <DisplayChanger />
            <div className="flex flex-col gap-1.5">
              <h4 className="text-sm">Filters</h4>
              <div className="flex items-center">
                <h5 className="text-sm w-1/2 ">Workspace</h5>
                <Select
                  title="workspace-select"
                  className="text-sm! pl-2 py-1! h-fit! rounded-sm! capitalize"
                >
                  <SelectOption value="" disabled>
                    Select workspace
                  </SelectOption>
                  {workspaceOptions.map((workspace) => (
                    <SelectOption
                      key={workspace.id}
                      value={workspace.id}
                      className="capitalize"
                    >
                      {workspace.name.split("_").join(" ")}
                    </SelectOption>
                  ))}
                </Select>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default LayoutModal;

const DisplayChanger = () => {
  const [currentDisplay, setCurrentDisplay] = useState<"kanban" | "list">(
    "kanban",
  );

  return (
    <div className="relative h-14 w-full rounded-lg p-1 bg-gray-100 flex items-center gap-1">
      <Button
        variant={"ghost"}
        className={cn(
          currentDisplay === "list"
            ? "bg-white hover:bg-white"
            : "hover:text-gray-700! text-gray-500",
          "flex-1 flex flex-col items-center h-full justify-center gap-1 transition-all duration-300",
        )}
        onClick={() => setCurrentDisplay("list")}
      >
        <SquareMenu className="size-5" strokeWidth={1.5} />

        <span className="capitalize text-xs font-normal">List</span>
      </Button>
      <Button
        variant={"ghost"}
        className={cn(
          currentDisplay === "kanban"
            ? "bg-white hover:bg-white"
            : "hover:text-gray-700! text-gray-500",
          " flex-1 flex flex-col items-center h-full justify-center gap-1 transition-all duration-300",
        )}
        onClick={() => setCurrentDisplay("kanban")}
      >
        <SquareKanban className="size-5" strokeWidth={1.5} />

        <span className="capitalize text-xs font-normal">Kanban</span>
      </Button>
    </div>
  );
};
