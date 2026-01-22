import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Project } from "@/types";
import { Plus } from "lucide-react";
import Link from "next/link";

type Props = {
  projects: Project[];
};

const SidebarProjects = ({ projects }: Props) => {
  return (
    <div className="flex flex-col gap-0.5 mt-20">
      <div className="rounded-sm flex items-center justify-between hover:bg-gray-200 p-1.5 group">
        <Link href={"/projects"} className="text-sm text-gray-600 flex-1">
          <h4 className="font-bold">Projects</h4>
        </Link>
        <Button
          variant={"ghost"}
          className="hover:bg-gray-100 opacity-0 group-hover:opacity-100"
          size={"icon-xs"}
        >
          <Plus className="text-gray-600" />
        </Button>
      </div>
      <div className="relative">
        <div className="h-56 overflow-y-auto scrollbar-hide ">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={"#"}
              className="flex items-center gap-2.5 px-1.5 py-2 hover:bg-gray-200 rounded-sm"
            >
              <div
                className={cn("bg-gray-300", "size-3.5 rounded-[3.5px]")}
              ></div>
              <h6 className="capitalize text-sm text-gray-600 font-semibold!">
                {project.name}
              </h6>
            </Link>
          ))}
        </div>
        <div className="h-20 absolute bottom-0 left-0 w-full bg-linear-180 from-transparent to-70 to-gray-100 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default SidebarProjects;
