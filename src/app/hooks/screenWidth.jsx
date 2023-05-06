import React, { useState, useEffect } from "react";

export default function useScreenWidthCheck(breakpoint) {
  const [isScreenWidthSmall, setIsScreenWidthSmall] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const initialCheck = window.innerWidth < breakpoint;
      setIsScreenWidthSmall(initialCheck);

      const handleResize = () => {
        setIsScreenWidthSmall(window.innerWidth < breakpoint);
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [breakpoint]);

  return isScreenWidthSmall;
}
