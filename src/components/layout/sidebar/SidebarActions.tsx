import React from "react";

const SidebarActions = () => {
  return (
    <div className="flex flex-col gap-0.5 mt-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="rounded-sm  p-1.5 flex items-center gap-2 hover:bg-gray-200 transition-all cursor-pointer"
        >
          <div className="size-6 rounded-sm bg-black text-white flex items-center justify-center">
            <span>i</span>
          </div>
          <span>Sidebar Action {index + 1}</span>
        </div>
      ))}
    </div>
  );
};

export default SidebarActions;
