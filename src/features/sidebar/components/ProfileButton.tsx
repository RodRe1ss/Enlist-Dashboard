"use client";

import { smoothTransition } from "@/lib/animations/transitions";
import { User } from "@/types";
import { ChevronDown, LogIn, Palette, Settings } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import WorkspaceSwitch from "./WorkspaceSwitch";

type Props = {
  user: User;
};

const profileData = Array.from({ length: 3 }, (_, i) => {
  const icons = [Settings, Palette, LogIn];
  const titles = ["settings", "appearance", "log out"];
  // const modals = ["settings-modal", "appearance-modal", null, null];

  return {
    icon: icons[i],
    title: titles[i],
    // modal: modals[i],
  };
});

const ProfileButton = ({ user }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        title="profile-button"
        className="rounded-sm hover:bg-gray-200 transition-all p-1.5 cursor-pointer flex items-center gap-2"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="rounded-sm primary-mix text-white flex size-6 items-center justify-center capitalize">
          <span>{user.name[0]}</span>
        </div>
        <span className="text-gray-600! text-sm! font-medium! capitalize">
          {user.name.split("_")[0]}
        </span>
        <ChevronDown className="size-4 text-gray-600!" />
      </button>
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
            className="w-48 absolute top-full left-0 rounded-md bg-white border border-gray-300 shadow-xs p-1"
          >
            <WorkspaceSwitch />

            <div className="flex flex-col pt-1">
              {profileData.map((item, i) => {
                const Icon = item.icon;
                return (
                  <button
                    key={i}
                    className="flex justify-start items-center gap-2 p-2  hover:bg-gray-100 cursor-pointer w-full text-gray-600!"
                  >
                    <Icon size={18} />
                    <h4 className="capitalize font-semibold text-sm">
                      {item.title}
                    </h4>
                  </button>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default ProfileButton;
