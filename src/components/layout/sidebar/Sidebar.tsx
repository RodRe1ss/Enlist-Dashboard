import { PanelLeft } from "lucide-react";
import SidebarProjects from "./SidebarProjects";
import SidebarActions from "./SidebarActions";

const Sidebar = () => {
  return (
    <aside className="bg-gray-100 w-68.75 h-full flex flex-col p-2">
      {/* Sidebar top */}
      <div className="flex items-center justify-between h-11 ">
        {/* Profile Button */}
        <div className="rounded-sm hover:bg-gray-200 transition-all px-1.5 py-1.5 cursor-pointer flex items-center gap-2">
          <div className="rounded-sm bg-indigo-500 text-white flex size-6 items-center justify-center">
            <span>U</span>
          </div>
          <span>Username</span>
        </div>

        {/* Sidebar layout button */}
        <div className="p-1.5 rounded-sm size-8 hover:bg-gray-200 transition-all cursor-pointer flex items-center justify-center">
          <PanelLeft />
        </div>
      </div>

      {/* Sidebar Actions */}
      <SidebarActions />

      {/* Sidebar Projects */}
      <SidebarProjects />

      {/* Sidebar Bottom link */}
      <div className="rounded-sm  p-1.5 flex items-center gap-2 hover:bg-gray-100 transition-all cursor-pointer mt-auto">
        <div className="size-6 rounded-sm bg-black text-white flex items-center justify-center">
          <span>i</span>
        </div>
        <span>Sidebar Action </span>
      </div>
    </aside>
  );
};

export default Sidebar;
