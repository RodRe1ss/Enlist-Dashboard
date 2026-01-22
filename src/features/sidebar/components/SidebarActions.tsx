import { Button } from "@/components/ui/button";
import { Calendar1, CalendarDays, Plus, Search, Sparkles } from "lucide-react";

const SidebarActions = () => {
  return (
    <div className="flex flex-col gap-0.5 mt-4">
      {/* Create */}
      <Button
        variant={"ghost"}
        className="justify-start gap-2 h-8.5 rounded-sm hover:bg-gray-200 active:bg-gray-300 p-1.5 text-gray-600"
      >
        <div className="size-6 flex items-center justify-center primary-mix rounded-sm text-white">
          <Plus />
        </div>

        <span>Create</span>
      </Button>
      {/* Search */}
      <Button
        variant={"ghost"}
        className="justify-start gap-2 h-8.5 rounded-sm  hover:bg-gray-200 active:bg-gray-300 px-2! py-1.5 text-gray-600"
        // onClick={() => toggleModal("search-modal")}
      >
        <Search className="size-5.5" />

        <span>Search</span>
      </Button>
      {/* Tasks */}
      <Button
        variant={"ghost"}
        className="justify-start gap-2 h-8.5 rounded-sm  hover:bg-gray-200 active:bg-gray-300 px-2! py-1.5 text-gray-600"
      >
        <Calendar1 className=" size-5.5" />

        <span>Today</span>
      </Button>
      <Button
        variant={"ghost"}
        className="justify-start gap-2 h-8.5 rounded-sm!  hover:bg-gray-200 active:bg-gray-300 px-2! py-1.5! text-gray-600 "
      >
        <CalendarDays className="size-5.5" />

        <span>Upcoming</span>
      </Button>
      <Button
        variant={"ghost"}
        className="justify-start gap-2 h-8.5 rounded-sm!  hover:bg-gray-200 active:bg-gray-300 px-2! py-1.5! text-gray-600 "
      >
        <Sparkles className="size-5.5" />

        <span>Filters & labels</span>
      </Button>
    </div>
  );
};

export default SidebarActions;
