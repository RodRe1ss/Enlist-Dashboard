import { PanelLeft } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="bg-neutral-400 w-68.75 h-full flex flex-col p-2">
      {/* Sidebar top */}
      <div className="flex items-center justify-between h-11 ">
        {/* Profile Button */}
        <div className="rounded-sm hover:bg-neutral-200 transition-all px-1.5 py-1.5 cursor-pointer flex items-center gap-2">
          <div className="rounded-sm bg-indigo-500 text-white flex size-6 items-center justify-center">
            <span>U</span>
          </div>
          <span>Username</span>
        </div>

        {/* Sidebar layout button */}
        <div className="p-1.5 rounded-sm size-8 hover:bg-neutral-200 transition-all cursor-pointer flex items-center justify-center">
          <PanelLeft />
        </div>
      </div>

      {/* Sidebar Actions */}
      <div className="flex flex-col gap-0.5 mt-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="rounded-sm  p-1.5 flex items-center gap-2 hover:bg-neutral-100 transition-all cursor-pointer"
          >
            <div className="size-6 rounded-sm bg-red-400 text-white flex items-center justify-center">
              <span>i</span>
            </div>
            <span>Sidebar Action {index + 1}</span>
          </div>
        ))}
      </div>

      {/* Sidebar Projects */}
      <div className="flex flex-col gap-0.5 mt-20">
        <div className="p-1.5 rounded-sm hover:bg-neutral-200 cursor-pointer">
          <h3 className="text-base!">Projects</h3>
        </div>
        <div className="flex flex-col gap-0.5 max-h-48 overflow-y-auto scrollbar-hide">
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              key={index}
              className="p-1.5 rounded-sm hover:bg-neutral-200 cursor-pointer"
            >
              Project {index + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar Bottom link */}
      <div className="rounded-sm  p-1.5 flex items-center gap-2 hover:bg-neutral-100 transition-all cursor-pointer mt-auto">
        <div className="size-6 rounded-sm bg-red-400 text-white flex items-center justify-center">
          <span>i</span>
        </div>
        <span>Sidebar Action </span>
      </div>
    </aside>
  );
};

export default Sidebar;
