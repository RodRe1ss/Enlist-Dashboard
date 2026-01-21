import React from "react";

const SidebarProjects = () => {
  return (
    <div className="flex flex-col gap-0.5 mt-20">
      <div className="p-1.5 rounded-sm hover:bg-gray-200 cursor-pointer transition-all">
        <h3 className="text-base!">Projects</h3>
      </div>
      <div className="flex flex-col gap-0.5 max-h-48 overflow-y-auto scrollbar-hide">
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className="p-1.5 rounded-sm hover:bg-gray-200 cursor-pointer transition-all"
          >
            Project {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarProjects;
