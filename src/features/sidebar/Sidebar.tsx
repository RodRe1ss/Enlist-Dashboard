import { HelpCircle, PanelLeft } from "lucide-react";
import SidebarProjects from "./SidebarProjects";
import SidebarActions from "./SidebarActions";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  return (
    <aside className="bg-gray-100 w-72 h-full flex flex-col py-2 pl-2 ">
      {/* Sidebar top */}
      <div className="flex items-center justify-between h-12 ">
        {/* Profile Button */}
        <div className="rounded-sm hover:bg-gray-200 transition-all p-1.5 cursor-pointer flex items-center gap-2">
          <div className="rounded-sm primary-mix text-white flex size-6 items-center justify-center">
            <span>U</span>
          </div>
          <span className="text-gray-600! text-sm! font-medium!">Username</span>
        </div>

        {/* Sidebar layout button */}
        <Button
          variant={"ghost"}
          size={"icon-sm"}
          className="hover:bg-gray-200 "
        >
          <PanelLeft />
        </Button>
      </div>

      {/* Sidebar Actions */}
      <SidebarActions />

      {/* Sidebar Projects */}
      <SidebarProjects />

      {/* Sidebar Bottom link */}
      <div className="mt-auto flex items-center gap-2 hover:bg-gray-200 p-1.5 rounded-sm transition-all cursor-pointer ">
        <HelpCircle className="text-gray-600! size-5.5" />
        <span className="text-gray-600! text-sm! font-semibold!">
          Help & Resources
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
