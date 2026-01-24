import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const SidebarSkeleton = () => {
  return (
    <aside className="bg-gray-100 w-56 h-full flex flex-col  py-2 pl-2">
      {/* Sidebar top */}
      <div className="flex items-center justify-between h-12 w-full ">
        {/* Profile Button */}
        <SkeletonProfileButton />

        {/* Sidebar layout button */}
        <div className="flex justify-center items-center size-9">
          <Skeleton className="size-4 rounded-sm bg-gray-200" />
        </div>
      </div>

      {/* Sidebar Actions */}
      <div className="flex flex-col gap-4 mt-4">
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className="flex items-center gap-2 px-1.5">
            <Skeleton className="size-5.5 rounded-sm bg-gray-200" />
            <Skeleton
              className={cn(i === 4 ? "w-28" : "w-20", "h-2  bg-gray-200")}
            />
          </div>
        ))}
      </div>

      {/* Sidebar Projects */}
      <div className="flex flex-col gap-4 mt-24">
        <div className="flex items-center justify-between px-1.5">
          <Skeleton className="h-2 w-18.5 bg-gray-200" />

          <Skeleton className="size-4 rounded-sm bg-gray-200" />
        </div>
        <div className="flex flex-col gap-4">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="flex items-center gap-2 px-1.5">
              <Skeleton className="size-4 rounded-sm bg-gray-200" />
              <Skeleton
                className={cn(i % 2 === 0 ? "w-32" : "w-26", "h-2 bg-gray-200")}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar Bottom link */}
      <div className="flex items-center gap-2 p-1.5 mt-auto">
        <Skeleton className="size-5.5 rounded-sm bg-gray-200" />
        <Skeleton className="h-2 w-30 bg-gray-200" />
      </div>
    </aside>
  );
};

const SkeletonProfileButton = () => {
  return (
    <div className="h-4 flex items-center  gap-2 px-1.5">
      <Skeleton className="size-5.5 rounded-sm bg-gray-200" />
      <Skeleton className="h-2 w-20 bg-gray-200" />
    </div>
  );
};
export default SidebarSkeleton;
