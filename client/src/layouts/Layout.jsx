import { HeroUIProvider } from "@heroui/react";
import { Outlet } from "react-router";
import { Toaster } from "sonner";

const Layout = () => {
  return (
    <HeroUIProvider>
      <Toaster richColors />

      <div className="overflow-x-hidden antialiased text-textColor2 selection:bg-textColor1 selection:text-textColor2 font-varela">
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
