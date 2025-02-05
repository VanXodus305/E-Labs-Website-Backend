import React from "react";
import { Outlet } from "react-router";
import { HeroUIProvider } from "@heroui/react";

const Layout = () => {
  return (
    <HeroUIProvider>
      <div className="overflow-x-hidden antialiased text-textColor2 selection:bg-textColor1">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div
            className={`absolute inset-0 -z-9 h-full w-full items-center px-5 py-24 bg-[url('https://res.cloudinary.com/dpqdgcipi/image/upload/v1720238432/Background_hxyroh.png')] bg-cover`}
          ></div>
        </div>
        {/* <Navbar /> */}
        <Outlet />
        {/* <Footer /> */}
      </div>
    </HeroUIProvider>
  );
};

export default Layout;
