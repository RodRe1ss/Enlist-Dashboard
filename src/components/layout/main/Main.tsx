import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";

type Props = {
  children: React.ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <main className="flex h-screen relative overflow-hidden w-full bg-neutral-400">
      <Sidebar />
      <div className=" min-h-0 h-full w-full bg-neutral-400 p-2">
        <div className="rounded-md overflow-hidden min-h-0 h-full w-full flex flex-col">
          <Header />
          {children}
        </div>
      </div>
    </main>
  );
};

export default Main;
