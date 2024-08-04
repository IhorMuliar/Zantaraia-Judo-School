import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

import Header, { Mainheader } from "./../layouts/Header";
import Footer2 from "./../layouts/Footer2";
import ScrollToTop from "./../layouts/ScrollToTop";

import AboutUs from "./AboutUs";
import Team from "./Team";
import Schedule from "./Schedule";
import PortfolioDetails from "./PortfolioDetails";
import ContactUs from "./ContactUs";
import Home3 from "./Home3";

function Index() {
  var baseName = "/";
  const scrollTopBtn = useRef(null);

  window.onscroll = () => {
    window.scrollY > 650
      ? scrollTopBtn.current.setAttribute("style", "display:block")
      : scrollTopBtn.current.setAttribute("style", "display:none");
  };
  return (
    <BrowserRouter basename={baseName}>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" exact element={<Home3 />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/about-us" exact element={<AboutUs />} />
          <Route path="/team" exact element={<Team />} />
          <Route path="/schedule" exact element={<Schedule />} />
          <Route
            path="/portfolio-details"
            exact
            element={<PortfolioDetails />}
          />
          <Route path="/contact-us" exact element={<ContactUs />} />
        </Route>
      </Routes>
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
    </BrowserRouter>
  );
}

function HomeLayout() {
  const [headerFix, setheaderFix] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setheaderFix(window.scrollY > 50);
    });
  }, []);
  return (
    <div className="page-wraper">
      <header className="site-header mo-left header header-transparent style-1">
        <div
          className={`sticky-header mt-3 main-bar-wraper navbar-expand-lg ${
            headerFix ? "is-fixed" : ""
          }`}
        >
          <Mainheader />
        </div>
      </header>
      <Outlet />
    </div>
  );
}

function MainLayout() {
  return (
    <div className="page-wraper">
      <Header />
      <Outlet />
      <Footer2 />
    </div>
  );
}

export default Index;
