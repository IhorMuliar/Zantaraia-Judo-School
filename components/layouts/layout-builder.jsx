"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Header from "./header";
import Footer from "./footer";

const LayoutBuilder = ({ children }) => {
  const pathname = usePathname();
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsHeaderFixed(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="site-header mo-left header header-transparent style-1">
        <div
          className={`sticky-header mt-3 navbar-expand-lg ${isHeaderFixed ? "is-fixed" : ""}`}
        >
          <Header />
        </div>
      </header>
      <main className="page-content bg-white">{children}</main>
      {pathname !== "/" && <Footer />}
    </>
  );
};

export default LayoutBuilder;
