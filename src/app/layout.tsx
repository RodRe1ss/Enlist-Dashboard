import type { Metadata } from "next";
import "@/styles/globals.css";
import { Inter, Manrope } from "next/font/google";
import Main from "@/components/layout/main/Main";

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
        className={`${manrope.variable} ${inter.variable} antialiased bg-gray-100 w-full flex h-screen relative overflow-hidden`}
      >
        {/* Main  */}
        <Main>{children}</Main>
      </body>
    </html>
  );
}
