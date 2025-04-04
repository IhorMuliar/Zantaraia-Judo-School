"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTop = () => {
  const pathname = usePathname();
  const scrollTopBtn = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleScroll = useCallback(() => {
    if (scrollTopBtn.current) {
      scrollTopBtn.current.style.display =
        window.scrollY > 650 ? "block" : "none";
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <button
      onClick={() => window.scrollTo(0, 0)}
      ref={scrollTopBtn}
      className="scroll-top"
      type="button"
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

export default ScrollToTop;
