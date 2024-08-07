"use client";

import { usePathname } from "next/navigation";
import { useRef, useEffect, useState } from "react";

import MainHeader from "@/layouts/main-header";
import HomeHeader from "@/layouts/home-header";
import Footer from "@/layouts/footer";
import ScrollToTop from "@/layouts/scroll-to-top";

import "@/styles/vendor/swiper/swiper-bundle.min.css";
import "@/styles/scss/main.scss";

const HomeLayout = ({ children }) => {
  const [headerFix, setHeaderFix] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHeaderFix(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="site-header mo-left header header-transparent style-1">
        <div
          className={`sticky-header mt-3 main-bar-wraper navbar-expand-lg ${
            headerFix ? "is-fixed" : ""
          }`}
        >
          <HomeHeader />
        </div>
      </header>
      {children}
    </>
  );
};

const MainLayout = ({ children }) => (
  <>
    <MainHeader />
    {children}
    <Footer />
  </>
);

const RootLayout = ({ children }) => {
  const scrollTopBtn = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTopBtn.current) {
        scrollTopBtn.current.style.display =
          window.scrollY > 650 ? "block" : "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Layout = pathname === "/" ? HomeLayout : MainLayout;

  return (
    <html lang="en">
      <body data-theme-color="color_5" suppressHydrationWarning>
        <div className="page-wraper">
          <Layout>{children}</Layout>
        </div>
        <ScrollToTop />
        <button
          onClick={() => window.scrollTo(0, 0)}
          ref={scrollTopBtn}
          className="scroltop icon-up"
          type="button"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      </body>
    </html>
  );
};


export default RootLayout;
