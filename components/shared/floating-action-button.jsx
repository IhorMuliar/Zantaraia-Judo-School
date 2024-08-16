"use client";

import { useCallback, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const FloatingActionButton = () => {
  const floatingButtonRef = useRef(null);

  const triggerJellyAnimation = useCallback(() => {
    const floatingButton = floatingButtonRef.current;
    floatingButton.classList.add("jelly-animation");
    setTimeout(() => {
      floatingButton.classList.remove("jelly-animation");
    }, 600);
  }, []);

  const handleClick = useCallback(() => {
    const floatingButton = floatingButtonRef.current;
    floatingButton.classList.toggle("expanded");
  }, []);

  useEffect(() => {
    const floatingButton = floatingButtonRef.current;

    floatingButton.addEventListener("mouseenter", triggerJellyAnimation);
    floatingButton.addEventListener("click", handleClick);

    return () => {
      floatingButton.removeEventListener("mouseenter", triggerJellyAnimation);
      floatingButton.removeEventListener("click", handleClick);
    };
  }, [triggerJellyAnimation, handleClick]);

  return (
    <div
      className="floating-button"
      ref={floatingButtonRef}
      aria-label="Show phone number"
    >
      <FontAwesomeIcon icon={faPhone} />
      <a href="tel:+380931517748">+38 (093) 151 77 48</a>
    </div>
  );
};

export default FloatingActionButton;
