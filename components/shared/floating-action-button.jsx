"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const FloatingActionButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const floatingButtonRef = useRef(null);

  const triggerJellyAnimation = useCallback(() => {
    const floatingButton = floatingButtonRef.current;
    if (!floatingButton) return;

    floatingButton.classList.add("jelly-animation");
    const timeoutId = setTimeout(() => {
      floatingButton.classList.remove("jelly-animation");
    }, 600);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleClick = useCallback(() => {
    setIsExpanded((previous) => !previous);
    floatingButtonRef.current?.classList.toggle("expanded");
  }, []);

  useEffect(() => {
    const floatingButton = floatingButtonRef.current;
    if (!floatingButton) return;

    floatingButton.addEventListener("mouseenter", triggerJellyAnimation);
    floatingButton.addEventListener("click", handleClick);

    return () => {
      floatingButton.removeEventListener("mouseenter", triggerJellyAnimation);
      floatingButton.removeEventListener("click", handleClick);
    };
  }, [triggerJellyAnimation, handleClick]);

  return (
    <div
      ref={floatingButtonRef}
      className="floating-button"
      aria-label="Show phone number"
      aria-expanded={isExpanded}
    >
      <FontAwesomeIcon icon={faPhone} />
      <a href="tel:+380931517748">+38 (093) 151 77 48</a>
    </div>
  );
};

export default FloatingActionButton;
