"use client";

import { usePathname } from "next/navigation";

import HomeLayout from "./home-layout";
import MainLayout from "./main-layout";

const LayoutBuilder = ({ children }) => {
  const pathname = usePathname();
  const Layout = pathname === "/" ? HomeLayout : MainLayout;

  return <Layout>{children}</Layout>;
};

export default LayoutBuilder;
