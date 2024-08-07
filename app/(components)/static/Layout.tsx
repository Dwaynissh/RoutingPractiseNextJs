"use client";

import React, { FC, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

interface iProps {
  children: ReactNode;
}
const Layout: FC<iProps> = ({ children }) => {
  const pathName = usePathname();

  if (pathName === "/auth/register") {
    return <div>{children}</div>;
  } else if (pathName === "/auth/login") {
    return <div>{children}</div>;
  } else {
    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
};

export default Layout;
