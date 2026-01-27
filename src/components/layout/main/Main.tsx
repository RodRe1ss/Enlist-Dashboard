"use client";

import Loading from "@/components/shared/loading";
import Header from "@/features/header/components/Header";
import Sidebar from "@/features/sidebar/components/Sidebar";
import SidebarMobile from "@/features/sidebar/components/SidebarMobile";
import useDataLoader from "@/hooks/useDataLoader";
import useRealtimeLoader from "@/hooks/useRealtimeLoader";

type Props = {
  children: React.ReactNode;
};

const Main = ({ children }: Props) => {
  const { loading: dataLoading } = useDataLoader();
  const { loading: realtimeLoading } = useRealtimeLoader();

  if (dataLoading && realtimeLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <>
      {/* Normal Sidebar*/}
      <div className="hidden sm:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <SidebarMobile />

      <main className="flex h-screen relative overflow-hidden flex-1 bg-gray-100">
        <div className=" min-h-0 h-full w-full bg-gray-100 p-2">
          <div className="border border-gray-200 bg-white rounded-md overflow-hidden min-h-0 h-full w-full flex flex-col">
            {/* Header */}
            <Header />
            {children}
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
