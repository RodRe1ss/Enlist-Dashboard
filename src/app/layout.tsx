import type { Metadata } from "next";
import "@/styles/globals.css";
import { Inter, Manrope } from "next/font/google";
import Main from "@/components/layout/main/Main";
import { Suspense } from "react";
import SidebarSkeleton from "@/features/sidebar/components/SidebarSkeleton";
import Sidebar from "@/features/sidebar/components/Sidebar";
import Header from "@/features/header/Header";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Enlist v3",
  description: "Enlist dashboard bringing calm and tranquility",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${inter.variable} antialiased bg-gray-100! w-full flex h-screen`}
      >
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>
        <Main>
          <div className=" min-h-0 h-full w-full bg-gray-100 p-2">
            <div className="border border-gray-200 rounded-md overflow-hidden min-h-0 h-full w-full flex flex-col">
              <Header />
              {children}
            </div>
          </div>
        </Main>
      </body>
    </html>
  );
}
