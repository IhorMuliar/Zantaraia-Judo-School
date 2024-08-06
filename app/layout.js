"use client"

import { usePathname } from "next/navigation";
import { useRef, useEffect, useState } from "react";

import Header from "@/layouts/Header";
import MainHeader from "@/layouts/MainHeader";
import Footer from "@/layouts/Footer";
import ScrollToTop from "@/layouts/ScrollToTop";

import "@/styles/vendor/swiper/swiper-bundle.min.css"
import "@/styles/scss/main.scss"

export default function RootLayout({ children }) {
  const scrollTopBtn = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTopBtn.current) {
        scrollTopBtn.current.style.display = window.scrollY > 650 ? "block" : "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <html lang="en">
      <body data-theme-color="color_5" suppressHydrationWarning={true}>
        <div className="page-wraper">
          {
            pathname === "/"
              ? <HomeLayout>{children}</HomeLayout>
              : <MainLayout>{children}</MainLayout>
          }
        </div>
        <ScrollToTop />
        <button
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          ref={scrollTopBtn}
          className="scroltop icon-up"
          type="button"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      </body>
    </html>
  );
}

function HomeLayout({ children }) {
  const [headerFix, setHeaderFix] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderFix(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="page-wraper">
      <header className="site-header mo-left header header-transparent style-1">
        <div
          className={`sticky-header mt-3 main-bar-wraper navbar-expand-lg ${
            headerFix ? "is-fixed" : ""
          }`}
        >
          <MainHeader />
        </div>
      </header>
      {children}
    </div>
  );
}

function MainLayout({children}) {
  return (
    <div className="page-wraper">
      <Header />
      {children}
      <Footer />
    </div>
  );
}