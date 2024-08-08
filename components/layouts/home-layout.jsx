import { useEffect, useState } from "react";

import HomeHeader from "./home-header";

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

export default HomeLayout;
