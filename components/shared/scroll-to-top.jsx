"use client";

import { usePathname } from "next/navigation";
import { useRef, useEffect } from "react";

const ScrollToTop = () => {
  const pathname = usePathname();
  const scrollTopBtn = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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

  return (
    <>
      <button
        onClick={() => window.scrollTo(0, 0)}
        ref={scrollTopBtn}
        className="scroltop icon-up"
        type="button"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
};

export default ScrollToTop;
