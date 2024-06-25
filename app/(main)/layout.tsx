import Navbar from "@/components/global/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-1">
          <div className="hidden md:block h-auto flex-shrink-0 border-4 w-[25rem]">
            <Sidebar />
          </div>
          <div className="flex-1 p-5 md:max-w-[1140px]">{children}</div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
