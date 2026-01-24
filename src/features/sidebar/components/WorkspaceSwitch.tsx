"use client";

import { Button } from "@/components/ui/button";
import { useWorkspaceStore } from "@/features/workspaces/store";
import { cn } from "@/lib/utils";
import { PlusCircle } from "lucide-react";
import { useShallow } from "zustand/shallow";

const WorkspaceSwitch = () => {
  const { workspaces, currentWorkspace, setCurrentWorkspace } =
    useWorkspaceStore(
      useShallow((state) => ({
        workspaces: state.workspaces,
        currentWorkspace: state.currentWorkspace,
        setCurrentWorkspace: state.setCurrentWorkspace,
      })),
    );

  return (
    <div className="flex flex-col">
      <Button
        className={cn(
          !currentWorkspace && "bg-gray-100",
          "justify-between px-2 hover:bg-gray-100",
        )}
        variant={"ghost"}
        onClick={() => setCurrentWorkspace(null)}
      >
        <span className="capitalize text-gray-600! text-sm!">
          General space
        </span>

        <div
          className={
            "size-2.5 rounded-full bg-gray-200 flex items-center justify-center"
          }
        >
          <div
            className={cn(
              !currentWorkspace ? "opacity-100" : "opacity-0",
              "size-1.5 primary-mix transition-all duration-300 rounded-full",
            )}
          ></div>
        </div>
      </Button>
      {workspaces.length &&
        workspaces.map((workspace) => (
          <Button
            className={"justify-between px-2 hover:bg-gray-100"}
            variant={"ghost"}
            key={workspace.id}
            onClick={() => setCurrentWorkspace(workspace.id)}
          >
            <span className="capitalize text-gray-600! text-sm">
              {workspace.name.split("_").join(" ")}
            </span>

            <div className="size-2.5  rounded-full bg-gray-200 flex items-center justify-center">
              <div
                className={cn(
                  currentWorkspace === workspace.id
                    ? "opacity-100"
                    : "opacity-0",
                  "size-1.5 primary-mix transition-all duration-300 rounded-full",
                )}
              ></div>
            </div>
          </Button>
        ))}
      {workspaces.length > 2 ? (
        <div className="p-2 bg-gray-100 rounded-md">Workspace limit</div>
      ) : (
        <Button
          className="gap-2 px-1.5! hover:bg-gray-100 text-gray-600! justify-start"
          variant={"ghost"}
        >
          <PlusCircle />

          <span>Add workspace</span>
        </Button>
      )}
    </div>
  );
};

export default WorkspaceSwitch;
