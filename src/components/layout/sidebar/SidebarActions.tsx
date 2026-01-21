import { Button } from "@/components/ui/button";
import { Bell, Plus, Search, SquareKanban } from "lucide-react";
import Link from "next/link";

const SidebarActions = () => {
  return (
    <div className="flex flex-col gap-0.5 mt-4">
      {/* Create */}
      <Button
        variant={"ghost"}
        className="justify-start gap-2 h-8.5 rounded-sm hover:bg-gray-200 active:bg-gray-300 p-1.5"
      >
        <div className="size-6 flex items-center justify-center primary-mix rounded-sm text-white">
          <Plus />
        </div>

        <span className=" text-gray-600! font-medium! ">Create</span>
      </Button>
      {/* Search */}
      <Button
        variant={"ghost"}
        className="justify-start gap-2 h-8.5 rounded-sm!  hover:bg-gray-200 active:bg-gray-300 px-2! py-1.5!"
        // onClick={() => toggleModal("search-modal")}
      >
        <Search className="text-gray-600! size-5.5" />

        <span className=" text-gray-600! font-medium!">Search</span>
      </Button>
      {/* Tasks */}
      <Button
        variant={"ghost"}
        className="justify-start  h-8.5 rounded-sm!  hover:bg-gray-200 active:bg-gray-300 px-2! py-1.5! text-gray-600! font-semibold!"
        asChild
      >
        <Link
          href={"#"}
          className="flex items-center gap-2 hover:no-underline!  "
        >
          <SquareKanban className="text-gray-600! size-5.5" />

          <span>Tasks</span>
        </Link>
      </Button>
      <Button
        variant={"ghost"}
        className="justify-start gap-2 h-8.5 rounded-sm!  hover:bg-gray-200 active:bg-gray-300 px-2! py-1.5! "
      >
        <Bell className="text-gray-600! size-5.5" />

        <span className=" text-gray-600! font-medium!">Notifications</span>
      </Button>
    </div>
  );
};

export default SidebarActions;
