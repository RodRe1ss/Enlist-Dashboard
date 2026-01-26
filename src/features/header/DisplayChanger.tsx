"use client";

import { Button } from "@/components/ui/button";
import { smoothTransition } from "@/lib/animations/transitions";
import { Columns3Cog, SquareKanban, SquareMenu } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const iconOptions = {
  kanban: SquareKanban,
  list: SquareMenu,
};

const DisplayChanger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDisplay, setCurrentDisplay] = useState<"kanban" | "list">(
    "kanban",
  );

  const Icon = iconOptions[currentDisplay];

  return (
    <div className="relative">
      <Button
        variant={"ghost"}
        className="text-gray-600! gap-3"
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
            className=" w-60 h-72  absolute top-full right-0 rounded-md bg-white border border-gray-200 shadow-xs p-2 z-20 flex flex-col gap-2"
          >
            <h3 className="text-gray-700">Layout</h3>
            <Button variant={"ghost"} className="justify-start gap-2 w-full">
              <Icon />

              <span className="capitalize">{currentDisplay}</span>
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default DisplayChanger;
