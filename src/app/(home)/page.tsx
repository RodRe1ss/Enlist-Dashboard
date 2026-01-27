import TodayTasksClient from "@/features/today-tasks/TodayTasksClient";

const page = async () => {
  return (
    <div className="w-full flex-1 min-h-0 flex flex-col overflow-hidden max-container">
      <TodayTasksClient />
    </div>
  );
};

export default page;
