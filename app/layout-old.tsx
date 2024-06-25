import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global/Navbar";
import Sidebar from "@/components/layout/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moose Next Framework v1",
  description: "This is a framework with Shadcn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex">
          <div className="hidden md:block h-[100vh] border-4 w-[25rem]">
            <Sidebar />
          </div>
          <div className="w-full p-5 md:max-w-[1140px]">{children}</div>
        </div>
      </body>
    </html>
  );
}
