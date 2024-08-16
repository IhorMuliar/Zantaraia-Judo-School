"use client";

import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const FloatingActionButton = () => {
  const floatingButtonRef = useRef(null);

  useEffect(() => {
    const floatingButton = floatingButtonRef.current;

    const triggerJellyAnimation = () => {
      floatingButton.classList.add("jelly-animation");
      setTimeout(() => {
        floatingButton.classList.remove("jelly-animation");
      }, 600);
    };

    const handleClick = () => {
      floatingButton.classList.toggle("expanded");
    };

    floatingButton.addEventListener("mouseenter", triggerJellyAnimation);
    floatingButton.addEventListener("click", handleClick);

    // Cleanup event listeners
    return () => {
      floatingButton.removeEventListener("mouseenter", triggerJellyAnimation);
      floatingButton.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="floating-button" ref={floatingButtonRef}>
      <FontAwesomeIcon icon={faPhone} />
      <a className="phone-number" href="tel:+380931517748">+38 (093) 151 77 48</a>
    </div>
  );
};

export default FloatingActionButton;
